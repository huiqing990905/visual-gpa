import type { Metadata } from 'next';
import './globals.css';
import { TEXT } from '@/src/text';

export const metadata: Metadata = {
    title: 'VisualGPA - Academic Intelligence & CGPA Planner',
    description: 'Calculate your projected CGPA, plan scenarios, and visualize university grading outcomes with precision.',
    metadataBase: new URL(process.env.VITE_BASE_URL || 'https://visualgpa.hqinglab.tech'),
    openGraph: {
        title: 'VisualGPA - Academic Intelligence & CGPA Planner',
        description: 'The most advanced visual GPA planner for university students. Plan scenarios and track performance.',
        url: '/',
        siteName: 'VisualGPA',
        images: [
            {
                url: '/utar_campus.png', // Default image
                width: 1200,
                height: 630,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'VisualGPA - Academic Intelligence & CGPA Planner',
        description: 'The most advanced visual GPA planner for university students. Plan scenarios and track performance.',
        images: ['/utar_campus.png'],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* Google tag (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-RQZ1BLLXXG"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-RQZ1BLLXXG');
                        `,
                    }}
                />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
