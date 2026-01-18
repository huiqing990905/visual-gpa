import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
    width: 192,
    height: 192,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    background: '#0f172a',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '48px',
                }}
            >
                <svg
                    width="128"
                    height="128"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                >
                    <path d="M100 50 L160 85 L100 120 L40 85 Z" stroke="white" strokeWidth="12" strokeLinejoin="round" strokeLinecap="round" />
                    <path d="M60 105 L100 145 L140 105" stroke="white" strokeWidth="12" strokeLinejoin="round" strokeLinecap="round" />
                    <circle cx="160" cy="85" r="6" fill="white" />
                    <path d="M160 85 L160 125" stroke="white" strokeWidth="6" strokeLinecap="round" />
                </svg>
            </div>
        ),
        {
            ...size,
        }
    )
}
