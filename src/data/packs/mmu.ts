import type { University } from '../../types';
import { MMU_HONORS } from '../honors';

/**
 * Multimedia University.
 * Source: MMU Academic Handbook — Scheme of Marks & Grades (representative letter points).
 * Note: Some MMU schemes assign a point range within a letter (e.g. A- 3.67–3.93).
 * This pack uses the floor of each letter band for planning.
 */
const pack: University = {
    id: 'mmu',
    name: 'Multimedia University',
    shortName: 'MMU',
    country: 'Malaysia',
    type: 'Private',
    imageUrl: '/logo.svg',
    policies: [
        {
            id: 'pol_mmu_scheme_c',
            universityId: 'mmu',
            name: 'MMU scheme (letter floors · pass at D/40%)',
            academicYearLabel: '2009–present (simplified)',
            effectiveFrom: '2009-01-01',
            repeatPolicy: 'LatestAttempt',
            roundingPrecision: 2,
            maxCGPA: 4.0,
            honors: MMU_HONORS,
            gradingScale: [
                { grade: 'A+', point: 4.00 },
                { grade: 'A', point: 4.00 },
                { grade: 'A-', point: 3.67 },
                { grade: 'B+', point: 3.33 },
                { grade: 'B', point: 3.00 },
                { grade: 'B-', point: 2.67 },
                { grade: 'C+', point: 2.33 },
                { grade: 'C', point: 2.00 },
                { grade: 'C-', point: 1.67 },
                { grade: 'D+', point: 1.33 },
                { grade: 'D', point: 1.00 },
                { grade: 'F', point: 0.00 },
            ],
        },
    ],
};

export default pack;
