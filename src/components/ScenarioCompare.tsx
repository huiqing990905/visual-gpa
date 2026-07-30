'use client';

import type { AcademicPolicy, ScenarioPlan } from '../types';
import { calculateProjectedCGPA } from '../logic/calculator';
import { getClassification } from '../logic/classification';
import { sumCourseCredits } from '../logic/target';

interface ScenarioCompareProps {
    scenarios: ScenarioPlan[];
    activeScenarioId: string;
    baselineCgpa: number;
    baselineCredits: number;
    policy: AcademicPolicy;
    onSelect: (id: string) => void;
    onAdd: () => void;
    onRename: (id: string, name: string) => void;
    onDuplicate: (id: string) => void;
    onRemove: (id: string) => void;
}

export function ScenarioCompare({
    scenarios,
    activeScenarioId,
    baselineCgpa,
    baselineCredits,
    policy,
    onSelect,
    onAdd,
    onRename,
    onDuplicate,
    onRemove,
}: ScenarioCompareProps) {
    if (scenarios.length === 0) return null;

    const canCalc = baselineCredits > 0 && !Number.isNaN(baselineCgpa);

    return (
        <section className="system-panel scenario-compare-panel" aria-label="Scenario comparison">
            <div className="system-panel-header">
                <span className="system-panel-kicker">Scenario Compare</span>
                <button type="button" className="btn-ghost io-btn" onClick={onAdd}>
                    + New plan
                </button>
            </div>

            <div className="scenario-compare-grid">
                {scenarios.map(plan => {
                    const result = canCalc
                        ? calculateProjectedCGPA(baselineCgpa, baselineCredits, plan.courses, policy)
                        : null;
                    const credits = sumCourseCredits(plan.courses);
                    const band = result ? getClassification(result.cgpa, policy) : null;
                    const isActive = plan.id === activeScenarioId;
                    const delta = result ? result.cgpa - baselineCgpa : 0;

                    return (
                        <article
                            key={plan.id}
                            className={`scenario-card ${isActive ? 'is-active' : ''}`}
                            onClick={() => onSelect(plan.id)}
                        >
                            <input
                                className="scenario-name-input"
                                value={plan.name}
                                onClick={e => e.stopPropagation()}
                                onChange={e => onRename(plan.id, e.target.value)}
                                aria-label="Scenario name"
                            />
                            <div className="scenario-cgpa">
                                {result ? result.cgpa.toFixed(4) : '—'}
                            </div>
                            <div className="scenario-meta">
                                {plan.courses.length} courses · {credits} cr
                                {result && (
                                    <span className={delta >= 0 ? 'scenario-delta-up' : 'scenario-delta-down'}>
                                        {' '}{delta >= 0 ? '+' : ''}{delta.toFixed(4)}
                                    </span>
                                )}
                            </div>
                            {band && <div className="classification-chip">{band.title}</div>}
                            <div className="scenario-card-actions" onClick={e => e.stopPropagation()}>
                                <button type="button" className="io-btn" onClick={() => onDuplicate(plan.id)}>
                                    Duplicate
                                </button>
                                {scenarios.length > 1 && (
                                    <button type="button" className="io-btn danger" onClick={() => onRemove(plan.id)}>
                                        Remove
                                    </button>
                                )}
                            </div>
                        </article>
                    );
                })}
            </div>
            <p className="system-panel-footnote">
                Same baseline &amp; policy for every plan. Click a card to edit its courses.
            </p>
        </section>
    );
}
