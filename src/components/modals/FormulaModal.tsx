import React from 'react';

interface FormulaModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const FormulaModal: React.FC<FormulaModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="gl-modal-overlay" style={{ zIndex: 1000 }} onClick={onClose}>
            <div className="gl-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: '500px', width: '90%' }}>
                <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'white', fontWeight: 600 }}>CGPA Calculation Formula</h3>
                    <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: '1.2rem' }}>×</button>
                </div>

                <div style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Your Cumulative Grade Point Average (CGPA) is an average of all your semester GPA scores,
                        weighted by the number of credits for each course.
                    </p>

                    <div style={{
                        background: 'rgba(255,255,255,0.03)',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        fontFamily: 'var(--font-tech)',
                        textAlign: 'center',
                        marginBottom: '1.5rem',
                        border: '1px solid rgba(255,255,255,0.05)'
                    }}>
                        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                            ∑ (Grade Point × Credit Hours)
                        </div>
                        <div>
                            ∑ (Total Credit Hours)
                        </div>
                    </div>

                    <h4 style={{ color: '#cbd5e1', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>How it works:</h4>
                    <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Each grade (A, B+, etc.) is assigned a point value (e.g., A = 4.0).</li>
                        <li style={{ marginBottom: '0.5rem' }}>Multiply the point value by the course credits.</li>
                        <li style={{ marginBottom: '0.5rem' }}>Divide the total points by the total credits attempted.</li>
                    </ul>
                </div>

                <button
                    onClick={onClose}
                    className="btn-primary"
                    style={{ width: '100%', marginTop: '1rem' }}
                >
                    Understood
                </button>
            </div>
        </div>
    );
};
