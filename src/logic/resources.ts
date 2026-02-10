export type ResourceSource = "internal" | "partner" | "sponsored";

export interface ResourceItem {
    id: string;
    title: string;
    description: string;
    primaryCTA: string;
    secondaryCTA?: string;
    href?: string;
    onClick?: () => void;
    source: ResourceSource;
    modalContent?: {
        paragraph: string;
        disclaimer: string;
        softAction: string;
    };
}

// Feature Flag to toggle external/sponsored content globally
const ENABLE_EXTERNAL_RESOURCES = true;

// Resource Definitions
const RESOURCES: Record<string, ResourceItem> = {
    STUDENT_PLANNER: {
        id: 'sponsored_notion_planner',
        title: 'Student GPA Planner Template (Notion / PDF)',
        description: 'A simple planner used by students to track assignments, credits, and GPA goals across a semester.',
        primaryCTA: 'See example',
        secondaryCTA: 'Get access',
        source: 'sponsored',
        href: 'https://example.com/student-planner-preview' // Concrete external target
    },
    INTERNAL_MISSION: {
        id: 'system_mission',
        title: 'Optional Student Tools',
        description: 'Commonly used templates to help organize your academic journey.',
        primaryCTA: 'See example',
        source: 'internal',
        modalContent: {
            paragraph: 'We are curating a list of simple, effective tools used by high-performing students to track their progress.',
            disclaimer: 'Some future tools may be partner-supported to keep VisualGPA free.',
            softAction: 'Notify me when available'
        }
    }
};

/**
 * Context required to make safety and relevance decisions.
 */
export interface ResourceContext {
    isSampleMode: boolean;
    courseCount: number;
    cgpa?: number;
}

/**
 * Self-Regulating Monetization Guard.
 */
const MonetizationGuard = {
    trustScore: 100,
    threshold: 70,

    reportSignal(signal: 'negative_feedback' | 'session_bounce' | 'manual_disable') {
        switch (signal) {
            case 'manual_disable': this.trustScore = 0; break;
            case 'negative_feedback': this.trustScore -= 30; break;
            case 'session_bounce': this.trustScore -= 10; break;
        }
        this.trustScore = Math.max(0, Math.min(100, this.trustScore));
    },

    isAllowed(): boolean {
        return this.trustScore >= this.threshold && ENABLE_EXTERNAL_RESOURCES;
    }
};

/**
 * Resolves the single featured action for the monetization section.
 */
export function getNextAction(context: ResourceContext): ResourceItem {
    const canShowAds = !context.isSampleMode && MonetizationGuard.isAllowed();

    // 1. Priority: Active Sponsorship (Concrete Value)
    if (canShowAds) {
        return RESOURCES.STUDENT_PLANNER;
    }

    // 2. Fallback: Internal High-Trust (Honest Context)
    return RESOURCES.INTERNAL_MISSION;
}

// Export the reporting function for UI consumption
export const reportResourceSignal = MonetizationGuard.reportSignal.bind(MonetizationGuard);
