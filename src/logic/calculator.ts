import type { AcademicPolicy, CGPAResult, Course, GradingScaleItem } from '../types';

/**
 * Converts a letter grade to grade points based on the provided scale.
 * Returns -1 if not found or invalid.
 */
function getGradePoint(grade: string, scale: GradingScaleItem[]): number {
    const item = scale.find(s => s.grade.toUpperCase() === grade.toUpperCase());
    return item ? item.point : -1;
}

/**
 * Core Calculation Logic
 */
export function calculateCGPA(courses: Course[], policy: AcademicPolicy): CGPAResult {
    const history: any[] = [];

    // 1. Initial set
    let processedCourses = courses.map(c => ({ ...c }));
    history.push({ description: 'Initialized course list', count: processedCourses.length });

    // 2. Identify Repeats
    // Group by Course Code (ONLY if code exists)
    const groupedHelper = new Map<string, Course[]>();

    processedCourses.forEach(c => {
        // Only group if there is a distinct code. 
        // If code is empty/whitespace, we treat it as a unique independent entry (Simulated Course 1, 2, etc.)
        if (c.code && c.code.trim() !== '') {
            if (!groupedHelper.has(c.code)) groupedHelper.set(c.code, []);
            groupedHelper.get(c.code)!.push(c);
        }
    });

    // Apply Repeat Policy
    processedCourses = processedCourses.map(course => {
        // If user manually excluded, skip logic
        if (course.isExcluded) return course;

        // If no code, it's a simulated/anonymous entry -> NEVER treat as repeat
        if (!course.code || course.code.trim() === '') return course;

        // If code exists but somehow not in map (shouldn't happen), skip
        if (!groupedHelper.has(course.code)) return course;

        const attempts = groupedHelper.get(course.code)!;
        if (attempts.length <= 1) return course;

        // Sort attempts by "semester" (naive string sort or expect ISO/Orderable format)
        attempts.sort((a, b) => a.semester.localeCompare(b.semester));

        if (policy.repeatPolicy === 'LatestAttempt') {
            const latest = attempts[attempts.length - 1];
            if (course.id !== latest.id) {
                return { ...course, isRepeat: true }; // Flag as repeat (excluded from calc)
            }
        } else if (policy.repeatPolicy === 'BestAttempt') {
            const maxGP = Math.max(...attempts.map(a => getGradePoint(a.grade, policy.gradingScale)));
            const bestAttempts = attempts.filter(a => getGradePoint(a.grade, policy.gradingScale) === maxGP);
            const target = bestAttempts[bestAttempts.length - 1]; // Latest of best

            if (course.id !== target.id) {
                return { ...course, isRepeat: true };
            }
        }

        return course;
    });

    history.push({ description: 'Applied Repeat Policy', policy: policy.repeatPolicy });

    // 3. Calculation
    let totalPoints = 0;
    let totalCredits = 0;

    for (const course of processedCourses) {
        // Skip if excluded or flagged as repeat
        if (course.isExcluded || course.isRepeat) continue;

        const gp = getGradePoint(course.grade, policy.gradingScale);

        // If grade not found (e.g. "Pass", "W") or 0 credits, logic depends on policy.
        // Assuming 0-credit courses don't count towards denominator.
        // Assuming "W" returns -1 and we exclude it.

        if (gp < 0) continue; // Not a gradable evaluation

        const creditValue = typeof course.credits === 'string' ? parseFloat(course.credits) : course.credits;
        if (isNaN(creditValue) || creditValue <= 0) continue; // Skip invalid credits or 0 credits in this logic

        totalPoints += (gp * creditValue);
        totalCredits += creditValue;
    }

    history.push({ description: 'Summed Grade Points', totalPoints });
    history.push({ description: 'Summed Valid Credits', totalCredits });

    // 4. Compute & Round
    let rawCgpa = totalCredits > 0 ? (totalPoints / totalCredits) : 0;
    const factor = Math.pow(10, policy.roundingPrecision || 4);
    const cgpa = Math.round(rawCgpa * factor) / factor;

    return {
        totalCreditsAttempted: courses.reduce((sum, c) => {
            const val = typeof c.credits === 'string' ? parseFloat(c.credits) : c.credits;
            return sum + (isNaN(val) ? 0 : val);
        }, 0),
        totalValidCredits: totalCredits,
        totalGradePoints: totalPoints,
        cgpa,
        history,
        processedCourses
    };
}

/**
 * Projected CGPA logic for "Predict" mode.
 * Combines a historical baseline with new semester performance.
 */
export function calculateProjectedCGPA(
    currentCGPA: number,
    currentCredits: number,
    newCourses: Course[],
    policy: AcademicPolicy
): CGPAResult {
    const history: any[] = [];

    history.push({
        description: 'Starting Baseline',
        totalPoints: currentCGPA * currentCredits,
        resultData: { cgpa: currentCGPA, credits: currentCredits }
    });

    // 1. Calculate stats for the *new* courses only
    // We reuse the existing logic but treat it as a standalone chunk first
    // This allows us to handle repeats *within* the current semester if any
    const newSemesterResult = calculateCGPA(newCourses, policy);

    // We ignore the 'cgpa' from the result and only take points/credits
    const newPoints = newSemesterResult.totalGradePoints;
    const newCredits = newSemesterResult.totalValidCredits;

    history.push(...newSemesterResult.history.map(h => ({
        ...h,
        description: `(New Semester) ${h.description}`
    })));

    // 2. Combine with baseline
    const totalPoints = (currentCGPA * currentCredits) + newPoints;
    const totalValidCredits = currentCredits + newCredits;

    history.push({ description: 'Combined Historical + New Points', totalPoints });
    history.push({ description: 'Combined Valid Credits', totalValidCredits });

    // 3. Compute final
    let rawCgpa = totalValidCredits > 0 ? (totalPoints / totalValidCredits) : 0;
    const factor = Math.pow(10, policy.roundingPrecision || 4);
    const cgpa = Math.round(rawCgpa * factor) / factor;

    return {
        totalCreditsAttempted: currentCredits + newSemesterResult.totalCreditsAttempted,
        totalValidCredits,
        totalGradePoints: totalPoints,
        cgpa,
        history,
        processedCourses: newSemesterResult.processedCourses
    };
}
