'use client';

import { useCallback, useEffect, useState } from 'react';
import type { AcademicPolicy, Course, ExportBundle, PolicySnapshot, ScenarioPlan, University } from '../types';
import { getUniversity } from '../data/registry';
import { MY_UG_HONORS } from '../data/honors';
import { policyFromSnapshot } from '../logic/policyResolve';

function newId(): string {
    return Math.random().toString(36).slice(2, 11);
}

export function makePlan(name: string, courses: Course[] = []): ScenarioPlan {
    return { id: newId(), name, courses };
}

const SAMPLE_COURSES: Course[] = [
    { id: 's1', code: 'CS101', name: 'Intro to Comp Sci', credits: 4, grade: 'A', semester: 'Y1S1' },
    { id: 's2', code: 'MATH101', name: 'Calculus I', credits: 4, grade: 'B+', semester: 'Y1S1' },
    { id: 's3', code: 'ENG102', name: 'Academic English', credits: 3, grade: 'A-', semester: 'Y1S1' },
    { id: 's4', code: 'CS102', name: 'Data Structures', credits: 4, grade: 'B', semester: 'Y1S2' },
    { id: 's5', code: 'STAT201', name: 'Statistics', credits: 3, grade: 'A', semester: 'Y1S2' },
];

export const SAMPLE_UNI: University = {
    id: '__sample__',
    name: 'Sample University',
    shortName: 'Demo',
    country: 'Global',
    type: 'Public',
    imageUrl: '/custom_mode.png',
    policies: [{
        id: 'pol_sample',
        name: 'Standard 4.0 Scale',
        academicYearLabel: 'Demo',
        repeatPolicy: 'LatestAttempt',
        roundingPrecision: 4,
        maxCGPA: 4.0,
        honors: MY_UG_HONORS,
        gradingScale: [
            { grade: 'A', point: 4.0 }, { grade: 'A-', point: 3.7 }, { grade: 'B+', point: 3.3 },
            { grade: 'B', point: 3.0 }, { grade: 'B-', point: 2.7 }, { grade: 'C+', point: 2.3 },
            { grade: 'C', point: 2.0 }, { grade: 'F', point: 0.0 },
        ],
    }],
};

export function resolveUniversity(uniId: string): University | undefined {
    if (uniId === 'demo' || uniId === '__sample__') return SAMPLE_UNI;
    return getUniversity(uniId);
}

/**
 * Workspace state + persistence. Keeps the page component focused on presentation.
 */
export function useWorkspaceState(uniId: string) {
    const isSample = uniId === 'demo' || uniId === '__sample__';
    const currentUni = resolveUniversity(uniId);

    const initialPlan = isSample
        ? makePlan('Optimistic', SAMPLE_COURSES)
        : makePlan('Plan A', []);

    const [scenarios, setScenarios] = useState<ScenarioPlan[]>([initialPlan]);
    const [activeScenarioId, setActiveScenarioId] = useState<string>(initialPlan.id);
    const [currentCGPA, setCurrentCGPA] = useState<string>(isSample ? '3.42' : '');
    const [currentTotalCredits, setCurrentTotalCredits] = useState<string>(isSample ? '18' : '');
    const [targetCGPA, setTargetCGPA] = useState<string>(isSample ? '3.60' : '');
    const [activePolicyId, setActivePolicyId] = useState<string>('');
    const [customGradingScale, setCustomGradingScale] = useState<{ grade: string; point: number }[]>(
        [{ grade: 'A', point: 4.0 }, { grade: 'B', point: 3.0 }, { grade: 'C', point: 2.0 }, { grade: 'F', point: 0.0 }]
    );
    /** When set, calculations use this frozen policy instead of the live pack. */
    const [policySnapshot, setPolicySnapshot] = useState<PolicySnapshot | null>(null);
    const [storageReady, setStorageReady] = useState(isSample);
    const [mounted, setMounted] = useState(false);

    const activeScenario = scenarios.find(s => s.id === activeScenarioId) ?? scenarios[0];
    const courses = activeScenario?.courses ?? [];

    const setCourses = useCallback((next: Course[] | ((prev: Course[]) => Course[])) => {
        setScenarios(prev => {
            const id = activeScenarioId || prev[0]?.id;
            return prev.map(s => {
                if (s.id !== id) return s;
                const coursesNext = typeof next === 'function' ? next(s.courses) : next;
                return { ...s, courses: coursesNext };
            });
        });
    }, [activeScenarioId]);

    useEffect(() => { setMounted(true); }, []);

    useEffect(() => {
        if (isSample) return;
        try {
            const savedBundle = localStorage.getItem('visualgpa_bundle');
            if (savedBundle) {
                const parsed = JSON.parse(savedBundle) as {
                    scenarios?: ScenarioPlan[];
                    activeScenarioId?: string;
                    baseline?: { cgpa?: number; credits?: number };
                    targetCgpa?: number;
                    policyId?: string;
                    policySnapshot?: PolicySnapshot;
                };
                if (parsed.scenarios?.length) {
                    setScenarios(parsed.scenarios);
                    setActiveScenarioId(parsed.activeScenarioId || parsed.scenarios[0].id);
                }
                if (parsed.baseline) {
                    if (parsed.baseline.cgpa) setCurrentCGPA(String(parsed.baseline.cgpa));
                    if (parsed.baseline.credits) setCurrentTotalCredits(String(parsed.baseline.credits));
                }
                if (parsed.targetCgpa) setTargetCGPA(String(parsed.targetCgpa));
                if (parsed.policyId) setActivePolicyId(parsed.policyId);
                if (parsed.policySnapshot?.policyId && parsed.policySnapshot.gradingScale) {
                    setPolicySnapshot(parsed.policySnapshot);
                }
            } else {
                const savedCourses = localStorage.getItem('visualgpa_courses');
                if (savedCourses) {
                    const list = JSON.parse(savedCourses) as Course[];
                    const plan = makePlan('Plan A', list);
                    setScenarios([plan]);
                    setActiveScenarioId(plan.id);
                }
            }
            const savedScale = localStorage.getItem('visualgpa_custom_scale');
            if (savedScale) setCustomGradingScale(JSON.parse(savedScale));
        } catch {
            // ignore corrupt storage
        }
        setStorageReady(true);
    }, [isSample]);

    useEffect(() => {
        if (isSample || !storageReady) return;
        const payload = {
            scenarios,
            activeScenarioId,
            baseline: {
                cgpa: parseFloat(currentCGPA) || 0,
                credits: parseFloat(currentTotalCredits) || 0,
            },
            targetCgpa: parseFloat(targetCGPA) || undefined,
            policyId: activePolicyId,
            policySnapshot,
        };
        localStorage.setItem('visualgpa_bundle', JSON.stringify(payload));
        localStorage.setItem('visualgpa_courses', JSON.stringify(courses));
    }, [scenarios, activeScenarioId, currentCGPA, currentTotalCredits, targetCGPA, activePolicyId, policySnapshot, courses, isSample, storageReady]);

    useEffect(() => {
        if (!isSample) localStorage.setItem('visualgpa_custom_scale', JSON.stringify(customGradingScale));
    }, [customGradingScale, isSample]);

    useEffect(() => {
        if (currentUni?.policies?.length) {
            setActivePolicyId(prev =>
                prev && currentUni.policies.some(p => p.id === prev)
                    ? prev
                    : currentUni.policies[0].id
            );
        }
    }, [currentUni]);

    // Switching live policy version clears an imported snapshot so the picker stays truthful
    const setActivePolicyIdAndClearSnapshot = (id: string) => {
        setPolicySnapshot(null);
        setActivePolicyId(id);
    };

    const isCustomMode = currentUni?.id === 'custom';
    const livePolicy = isCustomMode && currentUni
        ? {
            ...currentUni.policies[0],
            gradingScale: customGradingScale,
            maxCGPA: Math.max(...customGradingScale.map(g => g.point), 0) || 4.0,
        }
        : (currentUni?.policies.find(p => p.id === activePolicyId) || currentUni?.policies[0]);

    const snapshotPolicyAsAcademic: AcademicPolicy | null = policySnapshot
        ? policyFromSnapshot(policySnapshot)
        : null;

    const currentPolicy = snapshotPolicyAsAcademic ?? livePolicy;

    const maxCGPA = currentPolicy?.maxCGPA || 4.00;
    const gradeOptions = currentPolicy?.gradingScale.map(g => g.grade) || [];

    useEffect(() => {
        const val = parseFloat(currentCGPA);
        if (!isNaN(val) && val > maxCGPA) setCurrentCGPA(maxCGPA.toFixed(2));
        const tVal = parseFloat(targetCGPA);
        if (!isNaN(tVal) && tVal > maxCGPA) setTargetCGPA(maxCGPA.toFixed(2));
    }, [maxCGPA, currentCGPA, targetCGPA]);

    const handleAddScenario = () => {
        const plan = makePlan(`Plan ${String.fromCharCode(65 + scenarios.length)}`, []);
        setScenarios(prev => [...prev, plan]);
        setActiveScenarioId(plan.id);
    };

    const handleDuplicateScenario = (id: string) => {
        const source = scenarios.find(s => s.id === id);
        if (!source) return;
        const clone = makePlan(`${source.name} copy`, source.courses.map(c => ({ ...c, id: newId() })));
        setScenarios(prev => [...prev, clone]);
        setActiveScenarioId(clone.id);
    };

    const handleRemoveScenario = (id: string) => {
        if (scenarios.length <= 1) return;
        const next = scenarios.filter(s => s.id !== id);
        setScenarios(next);
        if (activeScenarioId === id) setActiveScenarioId(next[0].id);
    };

    const handleRenameScenario = (id: string, name: string) => {
        setScenarios(prev => prev.map(s => s.id === id ? { ...s, name } : s));
    };

    const confirmClearAll = () => {
        const fresh = makePlan('Plan A', []);
        setScenarios([fresh]);
        setActiveScenarioId(fresh.id);
        setPolicySnapshot(null);
    };

    const handleImportBundle = (bundle: ExportBundle) => {
        if (bundle.scenarios.length) {
            setScenarios(bundle.scenarios);
            setActiveScenarioId(bundle.activeScenarioId || bundle.scenarios[0].id);
        }
        if (bundle.baseline.cgpa) setCurrentCGPA(String(bundle.baseline.cgpa));
        if (bundle.baseline.credits) setCurrentTotalCredits(String(bundle.baseline.credits));
        if (bundle.targetCgpa) setTargetCGPA(String(bundle.targetCgpa));
        if (bundle.policyId && currentUni?.policies.some(p => p.id === bundle.policyId)) {
            setActivePolicyId(bundle.policyId);
        }
        if (bundle.customGradingScale?.length) {
            setCustomGradingScale(bundle.customGradingScale.map(g => ({ grade: g.grade, point: g.point })));
        }
        if (bundle.policySnapshot) {
            setPolicySnapshot(bundle.policySnapshot);
        }
    };

    const clearPolicySnapshot = () => setPolicySnapshot(null);

    return {
        isSample,
        currentUni,
        isCustomMode,
        currentPolicy,
        maxCGPA,
        gradeOptions,
        mounted,
        scenarios,
        activeScenarioId,
        setActiveScenarioId,
        activeScenario,
        courses,
        setCourses,
        currentCGPA,
        setCurrentCGPA,
        currentTotalCredits,
        setCurrentTotalCredits,
        targetCGPA,
        setTargetCGPA,
        activePolicyId,
        setActivePolicyId: setActivePolicyIdAndClearSnapshot,
        policySnapshot,
        clearPolicySnapshot,
        customGradingScale,
        setCustomGradingScale,
        handleAddScenario,
        handleDuplicateScenario,
        handleRemoveScenario,
        handleRenameScenario,
        confirmClearAll,
        handleImportBundle,
        handleImportCourses: (imported: Course[]) => setCourses(imported),
        newId,
    };
}
