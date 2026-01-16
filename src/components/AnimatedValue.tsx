import { useState, useEffect } from 'react';

export const AnimatedValue = ({ value, decimals = 4 }: { value: number, decimals?: number }) => {
    const [display, setDisplay] = useState(value);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        let start = display;
        const end = value;
        if (start === end) return;

        setAnimating(true);
        const duration = 600; // ms
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3); // Cubic ease out

            const current = start + (end - start) * easeOut;
            setDisplay(current);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setAnimating(false);
            }
        };

        requestAnimationFrame(animate);
    }, [value]);

    return <span className={animating ? 'animate-update' : ''}>{display.toFixed(decimals)}</span>;
};
