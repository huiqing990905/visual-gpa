import React, { useEffect, useState } from 'react';

interface SpeedometerProps {
    value: number;
    max: number;
    prevValue?: number;
    label: string;
}

export const Speedometer: React.FC<SpeedometerProps> = ({ value, max, prevValue }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        setDisplayValue(value);
    }, [value]);

    const percentage = Math.min(100, Math.max(0, (displayValue / max) * 100));
    const prevPercentage = prevValue ? Math.min(100, Math.max(0, (prevValue / max) * 100)) : 0;

    // Color logic
    const getColor = (val: number) => {
        if (val >= 3.7) return '#10b981'; // Mint
        if (val >= 3.0) return '#6366f1'; // Indigo
        if (val >= 2.0) return '#f59e0b'; // Amber
        return '#ef4444'; // Red
    };

    const currentColor = getColor(displayValue);

    return (
        <div style={{ width: '100%', padding: '1rem 0' }}>
            {/* Main Bar Container */}
            <div style={{ position: 'relative', height: '32px', background: 'var(--bg-app)', borderRadius: '6px', border: '1px solid var(--border-subtle)', overflow: 'hidden' }}>

                {/* Background Ticks */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'space-between', padding: '0 2px' }}>
                    {[0, 1, 2, 3, 4].map(tick => (
                        <div key={tick} style={{ width: '1px', height: '100%', background: 'rgba(255,255,255,0.05)' }}></div>
                    ))}
                </div>

                {/* Fill Bar */}
                <div style={{
                    height: '100%',
                    width: `${percentage}%`,
                    background: `linear-gradient(90deg, ${currentColor}aa, ${currentColor})`,
                    boxShadow: `0 0 20px ${currentColor}44`,
                    transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative'
                }}>
                    {/* Gloss effect */}
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '50%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)' }}></div>
                </div>

                {/* Ghost Bar (Previous Value) */}
                {prevValue !== undefined && (
                    <div style={{
                        position: 'absolute',
                        top: 0, left: 0,
                        height: '100%',
                        width: `${prevPercentage}%`,
                        borderRight: '2px solid rgba(255,255,255,0.4)',
                        pointerEvents: 'none',
                        zIndex: 2
                    }}></div>
                )}
            </div>

            {/* Labels */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.75rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                <span>0.0</span>
                <span>1.0</span>
                <span>2.0</span>
                <span>3.0</span>
                <span>4.0</span>
            </div>

            {/* Big Readout */}
            {/* Removed from here as it is redundant with the main stat card display */}
        </div>
    );
};
