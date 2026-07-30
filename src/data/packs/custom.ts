import type { University } from '../../types';

const pack: University = {
    id: 'custom',
    name: 'Custom Architecture',
    country: 'Global',
    type: 'Public',
    imageUrl: '/custom_mode.png',
    policies: [
        {
            id: 'pol_custom_1',
            name: 'User Defined Scale',
            academicYearLabel: 'Custom',
            repeatPolicy: 'LatestAttempt',
            roundingPrecision: 4,
            maxCGPA: 4.00,
            gradingScale: [
                { grade: 'A', point: 4.00 },
                { grade: 'B', point: 3.00 },
                { grade: 'C', point: 2.00 },
                { grade: 'D', point: 1.00 },
                { grade: 'F', point: 0.00 },
            ],
        },
    ],
};

export default pack;
