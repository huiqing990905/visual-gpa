import React from 'react';

export const DemoPlaceholder = () => {
    return (
        <div className="demo-wrapper">
            <div className="demo-container">
                {/* Abstract Background Chart */}
                <div className="demo-chart-bg">
                    <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="chart-svg">
                        <path
                            d="M0 35 C 20 35, 25 10, 40 20 S 60 30, 80 15 S 100 5, 100 5 V 40 H 0 Z"
                            fill="url(#chartGradient)"
                            opacity="0.2"
                        />
                        <path
                            d="M0 35 C 20 35, 25 10, 40 20 S 60 30, 80 15 S 100 5, 100 5"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="0.5"
                            className="chart-line"
                        />
                        <defs>
                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* UI Hints - Axis/Grid */}
                    <div className="demo-grid-lines">
                        <div className="grid-line" style={{ top: '20%' }}></div>
                        <div className="grid-line" style={{ top: '50%' }}></div>
                        <div className="grid-line" style={{ top: '80%' }}></div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="demo-content">
                    <div className="demo-card-float card-left"></div>
                    <div className="demo-card-center">
                        <div className="gpa-label">CURRENT CGPA</div>
                        <div className="gpa-value">3.45</div>
                        <div className="demo-trend-pill">
                            <span className="trend-arrow">↗</span> 8.2%
                        </div>
                    </div>
                    <div className="demo-card-float card-right"></div>
                </div>

                {/* Text Overlay */}
                <div className="demo-overlay">
                    <h2 className="demo-title">Visualize your CGPA journey</h2>
                    <p className="demo-subtitle">Add courses. Calculate. Simulate future semesters.</p>
                    <div className="demo-note">
                        <span className="pulse-dot"></span> Interactive demo coming soon
                    </div>
                </div>
            </div>
        </div>
    );
};
