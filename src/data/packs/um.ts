import type { University } from '../../types';
import { UM_HONORS } from '../honors';

/**
 * Universiti Malaya.
 * Source: Faculty of Science Handbook 2024/2025 grading scheme;
 * UM (Bachelor's Degree) Regulations 2024.
 */
const pack: University = {
    id: 'um',
    name: 'Universiti Malaya',
    shortName: 'UM',
    country: 'Malaysia',
    type: 'Public',
    imageUrl: '/logo.svg',
    policies: [
        {
            id: 'pol_um_2024',
            universityId: 'um',
            name: 'UM grading scheme (AY 2024/2025)',
            academicYearLabel: '2024/2025–present',
            effectiveFrom: '2024-09-01',
            repeatPolicy: 'LatestAttempt',
            roundingPrecision: 2,
            maxCGPA: 4.0,
            honors: UM_HONORS,
            gradingScale: [
                { grade: 'A+', point: 4.00 },
                { grade: 'A', point: 4.00 },
                { grade: 'A-', point: 3.70 },
                { grade: 'B+', point: 3.30 },
                { grade: 'B', point: 3.00 },
                { grade: 'B-', point: 2.70 },
                { grade: 'C+', point: 2.30 },
                { grade: 'C', point: 2.00 },
                { grade: 'C-', point: 1.70 },
                { grade: 'D+', point: 1.30 },
                { grade: 'D', point: 1.00 },
                { grade: 'F', point: 0.00 },
            ],
        },
    ],
};

export default pack;
