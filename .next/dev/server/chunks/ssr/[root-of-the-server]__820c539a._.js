module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/data/sample.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sampleCourses",
    ()=>sampleCourses,
    "sampleUniversities",
    ()=>sampleUniversities
]);
const sampleUniversities = [
    {
        id: 'tarumt',
        name: 'Tunku Abdul Rahman University of Management and Technology',
        shortName: 'TAR UMT',
        country: 'Malaysia',
        type: 'Private',
        imageUrl: '/tarumt_campus.png',
        policies: [
            {
                id: 'pol_tarumt_1',
                universityId: 'tarumt',
                name: 'Standard Grading (Planning Mode)',
                effectiveFrom: '2024-01-01',
                repeatPolicy: 'LatestAttempt',
                roundingPrecision: 4,
                maxCGPA: 4.0,
                gradingScale: [
                    {
                        grade: 'A',
                        point: 4.0000
                    },
                    {
                        grade: 'A-',
                        point: 3.7500
                    },
                    {
                        grade: 'B+',
                        point: 3.5000
                    },
                    {
                        grade: 'B',
                        point: 3.0000
                    },
                    {
                        grade: 'B-',
                        point: 2.7500
                    },
                    {
                        grade: 'C+',
                        point: 2.5000
                    },
                    {
                        grade: 'C',
                        point: 2.0000
                    },
                    {
                        grade: 'F',
                        point: 0.0000
                    }
                ]
            }
        ]
    },
    {
        id: 'utar',
        name: 'Universiti Tunku Abdul Rahman',
        shortName: 'UTAR',
        country: 'Malaysia',
        type: 'Private',
        imageUrl: '/utar_campus.png',
        policies: [
            {
                id: 'pol_utar_std_2010',
                universityId: 'utar',
                name: 'Standard Grading (Jan 2010 Onwards)',
                effectiveFrom: '2010-01-01',
                repeatPolicy: 'LatestAttempt',
                roundingPrecision: 4,
                maxCGPA: 4.0,
                gradingScale: [
                    {
                        grade: 'A+',
                        point: 4.0000
                    },
                    {
                        grade: 'A',
                        point: 4.0000
                    },
                    {
                        grade: 'A-',
                        point: 3.6700
                    },
                    {
                        grade: 'B+',
                        point: 3.3300
                    },
                    {
                        grade: 'B',
                        point: 3.0000
                    },
                    {
                        grade: 'B-',
                        point: 2.6700
                    },
                    {
                        grade: 'C+',
                        point: 2.3300
                    },
                    {
                        grade: 'C',
                        point: 2.0000
                    },
                    {
                        grade: 'F',
                        point: 0.0000
                    }
                ]
            },
            {
                id: 'pol_utar_pre2010_ug',
                universityId: 'utar',
                name: 'Foundation/Undergraduate (Pre-2010)',
                effectiveFrom: '2000-01-01',
                repeatPolicy: 'LatestAttempt',
                roundingPrecision: 4,
                maxCGPA: 4.0,
                gradingScale: [
                    {
                        grade: 'A',
                        point: 4.0000
                    },
                    {
                        grade: 'A-',
                        point: 3.7000
                    },
                    {
                        grade: 'B+',
                        point: 3.3000
                    },
                    {
                        grade: 'B',
                        point: 3.0000
                    },
                    {
                        grade: 'B-',
                        point: 2.7000
                    },
                    {
                        grade: 'C+',
                        point: 2.3000
                    },
                    {
                        grade: 'C',
                        point: 2.0000
                    },
                    {
                        grade: 'D',
                        point: 1.0000
                    },
                    {
                        grade: 'F',
                        point: 0.0000
                    }
                ]
            },
            {
                id: 'pol_utar_pre2010_pg',
                universityId: 'utar',
                name: 'Postgraduate (Pre-2010)',
                effectiveFrom: '2000-01-01',
                repeatPolicy: 'LatestAttempt',
                roundingPrecision: 4,
                maxCGPA: 4.0,
                gradingScale: [
                    {
                        grade: 'A',
                        point: 4.0000
                    },
                    {
                        grade: 'A-',
                        point: 3.6700
                    },
                    {
                        grade: 'B+',
                        point: 3.3300
                    },
                    {
                        grade: 'B',
                        point: 3.0000
                    },
                    {
                        grade: 'B-',
                        point: 2.6700
                    },
                    {
                        grade: 'C+',
                        point: 2.3300
                    },
                    {
                        grade: 'C',
                        point: 2.0000
                    },
                    {
                        grade: 'D',
                        point: 1.0000
                    },
                    {
                        grade: 'F',
                        point: 0.0000
                    }
                ]
            }
        ]
    },
    {
        id: 'sunway',
        name: 'Sunway University',
        shortName: 'Sunway',
        country: 'Malaysia',
        type: 'Private',
        imageUrl: '/sunway_campus.png',
        policies: [
            {
                id: 'pol_sunway_1',
                name: 'Sunway 4.0 Scale',
                maxCGPA: 4.00,
                gradingScale: [
                    {
                        grade: 'A',
                        point: 4.00
                    },
                    {
                        grade: 'A-',
                        point: 3.70
                    },
                    {
                        grade: 'B+',
                        point: 3.30
                    },
                    {
                        grade: 'B',
                        point: 3.00
                    },
                    {
                        grade: 'B-',
                        point: 2.70
                    },
                    {
                        grade: 'C+',
                        point: 2.30
                    },
                    {
                        grade: 'C',
                        point: 2.00
                    },
                    {
                        grade: 'F',
                        point: 0.00
                    }
                ]
            }
        ]
    },
    {
        id: 'custom',
        name: 'Custom Architecture',
        country: 'Global',
        type: 'Public',
        imageUrl: '/custom_mode.png',
        policies: [
            {
                id: 'pol_custom_1',
                name: 'User Defined Scale',
                maxCGPA: 4.00,
                gradingScale: [
                    {
                        grade: 'A',
                        point: 4.00
                    },
                    {
                        grade: 'B',
                        point: 3.00
                    },
                    {
                        grade: 'C',
                        point: 2.00
                    },
                    {
                        grade: 'D',
                        point: 1.00
                    },
                    {
                        grade: 'F',
                        point: 0.00
                    }
                ]
            }
        ]
    }
];
const sampleCourses = [
    {
        id: '1',
        code: 'AACS3013',
        name: 'Software Engineering',
        credits: 4,
        grade: 'B+',
        semester: '2024-S1'
    },
    {
        id: '2',
        code: 'AACS3074',
        name: 'Artificial Intelligence',
        credits: 4,
        grade: 'A-',
        semester: '2024-S1'
    }
];
}),
"[project]/src/logic/calculator.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateCGPA",
    ()=>calculateCGPA,
    "calculateProjectedCGPA",
    ()=>calculateProjectedCGPA
]);
/**
 * Converts a letter grade to grade points based on the provided scale.
 * Returns -1 if not found or invalid.
 */ function getGradePoint(grade, scale) {
    const item = scale.find((s)=>s.grade.toUpperCase() === grade.toUpperCase());
    return item ? item.point : -1;
}
function calculateCGPA(courses, policy) {
    const history = [];
    // 1. Initial set
    let processedCourses = courses.map((c)=>({
            ...c
        }));
    history.push({
        description: 'Initialized course list',
        count: processedCourses.length
    });
    // 2. Identify Repeats
    // Group by Course Code (ONLY if code exists)
    const groupedHelper = new Map();
    processedCourses.forEach((c)=>{
        // Only group if there is a distinct code. 
        // If code is empty/whitespace, we treat it as a unique independent entry (Simulated Course 1, 2, etc.)
        if (c.code && c.code.trim() !== '') {
            if (!groupedHelper.has(c.code)) groupedHelper.set(c.code, []);
            groupedHelper.get(c.code).push(c);
        }
    });
    // Apply Repeat Policy
    processedCourses = processedCourses.map((course)=>{
        // If user manually excluded, skip logic
        if (course.isExcluded) return course;
        // If no code, it's a simulated/anonymous entry -> NEVER treat as repeat
        if (!course.code || course.code.trim() === '') return course;
        // If code exists but somehow not in map (shouldn't happen), skip
        if (!groupedHelper.has(course.code)) return course;
        const attempts = groupedHelper.get(course.code);
        if (attempts.length <= 1) return course;
        // Sort attempts by "semester" (naive string sort or expect ISO/Orderable format)
        attempts.sort((a, b)=>a.semester.localeCompare(b.semester));
        if (policy.repeatPolicy === 'LatestAttempt') {
            const latest = attempts[attempts.length - 1];
            if (course.id !== latest.id) {
                return {
                    ...course,
                    isRepeat: true
                }; // Flag as repeat (excluded from calc)
            }
        } else if (policy.repeatPolicy === 'BestAttempt') {
            const maxGP = Math.max(...attempts.map((a)=>getGradePoint(a.grade, policy.gradingScale)));
            const bestAttempts = attempts.filter((a)=>getGradePoint(a.grade, policy.gradingScale) === maxGP);
            const target = bestAttempts[bestAttempts.length - 1]; // Latest of best
            if (course.id !== target.id) {
                return {
                    ...course,
                    isRepeat: true
                };
            }
        }
        return course;
    });
    history.push({
        description: 'Applied Repeat Policy',
        policy: policy.repeatPolicy
    });
    // 3. Calculation
    let totalPoints = 0;
    let totalCredits = 0;
    for (const course of processedCourses){
        // Skip if excluded or flagged as repeat
        if (course.isExcluded || course.isRepeat) continue;
        const gp = getGradePoint(course.grade, policy.gradingScale);
        // If grade not found (e.g. "Pass", "W") or 0 credits, logic depends on policy.
        // Assuming 0-credit courses don't count towards denominator.
        // Assuming "W" returns -1 and we exclude it.
        if (gp < 0) continue; // Not a gradable evaluation
        const creditValue = typeof course.credits === 'string' ? parseFloat(course.credits) : course.credits;
        if (isNaN(creditValue) || creditValue <= 0) continue; // Skip invalid credits or 0 credits in this logic
        totalPoints += gp * creditValue;
        totalCredits += creditValue;
    }
    history.push({
        description: 'Summed Grade Points',
        totalPoints
    });
    history.push({
        description: 'Summed Valid Credits',
        totalCredits
    });
    // 4. Compute & Round
    let rawCgpa = totalCredits > 0 ? totalPoints / totalCredits : 0;
    const factor = Math.pow(10, policy.roundingPrecision || 4);
    const cgpa = Math.round(rawCgpa * factor) / factor;
    return {
        totalCreditsAttempted: courses.reduce((sum, c)=>{
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
function calculateProjectedCGPA(currentCGPA, currentCredits, newCourses, policy) {
    const history = [];
    history.push({
        description: 'Starting Baseline',
        totalPoints: currentCGPA * currentCredits,
        resultData: {
            cgpa: currentCGPA,
            credits: currentCredits
        }
    });
    // 1. Calculate stats for the *new* courses only
    // We reuse the existing logic but treat it as a standalone chunk first
    // This allows us to handle repeats *within* the current semester if any
    const newSemesterResult = calculateCGPA(newCourses, policy);
    // We ignore the 'cgpa' from the result and only take points/credits
    const newPoints = newSemesterResult.totalGradePoints;
    const newCredits = newSemesterResult.totalValidCredits;
    history.push(...newSemesterResult.history.map((h)=>({
            ...h,
            description: `(New Semester) ${h.description}`
        })));
    // 2. Combine with baseline
    const totalPoints = currentCGPA * currentCredits + newPoints;
    const totalValidCredits = currentCredits + newCredits;
    history.push({
        description: 'Combined Historical + New Points',
        totalPoints
    });
    history.push({
        description: 'Combined Valid Credits',
        totalValidCredits
    });
    // 3. Compute final
    let rawCgpa = totalValidCredits > 0 ? totalPoints / totalValidCredits : 0;
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
}),
"[project]/src/text.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TEXT",
    ()=>TEXT
]);
const TEXT = {
    BRAND: {
        NAME: "VisualGPA",
        TAGLINE: "ACADEMIC INTELLIGENCE",
        BASE_URL: process.env.VITE_BASE_URL || "https://visualgpa.hqinglab.tech",
        SELECT_ARCH: "Select Architecture"
    },
    HEADER: {
        MODE_PLANNING: "Planning Mode",
        EXIT: "Exit"
    },
    STEPS: {
        ONE: "01 // STARTING POINT",
        TWO: "02 // SCENARIO PLANNING",
        THREE: "03 // FORECAST RESULT"
    },
    LABELS: {
        CURRENT_CGPA: "Current CGPA",
        CREDITS_EARNED: "Credits Earned",
        TARGET_GOAL: "Target Goal",
        SYSTEM_GUIDANCE: "System Guidance",
        BASELINE_ESTABLISHED: "✓ Baseline Established",
        ANALYSIS: "Analysis",
        IMPACT: "Impact",
        TOTAL_CREDITS: "Total Credits",
        QUALITY_POINTS: "Quality Points",
        GOAL: "Goal",
        ACHIEVED: "Achieved",
        IN_PROGRESS: "In Progress",
        CR: "CR"
    },
    PLACEHOLDERS: {
        CGPA: "0.00 - 4.00",
        CREDITS: "Total Credits",
        COURSE_NAME: "Course Name..."
    },
    MESSAGES: {
        GUIDANCE_DEFAULT: "Enter your current stats to establish a baseline. Set a target to enable Gap Analysis.",
        GUIDANCE_LOCKED: (cgpa, credits)=>`Locked on: ${cgpa} CGPA across ${credits} credits.`,
        EMPTY_STATE_TITLE: "What if you perform at your best?",
        EMPTY_STATE_TARGET: (target)=>`Simulate a semester to see if you can bridge the gap to ${target}.`,
        EMPTY_STATE_DEFAULT: "This shows the maximum CGPA improvement possible against your baseline.",
        ADD_SCENARIO: "+ ADD COURSE SCENARIO",
        ADD_COURSE: "+ ADD COURSE"
    },
    MODAL: {
        TITLE: "Clear All Scenarios?",
        DESC: "This will remove all courses you've added. This action cannot be undone.",
        CANCEL: "Cancel",
        CONFIRM: "Confirm Clear"
    },
    ANALYSIS: {
        TREND_BOOST: "Strong Boost",
        TREND_UP: "Trending Up",
        TREND_WARN: "Impact Warning",
        TREND_DROP: "Slight Drop",
        TREND_STABLE: "Maintained",
        TREND_DOWN: "Trending Down",
        TREND_MAX: "Maximum Achieved",
        TREND_TARGET: "Target Reached",
        INTRO_BOOST: "This scenario significantly improves your standing.",
        INTRO_UP: "This scenario increases your CGPA.",
        INTRO_WARN: "This outcome noticeably drags down your average.",
        INTRO_DROP: "This scenario lowers your CGPA.",
        INTRO_STABLE: "This scenario keeps your CGPA stable.",
        INTRO_MAX: "Your CGPA is already at the maximum limit.",
        TIP_BOOST: "Try adding 'harder' courses to see if you can maintain this buffer.",
        TIP_UP: "Explore if one more 'A' could push you into the next tier.",
        TIP_WARN: "Consider balancing your load or retaking a course if possible.",
        TIP_DROP: "Try swapping a 'B' for an 'A-' to neutralize the drop.",
        TIP_STABLE: "Experiment with higher grades to see how to break the plateau.",
        TIP_MAX: "Additional high grades can only maintain this limit, not exceed it.",
        TIP_TARGET: "You've reached your target. You can now use this tool to explore risk or future planning.",
        CONTEXT_LOW: "High sensitivity to few courses.",
        CONTEXT_HIGH: "Impact averaged over heavy load.",
        CONTEXT_STD: "Based on standard course load.",
        CONTEXT_MAX: "No further increase possible.",
        NEXT_BAD: "Identify which course is weighing you down.",
        NEXT_GOOD: "Check if this grade mix is sustainable.",
        NEXT_MID: "To move the needle, you need higher grades relative to baseline.",
        NEXT_GOAL: "Goal reached. Try a 'Minimum Viable' case to find your safety margin.",
        NEXT_EXPLORE: "Use this scenario to understand the impact of lower grades."
    },
    IMPACT: {
        SIGNIFICANT: "Significant Shift",
        MODERATE: "Moderate Change",
        MINIMAL: "Minimal Change",
        NEGLIGIBLE: "Negligible",
        MAX_LIMIT: "Limit Reached"
    },
    EMPTY_STATE: {
        DEFAULT_TITLE: "What if you perform at your best?",
        MAX_TITLE: "Explore grade sensitivity",
        DEFAULT_DESC: "This shows the maximum CGPA improvement possible against your baseline.",
        MAX_DESC: "Understand the impact of lower grades on your perfect score.",
        CTA_DEFAULT: "+ ADD COURSE SCENARIO",
        CTA_EXPLORE: "+ EXPLORE RISKS"
    },
    FOOTER: {
        DISCLAIMER: "This tool is for planning purposes only and is not an official academic record.",
        TERMS: "Terms",
        PRIVACY: "Privacy",
        CONTACT: "Contact"
    },
    ABOUT_MODAL: {
        TITLE: "About VisualGPA",
        DISCLAIMER: "This project is independently maintained. It serves as a planning tool only and does not provide official academic advice or verification of university records.",
        CONTACT_MSG: "For feedback, corrections, or policy references only, you may contact the maintainer at:",
        EMAIL: "qing05099@gmail.com",
        LINKEDIN: "https://www.linkedin.com/in/hui-qing-lau-208a4222a/",
        INSTAGRAM: "https://www.instagram.com/hqing0905/",
        CLOSE: "Close"
    },
    TRANSPARENCY: {
        TRIGGER: "View calculation details",
        TITLE: "Calculation Breakdown",
        SECTION_BASELINE: "1. Starting Point",
        SECTION_SCENARIO: "2. Current Scenario",
        SECTION_AGGREGATION: "3. Aggregation",
        SECTION_RESULT: "4. Final Result",
        LABEL_POINTS: "Total points",
        LABEL_CREDITS: "Total credits",
        LABEL_NEW_POINTS: "New total points",
        LABEL_NEW_CREDITS: "New total credits",
        MAX_EXPLAIN: "Your CGPA is already at the maximum. Additional scenarios will not increase it.",
        GRADING_SCALE_TITLE: "Grading Scale Reference",
        NOTE: "Based on the selected university’s grading policy."
    },
    LEGAL: {
        TITLE: "Legal & Privacy Notice",
        SECTIONS: [
            {
                HEADING: "About This Tool",
                CONTENT: [
                    "VisualGPA is a non-official academic planning and reference tool.",
                    "It is designed to help users understand potential CGPA outcomes based on user-provided inputs and publicly available academic grading rules.",
                    "This tool is not affiliated with, endorsed by, or officially connected to any university or academic institution. Users should always rely on official university records, academic handbooks, or academic offices for final confirmation."
                ]
            },
            {
                HEADING: "Privacy",
                CONTENT: [
                    "VisualGPA does not require user accounts and does not collect personal identifying information such as names, student IDs, email addresses, or login credentials.",
                    "Academic data entered into the system (including CGPA, credits, and course scenarios) is used solely for on-screen calculation and planning purposes. By default, this data is not stored, shared, or used for profiling.",
                    "The service may collect minimal technical information necessary for basic operation, such as anonymous server logs or error reports. This information is used only to maintain system reliability and security.",
                    "VisualGPA does not sell, rent, or trade user data."
                ]
            },
            {
                HEADING: "Terms of Use",
                CONTENT: [
                    "The calculations and projections provided by VisualGPA are for reference and planning purposes only. Results may differ from official university records due to policy changes, academic discretion, or data interpretation.",
                    "By using this tool, you acknowledge and agree that:",
                    "• VisualGPA does not provide official academic, legal, or professional advice.",
                    "• Any decisions made based on the results are solely your own responsibility.",
                    "• The service is provided “as is” without warranties of any kind.",
                    "VisualGPA is not responsible for any loss, misunderstanding, academic outcome, or decision arising from the use of this tool.",
                    "Users agree not to misuse the service, attempt to reverse engineer its logic, or present its results as official academic records.",
                    "VisualGPA may modify, suspend, or discontinue the service at any time without prior notice."
                ]
            },
            {
                HEADING: "Contact & Maintenance",
                CONTENT: [
                    "This project is independently maintained.",
                    "For feedback, corrections, or questions related to academic policies used in this system, you may contact the maintainer at: contact@visualgpa.app"
                ]
            }
        ],
        CLOSE: "Close"
    },
    SEO_KEYWORDS: {
        UTAR: "UTAR CGPA Calculator, Universiti Tunku Abdul Rahman GPA, UTAR Grading System, Malaysia University GPA Calculator, Calculate UTAR CGPA, UTAR WAM Calculator",
        TARUMT: "TARUMT CGPA Calculator, Tunku Abdul Rahman University of Management and Technology GPA, TAR UMT Grading Scale, TAR College CGPA, Calculate TARUMT GPA",
        SUNWAY: "Sunway University CGPA Calculator, Sunway GPA, Sunway University Grading System, Calculate Sunway CGPA, Malaysia Private University GPA",
        CUSTOM: "Custom CGPA Calculator, Universal GPA Calculator, Configure Grading Scale, University GPA Planner, Academic Performance Calculator",
        DEFAULT: "VisualGPA, CGPA Calculator, University GPA Planner, Academic Calculator, Grade Point Average, University Grading Systems"
    }
};
}),
"[project]/src/components/AnimatedValue.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedValue",
    ()=>AnimatedValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const AnimatedValue = ({ value, decimals = 4 })=>{
    const [display, setDisplay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(value);
    const [animating, setAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let start = display;
        const end = value;
        if (start === end) return;
        setAnimating(true);
        const duration = 600; // ms
        const startTime = performance.now();
        const animate = (currentTime)=>{
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3); // Cubic ease out
            const current = start + (end - start) * easeOut;
            setDisplay(current);
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setAnimating(false);
            }
        };
        requestAnimationFrame(animate);
    }, [
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: animating ? 'animate-update' : '',
        children: display.toFixed(decimals)
    }, void 0, false, {
        fileName: "[project]/src/components/AnimatedValue.tsx",
        lineNumber: 34,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/[uni]/WorkspaceClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Workspace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$sample$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/sample.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$logic$2f$calculator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/logic/calculator.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/text.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedValue$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AnimatedValue.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function Workspace() {
    // Next.js params can be array or string, so we force cast or handle it.
    // In app/[uni]/page.tsx, params.uni is the dynamic segment.
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const uniId = params.uni;
    // Router replacement
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Find current university
    const currentUni = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$sample$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sampleUniversities"].find((u)=>u.id === uniId);
    // Redirect if invalid ID
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!currentUni) {
            router.push('/');
        }
    }, [
        currentUni,
        router
    ]);
    // Auto-open Config for Custom Mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (currentUni?.id === 'custom') {
            setShowConfigModal(true);
        }
    }, [
        currentUni
    ]);
    /* State & Persistence */ const [courses, setCourses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return [];
    });
    // Handle hydration mismatch for localStorage
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    // Session-only state
    const [currentCGPA, setCurrentCGPA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentTotalCredits, setCurrentTotalCredits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [targetCGPA, setTargetCGPA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [activePolicyId, setActivePolicyId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(''); // Policy Selection
    /* UI State */ const [showClearConfirm, setShowClearConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAboutModal, setShowAboutModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showTransparency, setShowTransparency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showLegalModal, setShowLegalModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showConfigModal, setShowConfigModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // New Config Modal
    // Custom Grading Scale State
    const [customGradingScale, setCustomGradingScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return [
            {
                grade: 'A',
                point: 4.0
            },
            {
                grade: 'B',
                point: 3.0
            },
            {
                grade: 'C',
                point: 2.0
            },
            {
                grade: 'F',
                point: 0.0
            }
        ];
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        customGradingScale
    ]);
    /* Effects */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        courses
    ]);
    // Reset policy on uni change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (currentUni && currentUni.policies.length > 0) {
            setActivePolicyId(currentUni.policies[0].id);
        }
    }, [
        currentUni
    ]);
    /* Derived */ // If Generic Mode, use custom scale. Else use standard.
    const isCustomMode = currentUni?.id === 'custom';
    const currentPolicy = isCustomMode ? {
        ...currentUni?.policies[0],
        gradingScale: customGradingScale
    } : currentUni?.policies.find((p)=>p.id === activePolicyId) || currentUni?.policies[0];
    const gradeOptions = currentPolicy?.gradingScale.map((g)=>g.grade) || [];
    const maxCGPA = currentPolicy?.maxCGPA || 4.00;
    // Handler for custom scale
    const updateCustomGrade = (idx, field, value)=>{
        const newScale = [
            ...customGradingScale
        ];
        newScale[idx] = {
            ...newScale[idx],
            [field]: field === 'point' ? parseFloat(value) : value
        };
        setCustomGradingScale(newScale);
    };
    const addCustomGrade = ()=>setCustomGradingScale([
            ...customGradingScale,
            {
                grade: '?',
                point: 0
            }
        ]);
    const removeCustomGrade = (idx)=>setCustomGradingScale(customGradingScale.filter((_, i)=>i !== idx));
    /* Input Handling */ const handleFloatInput = (val, setter)=>{
        if (val === '' || /^\d*\.?\d{0,4}$/.test(val)) {
            const num = parseFloat(val);
            if (val === '' || val === '.' || !isNaN(num) && num <= maxCGPA) {
                setter(val);
            }
        }
    };
    const handleCreditInput = (val, setter)=>{
        if (val === '' || /^\d*\.?\d*$/.test(val)) setter(val);
    };
    const handleCourseCreditInput = (id, val)=>{
        if (val === '' || /^\d*\.?\d*$/.test(val)) handleUpdate(id, 'credits', val);
    };
    const handleAddCourse = ()=>{
        setCourses([
            ...courses,
            {
                id: Math.random().toString(36).substr(2, 9),
                code: '',
                name: '',
                credits: 3,
                grade: 'B',
                semester: '2024'
            }
        ]);
    };
    const handleUpdate = (id, field, val)=>{
        setCourses(courses.map((c)=>c.id === id ? {
                ...c,
                [field]: val
            } : c));
    };
    const handleRemove = (id)=>setCourses(courses.filter((c)=>c.id !== id));
    const confirmClearAll = ()=>{
        setCourses([]);
        setShowClearConfirm(false);
    };
    /* Calculation */ const baselineCGPA = parseFloat(currentCGPA) || 0;
    const baselineCredits = parseFloat(currentTotalCredits) || 0;
    const canCalc = !!currentPolicy && !isNaN(parseFloat(currentCGPA)) && !isNaN(parseFloat(currentTotalCredits));
    const hasCourses = courses.length > 0;
    const baselineEstablished = canCalc && baselineCredits > 0;
    const result = canCalc && currentPolicy ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$logic$2f$calculator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateProjectedCGPA"])(baselineCGPA, baselineCredits, courses, currentPolicy) : {
        cgpa: baselineCGPA,
        totalGradePoints: 0,
        totalValidCredits: 0,
        history: [],
        processedCourses: courses
    };
    /* Transparency Calculations */ const scenarioPoints = result.totalGradePoints - baselineCGPA * baselineCredits;
    const scenarioCredits = result.totalValidCredits - baselineCredits;
    const baselinePoints = baselineCGPA * baselineCredits;
    /* Decision Guidance Logic */ const diff = result.cgpa - baselineCGPA;
    const absDiff = Math.abs(diff);
    const resultIsMax = result.cgpa >= maxCGPA;
    const isMaxState = baselineEstablished && baselineCGPA >= maxCGPA;
    /* Goal Logic */ const targetVal = parseFloat(targetCGPA);
    const distToTarget = !isNaN(targetVal) ? targetVal - result.cgpa : 0;
    const targetSet = !isNaN(targetVal) && targetVal > 0;
    const targetReached = targetSet && distToTarget <= 0;
    let trendText = "Make Changes";
    let trendColor = "#94a3b8";
    let ringPulseClass = "";
    let arrowType = 'neutral';
    let arrowSymbol = '→';
    // Analysis Strings
    let analysisIntro = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].ANALYSIS.INTRO_STABLE;
    let impactLabel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].IMPACT.NEGLIGIBLE;
    let contextNote = "";
    let analysisNextStep = "";
    if (hasCourses && canCalc) {
        if (resultIsMax) {
            trendText = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].ANALYSIS.TREND_MAX;
            trendColor = "#22d3ee";
            arrowType = 'up';
            arrowSymbol = 'MAX';
            ringPulseClass = "pulse-cyan";
            analysisIntro = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].ANALYSIS.INTRO_MAX;
            impactLabel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].IMPACT.MAX_LIMIT;
            contextNote = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].ANALYSIS.CONTEXT_MAX;
            analysisNextStep = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].ANALYSIS.TIP_MAX;
        } else if (targetReached) {
            trendText = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].ANALYSIS.TREND_TARGET;
            trendColor = "#c084fc";
            arrowType = 'up';
            arrowSymbol = '↗';
            ringPulseClass = "pulse-cyan";
            analysisIntro = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].ANALYSIS.INTRO_BOOST;
            impactLabel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].IMPACT.SIGNIFICANT;
            contextNote = "";
            analysisNextStep = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].ANALYSIS.TIP_TARGET;
        } else {
            if (diff > 0.0001) {
                trendText = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].ANALYSIS.TREND_UP;
                trendColor = "#22d3ee";
                arrowType = 'up';
                arrowSymbol = '↗';
                ringPulseClass = "pulse-cyan";
                analysisIntro = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].ANALYSIS.INTRO_UP;
            } else if (diff < -0.0001) {
                trendText = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].ANALYSIS.TREND_DOWN;
                trendColor = "#ef4444";
                arrowType = 'down';
                arrowSymbol = '↘';
                ringPulseClass = "pulse-red";
                analysisIntro = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].ANALYSIS.INTRO_DROP;
            } else {
                trendText = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].ANALYSIS.TREND_STABLE;
                arrowType = 'neutral';
                arrowSymbol = '→';
                analysisIntro = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].ANALYSIS.INTRO_STABLE;
            }
            if (absDiff >= 0.10) impactLabel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].IMPACT.SIGNIFICANT;
            else if (absDiff >= 0.05) impactLabel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].IMPACT.MODERATE;
            else if (absDiff >= 0.01) impactLabel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].IMPACT.MINIMAL;
            else impactLabel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].IMPACT.NEGLIGIBLE;
            const totalScenarioCredits = courses.reduce((sum, c)=>sum + (parseFloat(c.credits) || 0), 0);
            if (totalScenarioCredits < 5) contextNote = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].ANALYSIS.CONTEXT_LOW;
            else if (totalScenarioCredits > 15) contextNote = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].ANALYSIS.CONTEXT_HIGH;
            else contextNote = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].ANALYSIS.CONTEXT_STD;
            if (diff < -0.01) analysisNextStep = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].ANALYSIS.NEXT_BAD;
            else if (diff > 0.01) analysisNextStep = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].ANALYSIS.NEXT_GOOD;
            else analysisNextStep = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].ANALYSIS.NEXT_MID;
        }
    }
    if (targetReached && !resultIsMax) {
        analysisNextStep = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].ANALYSIS.NEXT_GOAL;
    }
    const getGradeColor = (g)=>{
        if (g.startsWith('A')) return '#22d3ee';
        if (g.startsWith('B')) return '#c084fc';
        if (g.startsWith('C')) return '#ef4444';
        return '#94a3b8';
    };
    // Safe check for render
    if (!mounted || !currentUni) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "app-shell",
        children: [
            showClearConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gl-modal-overlay",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "gl-modal",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: '1.5rem',
                                marginBottom: '1rem'
                            },
                            children: "⚠️"
                        }, void 0, false, {
                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                            lineNumber: 262,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                marginTop: 0,
                                marginBottom: '0.5rem'
                            },
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].MODAL.TITLE
                        }, void 0, false, {
                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                            lineNumber: 263,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: '#94a3b8',
                                fontSize: '0.9rem',
                                marginBottom: '2rem'
                            },
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].MODAL.DESC
                        }, void 0, false, {
                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                            lineNumber: 264,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '1rem'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn-ghost",
                                    onClick: ()=>setShowClearConfirm(false),
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].MODAL.CANCEL
                                }, void 0, false, {
                                    fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                    lineNumber: 266,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn-danger",
                                    onClick: confirmClearAll,
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].MODAL.CONFIRM
                                }, void 0, false, {
                                    fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                    lineNumber: 267,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                            lineNumber: 265,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                    lineNumber: 261,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                lineNumber: 260,
                columnNumber: 17
            }, this),
            showAboutModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gl-modal-overlay",
                onClick: ()=>setShowAboutModal(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "gl-modal",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                marginTop: 0,
                                marginBottom: '1rem',
                                color: 'var(--accent-cyan)',
                                letterSpacing: '0.1em'
                            },
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].ABOUT_MODAL.TITLE
                        }, void 0, false, {
                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                            lineNumber: 277,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: '0.85rem',
                                color: '#e2e8f0',
                                marginBottom: '1.5rem',
                                lineHeight: '1.5',
                                borderLeft: '2px solid var(--accent-cyan)',
                                paddingLeft: '1rem'
                            },
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].ABOUT_MODAL.DISCLAIMER
                        }, void 0, false, {
                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                            lineNumber: 278,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: '0.85rem',
                                color: '#94a3b8',
                                marginBottom: '1rem',
                                lineHeight: '1.5'
                            },
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].ABOUT_MODAL.CONTACT_MSG
                        }, void 0, false, {
                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                            lineNumber: 281,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "contact-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].ABOUT_MODAL.EMAIL}`,
                                    className: "contact-link-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "contact-icon",
                                            children: "✉️"
                                        }, void 0, false, {
                                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                            lineNumber: 286,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "contact-text-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "contact-label",
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "contact-value",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].ABOUT_MODAL.EMAIL
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                            lineNumber: 287,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                    lineNumber: 285,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].ABOUT_MODAL.INSTAGRAM,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "contact-link-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "contact-icon",
                                            children: "📸"
                                        }, void 0, false, {
                                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                            lineNumber: 293,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "contact-text-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "contact-label",
                                                    children: "Instagram"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "contact-value",
                                                    children: "@hqing0905"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                            lineNumber: 294,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                    lineNumber: 292,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].ABOUT_MODAL.LINKEDIN,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "contact-link-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "contact-icon",
                                            children: "💼"
                                        }, void 0, false, {
                                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                            lineNumber: 300,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "contact-text-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "contact-label",
                                                    children: "LinkedIn"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "contact-value",
                                                    children: "Hui Qing Lau"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                            lineNumber: 301,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                    lineNumber: 299,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                            lineNumber: 284,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-ghost",
                            onClick: ()=>setShowAboutModal(false),
                            style: {
                                width: '100%'
                            },
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].ABOUT_MODAL.CLOSE
                        }, void 0, false, {
                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                            lineNumber: 307,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                    lineNumber: 276,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                lineNumber: 275,
                columnNumber: 17
            }, this),
            showConfigModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gl-modal-overlay",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "gl-modal",
                    style: {
                        width: '400px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                marginTop: 0,
                                marginBottom: '1.5rem',
                                color: 'var(--accent-cyan)',
                                letterSpacing: '0.1em'
                            },
                            children: "CONFIGURE SYSTEM"
                        }, void 0, false, {
                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                            lineNumber: 316,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: '0.8rem',
                                color: '#94a3b8',
                                marginBottom: '1.5rem'
                            },
                            children: "Define your university's grading scale manually."
                        }, void 0, false, {
                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                            lineNumber: 317,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                maxHeight: '300px',
                                overflowY: 'auto',
                                paddingRight: '0.5rem',
                                marginBottom: '1rem'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr 40px',
                                        gap: '0.5rem',
                                        marginBottom: '0.5rem',
                                        fontSize: '0.7rem',
                                        color: '#64748b',
                                        textTransform: 'uppercase'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: "Grade Letter"
                                        }, void 0, false, {
                                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                            lineNumber: 321,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: "Point Value"
                                        }, void 0, false, {
                                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                            lineNumber: 322,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                            lineNumber: 323,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                    lineNumber: 320,
                                    columnNumber: 29
                                }, this),
                                customGradingScale.map((g, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 1fr 40px',
                                            gap: '0.5rem',
                                            marginBottom: '0.5rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "input-ghost",
                                                value: g.grade,
                                                onChange: (e)=>updateCustomGrade(idx, 'grade', e.target.value),
                                                placeholder: "e.g. A",
                                                style: {
                                                    textAlign: 'center'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                                lineNumber: 328,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "input-ghost",
                                                type: "number",
                                                value: g.point,
                                                onChange: (e)=>updateCustomGrade(idx, 'point', e.target.value),
                                                placeholder: "4.0",
                                                style: {
                                                    textAlign: 'center'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                                lineNumber: 335,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>removeCustomGrade(idx),
                                                style: {
                                                    color: '#ef4444',
                                                    background: 'transparent',
                                                    border: 'none',
                                                    cursor: 'pointer'
                                                },
                                                children: "×"
                                            }, void 0, false, {
                                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                                lineNumber: 343,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 327,
                                        columnNumber: 33
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                            lineNumber: 319,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: addCustomGrade,
                            style: {
                                width: '100%',
                                padding: '0.5rem',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px dashed rgba(255,255,255,0.2)',
                                color: '#94a3b8',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                marginBottom: '1.5rem',
                                fontSize: '0.8rem'
                            },
                            children: "+ Add Grade Row"
                        }, void 0, false, {
                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                            lineNumber: 348,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-ghost",
                            onClick: ()=>{
                                setShowConfigModal(false);
                                setCourses([]);
                            },
                            style: {
                                width: '100%',
                                borderColor: 'var(--accent-cyan)',
                                color: 'var(--accent-cyan)'
                            },
                            children: "Save Configuration"
                        }, void 0, false, {
                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                            lineNumber: 350,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                    lineNumber: 315,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                lineNumber: 314,
                columnNumber: 17
            }, this),
            showLegalModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gl-modal-overlay",
                onClick: ()=>setShowLegalModal(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "gl-modal",
                    onClick: (e)=>e.stopPropagation(),
                    style: {
                        maxWidth: '600px',
                        textAlign: 'left'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                marginTop: 0,
                                marginBottom: '1.5rem',
                                color: 'var(--accent-cyan)',
                                letterSpacing: '0.1em',
                                textAlign: 'center'
                            },
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].LEGAL.TITLE
                        }, void 0, false, {
                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                            lineNumber: 358,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                maxHeight: '60vh',
                                overflowY: 'auto',
                                paddingRight: '0.5rem',
                                marginBottom: '1.5rem'
                            },
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].LEGAL.SECTIONS.map((section, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '2rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            style: {
                                                color: 'white',
                                                marginTop: 0,
                                                marginBottom: '0.75rem',
                                                fontSize: '1rem'
                                            },
                                            children: section.HEADING
                                        }, void 0, false, {
                                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                            lineNumber: 362,
                                            columnNumber: 37
                                        }, this),
                                        section.CONTENT.map((paragraph, pIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: '0.85rem',
                                                    color: '#cbd5e1',
                                                    marginBottom: '0.75rem',
                                                    lineHeight: '1.6',
                                                    paddingLeft: paragraph.startsWith('•') ? '1rem' : 0
                                                },
                                                children: paragraph
                                            }, pIdx, false, {
                                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                                lineNumber: 364,
                                                columnNumber: 41
                                            }, this)),
                                        idx < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].LEGAL.SECTIONS.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                            style: {
                                                border: 'none',
                                                borderTop: '1px solid rgba(255,255,255,0.1)',
                                                margin: '1.5rem 0'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                            lineNumber: 368,
                                            columnNumber: 78
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                    lineNumber: 361,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                            lineNumber: 359,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-ghost",
                            onClick: ()=>setShowLegalModal(false),
                            style: {
                                width: '100%'
                            },
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].LEGAL.CLOSE
                        }, void 0, false, {
                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                            lineNumber: 372,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                    lineNumber: 357,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                lineNumber: 356,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "sidebar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "brand-title",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].BRAND.NAME,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'var(--accent-cyan)'
                                },
                                children: "◈"
                            }, void 0, false, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 379,
                                columnNumber: 63
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                        lineNumber: 379,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sidebar-card",
                        onClick: ()=>router.push('/'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sidebar-card-img",
                                style: {
                                    backgroundImage: `url(${currentUni.imageUrl})`
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 384,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sidebar-card-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '0.65rem',
                                            color: 'var(--accent-cyan)',
                                            marginBottom: '0.25rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em',
                                            fontWeight: 700
                                        },
                                        children: "Active Architecture"
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 386,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: {
                                            fontFamily: 'var(--font-display)',
                                            fontSize: '1.1rem',
                                            lineHeight: '1.1',
                                            fontWeight: 700,
                                            color: 'white',
                                            marginBottom: '0.5rem',
                                            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                                            margin: '0 0 0.5rem 0'
                                        },
                                        children: [
                                            currentUni.name,
                                            currentUni.shortName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    opacity: 0.7,
                                                    marginLeft: '0.4rem',
                                                    fontWeight: 400,
                                                    fontSize: '0.9em'
                                                },
                                                children: [
                                                    "(",
                                                    currentUni.shortName,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                                lineNumber: 389,
                                                columnNumber: 54
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 387,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '0.7rem',
                                            color: '#cbd5e1',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.25rem',
                                            opacity: 0.8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '0.8rem'
                                                },
                                                children: "↺"
                                            }, void 0, false, {
                                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                                lineNumber: 392,
                                                columnNumber: 29
                                            }, this),
                                            " Change Architecture"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 391,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 385,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                        lineNumber: 383,
                        columnNumber: 17
                    }, this),
                    currentUni.policies.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            margin: '-1.5rem 1.5rem 2rem 1.5rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.65rem',
                                    color: '#94a3b8',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    marginBottom: '0.5rem'
                                },
                                children: "Grading Scheme"
                            }, void 0, false, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 399,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: activePolicyId,
                                onChange: (e)=>setActivePolicyId(e.target.value),
                                style: {
                                    width: '100%',
                                    background: 'rgba(255,255,255,0.05)',
                                    color: 'white',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '8px',
                                    padding: '0.5rem',
                                    fontSize: '0.75rem',
                                    outline: 'none',
                                    cursor: 'pointer',
                                    marginBottom: '0.75rem'
                                },
                                children: currentUni.policies.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: p.id,
                                        style: {
                                            background: '#0f172a'
                                        },
                                        children: p.name
                                    }, p.id, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 417,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 400,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                    gap: '0.25rem',
                                    background: 'rgba(0,0,0,0.2)',
                                    padding: '0.5rem',
                                    borderRadius: '6px',
                                    border: '1px solid rgba(255,255,255,0.05)'
                                },
                                children: [
                                    currentPolicy?.gradingScale.slice(0, 9).map((gs, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: '0.6rem',
                                                color: i < 3 ? 'var(--accent-cyan)' : '#64748b'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontWeight: 700
                                                    },
                                                    children: gs.grade
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 37
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        opacity: 0.7
                                                    },
                                                    children: gs.point.toFixed(2)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 89
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                            lineNumber: 432,
                                            columnNumber: 33
                                        }, this)),
                                    currentPolicy && currentPolicy.gradingScale.length > 9 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '0.6rem',
                                            color: '#64748b',
                                            fontStyle: 'italic'
                                        },
                                        children: "..."
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 437,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 422,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                        lineNumber: 398,
                        columnNumber: 21
                    }, this),
                    isCustomMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            margin: '-1.5rem 1.5rem 2rem 1.5rem'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-ghost",
                            onClick: ()=>setShowConfigModal(true),
                            style: {
                                width: '100%',
                                border: '1px dashed rgba(255,255,255,0.2)',
                                fontSize: '0.75rem'
                            },
                            children: "⚙️ Configure System"
                        }, void 0, false, {
                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                            lineNumber: 445,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                        lineNumber: 444,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "step-label",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].STEPS.ONE
                    }, void 0, false, {
                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                        lineNumber: 451,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "config-box",
                        style: {
                            background: 'transparent',
                            border: 'none',
                            padding: '0 5px',
                            boxShadow: 'none'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "input-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "input-label-floating",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].LABELS.CURRENT_CGPA
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 455,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "input-super",
                                        placeholder: "0.00",
                                        value: currentCGPA,
                                        onChange: (e)=>handleFloatInput(e.target.value, setCurrentCGPA),
                                        autoFocus: true,
                                        style: {
                                            fontSize: '1.7rem',
                                            marginBottom: '0.5rem'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 456,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 454,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "input-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "input-label-floating",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].LABELS.CREDITS_EARNED
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 467,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "input-super",
                                        placeholder: "0",
                                        value: currentTotalCredits,
                                        onChange: (e)=>handleCreditInput(e.target.value, setCurrentTotalCredits),
                                        style: {
                                            fontSize: '1.7rem',
                                            marginBottom: '0.5rem'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 468,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 466,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "input-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "input-label-floating",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].LABELS.TARGET_GOAL
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 478,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "input-super",
                                        placeholder: "4.00",
                                        value: targetCGPA,
                                        onChange: (e)=>handleFloatInput(e.target.value, setTargetCGPA),
                                        style: {
                                            fontSize: '1.7rem',
                                            marginBottom: 0,
                                            color: targetSet ? 'var(--accent-purple)' : 'white'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 479,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 477,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                        lineNumber: 453,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "guidance-tip",
                        style: {
                            display: 'flex',
                            gap: '1rem',
                            alignItems: 'flex-start',
                            marginTop: 'auto',
                            paddingTop: '1rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '1.2rem',
                                    color: baselineEstablished ? '#22c55e' : '#f59e0b',
                                    textShadow: baselineEstablished ? '0 0 15px rgba(34, 197, 94, 0.5)' : '0 0 15px rgba(245, 158, 11, 0.5)',
                                    marginTop: '-0.2rem'
                                },
                                children: baselineEstablished ? '✓' : '⚠️'
                            }, void 0, false, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 498,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: 'var(--font-tech)',
                                            fontSize: '0.7rem',
                                            color: baselineEstablished ? '#22c55e' : '#f59e0b',
                                            letterSpacing: '0.1em',
                                            display: 'block',
                                            marginBottom: '0.25rem'
                                        },
                                        children: baselineEstablished ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].LABELS.BASELINE_ESTABLISHED : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].LABELS.SYSTEM_GUIDANCE
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 508,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '0.75rem',
                                            color: '#cbd5e1',
                                            lineHeight: '1.5',
                                            opacity: 0.9
                                        },
                                        children: baselineEstablished ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].MESSAGES.GUIDANCE_LOCKED(baselineCGPA.toFixed(2), baselineCredits) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].MESSAGES.GUIDANCE_DEFAULT
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 511,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 507,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                        lineNumber: 490,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sidebar-footer",
                        style: {
                            marginTop: '1rem',
                            paddingTop: '1rem',
                            borderTop: '1px solid var(--border-glass)',
                            display: 'flex',
                            gap: '1.5rem',
                            justifyContent: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "footer-link",
                                onClick: ()=>setShowAboutModal(true),
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].FOOTER.CONTACT
                            }, void 0, false, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 523,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "footer-link",
                                onClick: ()=>setShowLegalModal(true),
                                children: "Legal & Privacy"
                            }, void 0, false, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 524,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                        lineNumber: 522,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                lineNumber: 378,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "main-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: '1.5rem',
                            right: '1.5rem',
                            zIndex: 10
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.push('/'),
                            style: {
                                background: 'transparent',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: '#94a3b8',
                                padding: '0.4rem 1rem',
                                borderRadius: '100px',
                                cursor: 'pointer',
                                fontSize: '0.75rem',
                                backdropFilter: 'blur(4px)'
                            },
                            children: "✕ Close"
                        }, void 0, false, {
                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                            lineNumber: 531,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                        lineNumber: 530,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "spacer-center"
                    }, void 0, false, {
                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                        lineNumber: 534,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '0 3rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginTop: '3.5rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "step-label",
                                style: {
                                    marginBottom: 0
                                },
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].STEPS.TWO
                            }, void 0, false, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 537,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '0.5rem'
                                },
                                children: courses.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "action-btn-mini",
                                    onClick: ()=>setShowClearConfirm(true),
                                    style: {
                                        color: '#ef4444',
                                        borderColor: 'rgba(239, 68, 68, 0.3)'
                                    },
                                    children: "✖ Clear All"
                                }, void 0, false, {
                                    fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                    lineNumber: 539,
                                    columnNumber: 48
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 538,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                        lineNumber: 536,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "course-list",
                        children: [
                            courses.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center',
                                    marginTop: '4rem',
                                    opacity: 1,
                                    padding: '3rem 2rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'var(--font-display)',
                                            fontSize: '2rem',
                                            marginBottom: '0.5rem',
                                            color: 'white',
                                            fontWeight: 800,
                                            background: 'linear-gradient(180deg, #fff, #94a3b8)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent'
                                        },
                                        children: isMaxState ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].EMPTY_STATE.MAX_TITLE : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].MESSAGES.EMPTY_STATE_TITLE
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 546,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '1rem',
                                            color: '#94a3b8',
                                            marginBottom: '2.5rem',
                                            maxWidth: '400px',
                                            margin: '0 auto 2.5rem auto',
                                            lineHeight: '1.6'
                                        },
                                        children: isMaxState ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].EMPTY_STATE.MAX_DESC : targetSet ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].MESSAGES.EMPTY_STATE_TARGET(targetVal.toFixed(2)) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].MESSAGES.EMPTY_STATE_DEFAULT
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 549,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleAddCourse,
                                        className: "btn-primary",
                                        style: {
                                            maxWidth: '200px',
                                            margin: '0 auto'
                                        },
                                        children: isMaxState ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].EMPTY_STATE.CTA_EXPLORE : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].MESSAGES.ADD_SCENARIO
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 557,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 545,
                                columnNumber: 25
                            }, this),
                            courses.map((course, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "holo-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: 'var(--font-tech)',
                                                color: '#475569',
                                                fontSize: '0.8rem'
                                            },
                                            children: [
                                                "0",
                                                idx + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                            lineNumber: 565,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "input-ghost",
                                            placeholder: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].PLACEHOLDERS.COURSE_NAME,
                                            value: course.code,
                                            maxLength: 20,
                                            onChange: (e)=>handleUpdate(course.id, 'code', e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                            lineNumber: 567,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '0.65rem',
                                                        color: '#64748b'
                                                    },
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].LABELS.CR
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                                    lineNumber: 576,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "input-ghost",
                                                    type: "text",
                                                    value: course.credits,
                                                    onChange: (e)=>handleCourseCreditInput(course.id, e.target.value),
                                                    style: {
                                                        width: '30px',
                                                        textAlign: 'center',
                                                        fontSize: '0.9rem'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                                    lineNumber: 577,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                            lineNumber: 575,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "grade-pill",
                                            value: course.grade,
                                            onChange: (e)=>handleUpdate(course.id, 'grade', e.target.value),
                                            style: {
                                                color: getGradeColor(course.grade),
                                                fontSize: '0.9rem',
                                                padding: '0.25rem'
                                            },
                                            children: gradeOptions.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: g,
                                                    children: g
                                                }, g, false, {
                                                    fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                                    lineNumber: 592,
                                                    columnNumber: 56
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                            lineNumber: 586,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleRemove(course.id),
                                            style: {
                                                background: 'transparent',
                                                border: 'none',
                                                color: '#475569',
                                                cursor: 'pointer',
                                                fontSize: '1rem'
                                            },
                                            children: "×"
                                        }, void 0, false, {
                                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                            lineNumber: 595,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, course.id, true, {
                                    fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                    lineNumber: 564,
                                    columnNumber: 25
                                }, this)),
                            courses.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleAddCourse,
                                className: "btn-primary",
                                style: {
                                    marginTop: '1rem'
                                },
                                children: [
                                    "+ ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].MESSAGES.ADD_COURSE
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 600,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                        lineNumber: 543,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                lineNumber: 529,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "rail",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "spacer-rail"
                    }, void 0, false, {
                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                        lineNumber: 607,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "step-label",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].STEPS.THREE
                    }, void 0, false, {
                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                        lineNumber: 608,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `hud-ring ${ringPulseClass}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `gpa-hero ${diff < 0 ? 'trending-down' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedValue$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedValue"], {
                                    value: result.cgpa
                                }, void 0, false, {
                                    fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                    lineNumber: 610,
                                    columnNumber: 84
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 610,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: 'var(--font-tech)',
                                    fontSize: '0.65rem',
                                    color: trendColor,
                                    letterSpacing: '0.2em'
                                },
                                children: trendText.toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 611,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                        lineNumber: 609,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "impact-meter",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `impact-arrow ${arrowType}`,
                                children: arrowSymbol
                            }, void 0, false, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 615,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "impact-value",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "impact-delta",
                                        style: {
                                            color: trendColor
                                        },
                                        children: Math.abs(diff).toFixed(4)
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 617,
                                        columnNumber: 25
                                    }, this),
                                    hasCourses && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "impact-label",
                                        style: {
                                            marginTop: '0.25rem',
                                            color: trendColor,
                                            opacity: 0.8
                                        },
                                        children: impactLabel
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 618,
                                        columnNumber: 40
                                    }, this),
                                    !hasCourses && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "impact-label",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].LABELS.IMPACT
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 619,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 616,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                        lineNumber: 614,
                        columnNumber: 17
                    }, this),
                    hasCourses && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '2rem',
                            padding: '1rem',
                            background: 'rgba(255,255,255,0.03)',
                            borderRadius: '12px',
                            borderLeft: `2px solid ${trendColor}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.65rem',
                                    color: '#64748b',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    marginBottom: '0.5rem'
                                },
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].LABELS.ANALYSIS
                            }, void 0, false, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 625,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0,
                                    fontSize: '0.8rem',
                                    lineHeight: '1.5',
                                    color: '#e2e8f0',
                                    marginBottom: '0.5rem'
                                },
                                children: [
                                    analysisIntro,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            opacity: 0.6
                                        },
                                        children: contextNote
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 627,
                                        columnNumber: 45
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 626,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0,
                                    fontSize: '0.8rem',
                                    lineHeight: '1.5',
                                    color: 'var(--accent-cyan)',
                                    fontStyle: 'italic'
                                },
                                children: [
                                    "Tip: ",
                                    analysisNextStep
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 629,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                        lineNumber: 624,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hud-stat",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '0.7rem',
                                            color: '#94a3b8',
                                            textTransform: 'uppercase'
                                        },
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].LABELS.TOTAL_CREDITS
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 637,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "stat-val",
                                        style: {
                                            fontSize: '1rem'
                                        },
                                        children: result.totalValidCredits
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 638,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 636,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hud-stat",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '0.7rem',
                                            color: '#94a3b8',
                                            textTransform: 'uppercase'
                                        },
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].LABELS.QUALITY_POINTS
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 641,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "stat-val",
                                        style: {
                                            color: 'var(--accent-cyan)',
                                            fontSize: '1rem'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedValue$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedValue"], {
                                            value: result.totalGradePoints,
                                            decimals: 1
                                        }, void 0, false, {
                                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                            lineNumber: 642,
                                            columnNumber: 110
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 642,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 640,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                        lineNumber: 635,
                        columnNumber: 17
                    }, this),
                    hasCourses && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "transparency-trigger",
                        onClick: ()=>setShowTransparency(!showTransparency),
                        style: {
                            marginBottom: showTransparency ? '0.5rem' : '3rem'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "transparency-text",
                            children: showTransparency ? "Hide details" : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].TRANSPARENCY.TRIGGER
                        }, void 0, false, {
                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                            lineNumber: 648,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                        lineNumber: 647,
                        columnNumber: 21
                    }, this),
                    showTransparency && hasCourses && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: '0.5rem',
                            marginBottom: '3rem',
                            padding: '1rem',
                            background: 'rgba(0,0,0,0.3)',
                            borderRadius: '12px',
                            fontSize: '0.7rem',
                            color: '#94a3b8',
                            border: '1px solid rgba(255,255,255,0.05)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    color: 'white',
                                    fontFamily: 'var(--font-tech)',
                                    marginBottom: '0.5rem'
                                },
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].TRANSPARENCY.TITLE
                            }, void 0, false, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 654,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '0.5rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: 'var(--accent-cyan)'
                                        },
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].TRANSPARENCY.SECTION_BASELINE
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 656,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].LABELS.CURRENT_CGPA,
                                            ": ",
                                            baselineCGPA.toFixed(4)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 657,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].TRANSPARENCY.LABEL_CREDITS,
                                            ": ",
                                            baselineCredits
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 658,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            "→ ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].TRANSPARENCY.LABEL_POINTS,
                                            ": ",
                                            baselinePoints.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 659,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 655,
                                columnNumber: 25
                            }, this),
                            scenarioCredits > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '0.5rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: 'var(--accent-cyan)'
                                        },
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].TRANSPARENCY.SECTION_SCENARIO
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 663,
                                        columnNumber: 33
                                    }, this),
                                    courses.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                paddingLeft: '0.5rem',
                                                borderLeft: '1px solid #334155'
                                            },
                                            children: [
                                                c.code || "Course",
                                                ": ",
                                                c.credits,
                                                "cr × ",
                                                currentPolicy?.gradingScale.find((g)=>g.grade === c.grade)?.point.toFixed(2),
                                                " (",
                                                c.grade,
                                                ")"
                                            ]
                                        }, c.id, true, {
                                            fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                            lineNumber: 665,
                                            columnNumber: 37
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            "→ ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].TRANSPARENCY.LABEL_POINTS,
                                            ": ",
                                            scenarioPoints.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 669,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 662,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '0.5rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: 'var(--accent-cyan)'
                                        },
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].TRANSPARENCY.SECTION_AGGREGATION
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 673,
                                        columnNumber: 29
                                    }, this),
                                    baselinePoints.toFixed(2),
                                    " + ",
                                    scenarioPoints.toFixed(2),
                                    " = ",
                                    result.totalGradePoints.toFixed(2),
                                    " pts"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 672,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    borderTop: '1px dashed #334155',
                                    paddingTop: '0.5rem',
                                    marginTop: '0.5rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: 'white'
                                        },
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].TRANSPARENCY.SECTION_RESULT
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 677,
                                        columnNumber: 29
                                    }, this),
                                    result.totalGradePoints.toFixed(2),
                                    " ÷ ",
                                    result.totalValidCredits,
                                    " = ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'var(--accent-cyan)'
                                        },
                                        children: result.cgpa.toFixed(4)
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 678,
                                        columnNumber: 97
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 676,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: '1.5rem',
                                    paddingTop: '1rem',
                                    borderTop: '1px solid rgba(255,255,255,0.05)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: 'white',
                                            fontFamily: 'var(--font-tech)',
                                            marginBottom: '0.5rem'
                                        },
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].TRANSPARENCY.GRADING_SCALE_TITLE
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 681,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: 'var(--accent-cyan)',
                                            fontSize: '0.8rem',
                                            marginBottom: '0.75rem',
                                            fontWeight: 600
                                        },
                                        children: currentPolicy?.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 682,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 1fr',
                                            gap: '0.25rem'
                                        },
                                        children: currentPolicy?.gradingScale.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    g.grade,
                                                    " = ",
                                                    g.point.toFixed(4)
                                                ]
                                            }, g.grade, true, {
                                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                                lineNumber: 687,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 685,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: '0.5rem',
                                            fontStyle: 'italic',
                                            opacity: 0.6
                                        },
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].TRANSPARENCY.NOTE
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 690,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 680,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                        lineNumber: 653,
                        columnNumber: 21
                    }, this),
                    targetSet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "impact-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "impact-card-label",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].LABELS.GOAL,
                                            ": ",
                                            targetVal.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 698,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: distToTarget <= 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].LABELS.ACHIEVED : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].LABELS.IN_PROGRESS
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 699,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 697,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: '4px',
                                    width: '100%',
                                    background: 'rgba(255,255,255,0.1)',
                                    borderRadius: '2px',
                                    marginTop: '0.5rem',
                                    overflow: 'hidden'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: '100%',
                                        width: `${Math.min(100, result.cgpa / targetVal * 100)}%`,
                                        background: distToTarget <= 0 ? '#22d3ee' : '#c084fc',
                                        transition: 'all 0.5s'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                    lineNumber: 702,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 701,
                                columnNumber: 25
                            }, this),
                            distToTarget > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.7rem',
                                    color: '#94a3b8',
                                    marginTop: '0.5rem',
                                    textAlign: 'right'
                                },
                                children: [
                                    "-",
                                    distToTarget.toFixed(4),
                                    " to go"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 704,
                                columnNumber: 46
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                        lineNumber: 696,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mobile-footer",
                        style: {
                            marginTop: '3rem',
                            paddingTop: '2rem',
                            borderTop: '1px solid var(--border-glass)',
                            fontSize: '0.85rem',
                            color: '#94a3b8',
                            textAlign: 'center',
                            lineHeight: '1.6',
                            width: '100%'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '0.75rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontWeight: 600,
                                            textTransform: 'uppercase',
                                            fontSize: '0.75rem',
                                            letterSpacing: '0.05em',
                                            marginRight: '0.5rem',
                                            opacity: 0.8
                                        },
                                        children: "Disclaimer:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 711,
                                        columnNumber: 25
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].FOOTER.DISCLAIMER
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 710,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '1.5rem',
                                    justifyContent: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "footer-link",
                                        onClick: ()=>setShowAboutModal(true),
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT"].FOOTER.CONTACT
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 715,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "footer-link",
                                        onClick: ()=>setShowLegalModal(true),
                                        children: "Legal & Privacy"
                                    }, void 0, false, {
                                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                        lineNumber: 716,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                                lineNumber: 714,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                        lineNumber: 709,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
                lineNumber: 606,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/[uni]/WorkspaceClient.tsx",
        lineNumber: 255,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__820c539a._.js.map