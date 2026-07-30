import type { University } from '../../types';
import { SMU_HONORS } from '../honors';

/**
 * Singapore Management University.
 * Source: commonly published SMU GPA table (A+ = 4.3 on a US-style scale).
 * Confirm against your school handbook for any programme-specific caps.
 */
const pack: University = {
    id: 'smu',
    name: 'Singapore Management University',
    shortName: 'SMU',
    country: 'Singapore',
    type: 'Public',
    imageUrl: '/logo.svg',
    policies: [
        {
            id: 'pol_smu_4pt',
            universityId: 'smu',
            name: 'SMU GPA scale (A+ = 4.3)',
            academicYearLabel: 'Current',
            effectiveFrom: '2015-01-01',
            repeatPolicy: 'LatestAttempt',
            roundingPrecision: 2,
            maxCGPA: 4.3,
            honors: SMU_HONORS,
            gradingScale: [
                { grade: 'A+', point: 4.30 },
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
