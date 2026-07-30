'use client';

import { useState } from 'react';
import type { AcademicPolicy, University } from '../types';
import { explainPolicy } from '../logic/policyExplain';
import { listPolicyVersions } from '../logic/policyResolve';

interface PolicyRulesPanelProps {
    university: University;
    policy: AcademicPolicy;
    onPolicyChange?: (policyId: string) => void;
}

/**
 * Plain-language summary of the active rules.
 * Technical fields stay behind "Show details" so the default view stays readable.
 */
export function PolicyRulesPanel({ university, policy, onPolicyChange }: PolicyRulesPanelProps) {
    const [showDetails, setShowDetails] = useState(false);
    const explanation = explainPolicy(university, policy);
    const versions = listPolicyVersions(university);
    const multiPolicy = versions.length > 1;
    const uniLabel = university.shortName || university.name;
    const versionLabel = policy.academicYearLabel || policy.name;

    return (
        <section className="system-panel policy-rules-panel" aria-label="How we calculate">
            <div className="system-panel-header">
                <span className="system-panel-kicker">How we calculate</span>
                {multiPolicy && onPolicyChange && (
                    <label className="policy-year-label">
                        <span>Policy year</span>
                        <select
                            className="policy-select"
                            value={policy.id}
                            onChange={e => onPolicyChange(e.target.value)}
                        >
                            {versions.map(v => (
                                <option key={v.policy.id} value={v.policy.id}>
                                    {v.label}{v.isCurrent ? ' (current)' : ''}
                                </option>
                            ))}
                        </select>
                    </label>
                )}
            </div>

            <p className="policy-plain-lead">
                Using <strong>{uniLabel}</strong>
                {versionLabel ? <> · <strong>{versionLabel}</strong></> : null}
            </p>

            <ul className="policy-plain-list">
                <li>
                    If you retake a course, <strong>{explanation.repeatPolicyLabel.toLowerCase()}</strong>.
                </li>
                <li>
                    CGPA is rounded to <strong>{explanation.roundingPrecision} decimals</strong>
                    {' '}(max <strong>{explanation.maxCGPA.toFixed(2)}</strong>).
                </li>
                <li>
                    {explanation.honorsConfigured
                        ? 'Honors / classification bands are applied to the projected CGPA.'
                        : 'No honors bands are configured for this policy.'}
                </li>
            </ul>

            <div className="policy-plain-actions">
                <button
                    type="button"
                    className="text-button"
                    onClick={() => setShowDetails(v => !v)}
                >
                    {showDetails ? 'Hide details' : 'Show details'}
                </button>
            </div>

            {showDetails && (
                <div className="policy-details">
                    <dl className="policy-rules-grid">
                        {explanation.rules.map(rule => (
                            <div key={rule.key} className="policy-rule-item">
                                <dt>{rule.label}</dt>
                                <dd>{rule.value}</dd>
                            </div>
                        ))}
                    </dl>
                    <div className="policy-scale-chips" aria-label="Grading scale">
                        {policy.gradingScale.map(g => (
                            <span key={g.grade}>
                                {g.grade} · {g.point.toFixed(2)}
                            </span>
                        ))}
                    </div>
                    <p className="system-panel-footnote">
                        Planning aid only — confirm against your faculty handbook if results matter for official decisions.
                    </p>
                </div>
            )}
        </section>
    );
}
