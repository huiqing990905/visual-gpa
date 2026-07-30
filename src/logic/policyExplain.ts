import type { AcademicPolicy, PolicyExplanation, RepeatPolicyType, University } from '../types';

const REPEAT_LABELS: Record<RepeatPolicyType, string> = {
    LatestAttempt: 'Latest attempt counts',
    BestAttempt: 'Best attempt counts',
    Average: 'Average of attempts',
};

/**
 * Build a transparent, UI-ready summary of which policy rules are active.
 * Pure function — no DOM / storage side effects.
 */
export function explainPolicy(
    university: University,
    policy: AcademicPolicy
): PolicyExplanation {
    const repeatPolicy: RepeatPolicyType = policy.repeatPolicy ?? 'LatestAttempt';
    const roundingPrecision = policy.roundingPrecision ?? 4;
    const maxCGPA = policy.maxCGPA ?? 4.0;
    const scaleTop = Math.max(...policy.gradingScale.map(g => g.point), 0);
    const scaleBottom = Math.min(...policy.gradingScale.map(g => g.point));
    const scaleSummary = `${policy.gradingScale.length} grades · ${scaleBottom.toFixed(2)}–${scaleTop.toFixed(2)}`;

    const rules: PolicyExplanation['rules'] = [
        { key: 'university', label: 'University', value: university.shortName || university.name },
        { key: 'policy', label: 'Policy', value: policy.name },
        {
            key: 'version',
            label: 'Version',
            value: policy.academicYearLabel || 'Unlabeled',
        },
        {
            key: 'effective',
            label: 'Valid range',
            value: policy.effectiveFrom
                ? `${policy.effectiveFrom.slice(0, 10)} → ${policy.effectiveTo ? policy.effectiveTo.slice(0, 10) : 'present'}`
                : 'Not specified',
        },
        { key: 'repeat', label: 'Repeat rule', value: REPEAT_LABELS[repeatPolicy] },
        { key: 'rounding', label: 'Rounding', value: `${roundingPrecision} decimal place(s)` },
        { key: 'scale', label: 'Grading scale', value: scaleSummary },
        { key: 'max', label: 'Max CGPA', value: maxCGPA.toFixed(2) },
        {
            key: 'honors',
            label: 'Honors bands',
            value: policy.honors?.length
                ? `${policy.honors.length} configured`
                : 'Not configured',
        },
    ];

    return {
        universityId: university.id,
        universityName: university.name,
        policyId: policy.id,
        policyName: policy.name,
        effectiveFrom: policy.effectiveFrom,
        repeatPolicy,
        repeatPolicyLabel: REPEAT_LABELS[repeatPolicy],
        roundingPrecision,
        maxCGPA,
        scaleSummary,
        honorsConfigured: Boolean(policy.honors?.length),
        rules,
    };
}
