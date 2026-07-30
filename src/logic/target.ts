import type { AcademicPolicy, TargetSolveResult } from '../types';

/**
 * Reverse-solve the average grade points needed over `plannedCredits`
 * so that (baseline + new work) lands at `targetCgpa`.
 *
 * Formula:
 *   requiredAvg = (target * (baselineCredits + planned) - baselineCGPA * baselineCredits) / planned
 */
export function solveRequiredAverage(params: {
    baselineCgpa: number;
    baselineCredits: number;
    plannedCredits: number;
    targetCgpa: number;
    policy: AcademicPolicy;
}): TargetSolveResult {
    const {
        baselineCgpa,
        baselineCredits,
        plannedCredits,
        targetCgpa,
        policy,
    } = params;

    const maxCGPA = policy.maxCGPA ?? 4.0;
    const sortedScale = [...policy.gradingScale].sort((a, b) => b.point - a.point);
    const perfectPoint = sortedScale[0]?.point ?? maxCGPA;

    const base: Omit<TargetSolveResult, 'feasible' | 'reason' | 'requiredAverage' | 'suggestedGrade' | 'suggestedGradePoint' | 'floorGrade'> = {
        targetCgpa,
        projectedIfPerfect: 0,
        creditsNeeded: plannedCredits,
    };

    if (plannedCredits <= 0) {
        return {
            ...base,
            feasible: false,
            reason: 'Add planned credits (or courses) to reverse-solve a grade target.',
            requiredAverage: 0,
            projectedIfPerfect: baselineCgpa,
        };
    }

    if (targetCgpa > maxCGPA + 1e-9) {
        return {
            ...base,
            feasible: false,
            reason: `Target exceeds this policy's maximum CGPA (${maxCGPA.toFixed(2)}).`,
            requiredAverage: 0,
            projectedIfPerfect: maxCGPA,
        };
    }

    const totalCredits = baselineCredits + plannedCredits;
    const neededPoints = targetCgpa * totalCredits;
    const existingPoints = baselineCgpa * baselineCredits;
    const requiredAverage = (neededPoints - existingPoints) / plannedCredits;

    const projectedIfPerfect =
        (existingPoints + perfectPoint * plannedCredits) / totalCredits;

    if (requiredAverage > perfectPoint + 1e-9) {
        return {
            ...base,
            feasible: false,
            reason: `Even all ${sortedScale[0]?.grade ?? 'top'} grades only reach ~${projectedIfPerfect.toFixed(4)}. Need more credits or a lower target.`,
            requiredAverage,
            projectedIfPerfect,
        };
    }

    if (requiredAverage < 0) {
        // Target already below what zeros would produce — already achieved / overshot.
        return {
            ...base,
            feasible: true,
            reason: 'Target is already at or below your trajectory even with failing grades.',
            requiredAverage: Math.max(0, requiredAverage),
            projectedIfPerfect,
            suggestedGrade: sortedScale[sortedScale.length - 1]?.grade,
            suggestedGradePoint: sortedScale[sortedScale.length - 1]?.point,
        };
    }

    // Smallest grade point that still meets or exceeds the requirement.
    const meeting = [...sortedScale]
        .sort((a, b) => a.point - b.point)
        .find(g => g.point + 1e-9 >= requiredAverage);

    const below = [...sortedScale]
        .sort((a, b) => b.point - a.point)
        .find(g => g.point < requiredAverage - 1e-9);

    return {
        ...base,
        feasible: true,
        requiredAverage,
        projectedIfPerfect,
        suggestedGrade: meeting?.grade,
        suggestedGradePoint: meeting?.point,
        floorGrade: below?.grade,
    };
}

/**
 * Convenience: derive planned credits from a course list (string credits allowed).
 */
export function sumCourseCredits(
    courses: { credits: number | string }[]
): number {
    return courses.reduce((sum, c) => {
        const v = typeof c.credits === 'string' ? parseFloat(c.credits) : c.credits;
        return sum + (Number.isNaN(v) ? 0 : v);
    }, 0);
}
