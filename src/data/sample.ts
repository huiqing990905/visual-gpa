/**
 * Compatibility facade — prefer importing from `./registry` for new code.
 * Existing routes keep working via this re-export.
 */
import type { Course } from '../types';
import { POLICY_PACKS } from './registry';

export const sampleUniversities = POLICY_PACKS;

export const sampleCourses: Course[] = [
    { id: '1', code: 'AACS3013', name: 'Software Engineering', credits: 4, grade: 'B+', semester: '2024-S1' },
    { id: '2', code: 'AACS3074', name: 'Artificial Intelligence', credits: 4, grade: 'A-', semester: '2024-S1' },
];
