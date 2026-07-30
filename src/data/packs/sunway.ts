import type { University } from '../../types';
import { SUNWAY_HONORS } from '../honors';

/**
 * Sunway University policy pack (diploma / bachelor home awards).
 *
 * Sources:
 * - Sunway University Academic Regulations (Lancaster collaborative provision PDF)
 *   “Grading Scheme for January 2024 intake and subsequent intakes”
 *   Award classification for August 2019 intake onwards
 *
 * Notes:
 * - GPA/CGPA are expressed to 2 decimal places in the regulations.
 * - ADTP uses a different American-style scale — not covered by this pack.
 * - Foundation programmes may use a different mark-to-grade map — confirm handbook.
 * - Special fail codes (F*, F#) with non-zero points are omitted; planning uses F = 0.
 */
const pack: University = {
    id: 'sunway',
    name: 'Sunway University',
    shortName: 'Sunway',
    country: 'Malaysia',
    type: 'Private',
    imageUrl: '/sunway_campus.png',
    policies: [
        {
            id: 'pol_sunway_jan2024',
            universityId: 'sunway',
            name: 'Diploma / Bachelor grading (Jan 2024 intake onwards)',
            academicYearLabel: 'Jan 2024–present',
            effectiveFrom: '2024-01-01',
            repeatPolicy: 'LatestAttempt',
            roundingPrecision: 2,
            maxCGPA: 4.00,
            honors: SUNWAY_HONORS,
            gradingScale: [
                { grade: 'A+', point: 4.00 },
                { grade: 'A', point: 3.75 },
                { grade: 'A-', point: 3.50 },
                { grade: 'B+', point: 3.25 },
                { grade: 'B', point: 3.00 },
                { grade: 'B-', point: 2.75 },
                { grade: 'C', point: 2.50 },
                { grade: 'C-', point: 2.25 },
                { grade: 'D', point: 2.00 },
                { grade: 'F', point: 0.00 },
            ],
        },
    ],
};

export default pack;
