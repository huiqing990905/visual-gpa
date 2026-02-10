import React from 'react';
import { useRouter } from 'next/navigation';
import { ResourceItem, getNextAction, ResourceContext } from '../logic/resources';
import { trackEvent } from '../logic/ga';

interface NextActionsProps {
    universityName: string;
    context: { isSampleMode: boolean; courseCount: number; cgpa?: number };
    loading?: boolean;
}

export const NextActions: React.FC<NextActionsProps> = ({ context, loading = false }) => {
    const router = useRouter();
    const [showModal, setShowModal] = React.useState(false);

    if (loading) {
        return (
            <div className="ad-slot-card" style={{ height: '100px', marginTop: '2rem', opacity: 0.5 }}>
                <div style={{ width: '40%', height: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '1rem' }}></div>
                <div style={{ width: '80%', height: '16px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px' }}></div>
            </div>
        );
    }

    const featuredAction = getNextAction(context);
    const isSponsored = featuredAction.source === 'sponsored';
    const isInternal = featuredAction.source === 'internal';

    const handleAction = (isSecondary: boolean = false) => {
        // Track GA4 event
        trackEvent(isSecondary ? 'monetization_secondary_click' : 'monetization_primary_click', {
            resource_id: featuredAction.id,
            resource_title: featuredAction.title,
            source: featuredAction.source,
            is_sample: context.isSampleMode
        });

        // For non-monetized state or clicking "See example" on internal, open modal
        if (!featuredAction.href || isInternal) {
            setShowModal(true);
            return;
        }

        // If monetized and has href, redirects/opens
        if (featuredAction.href.startsWith('http')) {
            window.open(featuredAction.href, '_blank', 'noopener,noreferrer');
        } else {
            router.push(featuredAction.href);
        }
    };

    return (
        <div style={{ marginTop: '4rem' }}>
            <h3 style={{
                fontFamily: 'var(--font-tech)',
                fontSize: '0.6rem',
                color: '#475569',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginBottom: '1rem',
                textAlign: 'left'
            }}>
                What you can do next
            </h3>

            <div
                className="ad-slot-card"
                style={{
                    padding: '1.25rem',
                    background: 'rgba(255, 255, 255, 0.01)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '12px',
                    position: 'relative',
                    transition: 'all 0.2s ease',
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{
                        fontSize: '0.55rem',
                        color: isSponsored ? 'var(--accent-cyan)' : '#64748b',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        fontWeight: 700
                    }}>
                        {isSponsored ? 'Sponsored' : 'Optional'}
                    </span>
                    <div style={{ width: '12px', height: '1px', background: 'rgba(255,255,255,0.1)' }} />
                </div>

                <div style={{ textAlign: 'left' }}>
                    <h4 style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 600, marginBottom: '0.4rem' }}>
                        {featuredAction.title}
                    </h4>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: '1.5', margin: '0 0 1.25rem 0' }}>
                        {featuredAction.description}
                    </p>

                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <button
                            onClick={() => handleAction(false)}
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                color: 'white',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '0.5rem 1rem',
                                borderRadius: '6px',
                                fontSize: '0.75rem',
                                fontWeight: 500,
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                        >
                            {featuredAction.primaryCTA}
                        </button>

                        {featuredAction.secondaryCTA && (
                            <button
                                onClick={() => handleAction(true)}
                                style={{
                                    background: 'transparent',
                                    color: 'var(--accent-cyan)',
                                    border: 'none',
                                    padding: '0.5rem 0',
                                    fontSize: '0.75rem',
                                    fontWeight: 500,
                                    cursor: 'pointer'
                                }}
                            >
                                {featuredAction.secondaryCTA} <span style={{ opacity: 0.5 }}>→</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Redesigned Honest Modal */}
            {showModal && featuredAction.modalContent && (
                <div
                    className="gl-modal-overlay fade-in"
                    onClick={() => setShowModal(false)}
                    style={{ position: 'fixed', zIndex: 2000 }}
                >
                    <div className="gl-modal" onClick={e => e.stopPropagation()} style={{ padding: '2rem', textAlign: 'center', maxWidth: '400px' }}>
                        <div style={{ fontSize: '1.5rem', marginBottom: '1rem', opacity: 0.8 }}>📋</div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: '#fff' }}>{featuredAction.title}</h3>
                        <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            {featuredAction.modalContent.paragraph}
                        </p>

                        <div style={{
                            background: 'rgba(255,255,255,0.02)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            padding: '1rem',
                            borderRadius: '8px',
                            marginBottom: '1.5rem',
                            fontSize: '0.75rem',
                            color: '#64748b',
                            textAlign: 'left',
                            fontStyle: 'italic'
                        }}>
                            {featuredAction.modalContent.disclaimer}
                        </div>

                        <button className="btn-primary" onClick={() => setShowModal(false)} style={{ width: '100%', padding: '0.75rem' }}>
                            {featuredAction.modalContent.softAction}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
