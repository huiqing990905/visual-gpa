import type { Metadata } from 'next';
import WorkspaceClient from './WorkspaceClient';
import { sampleUniversities } from '../../src/data/sample';
import { TEXT } from '../../src/text';

export async function generateMetadata({ params }: { params: Promise<{ uni: string }> }): Promise<Metadata> {
    const { uni: uniId } = await params;
    const uni = sampleUniversities.find((u) => u.id === uniId);
    const baseUrl = process.env.VITE_BASE_URL || 'https://visualgpa.hqinglab.tech';

    if (!uni) {
        return {
            title: 'VisualGPA - Academic Intelligence',
            description: 'The most advanced visual GPA planner for university students.',
        };
    }

    const title = `${uni.name} ${uni.shortName && uni.shortName !== uni.name ? `(${uni.shortName})` : ''} CGPA Calculator`;
    const description = `Calculate your ${uni.shortName || uni.name} CGPA instantly with VisualGPA. The most accurate, visual GPA planner for ${uni.shortName || uni.name} students in Malaysia. Track performance, plan target GPAs, and simulate scenarios.`;
    const imageUrl = `${baseUrl}${uni.imageUrl}`;

    return {
        title: title,
        description: description,
        keywords: [
            `${uni.shortName || uni.name} cgpa calculator`,
            `${uni.name} cgpa calculator`,
            `${uni.shortName || uni.name} gpa calculator`,
            `calculate cgpa ${uni.shortName || uni.name}`,
            `${uni.shortName || uni.name} grading system`,
            `${uni.shortName || uni.name} grading scale`,
            'malaysia university cgpa calculator',
            'visual gpa planner'
        ],
        openGraph: {
            title: title,
            description: description,
            url: `${baseUrl}/${uniId}`,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: `${uni.name} Campus`,
                },
            ],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description: description,
            images: [imageUrl],
        },
        alternates: {
            canonical: `${baseUrl}/${uniId}`,
        },
    };
}

// Generate static params for known universities to enable static optimization
export async function generateStaticParams() {
    return sampleUniversities.map((uni) => ({
        uni: uni.id,
    }));
}

export default function WorkspacePage() {
    return <WorkspaceClient />;
}
