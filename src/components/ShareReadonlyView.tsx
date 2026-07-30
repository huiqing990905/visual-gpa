'use client';

import type { ShareSummary } from '../types';

interface ShareReadonlyViewProps {
    summary: ShareSummary;
    onDismiss: () => void;
}

/** Grade-free read-only view opened from a #share= token. */
export function ShareReadonlyView({ summary, onDismiss }: ShareReadonlyViewProps) {
    return (
        <section className="system-panel share-readonly" aria-label="Shared scenario summary">
            <div className="system-panel-header">
                <span className="system-panel-kicker">Shared Summary (Read-only)</span>
                <button type="button" className="btn-ghost io-btn" onClick={onDismiss}>
                    Dismiss
                </button>
            </div>

            <div className="share-readonly-meta">
                <div><strong>{summary.universityName}</strong></div>
                <div className="share-readonly-sub">
                    {summary.policy.academicYearLabel || summary.policy.policyName}
                    {' · '}
                    Policy locked at {summary.policy.snapshottedAt.slice(0, 10)}
                </div>
                <div className="share-readonly-sub">
                    Baseline {summary.baseline.cgpa.toFixed(2)} / {summary.baseline.credits} cr
                    {summary.targetCgpa !== undefined && ` · Goal ${summary.targetCgpa.toFixed(2)}`}
                </div>
            </div>

            <div className="scenario-compare-grid">
                {summary.plans.map((plan, idx) => (
                    <article key={`${plan.name}-${idx}`} className="scenario-card">
                        <div className="scenario-name-static">{plan.name}</div>
                        <div className="scenario-cgpa">{plan.projectedCgpa.toFixed(4)}</div>
                        <div className="scenario-meta">
                            {plan.courseCount} courses · {plan.plannedCredits} cr
                        </div>
                        {plan.classification && (
                            <div className="classification-chip">{plan.classification}</div>
                        )}
                    </article>
                ))}
            </div>

            <p className="system-panel-footnote">
                Individual grades were never included in this link. Recalculation uses the embedded policy snapshot.
            </p>
        </section>
    );
}
