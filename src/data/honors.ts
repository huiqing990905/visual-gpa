import type { HonorsBand } from '../types';

/**
 * Per-university honors / award classification bands.
 * Prefer official handbook / exam-reg pages over a single Malaysia-wide guess.
 */

/** Generic Malaysian UG bands — only for custom / demo when no pack-specific table exists. */
export const MY_UG_HONORS: HonorsBand[] = [
    { title: 'First Class Honours', minCgpa: 3.70, description: 'Indicative only · confirm with your university' },
    { title: 'Second Class Upper', minCgpa: 3.00, maxCgpa: 3.70, description: 'Indicative only · confirm with your university' },
    { title: 'Second Class Lower', minCgpa: 2.30, maxCgpa: 3.00, description: 'Indicative only · confirm with your university' },
    { title: 'Third Class', minCgpa: 2.00, maxCgpa: 2.30, description: 'Indicative only · confirm with your university' },
    { title: 'Pass', minCgpa: 0, maxCgpa: 2.00, description: 'Below third-class threshold' },
];

/** TAR UMT / TAR UC bachelor award classification (official exam regulations). */
export const TARUMT_HONORS: HonorsBand[] = [
    { title: 'Honours Degree with Distinction', minCgpa: 3.75, description: 'CGPA 3.7500 – 4.0000' },
    { title: 'Honours Degree with Merit', minCgpa: 2.75, maxCgpa: 3.75, description: 'CGPA 2.7500 – 3.7499' },
    { title: 'Honours Degree', minCgpa: 2.00, maxCgpa: 2.75, description: 'CGPA 2.0000 – 2.7499' },
];

/**
 * UTAR undergraduate classification from January 2011 intake onwards
 * (DEAS Classification of Degree; First Class cut-off is 3.50).
 */
export const UTAR_HONORS_2011: HonorsBand[] = [
    { title: 'First Class Honours', minCgpa: 3.50, description: 'CGPA ≥ 3.50 (Jan 2011 intake onwards)' },
    { title: 'Second Class Upper', minCgpa: 3.00, maxCgpa: 3.50, description: 'CGPA 3.00 – 3.49' },
    { title: 'Second Class Lower', minCgpa: 2.50, maxCgpa: 3.00, description: 'CGPA 2.50 – 2.99' },
    { title: 'Third Class', minCgpa: 2.00, maxCgpa: 2.50, description: 'CGPA 2.00 – 2.49' },
];

/**
 * Sunway University bachelor award classification (Aug 2019 intake onwards).
 * Source: Sunway University Academic Regulations.
 */
export const SUNWAY_HONORS: HonorsBand[] = [
    { title: 'Distinction', minCgpa: 3.50, description: 'CGPA 3.50 – 4.00' },
    { title: 'High Merit', minCgpa: 3.00, maxCgpa: 3.50, description: 'CGPA 3.00 – 3.49' },
    { title: 'Merit', minCgpa: 2.50, maxCgpa: 3.00, description: 'CGPA 2.50 – 2.99' },
    { title: 'Pass', minCgpa: 2.00, maxCgpa: 2.50, description: 'CGPA 2.00 – 2.49' },
];

/**
 * Taylor's University bachelor award classification (Jan 2021 intakes: based on WCGPA).
 * Source: Taylor's Exam and Results page.
 */
export const TAYLORS_BACHELOR_HONORS: HonorsBand[] = [
    { title: 'First Class Honours', minCgpa: 3.67, description: 'WCGPA/CGPA 3.67 – 4.00' },
    { title: 'Second Class Upper Honours', minCgpa: 3.00, maxCgpa: 3.67, description: 'WCGPA/CGPA 3.00 – 3.66' },
    { title: 'Second Class Lower Honours', minCgpa: 2.67, maxCgpa: 3.00, description: 'WCGPA/CGPA 2.67 – 2.99' },
    { title: 'Third Class Honours', minCgpa: 2.00, maxCgpa: 2.67, description: 'WCGPA/CGPA 2.00 – 2.66' },
];

/**
 * Universiti Malaya — Pass with Honours (With Distinction) at CGPA ≥ 3.70
 * (Faculty handbooks / bachelor regulations). Other cut-offs are indicative MQF-style bands.
 */
export const UM_HONORS: HonorsBand[] = [
    { title: 'Honours with Distinction', minCgpa: 3.70, description: 'CGPA ≥ 3.70 · additional faculty conditions may apply' },
    { title: 'Second Class Upper', minCgpa: 3.00, maxCgpa: 3.70, description: 'CGPA 3.00 – 3.69 (indicative)' },
    { title: 'Second Class Lower', minCgpa: 2.50, maxCgpa: 3.00, description: 'CGPA 2.50 – 2.99 (indicative)' },
    { title: 'Pass with Honours', minCgpa: 2.00, maxCgpa: 2.50, description: 'CGPA 2.00 – 2.49 · minimum for honours award' },
];

/** UPM undergraduate classification (faculty briefing materials). */
export const UPM_HONORS: HonorsBand[] = [
    { title: 'First Class Honours', minCgpa: 3.75, description: 'CGPA 3.750 – 4.000' },
    { title: 'Second Class Upper', minCgpa: 3.00, maxCgpa: 3.75, description: 'CGPA 3.000 – 3.749' },
    { title: 'Second Class Lower', minCgpa: 2.25, maxCgpa: 3.00, description: 'CGPA 2.250 – 2.999' },
    { title: 'Third Class Honours', minCgpa: 2.00, maxCgpa: 2.25, description: 'CGPA 2.000 – 2.249' },
];

/** MMU — commonly cited faculty thresholds (confirm programme handbook). */
export const MMU_HONORS: HonorsBand[] = [
    { title: 'First Class Honours', minCgpa: 3.50, description: 'Typically CGPA ≥ 3.50 · confirm faculty' },
    { title: 'Second Class Upper', minCgpa: 3.00, maxCgpa: 3.50, description: 'CGPA 3.00 – 3.49' },
    { title: 'Second Class Lower', minCgpa: 2.50, maxCgpa: 3.00, description: 'CGPA 2.50 – 2.99' },
    { title: 'Third Class', minCgpa: 2.00, maxCgpa: 2.50, description: 'CGPA 2.00 – 2.49' },
];

/** NUS / NTU honours degree classification on the 5.0 CAP/CGPA scale. */
export const SG_5_HONORS: HonorsBand[] = [
    { title: 'Honours (Highest Distinction)', minCgpa: 4.50, description: 'CAP/CGPA 4.50 – 5.00' },
    { title: 'Honours (Distinction)', minCgpa: 4.00, maxCgpa: 4.50, description: 'CAP/CGPA 4.00 – 4.49' },
    { title: 'Honours (Merit)', minCgpa: 3.50, maxCgpa: 4.00, description: 'CAP/CGPA 3.50 – 3.99' },
    { title: 'Honours', minCgpa: 3.00, maxCgpa: 3.50, description: 'CAP/CGPA 3.00 – 3.49' },
    { title: 'Pass', minCgpa: 2.00, maxCgpa: 3.00, description: 'CAP/CGPA 2.00 – 2.99' },
];

/** SMU Latin honours on the 4.3 GPA scale. */
export const SMU_HONORS: HonorsBand[] = [
    { title: 'Summa Cum Laude', minCgpa: 3.80, description: 'GPA 3.80 – 4.00+' },
    { title: 'Magna Cum Laude', minCgpa: 3.60, maxCgpa: 3.80, description: 'GPA 3.60 – 3.79' },
    { title: 'Cum Laude', minCgpa: 3.40, maxCgpa: 3.60, description: 'GPA 3.40 – 3.59' },
    { title: 'High Merit', minCgpa: 3.20, maxCgpa: 3.40, description: 'GPA 3.20 – 3.39' },
    { title: 'Merit', minCgpa: 3.00, maxCgpa: 3.20, description: 'GPA 3.00 – 3.19' },
];
