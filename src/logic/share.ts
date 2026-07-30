import type {
    AcademicPolicy,
    ScenarioPlan,
    SharePlanSummary,
    ShareSummary,
    University,
} from '../types';
import { calculateProjectedCGPA } from './calculator';
import { getClassification } from './classification';
import { snapshotPolicy } from './policyResolve';
import { sumCourseCredits } from './target';

/** Build a privacy-safe share summary (no grades / course codes). */
export function buildShareSummary(input: {
    university: University;
    policy: AcademicPolicy;
    baselineCgpa: number;
    baselineCredits: number;
    targetCgpa?: number;
    scenarios: ScenarioPlan[];
}): ShareSummary {
    const { university, policy, baselineCgpa, baselineCredits, targetCgpa, scenarios } = input;

    const plans: SharePlanSummary[] = scenarios.map(plan => {
        const result = calculateProjectedCGPA(baselineCgpa, baselineCredits, plan.courses, policy);
        const band = getClassification(result.cgpa, policy);
        return {
            name: plan.name,
            courseCount: plan.courses.length,
            plannedCredits: sumCourseCredits(plan.courses),
            projectedCgpa: result.cgpa,
            classification: band?.title,
        };
    });

    return {
        v: 1,
        universityId: university.id,
        universityName: university.shortName || university.name,
        policy: snapshotPolicy(policy),
        baseline: { cgpa: baselineCgpa, credits: baselineCredits },
        targetCgpa,
        plans,
        createdAt: new Date().toISOString(),
    };
}

function toBase64Url(json: string): string {
    const bytes = new TextEncoder().encode(json);
    let binary = '';
    bytes.forEach(b => { binary += String.fromCharCode(b); });
    const b64 = typeof btoa !== 'undefined'
        ? btoa(binary)
        : Buffer.from(bytes).toString('base64');
    return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64Url(token: string): string {
    const padded = token.replace(/-/g, '+').replace(/_/g, '/');
    const pad = padded.length % 4 === 0 ? '' : '='.repeat(4 - (padded.length % 4));
    const b64 = padded + pad;
    const binary = typeof atob !== 'undefined'
        ? atob(b64)
        : Buffer.from(b64, 'base64').toString('binary');
    const bytes = Uint8Array.from(binary, c => c.charCodeAt(0));
    return new TextDecoder().decode(bytes);
}

/** Encode share summary into a compact URL token. */
export function encodeShareToken(summary: ShareSummary): string {
    return toBase64Url(JSON.stringify(summary));
}

export type DecodeShareResult =
    | { ok: true; summary: ShareSummary }
    | { ok: false; error: string };

export function decodeShareToken(token: string): DecodeShareResult {
    try {
        const json = fromBase64Url(token);
        const data = JSON.parse(json) as ShareSummary;
        if (!data || data.v !== 1 || !Array.isArray(data.plans)) {
            return { ok: false, error: 'Unsupported share format.' };
        }
        // Privacy guard: reject payloads that look like transcript course lists.
        // (gradingScale items legitimately use a "grade" key for letter→point maps.)
        if (/"courses"\s*:/.test(json) || /"semester"\s*:/.test(json)) {
            return { ok: false, error: 'Share link appears to contain grade data and was blocked.' };
        }
        return { ok: true, summary: data };
    } catch {
        return { ok: false, error: 'Could not decode share link.' };
    }
}

/** Build a full share URL using hash fragment (never sent to server logs as path). */
export function buildShareUrl(origin: string, uniId: string, token: string): string {
    const base = origin.replace(/\/$/, '');
    return `${base}/${uniId}#share=${token}`;
}

/** Extract share token from location.hash (`#share=...`). */
export function readShareTokenFromHash(hash: string): string | null {
    const cleaned = hash.startsWith('#') ? hash.slice(1) : hash;
    const params = new URLSearchParams(cleaned);
    return params.get('share');
}
