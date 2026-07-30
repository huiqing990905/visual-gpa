import type { University } from '../../types';
import { SG_5_HONORS } from '../honors';

/**
 * Nanyang Technological University.
 * Source: NTU Academic Handbook for Undergraduate Studies AY2025/26 — GPA system.
 */
const pack: University = {
    id: 'ntu',
    name: 'Nanyang Technological University',
    shortName: 'NTU',
    country: 'Singapore',
    type: 'Public',
    imageUrl: '/logo.svg',
    policies: [
        {
            id: 'pol_ntu_5pt',
            universityId: 'ntu',
            name: 'NTU CGPA grading system',
            academicYearLabel: 'AY2025/26',
            effectiveFrom: '2020-01-01',
            repeatPolicy: 'LatestAttempt',
            roundingPrecision: 2,
            maxCGPA: 5.0,
            honors: SG_5_HONORS,
            gradingScale: [
                { grade: 'A+', point: 5.00 },
                { grade: 'A', point: 5.00 },
                { grade: 'A-', point: 4.50 },
                { grade: 'B+', point: 4.00 },
                { grade: 'B', point: 3.50 },
                { grade: 'B-', point: 3.00 },
                { grade: 'C+', point: 2.50 },
                { grade: 'C', point: 2.00 },
                { grade: 'D+', point: 1.50 },
                { grade: 'D', point: 1.00 },
                { grade: 'F', point: 0.00 },
            ],
        },
    ],
};

export default pack;
