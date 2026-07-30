import type { University } from '../../types';
import { TARUMT_HONORS } from '../honors';

/**
 * TAR UMT policy pack.
 *
 * Sources:
 * - Examination Regulations for Bachelor’s Degree Programmes (DECA/510), TAR UC/UMT
 * - Student Handbook 2023 (cohort-specific grading tables)
 *
 * Notes:
 * - Repeat: latest attempt counts (official regs C.8).
 * - Award classification uses Distinction / Merit / Honours — not First Class.
 * - July 2023 Y1S1 intake introduced a different grade-point table; older cohorts keep the legacy table.
 */
const pack: University = {
    id: 'tarumt',
    name: 'Tunku Abdul Rahman University of Management and Technology',
    shortName: 'TAR UMT',
    country: 'Malaysia',
    type: 'Private',
    imageUrl: '/tarumt_campus.png',
    policies: [
        {
            id: 'pol_tarumt_jul2023',
            universityId: 'tarumt',
            name: 'Bachelor grading (July 2023 Y1S1 intake onwards)',
            academicYearLabel: 'July 2023–present',
            effectiveFrom: '2023-07-01',
            repeatPolicy: 'LatestAttempt',
            roundingPrecision: 4,
            maxCGPA: 4.0,
            honors: TARUMT_HONORS,
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
            ],
        },
        {
            id: 'pol_tarumt_legacy',
            universityId: 'tarumt',
            name: 'Bachelor grading (pre–July 2023 cohorts)',
            academicYearLabel: 'Pre–July 2023',
            effectiveFrom: '2018-01-01',
            effectiveTo: '2023-07-01',
            repeatPolicy: 'LatestAttempt',
            roundingPrecision: 4,
            maxCGPA: 4.0,
            honors: TARUMT_HONORS,
            gradingScale: [
                { grade: 'A', point: 4.0000 },
                { grade: 'A-', point: 3.7500 },
                { grade: 'B+', point: 3.5000 },
                { grade: 'B', point: 3.0000 },
                { grade: 'B-', point: 2.7500 },
                { grade: 'C+', point: 2.5000 },
                { grade: 'C', point: 2.0000 },
                { grade: 'F', point: 0.0000 },
            ],
        },
    ],
};

export default pack;
