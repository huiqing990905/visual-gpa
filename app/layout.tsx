import type { Metadata } from 'next';
import './globals.css';

const baseUrl = process.env.VITE_BASE_URL || 'https://visualgpa.hqing-tech.com';

export const metadata: Metadata = {
    title: {
        default: 'VisualGPA — Private CGPA Planner for Malaysia & Singapore',
        template: '%s · VisualGPA',
    },
    description:
        'Plan courses, compare CGPA scenarios, and reverse-solve a target grade for Malaysian and Singapore universities. Your grades stay on your device.',
    metadataBase: new URL(baseUrl),
    keywords: [
        'cgpa calculator',
        'gpa planner',
        'malaysia university cgpa calculator',
        'singapore university gpa calculator',
        'TAR UMT cgpa calculator',
        'UTAR cgpa calculator',
        'NUS gpa calculator',
        'NTU gpa calculator',
        'SMU gpa calculator',
        'UM cgpa calculator',
        'visual gpa planner',
    ],
    openGraph: {
        title: 'VisualGPA — Private CGPA Planner',
        description:
            'Plan courses and compare CGPA scenarios for Malaysia and Singapore universities. Grades stay on your device.',
        url: '/',
        siteName: 'VisualGPA',
        images: [
            {
                url: '/logo.svg',
                width: 1200,
                height: 630,
                alt: 'VisualGPA private CGPA planner',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'VisualGPA — Private CGPA Planner',
        description:
            'Plan courses and compare CGPA scenarios for Malaysia and Singapore universities.',
        images: ['/logo.svg'],
    },
    alternates: {
        canonical: baseUrl,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
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
