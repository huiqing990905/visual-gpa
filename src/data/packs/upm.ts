import type { University } from '../../types';
import { UPM_HONORS } from '../honors';

/**
 * Universiti Putra Malaysia.
 * Source: UPM undergraduate academic briefing / marking & grading table
 * (A- = 3.750, B+ = 3.500 — differs from many MY public unis).
 */
const pack: University = {
    id: 'upm',
    name: 'Universiti Putra Malaysia',
    shortName: 'UPM',
    country: 'Malaysia',
    type: 'Public',
    imageUrl: '/logo.svg',
    policies: [
        {
            id: 'pol_upm_ug',
            universityId: 'upm',
            name: 'UPM undergraduate grading',
            academicYearLabel: '2014–present',
            effectiveFrom: '2014-01-01',
            repeatPolicy: 'LatestAttempt',
            roundingPrecision: 3,
            maxCGPA: 4.0,
            honors: UPM_HONORS,
            gradingScale: [
                { grade: 'A', point: 4.000 },
                { grade: 'A-', point: 3.750 },
                { grade: 'B+', point: 3.500 },
                { grade: 'B', point: 3.000 },
                { grade: 'B-', point: 2.750 },
                { grade: 'C+', point: 2.500 },
                { grade: 'C', point: 2.000 },
                { grade: 'C-', point: 1.750 },
                { grade: 'D+', point: 1.500 },
                { grade: 'D', point: 1.000 },
                { grade: 'F', point: 0.000 },
            ],
        },
    ],
};

export default pack;
