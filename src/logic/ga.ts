/**
 * Google Analytics 4 (GA4) Tracking Utility
 * Measurement ID: G-RQZ1BLLXXG
 */

declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
}

/**
 * Tracks a custom event in GA4.
 */
export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, {
            ...params,
            timestamp: new Date().toISOString()
        });
        console.debug(`[GA4 Track] ${eventName}:`, params);
    }
};
