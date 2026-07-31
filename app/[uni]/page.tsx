import type { Metadata } from 'next';
import WorkspaceClient from './WorkspaceClient';
import { getUniversity, listUniversities } from '../../src/data/registry';

const baseUrl = process.env.VITE_BASE_URL || 'https://visualgpa.hqing-tech.com';

export async function generateMetadata({ params }: { params: Promise<{ uni: string }> }): Promise<Metadata> {
    const { uni: uniId } = await params;
    const uni = getUniversity(uniId);

    if (!uni || uni.id === 'custom') {
        const isDemo = uniId === 'demo' || uniId === '__sample__';
        return {
            title: isDemo
                ? 'Sample CGPA workspace'
                : uniId === 'custom'
                    ? 'Custom grading scale CGPA planner'
                    : 'Private CGPA Planner',
            description: isDemo
                ? 'Explore a private VisualGPA sample plan. Your grades stay on your device.'
                : 'Plan courses and compare CGPA scenarios privately on your device.',
            alternates: {
                canonical: `${baseUrl}/${uniId === '__sample__' ? 'demo' : uniId}`,
            },
        };
    }

    const short = uni.shortName || uni.name;
    const title = `${short} CGPA Calculator`;
    const description = `Plan courses and compare CGPA scenarios with the ${uni.name} grading policy (${uni.country}). Your grades stay on your device.`;
    const countryKeyword = uni.country === 'Singapore'
        ? 'singapore university gpa calculator'
        : 'malaysia university cgpa calculator';
    const imageUrl = `${baseUrl}${uni.imageUrl}`;

    return {
        title,
        description,
        keywords: [
            `${short} cgpa calculator`,
            `${uni.name} cgpa calculator`,
            `${short} gpa calculator`,
            `calculate cgpa ${short}`,
            `${short} grading system`,
            `${short} grading scale`,
            countryKeyword,
            'visual gpa planner',
        ],
        openGraph: {
            title: `${title} · VisualGPA`,
            description,
            url: `${baseUrl}/${uniId}`,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: `${uni.name} CGPA planner`,
                },
            ],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${title} · VisualGPA`,
            description,
            images: [imageUrl],
        },
        alternates: {
            canonical: `${baseUrl}/${uniId}`,
        },
    };
}

export async function generateStaticParams() {
    const packs = listUniversities({ includeCustom: true }).map((uni) => ({
        uni: uni.id,
    }));
    return [...packs, { uni: 'demo' }];
}

export default function WorkspacePage() {
    return <WorkspaceClient />;
}
