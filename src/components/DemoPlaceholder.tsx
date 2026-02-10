import React from 'react';

export const DemoPlaceholder = () => {
    return (
        <div className="demo-wrapper">
            <div className="demo-container" style={{
                position: 'relative',
                width: '100%',
                maxWidth: '500px',
                aspectRatio: '16/9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'radial-gradient(circle at center, rgba(34, 211, 238, 0.05) 0%, transparent 70%)'
            }}>
                {/* 1. Background Layer (Current) */}
                <div style={{
                    position: 'absolute',
                    left: '10%',
                    top: '50%',
                    transform: 'translateY(-50%) scale(0.9)',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    width: '160px',
                    filter: 'blur(2px)',
                    opacity: 0.5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <div style={{ fontSize: '0.6rem', color: '#94a3b8', letterSpacing: '0.1em' }}>CURRENT</div>
                    <div style={{ fontSize: '2rem', fontWeight: 700, color: '#e2e8f0' }}>3.45</div>
                </div>

                {/* Arrow */}
                <div style={{
                    position: 'absolute',
                    left: '42%',
                    color: 'var(--accent-cyan)',
                    fontSize: '1.5rem',
                    opacity: 0.8,
                    zIndex: 2
                }}>
                    →
                </div>

                {/* 2. Foreground Layer (Potential) */}
                <div style={{
                    position: 'absolute',
                    right: '10%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(20, 20, 25, 0.8)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(34, 211, 238, 0.3)',
                    borderRadius: '20px',
                    padding: '2rem',
                    width: '200px',
                    boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5), 0 0 30px rgba(34, 211, 238, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.25rem',
                    zIndex: 10
                }}>
                    <div style={{ fontFamily: 'var(--font-tech)', fontSize: '0.7rem', color: '#cbd5e1', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>POTENTIAL</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800, color: 'white', lineHeight: 1, textShadow: '0 2px 10px rgba(34, 211, 238, 0.3)' }}>
                        3.7600
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        marginTop: '0.5rem',
                        background: 'rgba(34, 211, 238, 0.1)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '99px',
                        border: '1px solid rgba(34, 211, 238, 0.2)'
                    }}>
                        <span style={{ color: 'var(--accent-cyan)', fontSize: '0.8rem' }}>↗</span>
                        <span style={{ color: 'var(--accent-cyan)', fontSize: '0.8rem', fontWeight: 600 }}>+0.31</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
