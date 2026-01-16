import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { sampleUniversities } from '../data/sample';
import { calculateProjectedCGPA } from '../logic/calculator';
import { TEXT } from '../text';
import type { Course } from '../types';
import { AnimatedValue } from '../components/AnimatedValue';

export const Workspace = () => {
    const { uniId } = useParams();
    const navigate = useNavigate();

    // Find current university
    const currentUni = sampleUniversities.find(u => u.id === uniId);

    // Determines SEO Keywords based on Uni ID
    const getSeoKeywords = () => {
        if (!currentUni) return TEXT.SEO_KEYWORDS.DEFAULT;
        switch (currentUni.id) {
            case 'utar': return TEXT.SEO_KEYWORDS.UTAR;
            case 'tarumt': return TEXT.SEO_KEYWORDS.TARUMT;
            case 'sunway': return TEXT.SEO_KEYWORDS.SUNWAY;
            case 'custom': return TEXT.SEO_KEYWORDS.CUSTOM;
            default: return TEXT.SEO_KEYWORDS.DEFAULT;
        }
    };

    // Redirect if invalid ID
    useEffect(() => {
        if (!currentUni) {
            navigate('/');
        }
    }, [currentUni, navigate]);

    // Auto-open Config for Custom Mode
    useEffect(() => {
        if (currentUni?.id === 'custom') {
            setShowConfigModal(true);
        }
    }, [currentUni]);

    /* State & Persistence */
    const [courses, setCourses] = useState<Course[]>(() => {
        const saved = localStorage.getItem('visualgpa_courses');
        return saved ? JSON.parse(saved) : [];
    });

    // Session-only state
    const [currentCGPA, setCurrentCGPA] = useState<string>('');
    const [currentTotalCredits, setCurrentTotalCredits] = useState<string>('');
    const [targetCGPA, setTargetCGPA] = useState<string>('');
    const [activePolicyId, setActivePolicyId] = useState<string>(''); // Policy Selection

    /* UI State */
    const [showClearConfirm, setShowClearConfirm] = useState(false);
    const [showAboutModal, setShowAboutModal] = useState(false);
    const [showTransparency, setShowTransparency] = useState(false);
    const [showLegalModal, setShowLegalModal] = useState(false);
    const [showConfigModal, setShowConfigModal] = useState(false); // New Config Modal

    // Custom Grading Scale State
    const [customGradingScale, setCustomGradingScale] = useState<{ grade: string, point: number }[]>(() => {
        const saved = localStorage.getItem('visualgpa_custom_scale');
        return saved ? JSON.parse(saved) : [
            { grade: 'A', point: 4.0 }, { grade: 'B', point: 3.0 }, { grade: 'C', point: 2.0 }, { grade: 'F', point: 0.0 }
        ];
    });

    useEffect(() => {
        if (customGradingScale) localStorage.setItem('visualgpa_custom_scale', JSON.stringify(customGradingScale));
    }, [customGradingScale]);

    /* Effects */
    useEffect(() => { localStorage.setItem('visualgpa_courses', JSON.stringify(courses)); }, [courses]);

    // Reset policy on uni change
    useEffect(() => {
        if (currentUni && currentUni.policies.length > 0) {
            setActivePolicyId(currentUni.policies[0].id);
        }
    }, [currentUni]);

    /* Derived */
    // If Generic Mode, use custom scale. Else use standard.
    const isCustomMode = currentUni?.id === 'custom';

    const currentPolicy = isCustomMode
        ? { ...currentUni?.policies[0], gradingScale: customGradingScale }
        : (currentUni?.policies.find(p => p.id === activePolicyId) || currentUni?.policies[0]);

    const gradeOptions = currentPolicy?.gradingScale.map(g => g.grade) || [];
    const maxCGPA = currentPolicy?.maxCGPA || 4.00;

    // Handler for custom scale
    const updateCustomGrade = (idx: number, field: 'grade' | 'point', value: any) => {
        const newScale = [...customGradingScale];
        newScale[idx] = { ...newScale[idx], [field]: field === 'point' ? parseFloat(value) : value };
        setCustomGradingScale(newScale);
    };

    const addCustomGrade = () => setCustomGradingScale([...customGradingScale, { grade: '?', point: 0 }]);
    const removeCustomGrade = (idx: number) => setCustomGradingScale(customGradingScale.filter((_, i) => i !== idx));

    /* Input Handling */
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
    if (!currentUni) return null;

    return (
        <div className="app-shell" style={{ height: '100vh', display: 'flex' }}>
            <Helmet>
                <title>{currentUni ? `${currentUni.name} ${currentUni.shortName ? `(${currentUni.shortName})` : ''} CGPA Calculator` : 'VisualGPA - Academic Intelligence'}</title>
                <meta name="description" content={`Calculate your projected CGPA for ${currentUni?.name} ${currentUni?.shortName ? `(${currentUni?.shortName})` : ''} with VisualGPA. The most accurate and visual grading planner.`} />
                <meta name="keywords" content={getSeoKeywords()} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${TEXT.BRAND.BASE_URL}/${currentUni?.id}`} />
                <meta property="og:title" content={`${currentUni?.name} ${currentUni?.shortName ? `(${currentUni?.shortName})` : ''} CGPA Calculator`} />
                <meta property="og:description" content={`The official visual GPA planner for ${currentUni?.shortName || currentUni?.name}. Plan scenarios and track performance.`} />
                <meta property="og:image" content={`${TEXT.BRAND.BASE_URL}${currentUni?.imageUrl}`} />
                <link rel="canonical" href={`${TEXT.BRAND.BASE_URL}/${currentUni.id}`} />
            </Helmet>

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
                        <div style={{ fontFamily: 'var(--font-tech)', background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '8px', textAlign: 'center', color: 'white', marginBottom: '2rem', letterSpacing: '0.05em' }}>
                            {TEXT.ABOUT_MODAL.EMAIL}
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

            {/* SIDEBAR */}
            <aside className="sidebar">
                <div className="brand-title">{TEXT.BRAND.NAME}<span style={{ color: 'var(--accent-cyan)' }}>◈</span></div>

                {/* ACTIVE MODULE (University Identity) */}
                {/* ACTIVE MODULE (University Identity) */}
                <div className="sidebar-card" onClick={() => navigate('/')}>
                    <div className="sidebar-card-img" style={{ backgroundImage: `url(${currentUni.imageUrl})` }}></div>
                    <div className="sidebar-card-content">
                        <div style={{ fontSize: '0.65rem', color: 'var(--accent-cyan)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>Active Architecture</div>
                        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', lineHeight: '1.1', fontWeight: 700, color: 'white', marginBottom: '0.5rem', textShadow: '0 2px 10px rgba(0,0,0,0.5)', margin: '0 0 0.5rem 0' }}>
                            {currentUni.name}
                            {currentUni.shortName && <span style={{ opacity: 0.7, marginLeft: '0.4rem', fontWeight: 400, fontSize: '0.9em' }}>({currentUni.shortName})</span>}
                        </h1>
                        <div style={{ fontSize: '0.7rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '0.25rem', opacity: 0.8 }}>
                            <span style={{ fontSize: '0.8rem' }}>↺</span> Change Architecture
                        </div>
                    </div>
                </div>

                {currentUni.policies.length > 1 && (
                    <div style={{ margin: '-1.5rem 1.5rem 2rem 1.5rem' }}>
                        <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Grading Scheme</div>
                        <select
                            value={activePolicyId}
                            onChange={(e) => setActivePolicyId(e.target.value)}
                            style={{
                                width: '100%',
                                background: 'rgba(255,255,255,0.05)',
                                color: 'white',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                padding: '0.5rem',
                                fontSize: '0.75rem',
                                outline: 'none',
                                cursor: 'pointer',
                                marginBottom: '0.75rem'
                            }}
                        >
                            {currentUni.policies.map(p => (
                                <option key={p.id} value={p.id} style={{ background: '#0f172a' }}>{p.name}</option>
                            ))}
                        </select>

                        {/* SCALE PREVIEW (Mini-Legend) */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '0.25rem',
                            background: 'rgba(0,0,0,0.2)',
                            padding: '0.5rem',
                            borderRadius: '6px',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}>
                            {currentPolicy?.gradingScale.slice(0, 9).map((gs, i) => (
                                <div key={i} style={{ fontSize: '0.6rem', color: i < 3 ? 'var(--accent-cyan)' : '#64748b' }}>
                                    <span style={{ fontWeight: 700 }}>{gs.grade}</span> <span style={{ opacity: 0.7 }}>{gs.point.toFixed(2)}</span>
                                </div>
                            ))}
                            {currentPolicy && currentPolicy.gradingScale.length > 9 && (
                                <div style={{ fontSize: '0.6rem', color: '#64748b', fontStyle: 'italic' }}>...</div>
                            )}
                        </div>
                    </div>
                )}

                {isCustomMode && (
                    <div style={{ margin: '-1.5rem 1.5rem 2rem 1.5rem' }}>
                        <button className="btn-ghost" onClick={() => setShowConfigModal(true)} style={{ width: '100%', border: '1px dashed rgba(255,255,255,0.2)', fontSize: '0.75rem' }}>
                            ⚙️ Configure System
                        </button>
                    </div>
                )}

                <div className="step-label">{TEXT.STEPS.ONE}</div>

                <div className="config-box" style={{ background: 'transparent', border: 'none', padding: '0 5px', boxShadow: 'none' }}>
                    <div className="input-group">
                        <span className="input-label-floating">{TEXT.LABELS.CURRENT_CGPA}</span>
                        <input
                            className="input-super"
                            placeholder="0.00"
                            value={currentCGPA}
                            onChange={e => handleFloatInput(e.target.value, setCurrentCGPA)}
                            autoFocus
                            style={{ fontSize: '1.7rem', marginBottom: '0.5rem' }}
                        />
                    </div>

                    <div className="input-group">
                        <span className="input-label-floating">{TEXT.LABELS.CREDITS_EARNED}</span>
                        <input
                            className="input-super"
                            placeholder="0"
                            value={currentTotalCredits}
                            onChange={e => handleCreditInput(e.target.value, setCurrentTotalCredits)}
                            style={{ fontSize: '1.7rem', marginBottom: '0.5rem' }}
                        />
                    </div>

                    <div className="input-group">
                        <span className="input-label-floating">{TEXT.LABELS.TARGET_GOAL}</span>
                        <input
                            className="input-super"
                            placeholder="4.00"
                            value={targetCGPA}
                            onChange={e => handleFloatInput(e.target.value, setTargetCGPA)}
                            style={{ fontSize: '1.7rem', marginBottom: 0, color: targetSet ? 'var(--accent-purple)' : 'white' }}
                        />
                    </div>
                </div>

                {/* GUIDANCE TIP */}
                <div className="guidance-tip" style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start',
                    marginTop: 'auto',
                    paddingTop: '1rem'
                }}>
                    {/* Status Icon */}
                    <div style={{
                        fontSize: '1.2rem',
                        color: baselineEstablished ? '#22c55e' : '#f59e0b',
                        textShadow: baselineEstablished ? '0 0 15px rgba(34, 197, 94, 0.5)' : '0 0 15px rgba(245, 158, 11, 0.5)',
                        marginTop: '-0.2rem'
                    }}>
                        {baselineEstablished ? '✓' : '⚠️'}
                    </div>

                    <div>
                        <span style={{ fontFamily: 'var(--font-tech)', fontSize: '0.7rem', color: baselineEstablished ? '#22c55e' : '#f59e0b', letterSpacing: '0.1em', display: 'block', marginBottom: '0.25rem' }}>
                            {baselineEstablished ? TEXT.LABELS.BASELINE_ESTABLISHED : TEXT.LABELS.SYSTEM_GUIDANCE}
                        </span>
                        <div style={{ fontSize: '0.75rem', color: '#cbd5e1', lineHeight: '1.5', opacity: 0.9 }}>
                            {baselineEstablished
                                ? TEXT.MESSAGES.GUIDANCE_LOCKED(baselineCGPA.toFixed(2), baselineCredits)
                                : TEXT.MESSAGES.GUIDANCE_DEFAULT
                            }
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                {/* FOOTER - COMPACT */}
                <div className="sidebar-footer" style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-glass)', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                    <span className="footer-link" onClick={() => setShowAboutModal(true)}>{TEXT.FOOTER.CONTACT}</span>
                    <span className="footer-link" onClick={() => setShowLegalModal(true)}>Legal & Privacy</span>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="main-content">
                <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', zIndex: 10 }}>
                    <button onClick={() => navigate('/')} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8', padding: '0.4rem 1rem', borderRadius: '100px', cursor: 'pointer', fontSize: '0.75rem', backdropFilter: 'blur(4px)' }}>✕ Close</button>
                </div>

                <div className="spacer-center"></div>

                <div style={{ padding: '0 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3.5rem' }}>
                    <div className="step-label" style={{ marginBottom: 0 }}>{TEXT.STEPS.TWO}</div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        {courses.length > 0 && <button className="action-btn-mini" onClick={() => setShowClearConfirm(true)} style={{ color: '#ef4444', borderColor: 'rgba(239, 68, 68, 0.3)' }}>✖ Clear All</button>}
                    </div>
                </div>

                <div className="course-list">
                    {courses.length === 0 && (
                        <div style={{ textAlign: 'center', marginTop: '4rem', opacity: 1, padding: '3rem 2rem' }}>
                            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '0.5rem', color: 'white', fontWeight: 800, background: 'linear-gradient(180deg, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                {isMaxState ? TEXT.EMPTY_STATE.MAX_TITLE : TEXT.MESSAGES.EMPTY_STATE_TITLE}
                            </div>
                            <div style={{ fontSize: '1rem', color: '#94a3b8', marginBottom: '2.5rem', maxWidth: '400px', margin: '0 auto 2.5rem auto', lineHeight: '1.6' }}>
                                {isMaxState
                                    ? TEXT.EMPTY_STATE.MAX_DESC
                                    : (targetSet
                                        ? TEXT.MESSAGES.EMPTY_STATE_TARGET(targetVal.toFixed(2))
                                        : TEXT.MESSAGES.EMPTY_STATE_DEFAULT)
                                }
                            </div>
                            <button onClick={handleAddCourse} className="btn-primary" style={{ maxWidth: '200px', margin: '0 auto' }}>
                                {isMaxState ? TEXT.EMPTY_STATE.CTA_EXPLORE : TEXT.MESSAGES.ADD_SCENARIO}
                            </button>
                        </div>
                    )}

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
                        <button onClick={handleAddCourse} className="btn-primary" style={{ marginTop: '1rem' }}>+ {TEXT.MESSAGES.ADD_COURSE}</button>
                    )}
                </div>
            </main>

            {/* RIGHT: IMPACT ANALYSIS */}
            <aside className="rail">
                <div className="spacer-rail"></div>
                <div className="step-label">{TEXT.STEPS.THREE}</div>
                <div className={`hud-ring ${ringPulseClass}`}>
                    <div className={`gpa-hero ${diff < 0 ? 'trending-down' : ''}`}><AnimatedValue value={result.cgpa} /></div>
                    <div style={{ fontFamily: 'var(--font-tech)', fontSize: '0.65rem', color: trendColor, letterSpacing: '0.2em' }}>{trendText.toUpperCase()}</div>
                </div>

                <div className='impact-meter'>
                    <div className={`impact-arrow ${arrowType}`}>{arrowSymbol}</div>
                    <div className='impact-value'>
                        <span className='impact-delta' style={{ color: trendColor }}>{Math.abs(diff).toFixed(4)}</span>
                        {hasCourses && <span className='impact-label' style={{ marginTop: '0.25rem', color: trendColor, opacity: 0.8 }}>{impactLabel}</span>}
                        {!hasCourses && <span className='impact-label'>{TEXT.LABELS.IMPACT}</span>}
                    </div>
                </div>

                {hasCourses && (
                    <div style={{ marginBottom: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', borderLeft: `2px solid ${trendColor}` }}>
                        <div style={{ fontSize: '0.65rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{TEXT.LABELS.ANALYSIS}</div>
                        <p style={{ margin: 0, fontSize: '0.8rem', lineHeight: '1.5', color: '#e2e8f0', marginBottom: '0.5rem' }}>
                            {analysisIntro} <span style={{ opacity: 0.6 }}>{contextNote}</span>
                        </p>
                        <p style={{ margin: 0, fontSize: '0.8rem', lineHeight: '1.5', color: 'var(--accent-cyan)', fontStyle: 'italic' }}>
                            Tip: {analysisNextStep}
                        </p>
                    </div>
                )}

                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div className="hud-stat">
                        <span style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase' }}>{TEXT.LABELS.TOTAL_CREDITS}</span>
                        <span className="stat-val" style={{ fontSize: '1rem' }}>{result.totalValidCredits}</span>
                    </div>
                    <div className="hud-stat">
                        <span style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase' }}>{TEXT.LABELS.QUALITY_POINTS}</span>
                        <span className="stat-val" style={{ color: 'var(--accent-cyan)', fontSize: '1rem' }}><AnimatedValue value={result.totalGradePoints} decimals={1} /></span>
                    </div>
                </div>

                {hasCourses && (
                    <div className="transparency-trigger" onClick={() => setShowTransparency(!showTransparency)} style={{ marginBottom: showTransparency ? '0.5rem' : '3rem' }}>
                        <span className="transparency-text">{showTransparency ? "Hide details" : TEXT.TRANSPARENCY.TRIGGER}</span>
                    </div>
                )}

                {showTransparency && hasCourses && (
                    <div style={{ marginTop: '0.5rem', marginBottom: '3rem', padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', fontSize: '0.7rem', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ color: 'white', fontFamily: 'var(--font-tech)', marginBottom: '0.5rem' }}>{TEXT.TRANSPARENCY.TITLE}</div>
                        <div style={{ marginBottom: '0.5rem' }}>
                            <div style={{ color: 'var(--accent-cyan)' }}>{TEXT.TRANSPARENCY.SECTION_BASELINE}</div>
                            <div>{TEXT.LABELS.CURRENT_CGPA}: {baselineCGPA.toFixed(4)}</div>
                            <div>{TEXT.TRANSPARENCY.LABEL_CREDITS}: {baselineCredits}</div>
                            <div>→ {TEXT.TRANSPARENCY.LABEL_POINTS}: {baselinePoints.toFixed(2)}</div>
                        </div>
                        {scenarioCredits > 0 && (
                            <div style={{ marginBottom: '0.5rem' }}>
                                <div style={{ color: 'var(--accent-cyan)' }}>{TEXT.TRANSPARENCY.SECTION_SCENARIO}</div>
                                {courses.map(c => (
                                    <div key={c.id} style={{ paddingLeft: '0.5rem', borderLeft: '1px solid #334155' }}>
                                        {c.code || "Course"}: {c.credits}cr × {currentPolicy?.gradingScale.find(g => g.grade === c.grade)?.point.toFixed(2)} ({c.grade})
                                    </div>
                                ))}
                                <div>→ {TEXT.TRANSPARENCY.LABEL_POINTS}: {scenarioPoints.toFixed(2)}</div>
                            </div>
                        )}
                        <div style={{ marginBottom: '0.5rem' }}>
                            <div style={{ color: 'var(--accent-cyan)' }}>{TEXT.TRANSPARENCY.SECTION_AGGREGATION}</div>
                            {baselinePoints.toFixed(2)} + {scenarioPoints.toFixed(2)} = {result.totalGradePoints.toFixed(2)} pts
                        </div>
                        <div style={{ borderTop: '1px dashed #334155', paddingTop: '0.5rem', marginTop: '0.5rem' }}>
                            <div style={{ color: 'white' }}>{TEXT.TRANSPARENCY.SECTION_RESULT}</div>
                            {result.totalGradePoints.toFixed(2)} ÷ {result.totalValidCredits} = <span style={{ color: 'var(--accent-cyan)' }}>{result.cgpa.toFixed(4)}</span>
                        </div>
                        <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ color: 'white', fontFamily: 'var(--font-tech)', marginBottom: '0.5rem' }}>{TEXT.TRANSPARENCY.GRADING_SCALE_TITLE}</div>
                            <div style={{ color: 'var(--accent-cyan)', fontSize: '0.8rem', marginBottom: '0.75rem', fontWeight: 600 }}>
                                {currentPolicy?.name}
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.25rem' }}>
                                {currentPolicy?.gradingScale.map(g => (
                                    <div key={g.grade}>{g.grade} = {g.point.toFixed(4)}</div>
                                ))}
                            </div>
                            <div style={{ marginTop: '0.5rem', fontStyle: 'italic', opacity: 0.6 }}>{TEXT.TRANSPARENCY.NOTE}</div>
                        </div>
                    </div>
                )}

                {targetSet && (
                    <div className="impact-card">
                        <div className="impact-card-label">
                            <span>{TEXT.LABELS.GOAL}: {targetVal.toFixed(2)}</span>
                            <span>{distToTarget <= 0 ? TEXT.LABELS.ACHIEVED : TEXT.LABELS.IN_PROGRESS}</span>
                        </div>
                        <div style={{ height: '4px', width: '100%', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', marginTop: '0.5rem', overflow: 'hidden' }}>
                            <div style={{ height: '100%', width: `${Math.min(100, (result.cgpa / targetVal) * 100)}%`, background: distToTarget <= 0 ? '#22d3ee' : '#c084fc', transition: 'all 0.5s' }}></div>
                        </div>
                        {distToTarget > 0 && <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '0.5rem', textAlign: 'right' }}>-{distToTarget.toFixed(4)} to go</div>}
                    </div>
                )}

                {/* MOBILE FOOTER (Visible only on mobile/tablet) */}
                <div className="mobile-footer" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-glass)', fontSize: '0.85rem', color: '#94a3b8', textAlign: 'center', lineHeight: '1.6', width: '100%' }}>
                    <div style={{ marginBottom: '0.75rem' }}>
                        <span style={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em', marginRight: '0.5rem', opacity: 0.8 }}>Disclaimer:</span>
                        {TEXT.FOOTER.DISCLAIMER}
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                        <span className="footer-link" onClick={() => setShowAboutModal(true)}>{TEXT.FOOTER.CONTACT}</span>
                        <span className="footer-link" onClick={() => setShowLegalModal(true)}>Legal & Privacy</span>
                    </div>
                </div>
            </aside>
        </div>
    );
};
