'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { sampleUniversities } from '../src/data/sample';
import { TEXT } from '../src/text';

export default function LandingPage() {
    const router = useRouter();

    const handleUniversitySelect = (id: string) => {
        router.push(`/${id}`);
    };

    return (
        <div className="landing-hero">
            <img
                src="/logo.png"
                alt="VisualGPA Logo"
                style={{
                    width: '100px',
                    height: '100px',
                    marginBottom: '2rem',
                    filter: 'drop-shadow(0 0 30px rgba(34, 211, 238, 0.4))'
                }}
            />
            <h1 className="landing-title" style={{ lineHeight: '1', marginBottom: '1rem', letterSpacing: '-0.03em', textAlign: 'center' }}>{TEXT.BRAND.NAME.toUpperCase()}</h1>
            <p style={{ color: 'var(--accent-cyan)', letterSpacing: '0.2em', marginBottom: '4rem', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 600, textAlign: 'center' }}>{TEXT.BRAND.TAGLINE}</p>
            <p style={{ color: '#94a3b8', letterSpacing: '0.1em', marginBottom: '1rem', fontSize: '0.85rem' }}>{TEXT.BRAND.SELECT_ARCH}</p>
            <p style={{ color: '#64748b', fontSize: '1rem', marginBottom: '3rem', maxWidth: '400px', margin: '0 auto 3rem auto', lineHeight: '1.5' }}>Choose your university to plan and explore possible CGPA outcomes.</p>

            <div className="uni-orbit">
                {sampleUniversities.filter(u => u.id !== 'custom').map(uni => (
                    <div key={uni.id} className="uni-planet" onClick={() => handleUniversitySelect(uni.id)}>
                        <div className="uni-img" style={{
                            background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), url(${uni.imageUrl}) center/cover`
                        }}></div>
                        <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', textAlign: 'left', zIndex: 2 }}>
                            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.1rem', lineHeight: '1.3', color: '#f8fafc', marginBottom: '0.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                                {uni.name}
                                {uni.shortName && <span style={{ opacity: 0.7, fontWeight: 400, marginLeft: '0.4rem', fontSize: '0.9em' }}>({uni.shortName})</span>}
                            </div>
                            <div style={{ fontFamily: 'var(--font-tech)', fontSize: '0.75rem', color: '#94a3b8', letterSpacing: '0.05em' }}>{uni.country.toUpperCase()}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ width: '100%', maxWidth: '1400px', marginTop: '4rem', padding: '0 1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', opacity: 0.6 }}>
                    <div style={{ height: '1px', flex: 1, background: 'linear-gradient(to right, transparent, white)' }}></div>
                    <span style={{ fontFamily: 'var(--font-tech)', fontSize: '0.9rem', letterSpacing: '0.2em' }}>OR</span>
                    <div style={{ height: '1px', flex: 1, background: 'linear-gradient(to left, transparent, white)' }}></div>
                </div>

                <div
                    onClick={() => handleUniversitySelect('custom')}
                    className="custom-arch-card"
                >
                    <div className="custom-arch-content">
                        <div className="custom-arch-icon"></div>
                        <div style={{ textAlign: 'left', flex: 1 }}>
                            <div className="custom-arch-title">Custom Architecture</div>
                            <div className="custom-arch-desc">
                                Not in the list? Define your own grading scale and university parameters manually.
                            </div>
                        </div>
                    </div>
                    <div className="custom-arch-action">
                        INITIALIZE &rarr;
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '5rem', paddingBottom: '2rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', textAlign: 'center', width: '100%', pointerEvents: 'none' }}>
                This is a planning and reference tool. Not an official academic system.
            </div>
        </div>
    );
}
