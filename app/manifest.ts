import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'VisualGPA - Academic Intelligence',
        short_name: 'VisualGPA',
        description: 'The most advanced visual GPA planner for university students.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0f172a',
        theme_color: '#0f172a',
        icons: [
            {
                src: '/icon',
                sizes: '192x192',
                type: 'image/png',
            },
        ],
    }
}
