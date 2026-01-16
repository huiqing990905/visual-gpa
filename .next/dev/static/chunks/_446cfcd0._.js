(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/sample.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/text.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TEXT",
    ()=>TEXT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const TEXT = {
    BRAND: {
        NAME: "VisualGPA",
        TAGLINE: "ACADEMIC INTELLIGENCE",
        BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.VITE_BASE_URL || "https://visualgpa.hqinglab.tech",
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$sample$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/sample.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/text.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function LandingPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleUniversitySelect = (id)=>{
        router.push(`/${id}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "landing-hero",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/logo.png",
                alt: "VisualGPA Logo",
                style: {
                    width: '100px',
                    height: '100px',
                    marginBottom: '2rem',
                    filter: 'drop-shadow(0 0 30px rgba(34, 211, 238, 0.4))'
                }
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "landing-title",
                style: {
                    lineHeight: '1',
                    marginBottom: '1rem',
                    letterSpacing: '-0.03em',
                    textAlign: 'center'
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXT"].BRAND.NAME.toUpperCase()
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: 'var(--accent-cyan)',
                    letterSpacing: '0.2em',
                    marginBottom: '4rem',
                    textTransform: 'uppercase',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textAlign: 'center'
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXT"].BRAND.TAGLINE
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 28,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: '#94a3b8',
                    letterSpacing: '0.1em',
                    marginBottom: '1rem',
                    fontSize: '0.85rem'
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXT"].BRAND.SELECT_ARCH
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: '#64748b',
                    fontSize: '1rem',
                    marginBottom: '3rem',
                    maxWidth: '400px',
                    margin: '0 auto 3rem auto',
                    lineHeight: '1.5'
                },
                children: "Choose your university to plan and explore possible CGPA outcomes."
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "uni-orbit",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$sample$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sampleUniversities"].filter((u)=>u.id !== 'custom').map((uni)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "uni-planet",
                        onClick: ()=>handleUniversitySelect(uni.id),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "uni-img",
                                style: {
                                    background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), url(${uni.imageUrl}) center/cover`
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 35,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '1.5rem',
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    textAlign: 'left',
                                    zIndex: 2
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'var(--font-display)',
                                            fontWeight: 600,
                                            fontSize: '1.1rem',
                                            lineHeight: '1.3',
                                            color: '#f8fafc',
                                            marginBottom: '0.5rem',
                                            textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                                        },
                                        children: [
                                            uni.name,
                                            uni.shortName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    opacity: 0.7,
                                                    fontWeight: 400,
                                                    marginLeft: '0.4rem',
                                                    fontSize: '0.9em'
                                                },
                                                children: [
                                                    "(",
                                                    uni.shortName,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 41,
                                                columnNumber: 51
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 39,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'var(--font-tech)',
                                            fontSize: '0.75rem',
                                            color: '#94a3b8',
                                            letterSpacing: '0.05em'
                                        },
                                        children: uni.country.toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 43,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 38,
                                columnNumber: 25
                            }, this)
                        ]
                    }, uni.id, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 34,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '100%',
                    maxWidth: '1400px',
                    marginTop: '4rem',
                    padding: '0 1rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            marginBottom: '1.5rem',
                            opacity: 0.6
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: '1px',
                                    flex: 1,
                                    background: 'linear-gradient(to right, transparent, white)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 51,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: 'var(--font-tech)',
                                    fontSize: '0.9rem',
                                    letterSpacing: '0.2em'
                                },
                                children: "OR"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 52,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: '1px',
                                    flex: 1,
                                    background: 'linear-gradient(to left, transparent, white)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 53,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 50,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>handleUniversitySelect('custom'),
                        className: "custom-arch-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "custom-arch-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "custom-arch-icon"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            textAlign: 'left',
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "custom-arch-title",
                                                children: "Custom Architecture"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 63,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "custom-arch-desc",
                                                children: "Not in the list? Define your own grading scale and university parameters manually."
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 64,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 60,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "custom-arch-action",
                                children: "INITIALIZE →"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 69,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: '5rem',
                    paddingBottom: '2rem',
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.3)',
                    textAlign: 'center',
                    width: '100%',
                    pointerEvents: 'none'
                },
                children: "This is a planning and reference tool. Not an official academic system."
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 75,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
_s(LandingPage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LandingPage;
var _c;
__turbopack_context__.k.register(_c, "LandingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_446cfcd0._.js.map