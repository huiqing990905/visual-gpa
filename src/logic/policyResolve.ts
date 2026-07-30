import type { AcademicPolicy, PolicySnapshot, University } from '../types';

function toTime(iso?: string): number | null {
    if (!iso) return null;
    const t = Date.parse(iso);
    return Number.isNaN(t) ? null : t;
}

/** Whether a policy is in force on `asOf` (ISO date or Date). */
export function isPolicyActiveOn(policy: AcademicPolicy, asOf: string | Date): boolean {
    const at = typeof asOf === 'string' ? Date.parse(asOf) : asOf.getTime();
    if (Number.isNaN(at)) return false;

    const from = toTime(policy.effectiveFrom);
    const to = toTime(policy.effectiveTo);

    if (from !== null && at < from) return false;
    if (to !== null && at >= to) return false;
    return true;
}

/**
 * Pick the best policy for a given date.
 * Preference: active on date → newest effectiveFrom among matches → first pack entry.
 */
export function resolvePolicyAt(
    university: University,
    asOf: string | Date = new Date()
): AcademicPolicy | undefined {
    const active = university.policies.filter(p => isPolicyActiveOn(p, asOf));
    if (active.length === 0) {
        // Fall back to latest by effectiveFrom, else first
        return [...university.policies].sort((a, b) => {
            const ta = toTime(a.effectiveFrom) ?? 0;
            const tb = toTime(b.effectiveFrom) ?? 0;
            return tb - ta;
        })[0];
    }

    return [...active].sort((a, b) => {
        const ta = toTime(a.effectiveFrom) ?? 0;
        const tb = toTime(b.effectiveFrom) ?? 0;
        return tb - ta;
    })[0];
}

export interface PolicyVersionRow {
    policy: AcademicPolicy;
    label: string;
    rangeLabel: string;
    isCurrent: boolean;
}

/** Sorted version list for UI pickers (newest first). */
export function listPolicyVersions(
    university: University,
    asOf: string | Date = new Date()
): PolicyVersionRow[] {
    const sorted = [...university.policies].sort((a, b) => {
        const ta = toTime(a.effectiveFrom) ?? 0;
        const tb = toTime(b.effectiveFrom) ?? 0;
        return tb - ta;
    });

    return sorted.map(policy => {
        const from = policy.effectiveFrom?.slice(0, 10) ?? '…';
        const to = policy.effectiveTo ? policy.effectiveTo.slice(0, 10) : 'present';
        return {
            policy,
            label: policy.academicYearLabel || policy.name,
            rangeLabel: `${from} → ${to}`,
            isCurrent: isPolicyActiveOn(policy, asOf),
        };
    });
}

/** Freeze the ruleset used for a result (reproducibility). */
export function snapshotPolicy(policy: AcademicPolicy): PolicySnapshot {
    return {
        policyId: policy.id,
        policyName: policy.name,
        universityId: policy.universityId,
        effectiveFrom: policy.effectiveFrom,
        effectiveTo: policy.effectiveTo,
        academicYearLabel: policy.academicYearLabel,
        repeatPolicy: policy.repeatPolicy ?? 'LatestAttempt',
        roundingPrecision: policy.roundingPrecision ?? 4,
        maxCGPA: policy.maxCGPA ?? 4.0,
        gradingScale: policy.gradingScale.map(g => ({ ...g })),
        honors: policy.honors?.map(h => ({ ...h })),
        snapshottedAt: new Date().toISOString(),
    };
}

/** Rehydrate a snapshot into an AcademicPolicy for recalculation. */
export function policyFromSnapshot(snapshot: PolicySnapshot): AcademicPolicy {
    return {
        id: snapshot.policyId,
        universityId: snapshot.universityId,
        name: snapshot.policyName,
        effectiveFrom: snapshot.effectiveFrom,
        effectiveTo: snapshot.effectiveTo,
        academicYearLabel: snapshot.academicYearLabel,
        repeatPolicy: snapshot.repeatPolicy,
        roundingPrecision: snapshot.roundingPrecision,
        maxCGPA: snapshot.maxCGPA,
        gradingScale: snapshot.gradingScale.map(g => ({ ...g })),
        honors: snapshot.honors?.map(h => ({ ...h })),
    };
}
