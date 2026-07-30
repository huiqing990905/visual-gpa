'use client';

import type { AcademicPolicy, HonorsBand } from '../types';
import { distanceToNextBand, getClassification } from '../logic/classification';

interface ClassificationBadgeProps {
    cgpa: number;
    policy: AcademicPolicy | undefined;
    compact?: boolean;
}

export function ClassificationBadge({ cgpa, policy, compact }: ClassificationBadgeProps) {
    if (!policy?.honors?.length || Number.isNaN(cgpa) || cgpa <= 0) return null;

    const current: HonorsBand | null = getClassification(cgpa, policy);
    const next = distanceToNextBand(cgpa, policy);

    if (compact) {
        return current ? (
            <span className="classification-chip" title={current.description}>
                {current.title}
            </span>
        ) : null;
    }

    return (
        <div className="classification-panel">
            <div className="system-panel-kicker">Classification</div>
            {current ? (
                <>
                    <div className="classification-title">{current.title}</div>
                    {current.description && (
                        <div className="classification-desc">{current.description}</div>
                    )}
                </>
            ) : (
                <div className="classification-desc">No matching band for current CGPA.</div>
            )}
            {next && (
                <div className="classification-next">
                    Next: {next.next.title} · need +{next.gap.toFixed(4)}
                </div>
            )}
        </div>
    );
}
