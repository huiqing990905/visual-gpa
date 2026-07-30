import type { University } from '../../types';
import { UTAR_HONORS_2011 } from '../honors';

/**
 * UTAR policy pack.
 *
 * Sources:
 * - https://deas.utar.edu.my/Grade-Sys.php
 * - https://deas.utar.edu.my/Classification-of-Degree.php
 * - https://deas.utar.edu.my/CGPA-Cal.php
 *
 * Notes:
 * - Jan 2010 onwards: A+/A = 4.00, A- = 3.67, B+ = 3.33, … C = 2.00, F = 0.
 * - Official grading page is image-based; letter points above match DEAS-cited converters and FEGT calculator options.
 * - Honours cut-offs below are for Jan 2011 undergraduate intakes (First Class ≥ 3.50).
 */
const pack: University = {
    id: 'utar',
    name: 'Universiti Tunku Abdul Rahman',
    shortName: 'UTAR',
    country: 'Malaysia',
    type: 'Private',
    imageUrl: '/utar_campus.png',
    policies: [
        {
            id: 'pol_utar_std_2010',
            universityId: 'utar',
            name: 'Foundation / UG / PG (Jan 2010 onwards)',
            academicYearLabel: '2010–present',
            effectiveFrom: '2010-01-01',
            repeatPolicy: 'LatestAttempt',
            roundingPrecision: 4,
            maxCGPA: 4.0,
            honors: UTAR_HONORS_2011,
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
            id: 'pol_utar_pre2010_ug',
            universityId: 'utar',
            name: 'Foundation / Undergraduate (Pre-2010)',
            academicYearLabel: 'Pre-2010 UG',
            effectiveFrom: '2000-01-01',
            effectiveTo: '2010-01-01',
            repeatPolicy: 'LatestAttempt',
            roundingPrecision: 4,
            maxCGPA: 4.0,
            honors: UTAR_HONORS_2011,
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
            ],
        },
        {
            id: 'pol_utar_pre2010_pg',
            universityId: 'utar',
            name: 'Postgraduate (Pre-2010)',
            academicYearLabel: 'Pre-2010 PG',
            effectiveFrom: '2000-01-01',
            effectiveTo: '2010-01-01',
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
            ],
        },
    ],
};

export default pack;
