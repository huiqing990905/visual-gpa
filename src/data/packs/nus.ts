import type { University } from '../../types';
import { SG_5_HONORS } from '../honors';

/**
 * National University of Singapore.
 * Source: NUS Registrar — Academic Structure & Grading (5-point scale / GPA).
 * Metric is often called CAP historically; NUS now also uses GPA wording.
 */
const pack: University = {
    id: 'nus',
    name: 'National University of Singapore',
    shortName: 'NUS',
    country: 'Singapore',
    type: 'Public',
    imageUrl: '/logo.svg',
    policies: [
        {
            id: 'pol_nus_5pt',
            universityId: 'nus',
            name: 'NUS 5-point grading scale',
            academicYearLabel: 'Current modular system',
            effectiveFrom: '2010-01-01',
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
