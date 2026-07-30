import { describe, expect, it } from 'vitest';
import { calculateCGPA, calculateProjectedCGPA } from './calculator';
import type { AcademicPolicy, Course } from '../types';

const policy: AcademicPolicy = {
    id: 't',
    name: 'Test',
    repeatPolicy: 'LatestAttempt',
    roundingPrecision: 4,
    maxCGPA: 4,
    gradingScale: [
        { grade: 'A', point: 4 },
        { grade: 'B', point: 3 },
        { grade: 'C', point: 2 },
        { grade: 'F', point: 0 },
    ],
};

const course = (partial: Partial<Course> & Pick<Course, 'id' | 'grade' | 'credits'>): Course => ({
    code: '',
    name: '',
    semester: '2024-S1',
    ...partial,
});

describe('calculateCGPA', () => {
    it('computes weighted average', () => {
        const result = calculateCGPA([
            course({ id: '1', grade: 'A', credits: 4 }),
            course({ id: '2', grade: 'B', credits: 2 }),
        ], policy);
        // (16 + 6) / 6 = 3.6667
        expect(result.cgpa).toBeCloseTo(3.6667, 4);
        expect(result.totalValidCredits).toBe(6);
    });

    it('keeps latest attempt for repeats', () => {
        const result = calculateCGPA([
            course({ id: '1', code: 'CS101', grade: 'C', credits: 3, semester: '2023' }),
            course({ id: '2', code: 'CS101', grade: 'A', credits: 3, semester: '2024' }),
        ], policy);
        expect(result.cgpa).toBe(4);
        expect(result.processedCourses.filter(c => c.isRepeat)).toHaveLength(1);
    });

    it('keeps best attempt when policy says so', () => {
        const bestPolicy = { ...policy, repeatPolicy: 'BestAttempt' as const };
        const result = calculateCGPA([
            course({ id: '1', code: 'CS101', grade: 'A', credits: 3, semester: '2023' }),
            course({ id: '2', code: 'CS101', grade: 'C', credits: 3, semester: '2024' }),
        ], bestPolicy);
        expect(result.cgpa).toBe(4);
    });
});

describe('calculateProjectedCGPA', () => {
    it('blends baseline with new semester', () => {
        const result = calculateProjectedCGPA(3.0, 10, [
            course({ id: '1', grade: 'A', credits: 10 }),
        ], policy);
        // (30 + 40) / 20 = 3.5
        expect(result.cgpa).toBe(3.5);
    });
});
