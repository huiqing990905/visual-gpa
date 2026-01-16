import { MetadataRoute } from 'next'
import { sampleUniversities } from '@/src/data/sample'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.VITE_BASE_URL || 'https://visualgpa.hqinglab.tech';

    // Base route
    const routes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
    ];

    // University routes
    sampleUniversities.forEach(uni => {
        routes.push({
            url: `${baseUrl}/${uni.id}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        });
    });

    return routes;
}
