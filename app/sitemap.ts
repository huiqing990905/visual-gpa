import { MetadataRoute } from 'next';
import { listUniversities } from '@/src/data/registry';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.VITE_BASE_URL || 'https://visualgpa.hqinglab.tech';
    const now = new Date();

    const routes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/demo`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
    ];

    for (const uni of listUniversities({ includeCustom: true })) {
        routes.push({
            url: `${baseUrl}/${uni.id}`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: uni.id === 'custom' ? 0.5 : 0.8,
        });
    }

    return routes;
}
