import type { University } from '../../types';
import { TAYLORS_BACHELOR_HONORS } from '../honors';

/**
 * Taylor's University policy pack (Foundation / Diploma / Advanced Diploma / Bachelor letter grades).
 *
 * Sources:
 * - https://university.taylors.edu.my/en/student-life/manage-your-studies/exam-and-results.html
 *
 * Notes:
 * - Letter/grade-point table below matches Diploma, Advanced Diploma & Degree transcript standard.
 * - Bachelor award classification from Jan 2021 intakes is based on **WCGPA**
 *   (20:30:50 for 3/3.5-year; 10:20:30:40 for 4-year). This planner uses unweighted CGPA,
 *   so classification is indicative only.
 * - ADP / dual-award / MBBS use different scales or rules.
 */
const pack: University = {
    id: 'taylors',
    name: "Taylor's University",
    shortName: "Taylor's",
    country: 'Malaysia',
    type: 'Private',
    imageUrl: '/taylors_university.svg',
    policies: [
        {
            id: 'pol_taylors_degree',
            universityId: 'taylors',
            name: "Diploma / Degree grading (official transcript standard)",
            academicYearLabel: '2021–present (WCGPA awards)',
            effectiveFrom: '2021-01-01',
            repeatPolicy: 'LatestAttempt',
            roundingPrecision: 2,
            maxCGPA: 4.0,
            honors: TAYLORS_BACHELOR_HONORS,
            gradingScale: [
                { grade: 'A', point: 4.00 },
                { grade: 'A-', point: 3.67 },
                { grade: 'B+', point: 3.33 },
                { grade: 'B', point: 3.00 },
                { grade: 'B-', point: 2.67 },
                { grade: 'C+', point: 2.33 },
                { grade: 'C', point: 2.00 },
                { grade: 'D+', point: 1.67 },
                { grade: 'D', point: 1.33 },
                { grade: 'D-', point: 1.00 },
                { grade: 'F', point: 0.00 },
            ],
        },
    ],
};

export default pack;
