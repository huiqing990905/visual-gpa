'use client';

import { useState } from 'react';
import type { AcademicPolicy, ScenarioPlan, University } from '../types';
import { buildShareSummary, buildShareUrl, encodeShareToken } from '../logic/share';

interface ShareSummaryBarProps {
    university: University;
    policy: AcademicPolicy;
    baselineCgpa: number;
    baselineCredits: number;
    targetCgpa?: number;
    scenarios: ScenarioPlan[];
    enabled: boolean;
}

export function ShareSummaryBar({
    university,
    policy,
    baselineCgpa,
    baselineCredits,
    targetCgpa,
    scenarios,
    enabled,
}: ShareSummaryBarProps) {
    const [msg, setMsg] = useState<string | null>(null);

    if (!enabled) return null;

    const handleCopy = async () => {
        const summary = buildShareSummary({
            university,
            policy,
            baselineCgpa,
            baselineCredits,
            targetCgpa,
            scenarios,
        });
        const token = encodeShareToken(summary);
        const url = buildShareUrl(window.location.origin, university.id, token);

        try {
            await navigator.clipboard.writeText(url);
            setMsg('Read-only summary link copied (no grades included).');
        } catch {
            setMsg(url);
        }
    };

    return (
        <div className="io-bar share-bar">
            <div className="io-bar-actions">
                <button type="button" className="btn-ghost io-btn" onClick={() => void handleCopy()}>
                    Copy share link
                </button>
            </div>
            <div className="system-panel-footnote">
                Shares projected CGPA + policy snapshot only — not your course grades.
            </div>
            {msg && <div className="io-bar-msg">{msg}</div>}
        </div>
    );
}
