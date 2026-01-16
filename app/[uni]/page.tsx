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

    const title = `${uni.name} ${uni.shortName ? `(${uni.shortName})` : ''} CGPA Calculator`;
    const description = `The official visual GPA planner for ${uni.shortName || uni.name}. Plan scenarios and track performance with precision.`;
    const imageUrl = `${baseUrl}${uni.imageUrl}`;

    return {
        title: title,
        description: description,
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
