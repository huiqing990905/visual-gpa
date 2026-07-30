import type { University } from '../../types';

/**
 * HELP University policy pack.
 *
 * Confidence: LOW — no publicly posted official undergraduate grading PDF found.
 * Letter labels below follow the common HELP HD/DI/CR/PS grade-point map used by
 * third-party calculators. Treat as planning aid only until verified against a
 * HELP student handbook / transcript.
 */
const pack: University = {
    id: 'help',
    name: 'HELP University',
    shortName: 'HELP',
    country: 'Malaysia',
    type: 'Private',
    imageUrl: '/help_university.png',
    policies: [
        {
            id: 'pol_help_hd_unverified',
            universityId: 'help',
            name: 'HELP HD/DI/CR/PS map (unverified — confirm handbook)',
            academicYearLabel: 'Unverified',
            effectiveFrom: '2020-01-01',
            repeatPolicy: 'LatestAttempt',
            roundingPrecision: 2,
            maxCGPA: 4.0,
            // No honors bands until an official classification table is confirmed.
            gradingScale: [
                { grade: 'HD1', point: 4.00 },
                { grade: 'HD2', point: 3.75 },
                { grade: 'DI1', point: 3.50 },
                { grade: 'DI2', point: 3.25 },
                { grade: 'CR1', point: 3.00 },
                { grade: 'CR2', point: 2.75 },
                { grade: 'PS1', point: 2.50 },
                { grade: 'PS2', point: 2.00 },
                { grade: 'FL', point: 0.00 },
            ],
        },
    ],
};

export default pack;
