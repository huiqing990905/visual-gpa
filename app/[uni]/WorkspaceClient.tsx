'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { sampleUniversities } from '../../src/data/sample';
import { calculateProjectedCGPA } from '../../src/logic/calculator';
import { TEXT } from '../../src/text';
import type { Course } from '../../src/types';
import { AnimatedValue } from '../../src/components/AnimatedValue';
import { getNextAction } from '../../src/logic/resources';
import { NextActions } from '../../src/components/NextActions';
import { FormulaModal } from '../../src/components/modals/FormulaModal';

export default function Workspace() {
    // Next.js params can be array or string, so we force cast or handle it.
    // In app/[uni]/page.tsx, params.uni is the dynamic segment.
    const params = useParams();
    const uniId = params.uni as string;
    const isSample = uniId === '__sample__';

    // Router replacement
    const router = useRouter();

    // Find current university or create mock for sample
    // Find current university
    const currentUni = isSample ? {
        id: '__sample__',
        name: 'Sample University',
        shortName: 'Demo',
        country: 'Global',
        type: 'Public',
        imageUrl: '/custom_mode.png',
        policies: [{
            id: 'pol_sample',
            name: 'Standard 4.0 Scale',
            gradingScale: [
                { grade: 'A', point: 4.0 }, { grade: 'A-', point: 3.7 }, { grade: 'B+', point: 3.3 },
                { grade: 'B', point: 3.0 }, { grade: 'B-', point: 2.7 }, { grade: 'C+', point: 2.3 },
                { grade: 'C', point: 2.0 }, { grade: 'F', point: 0.0 }
            ],
            maxCGPA: 4.0
        }]
    } : sampleUniversities.find(u => u.id === uniId);

    // Redirect if invalid ID
    useEffect(() => {
        if (!currentUni) {
            router.push('/');
        }
    }, [currentUni, router]);

    // Auto-open Config for Custom Mode
    useEffect(() => {
        if (currentUni?.id === 'custom') {
            setShowConfigModal(true);
        }
    }, [currentUni]);

    /* State & Persistence */
    const [courses, setCourses] = useState<Course[]>(isSample ? [
        { id: 's1', code: 'CS101', name: 'Intro to Comp Sci', credits: 4, grade: 'A', semester: 'Y1S1' },
        { id: 's2', code: 'MATH101', name: 'Calculus I', credits: 4, grade: 'B+', semester: 'Y1S1' },
        { id: 's3', code: 'ENG102', name: 'Academic English', credits: 3, grade: 'A-', semester: 'Y1S1' },
        { id: 's4', code: 'CS102', name: 'Data Structures', credits: 4, grade: 'B', semester: 'Y1S2' },
        { id: 's5', code: 'STAT201', name: 'Statistics', credits: 3, grade: 'A', semester: 'Y1S2' },
    ] : []);

    // Session-only state
    const [currentCGPA, setCurrentCGPA] = useState<string>(isSample ? '3.42' : '');
    const [currentTotalCredits, setCurrentTotalCredits] = useState<string>(isSample ? '18' : '');
    const [targetCGPA, setTargetCGPA] = useState<string>(isSample ? '3.60' : '');
    const [activePolicyId, setActivePolicyId] = useState<string>(''); // Policy Selection

    /* UI State */
    const [showClearConfirm, setShowClearConfirm] = useState(false);
    const [showAboutModal, setShowAboutModal] = useState(false);
    const [showTransparency, setShowTransparency] = useState(false);
    const [showLegalModal, setShowLegalModal] = useState(false);

    const [showConfigModal, setShowConfigModal] = useState(false); // New Config Modal
    const [showGradingModal, setShowGradingModal] = useState(false); // Grading Scheme Modal
    const [showFormulaModal, setShowFormulaModal] = useState(false); // Formula Breakdown Modal

    // Custom Grading Scale State
    const [customGradingScale, setCustomGradingScale] = useState<{ grade: string, point: number }[]>(
        [{ grade: 'A', point: 4.0 }, { grade: 'B', point: 3.0 }, { grade: 'C', point: 2.0 }, { grade: 'F', point: 0.0 }]
    );

    // Initial load from localStorage
    useEffect(() => {
        if (!isSample) {
            const savedCourses = localStorage.getItem('visualgpa_courses');
            if (savedCourses) setCourses(JSON.parse(savedCourses));

            const savedScale = localStorage.getItem('visualgpa_custom_scale');
            if (savedScale) setCustomGradingScale(JSON.parse(savedScale));
        }
    }, [isSample]);

    // Handle hydration mismatch indicator
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!isSample) localStorage.setItem('visualgpa_courses', JSON.stringify(courses));
    }, [courses, isSample]);

    useEffect(() => {
        if (!isSample) localStorage.setItem('visualgpa_custom_scale', JSON.stringify(customGradingScale));
    }, [customGradingScale, isSample]);

    // Reset policy on uni change
    useEffect(() => {
        if (currentUni && currentUni.policies && currentUni.policies.length > 0) {
            setActivePolicyId(currentUni.policies[0].id);
        }
    }, [currentUni]);

    /* Derived */
    // If Generic Mode, use custom scale. Else use standard.
    const isCustomMode = currentUni?.id === 'custom';

    const currentPolicy = isCustomMode
        ? {
            ...currentUni?.policies[0],
            gradingScale: customGradingScale,
            maxCGPA: Math.max(...customGradingScale.map(g => g.point), 0) || 4.0
        }
        : (currentUni?.policies ? (currentUni.policies.find(p => p.id === activePolicyId) || currentUni.policies[0]) : undefined);

    const gradeOptions = currentPolicy?.gradingScale.map(g => g.grade) || [];
    const maxCGPA = currentPolicy?.maxCGPA || 4.00;

    // Auto-fix: Clamp CGPA/Target if they exceed new max (e.g. switching 5.0 -> 4.0 scale)
    useEffect(() => {
        const val = parseFloat(currentCGPA);
        if (!isNaN(val) && val > maxCGPA) {
            setCurrentCGPA(maxCGPA.toFixed(2));
        }
        const tVal = parseFloat(targetCGPA);
        if (!isNaN(tVal) && tVal > maxCGPA) {
            setTargetCGPA(maxCGPA.toFixed(2));
        }
    }, [maxCGPA, currentCGPA, targetCGPA]);

    // Handler for custom scale
    const updateCustomGrade = (idx: number, field: 'grade' | 'point', value: any) => {
        const newScale = [...customGradingScale];
        newScale[idx] = { ...newScale[idx], [field]: field === 'point' ? parseFloat(value) : value };
        setCustomGradingScale(newScale);
    };

    const addCustomGrade = () => setCustomGradingScale([...customGradingScale, { grade: '?', point: 0 }]);
    const removeCustomGrade = (idx: number) => setCustomGradingScale(customGradingScale.filter((_, i) => i !== idx));

    // Preset Handlers
    const handlePreset = (type: '4.0' | '5.0') => {
        if (type === '4.0') {
            setCustomGradingScale([
                { grade: 'A', point: 4.0 }, { grade: 'B', point: 3.0 }, { grade: 'C', point: 2.0 }, { grade: 'F', point: 0.0 }
            ]);
        } else {
            setCustomGradingScale([
                { grade: 'A', point: 5.0 }, { grade: 'B', point: 4.0 }, { grade: 'C', point: 3.0 }, { grade: 'D', point: 2.0 }, { grade: 'E', point: 1.0 }, { grade: 'F', point: 0.0 }
            ]);
        }
    };

    /* --- COMPONENTS --- */

    const GradingModal = () => {
        if (!showGradingModal) return null;
        return (
            <div className="modal-overlay fade-in" onClick={() => setShowGradingModal(false)} style={{
                position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
            }}>
                <div className="modal-content scale-up" onClick={e => e.stopPropagation()} style={{
                    background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)',
                    padding: '2rem', borderRadius: '16px', width: '90%', maxWidth: '500px',
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', position: 'relative'
                }}>
                    <button onClick={() => setShowGradingModal(false)} style={{
                        position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none',
                        color: '#64748b', fontSize: '1.5rem', cursor: 'pointer'
                    }}>×</button>

                    <h3 style={{ marginTop: 0, marginBottom: '1.5rem', color: 'var(--accent-cyan)', letterSpacing: '0.1em', textAlign: 'center' }}>GRADING SCHEME</h3>

                    {/* Policy Selector (if multiple) */}
                    {(currentUni?.policies?.length || 0) > 1 && (
                        <select
                            value={activePolicyId}
                            onChange={(e) => setActivePolicyId(e.target.value)}
                            style={{
                                width: '100%',
                                background: 'rgba(255,255,255,0.05)',
                                color: 'white',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                padding: '0.75rem',
                                fontSize: '0.9rem',
                                outline: 'none',
                                cursor: 'pointer',
                                marginBottom: '1.5rem'
                            }}
                        >
                            {currentUni?.policies?.map(p => (
                                <option key={p.id} value={p.id} style={{ background: '#0f172a' }}>{p.name}</option>
                            ))}
                        </select>
                    )}

                    {/* Grade Table */}
                    <div style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                            <div>Grade Letter</div>
                            <div style={{ textAlign: 'right' }}>Point Value</div>
                        </div>
                        {currentPolicy?.gradingScale.map((gs, i) => (
                            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ color: 'white', fontWeight: 700 }}>{gs.grade}</div>
                                <div style={{ textAlign: 'right', color: 'var(--accent-cyan)' }}>{gs.point.toFixed(2)}</div>
                            </div>
                        ))}
                    </div>

                    <button className="btn-ghost" onClick={() => setShowGradingModal(false)} style={{ width: '100%', marginTop: '1.5rem' }}>Close</button>
                </div>
            </div>
        );
    };

    /* --- CALCULATIONS --- */
    const handleFloatInput = (val: string, setter: (v: string) => void) => {
        if (val === '' || /^\d*\.?\d{0,4}$/.test(val)) {
            const num = parseFloat(val);
            if (val === '' || val === '.' || (!isNaN(num) && num <= maxCGPA)) {
                setter(val);
            }
        }
    };

    const handleCreditInput = (val: string, setter: (v: string) => void) => {
        if (val === '' || /^\d*\.?\d*$/.test(val)) setter(val);
    };

    const handleCourseCreditInput = (id: string, val: string) => {
        if (val === '' || /^\d*\.?\d*$/.test(val)) handleUpdate(id, 'credits', val);
    };

    const handleAddCourse = () => {
        setCourses([...courses, { id: Math.random().toString(36).substr(2, 9), code: '', name: '', credits: 3, grade: 'B', semester: '2024' }]);
    };

    const handleUpdate = (id: string, field: keyof Course, val: any) => {
        setCourses(courses.map(c => c.id === id ? { ...c, [field]: val } : c));
    };

    const handleRemove = (id: string) => setCourses(courses.filter(c => c.id !== id));

    const confirmClearAll = () => {
        setCourses([]);
        setShowClearConfirm(false);
    };

    /* Calculation */
    const baselineCGPA = parseFloat(currentCGPA) || 0;
    const baselineCredits = parseFloat(currentTotalCredits) || 0;
    const canCalc = !!currentPolicy && !isNaN(parseFloat(currentCGPA)) && !isNaN(parseFloat(currentTotalCredits));
    const hasCourses = courses.length > 0;
    const baselineEstablished = canCalc && baselineCredits > 0;

    const result = canCalc && currentPolicy
        ? calculateProjectedCGPA(baselineCGPA, baselineCredits, courses, currentPolicy)
        : { cgpa: baselineCGPA, totalGradePoints: 0, totalValidCredits: 0, history: [], processedCourses: courses };

    /* Transparency Calculations */
    const scenarioPoints = result.totalGradePoints - (baselineCGPA * baselineCredits);
    const scenarioCredits = result.totalValidCredits - baselineCredits;
    const baselinePoints = baselineCGPA * baselineCredits;

    /* Decision Guidance Logic */
    const diff = result.cgpa - baselineCGPA;
    const absDiff = Math.abs(diff);
    const resultIsMax = result.cgpa >= maxCGPA;
    const isMaxState = baselineEstablished && baselineCGPA >= maxCGPA;

    /* Goal Logic */
    const targetVal = parseFloat(targetCGPA);
    const distToTarget = !isNaN(targetVal) ? (targetVal - result.cgpa) : 0;
    const targetSet = !isNaN(targetVal) && targetVal > 0;
    const targetReached = targetSet && distToTarget <= 0;

    let trendText = "Make Changes";
    let trendColor = "#94a3b8";
    let ringPulseClass = "";
    let arrowType = 'neutral';
    let arrowSymbol = '→';

    // Analysis Strings
    let analysisIntro = TEXT.ANALYSIS.INTRO_STABLE;
    let impactLabel = TEXT.IMPACT.NEGLIGIBLE;
    let contextNote = "";
    let analysisNextStep = "";

    if (hasCourses && canCalc) {
        if (resultIsMax) {
            trendText = TEXT.ANALYSIS.TREND_MAX;
            trendColor = "#22d3ee";
            arrowType = 'up'; arrowSymbol = 'MAX';
            ringPulseClass = "pulse-cyan";
            analysisIntro = TEXT.ANALYSIS.INTRO_MAX;
            impactLabel = TEXT.IMPACT.MAX_LIMIT;
            contextNote = TEXT.ANALYSIS.CONTEXT_MAX;
            analysisNextStep = TEXT.ANALYSIS.TIP_MAX;
        }
        else if (targetReached) {
            trendText = TEXT.ANALYSIS.TREND_TARGET;
            trendColor = "#c084fc";
            arrowType = 'up'; arrowSymbol = '↗';
            ringPulseClass = "pulse-cyan";
            analysisIntro = TEXT.ANALYSIS.INTRO_BOOST;
            impactLabel = TEXT.IMPACT.SIGNIFICANT;
            contextNote = "";
            analysisNextStep = TEXT.ANALYSIS.TIP_TARGET;
        }
        else {
            if (diff > 0.0001) {
                trendText = TEXT.ANALYSIS.TREND_UP; trendColor = "#22d3ee";
                arrowType = 'up'; arrowSymbol = '↗'; ringPulseClass = "pulse-cyan";
                analysisIntro = TEXT.ANALYSIS.INTRO_UP;
            } else if (diff < -0.0001) {
                trendText = TEXT.ANALYSIS.TREND_DOWN; trendColor = "#ef4444";
                arrowType = 'down'; arrowSymbol = '↘'; ringPulseClass = "pulse-red";
                analysisIntro = TEXT.ANALYSIS.INTRO_DROP;
            } else {
                trendText = TEXT.ANALYSIS.TREND_STABLE;
                arrowType = 'neutral'; arrowSymbol = '→';
                analysisIntro = TEXT.ANALYSIS.INTRO_STABLE;
            }

            if (absDiff >= 0.10) impactLabel = TEXT.IMPACT.SIGNIFICANT;
            else if (absDiff >= 0.05) impactLabel = TEXT.IMPACT.MODERATE;
            else if (absDiff >= 0.01) impactLabel = TEXT.IMPACT.MINIMAL;
            else impactLabel = TEXT.IMPACT.NEGLIGIBLE;

            const totalScenarioCredits = courses.reduce((sum, c) => sum + (parseFloat(c.credits as any) || 0), 0);
            if (totalScenarioCredits < 5) contextNote = TEXT.ANALYSIS.CONTEXT_LOW;
            else if (totalScenarioCredits > 15) contextNote = TEXT.ANALYSIS.CONTEXT_HIGH;
            else contextNote = TEXT.ANALYSIS.CONTEXT_STD;

            if (diff < -0.01) analysisNextStep = TEXT.ANALYSIS.NEXT_BAD;
            else if (diff > 0.01) analysisNextStep = TEXT.ANALYSIS.NEXT_GOOD;
            else analysisNextStep = TEXT.ANALYSIS.NEXT_MID;
        }
    }

    if (targetReached && !resultIsMax) {
        analysisNextStep = TEXT.ANALYSIS.NEXT_GOAL;
    }

    const getGradeColor = (g: string) => {
        if (g.startsWith('A')) return '#22d3ee';
        if (g.startsWith('B')) return '#c084fc';
        if (g.startsWith('C')) return '#ef4444';
        return '#94a3b8';
    };

    // Safe check for render
    if (!mounted || !currentUni) return null;

    // Contextual Next Actions
    const featuredAction = getNextAction({
        isSampleMode: isSample,
        courseCount: courses.length,
        cgpa: result.cgpa
    });


    // ... logic remains same until return ...
    // NOTE: This replacement will be partial due to tool limits. I will replace the wrapper first.

    // New notebook layout return structure
    return (
        <div className="notebook-container">
            {/* 1. Header & Identity */}
            <header className="notebook-header">
                <button onClick={() => router.push('/')} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-tech)', fontSize: '0.9rem' }}>
                    <span>←</span> Home
                </button>

                <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', color: 'white', lineHeight: 1 }}>{currentUni.name}</div>
                    <div style={{ fontFamily: 'var(--font-tech)', fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>VISUAL GPA PLANNER</div>
                </div>
            </header>

            {/* 2. Context Inputs (Subdued / Parameters) */}
            <div className="context-bar" style={{ background: 'transparent', border: 'none', padding: '1rem 0', gap: '1.5rem', opacity: 0.8 }}>
                <div className="context-input-group">
                    <span className="context-label" style={{ fontSize: '0.65rem', color: '#64748b' }}>Baseline CGPA</span>
                    <input
                        className="context-input"
                        placeholder="—"
                        value={Number(currentCGPA) === 0 ? '' : currentCGPA}
                        onChange={e => handleFloatInput(e.target.value, setCurrentCGPA)}
                        style={{ fontSize: '1rem', width: '80px', color: '#94a3b8' }}
                    />
                </div>
                <div className="context-input-group">
                    <span className="context-label" style={{ fontSize: '0.65rem', color: '#64748b' }}>Credits</span>
                    <input
                        className="context-input"
                        placeholder="—"
                        value={Number(currentTotalCredits) === 0 ? '' : currentTotalCredits}
                        onChange={e => handleCreditInput(e.target.value, setCurrentTotalCredits)}
                        style={{ width: '50px', fontSize: '1rem', color: '#94a3b8' }}
                    />
                </div>
                <div style={{ width: '1px', height: '30px', background: 'rgba(255,255,255,0.1)' }}></div>
                <div className="context-input-group">
                    <span className="context-label" style={{ fontSize: '0.65rem', color: '#64748b' }}>Goal</span>
                    <input
                        className="context-input"
                        placeholder="—"
                        value={Number(targetCGPA) === 0 ? '' : targetCGPA}
                        onChange={e => handleFloatInput(e.target.value, setTargetCGPA)}
                        style={{ fontSize: '1rem', width: '80px', color: targetSet ? '#c084fc' : '#475569' }}
                    />
                </div>
            </div>

            {/* 3. Main Stage: Course Input */}
            <main style={{ flex: 1 }}>

                {/* Empty State */}
                {courses.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '4rem 0', animation: 'fadeUp 0.5s ease-out' }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 600, color: 'white', marginBottom: '1rem' }}>
                            {isMaxState ? "You've reached perfection." : "Let's plan your next semester."}
                        </div>
                        <p style={{ color: '#94a3b8', marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem' }}>
                            {isMaxState ? "Try experimenting with 'What If' scenarios." : "Add courses to see how they impact your CGPA in real-time."}
                        </p>
                        <button onClick={handleAddCourse} className="btn-primary">
                            + Add First Course
                        </button>
                    </div>
                )}

                {/* Course List */}
                <div className="course-list" style={{ padding: 0, overflow: 'visible' }}>
                    {courses.map((course, idx) => (
                        <div key={course.id} className="holo-row">
                            <span style={{ fontFamily: 'var(--font-tech)', color: '#475569', fontSize: '0.8rem' }}>0{idx + 1}</span>
                            <input
                                className="input-ghost"
                                placeholder={TEXT.PLACEHOLDERS.COURSE_NAME}
                                value={course.code}
                                maxLength={20}
                                onChange={e => handleUpdate(course.id, 'code', e.target.value)}
                            />
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ fontSize: '0.65rem', color: '#64748b' }}>{TEXT.LABELS.CR}</span>
                                <input
                                    className="input-ghost"
                                    type="text"
                                    value={course.credits}
                                    onChange={e => handleCourseCreditInput(course.id, e.target.value)}
                                    style={{ width: '30px', textAlign: 'center', fontSize: '0.9rem' }}
                                />
                            </div>
                            <select
                                className="grade-pill"
                                value={course.grade}
                                onChange={e => handleUpdate(course.id, 'grade', e.target.value)}
                                style={{ color: getGradeColor(course.grade), fontSize: '0.9rem', padding: '0.25rem' }}
                            >
                                {gradeOptions.map(g => <option key={g} value={g}>{g}</option>)}
                            </select>
                            <button onClick={() => handleRemove(course.id)} style={{ background: 'transparent', border: 'none', color: '#475569', cursor: 'pointer', fontSize: '1rem' }}>×</button>
                        </div>
                    ))}

                    {courses.length > 0 && (
                        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                            <button onClick={handleAddCourse} className="btn-primary" style={{ background: 'rgba(255,255,255,0.05)', border: '1px dashed rgba(255,255,255,0.2)', color: '#94a3b8' }}>
                                + Add Another Course
                            </button>
                        </div>
                    )}
                </div>

                {/* 4. Results (Conditional) */}
                {hasCourses && (
                    <div className="result-card-minimal" style={{ marginTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', background: 'transparent' }}>

                        <div style={{ fontFamily: 'var(--font-tech)', fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem', opacity: 0.7 }}>Potential Outcome</div>

                        <div className={`gpa-hero ${diff < 0 ? 'trending-neutral' : ''}`} style={{ fontSize: '3rem', marginBottom: '0.5rem', fontWeight: 600, color: 'white' }}>
                            {/* Use standard text for numbers to reduce "score" feel */}
                            {result.cgpa > 0 ? result.cgpa.toFixed(2) : "—"}
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem', opacity: 0.8 }}>
                            <span style={{ color: trendColor, fontSize: '1rem' }}>{arrowSymbol}</span>
                            <span style={{ color: '#94a3b8', fontFamily: 'var(--font-tech)', fontSize: '0.8rem' }}>{Math.abs(diff).toFixed(2)} impact</span>
                        </div>


                        <NextActions
                            universityName={currentUni?.name || 'Academic'}
                            context={{
                                isSampleMode: isSample,
                                courseCount: courses.length,
                                cgpa: result.cgpa
                            }}
                        />

                    </div>
                )}

            </main>

            {/* Footer Items */}
            <footer style={{ marginTop: '4rem', paddingBottom: '2rem', textAlign: 'center', fontSize: '0.8rem', color: '#64748b' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
                    <span style={{ cursor: 'pointer' }} onClick={() => setShowAboutModal(true)}>About</span>
                    <span style={{ cursor: 'pointer' }} onClick={() => setShowLegalModal(true)}>Privacy</span>
                    {isCustomMode && <span style={{ cursor: 'pointer' }} onClick={() => setShowConfigModal(true)}>Config</span>}
                </div>
                {courses.length > 0 && (
                    <div onClick={() => setShowClearConfirm(true)} style={{ color: '#ef4444', cursor: 'pointer', marginTop: '1rem', opacity: 0.6 }}>
                        Clear All Data
                    </div>
                )}
            </footer>

            {/* MODALS RATAIN SAME LOGIC */}
            {/* Keeping the detailed Modals (Config, Legal, About, Confirm) as overlaid portals or absolute elements */}

            {/* CUSTOM CONFIRM MODAL */}
            {showClearConfirm && (
                <div className="gl-modal-overlay">
                    <div className="gl-modal">
                        <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>⚠️</div>
                        <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>{TEXT.MODAL.TITLE}</h3>
                        <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '2rem' }}>{TEXT.MODAL.DESC}</p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button className="btn-ghost" onClick={() => setShowClearConfirm(false)}>{TEXT.MODAL.CANCEL}</button>
                            <button className="btn-danger" onClick={confirmClearAll}>{TEXT.MODAL.CONFIRM}</button>
                        </div>
                    </div>
                </div>
            )}

            {/* ABOUT MODAL */}
            {showAboutModal && (
                <div className="gl-modal-overlay" onClick={() => setShowAboutModal(false)}>
                    <div className="gl-modal" onClick={e => e.stopPropagation()}>
                        <h3 style={{ marginTop: 0, marginBottom: '1rem', color: 'var(--accent-cyan)', letterSpacing: '0.1em' }}>{TEXT.ABOUT_MODAL.TITLE}</h3>
                        <div style={{ fontSize: '0.85rem', color: '#e2e8f0', marginBottom: '1.5rem', lineHeight: '1.5', borderLeft: '2px solid var(--accent-cyan)', paddingLeft: '1rem' }}>
                            {TEXT.ABOUT_MODAL.DISCLAIMER}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1rem', lineHeight: '1.5' }}>
                            {TEXT.ABOUT_MODAL.CONTACT_MSG}
                        </div>
                        <div className="contact-grid">
                            <a href={`mailto:${TEXT.ABOUT_MODAL.EMAIL}`} className="contact-link-card">
                                <span className="contact-icon">✉️</span>
                                <div className="contact-text-group">
                                    <span className="contact-label">Email</span>
                                    <span className="contact-value">{TEXT.ABOUT_MODAL.EMAIL}</span>
                                </div>
                            </a>
                            <a href={TEXT.ABOUT_MODAL.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="contact-link-card">
                                <span className="contact-icon">📸</span>
                                <div className="contact-text-group">
                                    <span className="contact-label">Instagram</span>
                                    <span className="contact-value">@hqing0905</span>
                                </div>
                            </a>
                            <a href={TEXT.ABOUT_MODAL.LINKEDIN} target="_blank" rel="noopener noreferrer" className="contact-link-card">
                                <span className="contact-icon">💼</span>
                                <div className="contact-text-group">
                                    <span className="contact-label">LinkedIn</span>
                                    <span className="contact-value">Hui Qing Lau</span>
                                </div>
                            </a>
                        </div>
                        <button className="btn-ghost" onClick={() => setShowAboutModal(false)} style={{ width: '100%' }}>{TEXT.ABOUT_MODAL.CLOSE}</button>
                    </div>
                </div>
            )}

            {/* CUSTOM CONFIG MODAL */}
            {showConfigModal && (
                <div className="gl-modal-overlay">
                    <div className="gl-modal" style={{ width: '400px' }}>
                        <h3 style={{ marginTop: 0, marginBottom: '1.5rem', color: 'var(--accent-cyan)', letterSpacing: '0.1em' }}>CONFIGURE SYSTEM</h3>
                        <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '1.5rem' }}>Define your university's grading scale manually.</p>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Quick Preset</div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <button onClick={() => handlePreset('4.0')} style={{ flex: 1, padding: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '6px', cursor: 'pointer', fontSize: '0.75rem' }}>Standard 4.0</button>
                                <button onClick={() => handlePreset('5.0')} style={{ flex: 1, padding: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '6px', cursor: 'pointer', fontSize: '0.75rem' }}>Scale 5.0</button>
                            </div>
                        </div>

                        <div style={{ maxHeight: '300px', overflowY: 'auto', paddingRight: '0.5rem', marginBottom: '1rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 40px', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase' }}>
                                <div>Grade Letter</div>
                                <div>Point Value</div>
                                <div></div>
                            </div>

                            {customGradingScale.map((g, idx) => (
                                <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 40px', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                    <input
                                        className="input-ghost"
                                        value={g.grade}
                                        onChange={(e) => updateCustomGrade(idx, 'grade', e.target.value)}
                                        placeholder="e.g. A"
                                        style={{ textAlign: 'center' }}
                                    />
                                    <input
                                        className="input-ghost"
                                        type="number"
                                        value={g.point}
                                        onChange={(e) => updateCustomGrade(idx, 'point', e.target.value)}
                                        placeholder="4.0"
                                        style={{ textAlign: 'center' }}
                                    />
                                    <button onClick={() => removeCustomGrade(idx)} style={{ color: '#ef4444', background: 'transparent', border: 'none', cursor: 'pointer' }}>×</button>
                                </div>
                            ))}
                        </div>

                        <button onClick={addCustomGrade} style={{ width: '100%', padding: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px dashed rgba(255,255,255,0.2)', color: '#94a3b8', borderRadius: '8px', cursor: 'pointer', marginBottom: '1.5rem', fontSize: '0.8rem' }}>+ Add Grade Row</button>

                        <button className="btn-ghost" onClick={() => { setShowConfigModal(false); setCourses([]); }} style={{ width: '100%', borderColor: 'var(--accent-cyan)', color: 'var(--accent-cyan)' }}>Save Configuration</button>
                    </div>
                </div>
            )}

            {/* LEGAL MODAL */}
            {showLegalModal && (
                <div className="gl-modal-overlay" onClick={() => setShowLegalModal(false)}>
                    <div className="gl-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: '600px', textAlign: 'left' }}>
                        <h3 style={{ marginTop: 0, marginBottom: '1.5rem', color: 'var(--accent-cyan)', letterSpacing: '0.1em', textAlign: 'center' }}>{TEXT.LEGAL.TITLE}</h3>
                        <div style={{ maxHeight: '60vh', overflowY: 'auto', paddingRight: '0.5rem', marginBottom: '1.5rem' }}>
                            {TEXT.LEGAL.SECTIONS.map((section, idx) => (
                                <div key={idx} style={{ marginBottom: '2rem' }}>
                                    <h4 style={{ color: 'white', marginTop: 0, marginBottom: '0.75rem', fontSize: '1rem' }}>{section.HEADING}</h4>
                                    {section.CONTENT.map((paragraph, pIdx) => (
                                        <p key={pIdx} style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.75rem', lineHeight: '1.6', paddingLeft: paragraph.startsWith('•') ? '1rem' : 0 }}>
                                            {paragraph}
                                        </p>
                                    ))}
                                    {idx < TEXT.LEGAL.SECTIONS.length - 1 && <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '1.5rem 0' }} />}
                                </div>
                            ))}
                        </div>
                        <button className="btn-ghost" onClick={() => setShowLegalModal(false)} style={{ width: '100%' }}>{TEXT.LEGAL.CLOSE}</button>
                    </div>
                </div>
            )}

            <GradingModal />
            <FormulaModal isOpen={showFormulaModal} onClose={() => setShowFormulaModal(false)} />
        </div>
    );
};

