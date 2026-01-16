import type { University } from '../types';

export const sampleUniversities: University[] = [
    {
        id: 'tarumt',
        name: 'Tunku Abdul Rahman University of Management and Technology',
        shortName: 'TAR UMT',
        country: 'Malaysia',
        type: 'Private',
        imageUrl: '/tarumt_campus.png',
        policies: [
            {
                id: 'pol_tarumt_1',
                universityId: 'tarumt',
                name: 'Standard Grading (Planning Mode)',
                effectiveFrom: '2024-01-01',
                repeatPolicy: 'LatestAttempt',
                roundingPrecision: 4,
                maxCGPA: 4.0,
                gradingScale: [
                    { grade: 'A', point: 4.0000 },
                    { grade: 'A-', point: 3.7500 },
                    { grade: 'B+', point: 3.5000 },
                    { grade: 'B', point: 3.0000 },
                    { grade: 'B-', point: 2.7500 },
                    { grade: 'C+', point: 2.5000 },
                    { grade: 'C', point: 2.0000 },
                    { grade: 'F', point: 0.0000 },
                ]
            }
        ]
    },
    {
        id: 'utar',
        name: 'Universiti Tunku Abdul Rahman',
        shortName: 'UTAR',
        country: 'Malaysia',
        type: 'Private',
        imageUrl: '/utar_campus.png', // Custom Illustration
        policies: [
            {
                id: 'pol_utar_std_2010',
                universityId: 'utar',
                name: 'Standard Grading (Jan 2010 Onwards)',
                effectiveFrom: '2010-01-01',
                repeatPolicy: 'LatestAttempt',
                roundingPrecision: 4,
                maxCGPA: 4.0,
                gradingScale: [
                    { grade: 'A+', point: 4.0000 },
                    { grade: 'A', point: 4.0000 },
                    { grade: 'A-', point: 3.6700 },
                    { grade: 'B+', point: 3.3300 },
                    { grade: 'B', point: 3.0000 },
                    { grade: 'B-', point: 2.6700 },
                    { grade: 'C+', point: 2.3300 },
                    { grade: 'C', point: 2.0000 },
                    { grade: 'F', point: 0.0000 },
                ]
            },
            {
                id: 'pol_utar_pre2010_ug',
                universityId: 'utar',
                name: 'Foundation/Undergraduate (Pre-2010)',
                effectiveFrom: '2000-01-01',
                repeatPolicy: 'LatestAttempt',
                roundingPrecision: 4,
                maxCGPA: 4.0,
                gradingScale: [
                    { grade: 'A', point: 4.0000 },
                    { grade: 'A-', point: 3.7000 },
                    { grade: 'B+', point: 3.3000 },
                    { grade: 'B', point: 3.0000 },
                    { grade: 'B-', point: 2.7000 },
                    { grade: 'C+', point: 2.3000 },
                    { grade: 'C', point: 2.0000 },
                    { grade: 'D', point: 1.0000 },
                    { grade: 'F', point: 0.0000 },
                ]
            },
            {
                id: 'pol_utar_pre2010_pg',
                universityId: 'utar',
                name: 'Postgraduate (Pre-2010)',
                effectiveFrom: '2000-01-01',
                repeatPolicy: 'LatestAttempt',
                roundingPrecision: 4,
                maxCGPA: 4.0,
                gradingScale: [
                    { grade: 'A', point: 4.0000 },
                    { grade: 'A-', point: 3.6700 },
                    { grade: 'B+', point: 3.3300 },
                    { grade: 'B', point: 3.0000 },
                    { grade: 'B-', point: 2.6700 },
                    { grade: 'C+', point: 2.3300 },
                    { grade: 'C', point: 2.0000 },
                    { grade: 'D', point: 1.0000 },
                    { grade: 'F', point: 0.0000 },
                ]
            }
        ]
    },
    {
        id: 'sunway',
        name: 'Sunway University',
        shortName: 'Sunway',
        country: 'Malaysia',
        type: 'Private',
        imageUrl: '/sunway_campus.png',
        policies: [
            {
                id: 'pol_sunway_1',
                name: 'Sunway 4.0 Scale',
                maxCGPA: 4.00,
                gradingScale: [
                    { grade: 'A', point: 4.00 },
                    { grade: 'A-', point: 3.70 },
                    { grade: 'B+', point: 3.30 },
                    { grade: 'B', point: 3.00 },
                    { grade: 'B-', point: 2.70 },
                    { grade: 'C+', point: 2.30 },
                    { grade: 'C', point: 2.00 },
                    { grade: 'F', point: 0.00 }
                ]
            }
        ]
    },
    {
        id: 'custom',
        name: 'Custom Architecture',
        country: 'Global',
        type: 'Public', // Generic
        imageUrl: '/custom_mode.png',
        policies: [
            {
                id: 'pol_custom_1',
                name: 'User Defined Scale',
                maxCGPA: 4.00,
                gradingScale: [
                    { grade: 'A', point: 4.00 },
                    { grade: 'B', point: 3.00 },
                    { grade: 'C', point: 2.00 },
                    { grade: 'D', point: 1.00 },
                    { grade: 'F', point: 0.00 }
                ]
            }
        ]
    }
];

export const sampleCourses = [
    { id: '1', code: 'AACS3013', name: 'Software Engineering', credits: 4, grade: 'B+', semester: '2024-S1' },
    { id: '2', code: 'AACS3074', name: 'Artificial Intelligence', credits: 4, grade: 'A-', semester: '2024-S1' },
];
