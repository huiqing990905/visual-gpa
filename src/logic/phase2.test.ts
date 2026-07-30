import { describe, expect, it } from 'vitest';
import { solveRequiredAverage } from './target';
import { getClassification, distanceToNextBand } from './classification';
import { resolvePolicyAt, snapshotPolicy, policyFromSnapshot, isPolicyActiveOn } from './policyResolve';
import { buildShareSummary, encodeShareToken, decodeShareToken } from './share';
import { parseCoursesCsv, coursesToCsv, parseExportBundle, buildExportBundle, safeExportSlug, unsupportedImportReason, csvTemplate } from './io';
import { calculateProjectedCGPA } from './calculator';
import { getUniversity } from '../data/registry';
import type { AcademicPolicy } from '../types';
import { MY_UG_HONORS } from '../data/honors';

const policy: AcademicPolicy = {
    id: 't',
    name: 'Test',
    maxCGPA: 4,
    roundingPrecision: 4,
    gradingScale: [
        { grade: 'A', point: 4 },
        { grade: 'A-', point: 3.7 },
        { grade: 'B+', point: 3.3 },
        { grade: 'B', point: 3 },
        { grade: 'F', point: 0 },
    ],
    honors: MY_UG_HONORS,
};

describe('solveRequiredAverage', () => {
    it('solves required average for a reachable target', () => {
        const r = solveRequiredAverage({
            baselineCgpa: 3.42,
            baselineCredits: 18,
            plannedCredits: 15,
            targetCgpa: 3.6,
            policy,
        });
        expect(r.feasible).toBe(true);
        expect(r.requiredAverage).toBeCloseTo(3.816, 3);
        expect(r.suggestedGrade).toBe('A');
    });

    it('marks unreachable targets', () => {
        const r = solveRequiredAverage({
            baselineCgpa: 3.42,
            baselineCredits: 18,
            plannedCredits: 12,
            targetCgpa: 3.9,
            policy,
        });
        expect(r.feasible).toBe(false);
    });
});

describe('classification', () => {
    it('maps CGPA to honors band', () => {
        expect(getClassification(3.75, policy)?.title).toBe('First Class Honours');
        expect(getClassification(3.2, policy)?.title).toBe('Second Class Upper');
    });

    it('reports gap to next band', () => {
        const next = distanceToNextBand(3.2, policy);
        expect(next?.next.title).toBe('First Class Honours');
        expect(next?.gap).toBeCloseTo(0.5, 5);
    });
});

describe('policyResolve', () => {
    it('resolves UTAR policy by academic year', () => {
        const utar = getUniversity('utar')!;
        const pre = resolvePolicyAt(utar, '2009-06-01');
        const post = resolvePolicyAt(utar, '2015-01-01');
        expect(pre?.id).toMatch(/pre2010/);
        expect(post?.id).toBe('pol_utar_std_2010');
        expect(isPolicyActiveOn(post!, '2015-01-01')).toBe(true);
        expect(isPolicyActiveOn(pre!, '2015-01-01')).toBe(false);
    });

    it('round-trips policy snapshots for reproducibility', () => {
        const utar = getUniversity('utar')!;
        const live = resolvePolicyAt(utar, '2015-01-01')!;
        const snap = snapshotPolicy(live);
        const revived = policyFromSnapshot(snap);
        expect(revived.id).toBe(live.id);
        expect(revived.gradingScale).toEqual(live.gradingScale);
    });
});

describe('share', () => {
    it('encodes grade-free summaries and rejects grade payloads', () => {
        const uni = getUniversity('tarumt')!;
        const pol = uni.policies[0];
        const summary = buildShareSummary({
            university: uni,
            policy: pol,
            baselineCgpa: 3.2,
            baselineCredits: 60,
            scenarios: [{
                id: '1',
                name: 'Optimistic',
                courses: [
                    { id: 'c1', code: 'CS1', name: 'X', credits: 3, grade: 'A', semester: 'S1' },
                ],
            }],
        });

        expect(JSON.stringify(summary)).not.toMatch(/"courses"\s*:/);
        expect(summary.plans[0]).not.toHaveProperty('grade');
        const token = encodeShareToken(summary);
        const decoded = decodeShareToken(token);
        expect(decoded.ok).toBe(true);
        if (decoded.ok) {
            expect(decoded.summary.plans[0].projectedCgpa).toBeGreaterThan(3);
            expect(decoded.summary.policy.policyId).toBe(pol.id);
        }
    });
});

describe('io', () => {
    it('round-trips CSV courses', () => {
        const csv = coursesToCsv([
            { id: '1', code: 'CS101', name: 'Intro', credits: 3, grade: 'A', semester: 'Y1' },
        ]);
        const parsed = parseCoursesCsv(csv);
        expect(parsed.ok).toBe(true);
        if (parsed.ok) {
            expect(parsed.courses[0].grade).toBe('A');
            expect(parsed.courses[0].credits).toBe(3);
        }
    });

    it('parses export bundles', () => {
        const bundle = buildExportBundle({
            universityId: 'utar',
            policyId: 'pol_utar_std_2010',
            baselineCgpa: 3,
            baselineCredits: 30,
            scenarios: [{ id: 'a', name: 'Plan A', courses: [] }],
        });
        const parsed = parseExportBundle(JSON.stringify(bundle));
        expect(parsed.ok).toBe(true);
        if (parsed.ok) expect(parsed.bundle.universityId).toBe('utar');
    });

    it('embeds and restores a policy snapshot for reproducibility', () => {
        const uni = getUniversity('utar')!;
        const pol = uni.policies.find(p => p.id === 'pol_utar_std_2010')!;
        const bundle = buildExportBundle({
            universityId: 'utar',
            policyId: pol.id,
            baselineCgpa: 3.1,
            baselineCredits: 40,
            scenarios: [{
                id: 'a',
                name: 'Plan A',
                courses: [{ id: '1', code: 'CS', name: 'X', credits: 3, grade: 'A', semester: 'S1' }],
            }],
            policy: pol,
        });
        expect(bundle.policySnapshot?.policyId).toBe(pol.id);
        expect(bundle.policySnapshot?.gradingScale).toEqual(pol.gradingScale);

        const parsed = parseExportBundle(JSON.stringify(bundle));
        expect(parsed.ok).toBe(true);
        if (!parsed.ok) return;

        const revived = policyFromSnapshot(parsed.bundle.policySnapshot!);
        const liveResult = calculateProjectedCGPA(3.1, 40, bundle.scenarios[0].courses, pol);
        const snapResult = calculateProjectedCGPA(3.1, 40, bundle.scenarios[0].courses, revived);
        expect(snapResult.cgpa).toBe(liveResult.cgpa);
    });

    it('sanitizes export filenames and rejects unsupported uploads', () => {
        expect(safeExportSlug('__sample__')).toBe('sample');
        expect(safeExportSlug('TAR UMT')).toBe('tar-umt');
        expect(unsupportedImportReason('grades.xlsx')).toMatch(/Excel/i);
        expect(unsupportedImportReason('transcript.pdf')).toMatch(/PDF/i);
        expect(unsupportedImportReason('backup.json')).toBeNull();
        expect(csvTemplate()).toContain('code,name,credits,grade,semester');
    });
});
