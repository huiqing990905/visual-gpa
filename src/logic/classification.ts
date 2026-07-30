import type { AcademicPolicy, HonorsBand } from '../types';

/**
 * Resolve the honors / classification band for a given CGPA under a policy.
 * Bands are evaluated highest-min first so overlapping configs stay deterministic.
 */
export function getClassification(
    cgpa: number,
    policy: AcademicPolicy | undefined
): HonorsBand | null {
    const bands = policy?.honors;
    if (!bands || bands.length === 0 || Number.isNaN(cgpa)) return null;

    const sorted = [...bands].sort((a, b) => b.minCgpa - a.minCgpa);
    for (const band of sorted) {
        const aboveMin = cgpa >= band.minCgpa;
        const belowMax = band.maxCgpa === undefined || cgpa < band.maxCgpa;
        if (aboveMin && belowMax) return band;
    }
    return null;
}

/** Distance (positive = still need to climb) to the next higher band. */
export function distanceToNextBand(
    cgpa: number,
    policy: AcademicPolicy | undefined
): { next: HonorsBand; gap: number } | null {
    const bands = policy?.honors;
    if (!bands || bands.length === 0) return null;

    const sorted = [...bands].sort((a, b) => a.minCgpa - b.minCgpa);
    for (const band of sorted) {
        if (cgpa < band.minCgpa) {
            return { next: band, gap: band.minCgpa - cgpa };
        }
    }
    return null;
}
