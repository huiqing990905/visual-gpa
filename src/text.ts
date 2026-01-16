export const TEXT = {
    BRAND: {
        NAME: "VisualGPA",
        TAGLINE: "ACADEMIC INTELLIGENCE",
        BASE_URL: process.env.VITE_BASE_URL || "https://visualgpa.hqinglab.tech",
        SELECT_ARCH: "Select Architecture"
    } as { NAME: string; TAGLINE: string; BASE_URL: string; SELECT_ARCH: string },
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
        GUIDANCE_LOCKED: (cgpa: string, credits: number) => `Locked on: ${cgpa} CGPA across ${credits} credits.`,
        EMPTY_STATE_TITLE: "What if you perform at your best?",
        EMPTY_STATE_TARGET: (target: string) => `Simulate a semester to see if you can bridge the gap to ${target}.`,
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
        EMAIL: "contact@visualgpa.app",
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
