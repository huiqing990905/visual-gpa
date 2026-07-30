'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { calculateProjectedCGPA } from '../../src/logic/calculator';
import { decodeShareToken, readShareTokenFromHash } from '../../src/logic/share';
import { TEXT } from '../../src/text';
import type { Course, ShareSummary } from '../../src/types';
import { useWorkspaceState } from '../../src/hooks/useWorkspaceState';
import { FormulaModal } from '../../src/components/modals/FormulaModal';
import { GradingScaleModal } from '../../src/components/modals/GradingScaleModal';
import { PolicyRulesPanel } from '../../src/components/PolicyRulesPanel';
import { ClassificationBadge } from '../../src/components/ClassificationBadge';
import { TargetGuidance } from '../../src/components/TargetGuidance';
import { ImportExportBar } from '../../src/components/ImportExportBar';
import { ScenarioCompare } from '../../src/components/ScenarioCompare';
import { ShareSummaryBar } from '../../src/components/ShareSummaryBar';
import { ShareReadonlyView } from '../../src/components/ShareReadonlyView';
import { PolicySnapshotBanner } from '../../src/components/PolicySnapshotBanner';

export default function Workspace() {
    const params = useParams();
    const uniId = params.uni as string;
    const router = useRouter();

    const ws = useWorkspaceState(uniId);
    const {
        isSample, currentUni, isCustomMode, currentPolicy, maxCGPA, gradeOptions, mounted,
        scenarios, activeScenarioId, setActiveScenarioId, activeScenario, courses, setCourses,
        currentCGPA, setCurrentCGPA, currentTotalCredits, setCurrentTotalCredits,
        targetCGPA, setTargetCGPA, activePolicyId, setActivePolicyId,
        customGradingScale, setCustomGradingScale,
        handleAddScenario, handleDuplicateScenario, handleRemoveScenario, handleRenameScenario,
        confirmClearAll, handleImportBundle, handleImportCourses, newId,
        policySnapshot, clearPolicySnapshot,
    } = ws;

    const [showClearConfirm, setShowClearConfirm] = useState(false);
    const [showAboutModal, setShowAboutModal] = useState(false);
    const [showLegalModal, setShowLegalModal] = useState(false);
    const [showConfigModal, setShowConfigModal] = useState(false);
    const [configEntryForced, setConfigEntryForced] = useState(false);
    const [showGradingModal, setShowGradingModal] = useState(false);
    const [showFormulaModal, setShowFormulaModal] = useState(false);
    const [sharedSummary, setSharedSummary] = useState<ShareSummary | null>(null);

    useEffect(() => {
        if (!currentUni) router.push('/');
    }, [currentUni, router]);

    useEffect(() => {
        if (currentUni?.id === 'custom') {
            setConfigEntryForced(true);
            setShowConfigModal(true);
        }
    }, [currentUni]);

    const leaveCustomConfig = () => {
        setShowConfigModal(false);
        setConfigEntryForced(false);
        if (configEntryForced) router.push('/');
    };

    const saveCustomConfig = () => {
        setShowConfigModal(false);
        setConfigEntryForced(false);
        setCourses([]);
    };

    // Read privacy-safe share token from hash
    useEffect(() => {
        const applyHash = () => {
            const token = readShareTokenFromHash(window.location.hash);
            if (!token) {
                setSharedSummary(null);
                return;
            }
            const decoded = decodeShareToken(token);
            setSharedSummary(decoded.ok ? decoded.summary : null);
        };
        applyHash();
        window.addEventListener('hashchange', applyHash);
        return () => window.removeEventListener('hashchange', applyHash);
    }, []);

    const dismissShare = () => {
        setSharedSummary(null);
        const { pathname, search } = window.location;
        history.replaceState(null, '', pathname + search);
    };

    const updateCustomGrade = (idx: number, field: 'grade' | 'point', value: string) => {
        const next = [...customGradingScale];
        next[idx] = { ...next[idx], [field]: field === 'point' ? parseFloat(value) : value };
        setCustomGradingScale(next);
    };

    const addCustomGrade = () => setCustomGradingScale([...customGradingScale, { grade: '?', point: 0 }]);
    const removeCustomGrade = (idx: number) => setCustomGradingScale(customGradingScale.filter((_, i) => i !== idx));

    const handlePreset = (type: '4.0' | '5.0') => {
        if (type === '4.0') {
            setCustomGradingScale([
                { grade: 'A', point: 4.0 }, { grade: 'B', point: 3.0 }, { grade: 'C', point: 2.0 }, { grade: 'F', point: 0.0 },
            ]);
        } else {
            setCustomGradingScale([
                { grade: 'A', point: 5.0 }, { grade: 'B', point: 4.0 }, { grade: 'C', point: 3.0 },
                { grade: 'D', point: 2.0 }, { grade: 'E', point: 1.0 }, { grade: 'F', point: 0.0 },
            ]);
        }
    };

    const handleFloatInput = (val: string, setter: (v: string) => void) => {
        if (val === '' || /^\d*\.?\d{0,4}$/.test(val)) {
            const num = parseFloat(val);
            if (val === '' || val === '.' || (!isNaN(num) && num <= maxCGPA)) setter(val);
        }
    };

    const handleCreditInput = (val: string, setter: (v: string) => void) => {
        if (val === '' || /^\d*\.?\d*$/.test(val)) setter(val);
    };

    const handleUpdate = (id: string, field: keyof Course, val: string | number) => {
        setCourses(prev => prev.map(c => c.id === id ? { ...c, [field]: val } : c));
    };

    const handleCourseCreditInput = (id: string, val: string) => {
        if (val === '' || /^\d*\.?\d*$/.test(val)) handleUpdate(id, 'credits', val);
    };

    const handleAddCourse = () => {
        setCourses(prev => [...prev, {
            id: newId(), code: '', name: '', credits: 3, grade: gradeOptions[0] || 'B', semester: '2024',
        }]);
    };

    const handleRemove = (id: string) => setCourses(prev => prev.filter(c => c.id !== id));

    const baselineCGPA = parseFloat(currentCGPA) || 0;
    const baselineCredits = parseFloat(currentTotalCredits) || 0;
    const canCalc = !!currentPolicy && !isNaN(parseFloat(currentCGPA)) && !isNaN(parseFloat(currentTotalCredits));
    const hasCourses = courses.length > 0;
    const baselineEstablished = canCalc && baselineCredits > 0;

    const result = canCalc && currentPolicy
        ? calculateProjectedCGPA(baselineCGPA, baselineCredits, courses, currentPolicy)
        : { cgpa: baselineCGPA, totalGradePoints: 0, totalValidCredits: 0, history: [], processedCourses: courses, totalCreditsAttempted: 0 };

    const diff = result.cgpa - baselineCGPA;
    const resultIsMax = result.cgpa >= maxCGPA;
    const isMaxState = baselineEstablished && baselineCGPA >= maxCGPA;
    const targetVal = parseFloat(targetCGPA);
    const targetSet = !isNaN(targetVal) && targetVal > 0;
    const targetReached = targetSet && (targetVal - result.cgpa) <= 0;

    let trendColor = 'var(--ink-muted)';
    let arrowSymbol = '→';
    if (hasCourses && canCalc) {
        if (resultIsMax) { trendColor = 'var(--accent)'; arrowSymbol = 'MAX'; }
        else if (targetReached) { trendColor = 'var(--accent)'; arrowSymbol = '↗'; }
        else if (diff > 0.0001) { trendColor = 'var(--accent)'; arrowSymbol = '↗'; }
        else if (diff < -0.0001) { trendColor = 'var(--error)'; arrowSymbol = '↘'; }
    }

    if (!mounted || !currentUni || !currentPolicy) return null;

    return (
        <div className="notebook-container">
            <header className="notebook-header">
                <button className="workspace-home" onClick={() => router.push('/')}>
                    <span>←</span> Home
                </button>
                <div className="workspace-identity">
                    <div className="workspace-identity-row">
                        <div className="workspace-university">{currentUni.shortName || currentUni.name}</div>
                        <button
                            onClick={() => setShowGradingModal(true)}
                            className="workspace-info-button"
                            title="View Grading Scale"
                            aria-label="View grading scale"
                        >
                            i
                        </button>
                    </div>
                    <div className="workspace-product">VisualGPA planner</div>
                </div>
            </header>

            {sharedSummary && (
                <ShareReadonlyView summary={sharedSummary} onDismiss={dismissShare} />
            )}

            <div className="context-bar">
                <div className="context-input-group">
                    <span className="context-label">Current CGPA</span>
                    <input
                        className="context-input"
                        placeholder="—"
                        value={Number(currentCGPA) === 0 ? '' : currentCGPA}
                        onChange={e => handleFloatInput(e.target.value, setCurrentCGPA)}
                    />
                </div>
                <div className="context-input-group">
                    <span className="context-label">Completed credits</span>
                    <input
                        className="context-input"
                        placeholder="—"
                        value={Number(currentTotalCredits) === 0 ? '' : currentTotalCredits}
                        onChange={e => handleCreditInput(e.target.value, setCurrentTotalCredits)}
                    />
                </div>
                <div className="context-input-group">
                    <span className="context-label">Target CGPA <small>optional</small></span>
                    <input
                        className="context-input"
                        placeholder="—"
                        value={Number(targetCGPA) === 0 ? '' : targetCGPA}
                        onChange={e => handleFloatInput(e.target.value, setTargetCGPA)}
                    />
                </div>
            </div>

            {policySnapshot && (
                <PolicySnapshotBanner
                    snapshot={policySnapshot}
                    onClear={clearPolicySnapshot}
                />
            )}

            <main className="workspace-main">
                {activeScenario && (
                    <div className="active-plan-label">
                        Editing: <strong>{activeScenario.name}</strong>
                        {activePolicyId && currentPolicy.academicYearLabel && (
                            <span> · policy {currentPolicy.academicYearLabel}</span>
                        )}
                    </div>
                )}

                {courses.length === 0 && (
                    <div className="workspace-empty">
                        <div className="workspace-empty-title">
                            {isMaxState ? "You've reached perfection." : "Let's plan your next semester."}
                        </div>
                        <p>
                            {isMaxState
                                ? "Try experimenting with 'What If' scenarios."
                                : 'Add courses to see how they impact your CGPA in real-time.'}
                        </p>
                        <button onClick={handleAddCourse} className="btn-primary">+ Add First Course</button>
                    </div>
                )}

                <div className="course-list">
                    {courses.map((course, idx) => (
                        <div key={course.id} className="holo-row">
                            <span className="course-index">
                                {String(idx + 1).padStart(2, '0')}
                            </span>
                            <input
                                className="input-ghost"
                                placeholder={TEXT.PLACEHOLDERS.COURSE_NAME}
                                value={course.code}
                                maxLength={20}
                                onChange={e => handleUpdate(course.id, 'code', e.target.value)}
                            />
                            <div className="course-credits">
                                <span>{TEXT.LABELS.CR}</span>
                                <input
                                    className="input-ghost"
                                    type="text"
                                    value={course.credits}
                                    onChange={e => handleCourseCreditInput(course.id, e.target.value)}
                                />
                            </div>
                            <select
                                className="grade-pill"
                                value={course.grade}
                                onChange={e => handleUpdate(course.id, 'grade', e.target.value)}
                            >
                                {gradeOptions.map(g => <option key={g} value={g}>{g}</option>)}
                            </select>
                            <button
                                onClick={() => handleRemove(course.id)}
                                className="course-remove"
                                aria-label={`Remove course ${idx + 1}`}
                            >
                                ×
                            </button>
                        </div>
                    ))}

                    {courses.length > 0 && (
                        <div className="add-course-row">
                            <button
                                onClick={handleAddCourse}
                                className="btn-secondary"
                            >
                                + Add Another Course
                            </button>
                        </div>
                    )}
                </div>

                {hasCourses && (
                    <div className="result-card-minimal">
                        <div className="result-kicker">
                            Potential outcome
                        </div>
                        <div className={`gpa-hero ${diff < 0 ? 'trending-neutral' : ''}`}>
                            {result.cgpa > 0 ? result.cgpa.toFixed(4) : '—'}
                        </div>
                        <div className="result-impact">
                            <span style={{ color: trendColor }}>{arrowSymbol}</span>
                            <span>
                                {Math.abs(diff).toFixed(4)} impact
                            </span>
                        </div>
                        <ClassificationBadge cgpa={result.cgpa} policy={currentPolicy} />
                    </div>
                )}
            </main>

            <section className="workspace-support" aria-label="Planning guidance and data tools">
                <div className="workspace-tools-heading">
                    <h2>Planning drawer</h2>
                    <p>Open only what you need.</p>
                </div>

                {baselineEstablished && (
                    <details className="workspace-tool">
                        <summary>
                            <span>Compare plans</span>
                            <small>{scenarios.length} scenario{scenarios.length === 1 ? '' : 's'}</small>
                        </summary>
                        <ScenarioCompare
                            scenarios={scenarios}
                            activeScenarioId={activeScenarioId}
                            baselineCgpa={baselineCGPA}
                            baselineCredits={baselineCredits}
                            policy={currentPolicy}
                            onSelect={setActiveScenarioId}
                            onAdd={handleAddScenario}
                            onRename={handleRenameScenario}
                            onDuplicate={handleDuplicateScenario}
                            onRemove={handleRemoveScenario}
                        />
                    </details>
                )}

                {baselineEstablished && targetSet && (
                    <details className="workspace-tool">
                        <summary>
                            <span>Target guidance</span>
                            <small>What it takes to reach {targetVal.toFixed(2)}</small>
                        </summary>
                        <TargetGuidance
                            baselineCgpa={baselineCGPA}
                            baselineCredits={baselineCredits}
                            targetCgpa={targetVal}
                            courses={courses}
                            policy={currentPolicy}
                        />
                    </details>
                )}

                <details className="workspace-tool">
                    <summary>
                        <span>Calculation rules</span>
                        <small>See how this result is calculated</small>
                    </summary>
                    <PolicyRulesPanel
                        university={currentUni}
                        policy={currentPolicy}
                        onPolicyChange={setActivePolicyId}
                    />
                </details>

                <details className="workspace-tool">
                    <summary>
                        <span>Backup, import &amp; share</span>
                        <small>Your data stays on this device</small>
                    </summary>
                    <div className="workspace-data-tools">
                        <ImportExportBar
                            universityId={currentUni.id}
                            universityLabel={currentUni.shortName || currentUni.name}
                            policyId={currentPolicy.id}
                            policy={currentPolicy}
                            baselineCgpa={baselineCGPA}
                            baselineCredits={baselineCredits}
                            targetCgpa={targetSet ? targetVal : undefined}
                            scenarios={scenarios}
                            activeScenarioId={activeScenarioId}
                            activeCourses={courses}
                            customGradingScale={isCustomMode ? customGradingScale : undefined}
                            onImportBundle={handleImportBundle}
                            onImportCourses={handleImportCourses}
                        />
                        <ShareSummaryBar
                            university={currentUni}
                            policy={currentPolicy}
                            baselineCgpa={baselineCGPA}
                            baselineCredits={baselineCredits}
                            targetCgpa={targetSet ? targetVal : undefined}
                            scenarios={scenarios}
                            enabled={baselineEstablished && scenarios.some(s => s.courses.length > 0)}
                        />
                    </div>
                </details>
            </section>

            <footer className="workspace-footer">
                <div className="workspace-footer-links">
                    <button type="button" onClick={() => setShowAboutModal(true)}>About</button>
                    <button type="button" onClick={() => setShowLegalModal(true)}>Privacy</button>
                    <button type="button" onClick={() => setShowFormulaModal(true)}>Formula</button>
                    {isCustomMode && (
                        <button type="button" onClick={() => {
                            setConfigEntryForced(false);
                            setShowConfigModal(true);
                        }}>Config</button>
                    )}
                </div>
                {(courses.length > 0 || scenarios.length > 1) && (
                    <button
                        type="button"
                        className="workspace-clear"
                        onClick={() => setShowClearConfirm(true)}
                    >
                        Clear All Data
                    </button>
                )}
            </footer>

            {showClearConfirm && (
                <div className="gl-modal-overlay" onClick={() => setShowClearConfirm(false)}>
                    <div className="gl-modal" onClick={e => e.stopPropagation()}>
                        <h3>{TEXT.MODAL.TITLE}</h3>
                        <p>{TEXT.MODAL.DESC}</p>
                        <div className="modal-actions">
                            <button className="btn-ghost" onClick={() => setShowClearConfirm(false)}>{TEXT.MODAL.CANCEL}</button>
                            <button className="btn-danger" onClick={() => { confirmClearAll(); setShowClearConfirm(false); }}>{TEXT.MODAL.CONFIRM}</button>
                        </div>
                    </div>
                </div>
            )}

            {showAboutModal && (
                <div className="gl-modal-overlay" onClick={() => setShowAboutModal(false)}>
                    <div className="gl-modal" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>{TEXT.ABOUT_MODAL.TITLE}</h3>
                            <button className="modal-close-x" onClick={() => setShowAboutModal(false)} aria-label="Close">×</button>
                        </div>
                        <p>{TEXT.ABOUT_MODAL.DISCLAIMER}</p>
                        <button className="btn-ghost modal-close" onClick={() => setShowAboutModal(false)}>{TEXT.ABOUT_MODAL.CLOSE}</button>
                    </div>
                </div>
            )}

            {showConfigModal && (
                <div className="gl-modal-overlay" onClick={leaveCustomConfig}>
                    <div className="gl-modal" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Custom grading scale</h3>
                            <button
                                type="button"
                                className="modal-close-x"
                                aria-label={configEntryForced ? 'Leave custom grading' : 'Close'}
                                onClick={leaveCustomConfig}
                            >
                                ×
                            </button>
                        </div>
                        <p>
                            {configEntryForced
                                ? 'Define grade points for your scale, or go back and choose a university instead.'
                                : 'Update your grade points. Closing keeps the current scale.'}
                        </p>
                        <div>
                            <div className="system-panel-kicker">Quick preset</div>
                            <div className="config-presets">
                                <button type="button" className="btn-ghost" onClick={() => handlePreset('4.0')}>Standard 4.0</button>
                                <button type="button" className="btn-ghost" onClick={() => handlePreset('5.0')}>Scale 5.0</button>
                            </div>
                        </div>
                        <div className="config-rows">
                            {customGradingScale.map((g, idx) => (
                                <div key={idx} className="config-row">
                                    <input value={g.grade} onChange={e => updateCustomGrade(idx, 'grade', e.target.value)} aria-label={`Grade ${idx + 1}`} />
                                    <input type="number" value={g.point} onChange={e => updateCustomGrade(idx, 'point', e.target.value)} aria-label={`Point ${idx + 1}`} />
                                    <button type="button" onClick={() => removeCustomGrade(idx)} aria-label={`Remove grade ${idx + 1}`}>×</button>
                                </div>
                            ))}
                        </div>
                        <button type="button" className="btn-ghost modal-close" onClick={addCustomGrade}>+ Add grade row</button>
                        <div className="modal-actions">
                            <button type="button" className="btn-ghost" onClick={leaveCustomConfig}>
                                {configEntryForced ? 'Back to universities' : 'Cancel'}
                            </button>
                            <button type="button" className="btn-primary" onClick={saveCustomConfig}>
                                Save &amp; continue
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showLegalModal && (
                <div className="gl-modal-overlay" onClick={() => setShowLegalModal(false)}>
                    <div className="gl-modal" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>{TEXT.LEGAL.TITLE}</h3>
                            <button className="modal-close-x" onClick={() => setShowLegalModal(false)} aria-label="Close">×</button>
                        </div>
                        <div>
                            {TEXT.LEGAL.SECTIONS.map((section, idx) => (
                                <section key={idx} className="modal-section">
                                    <h4>{section.HEADING}</h4>
                                    {section.CONTENT.map((paragraph, pIdx) => (
                                        <p key={pIdx}>{paragraph}</p>
                                    ))}
                                </section>
                            ))}
                        </div>
                        <button className="btn-ghost modal-close" onClick={() => setShowLegalModal(false)}>{TEXT.LEGAL.CLOSE}</button>
                    </div>
                </div>
            )}

            <GradingScaleModal
                isOpen={showGradingModal}
                onClose={() => setShowGradingModal(false)}
                university={currentUni}
                policy={currentPolicy}
            />
            <FormulaModal isOpen={showFormulaModal} onClose={() => setShowFormulaModal(false)} />
        </div>
    );
}
