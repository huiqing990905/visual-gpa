
import React from 'react';
import type { AcademicPolicy, University } from '../../types';

interface GradingScaleModalProps {
    isOpen: boolean;
    onClose: () => void;
    university: University;
    policy: AcademicPolicy;
}

export const GradingScaleModal: React.FC<GradingScaleModalProps> = ({ isOpen, onClose, university, policy }) => {
    if (!isOpen) return null;

    const gradingScale = policy?.gradingScale || [];

    return (
        <div className="gl-modal-overlay" onClick={onClose}>
            <div className="gl-modal" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>
                        {university.shortName || "University"} Grading Scale
                    </h2>
                    <button className="modal-close-x" onClick={onClose} aria-label="Close">
                        ×
                    </button>
                </div>

                <div>
                    <table className="grade-table">
                        <thead>
                            <tr>
                                <th>Grade</th>
                                <th>Point</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gradingScale.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.grade}</td>
                                    <td>{item.point.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="system-panel-footnote">
                    Based on {policy?.name || "Standard Grading Policy"}.{' '}
                    Actual conversions may vary by specialized programs.
                </p>
            </div>
        </div>
    );
};
