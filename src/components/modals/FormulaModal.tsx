import React from 'react';

interface FormulaModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const FormulaModal: React.FC<FormulaModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="gl-modal-overlay" onClick={onClose}>
            <div className="gl-modal" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>CGPA calculation formula</h3>
                    <button className="modal-close-x" onClick={onClose} aria-label="Close">×</button>
                </div>

                <div>
                    <p>
                        Your Cumulative Grade Point Average (CGPA) is an average of all your semester GPA scores,
                        weighted by the number of credits for each course.
                    </p>

                    <div className="modal-formula-box">
                        <div>
                            ∑ (Grade Point × Credit Hours)
                        </div>
                        <div>
                            ∑ (Total Credit Hours)
                        </div>
                    </div>

                    <h4>How it works</h4>
                    <ul>
                        <li>Each grade is assigned a point value.</li>
                        <li>Multiply the point value by course credits.</li>
                        <li>Divide total points by total attempted credits.</li>
                    </ul>
                </div>

                <button onClick={onClose} className="btn-primary modal-close">
                    Understood
                </button>
            </div>
        </div>
    );
};
