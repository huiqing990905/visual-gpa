
import React from 'react';
import { University } from '../../types';

interface GradingScaleModalProps {
    isOpen: boolean;
    onClose: () => void;
    university: University;
}

export const GradingScaleModal: React.FC<GradingScaleModalProps> = ({ isOpen, onClose, university }) => {
    if (!isOpen) return null;

    // Use the first policy's grading scale as the primary reverence
    // In a more complex app, we might allow selecting policies, but usually one is dominant.
    const policy = university.policies[0];
    const gradingScale = policy?.gradingScale || [];

    return (
        <div className="gl-modal-overlay" onClick={onClose}>
            <div className="gl-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: '400px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', margin: 0 }}>
                        {university.shortName || "University"} Grading Scale
                    </h2>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '1.2rem' }}>
                        ✕
                    </button>
                </div>

                <div style={{
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '12px',
                    padding: '1rem',
                    border: '1px solid rgba(255,255,255,0.05)',
                    maxHeight: '60vh',
                    overflowY: 'auto'
                }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', textAlign: 'left' }}>
                                <th style={{ padding: '0.75rem', color: '#94a3b8', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Grade</th>
                                <th style={{ padding: '0.75rem', color: '#94a3b8', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'right' }}>Point</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gradingScale.map((item, index) => (
                                <tr key={index} style={{ borderBottom: index !== gradingScale.length - 1 ? '1px solid rgba(255,255,255,0.03)' : 'none' }}>
                                    <td style={{ padding: '0.75rem', fontWeight: 600, color: 'white' }}>{item.grade}</td>
                                    <td style={{ padding: '0.75rem', fontFamily: 'var(--font-tech)', textAlign: 'right', color: 'var(--accent-cyan)' }}>
                                        {item.point.toFixed(2)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: '#64748b', textAlign: 'center', lineHeight: '1.4' }}>
                    Based on {policy?.name || "Standard Grading Policy"}. <br />
                    Actual conversions may vary by specialized programs.
                </div>
            </div>
        </div>
    );
};
