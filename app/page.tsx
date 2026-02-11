'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { sampleUniversities } from '../src/data/sample';
import { TEXT } from '../src/text';

import { DemoPlaceholder } from '../src/components/DemoPlaceholder';

export default function LandingPage() {
    const router = useRouter();
    const [showLegal, setShowLegal] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleUniversitySelect = (id: string) => {
        router.push(`/${id}`);
    };

    // Filter Logic
    const filteredUniversities = sampleUniversities.filter(uni => {
        const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (uni.shortName && uni.shortName.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesSearch && uni.id !== 'custom';
    });

    const filteredUnis = filteredUniversities;

    // Simple Legal Modal Component
    const LegalModal = () => {
        if (!showLegal) return null;
        return (
            <div className="gl-modal-overlay" onClick={() => setShowLegal(false)}>
                <div className="gl-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: '600px', textAlign: 'left', maxHeight: '80vh', overflowY: 'auto' }}>
                    <h2 style={{ fontFamily: 'var(--font-display)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-glass)', paddingBottom: '1rem' }}>
                        {TEXT.LEGAL.TITLE}
                    </h2>
                    {TEXT.LEGAL.SECTIONS.map((sec, i) => (
                        <div key={i} style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1rem', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>{sec.HEADING}</h3>
                            {sec.CONTENT.map((line, j) => (
                                <p key={j} style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.6', marginBottom: '0.5rem' }}>{line}</p>
                            ))}
                        </div>
                    ))}
                    <button className="btn-ghost" onClick={() => setShowLegal(false)} style={{ width: '100%', marginTop: '1rem' }}>
                        {TEXT.LEGAL.CLOSE}
                    </button>
                </div>
            </div>
        );
    };

    // Contact Modal Component
    const ContactModal = () => {
        if (!showContact) return null;
        return (
            <div className="gl-modal-overlay" onClick={() => setShowContact(false)}>
                <div className="gl-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: '400px', textAlign: 'left' }}>
                    <h2 style={{ fontFamily: 'var(--font-display)', marginBottom: '0.5rem', borderBottom: '1px solid var(--border-glass)', paddingBottom: '1rem' }}>
                        {TEXT.FOOTER.CONTACT}
                    </h2>
                    <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                        {TEXT.ABOUT_MODAL.CONTACT_MSG}
                    </p>

                    <div className="contact-grid">
                        <a href={`mailto:${TEXT.ABOUT_MODAL.EMAIL}`} className="contact-link-card">
                            <div className="contact-icon">✉️</div>
                            <div className="contact-info">
                                <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Email</div>
                                <div style={{ fontSize: '0.9rem', color: 'white' }}>{TEXT.ABOUT_MODAL.EMAIL}</div>
                            </div>
                        </a>
                        <a href={TEXT.ABOUT_MODAL.LINKEDIN} target="_blank" rel="noopener noreferrer" className="contact-link-card">
                            <div className="contact-icon">💼</div>
                            <div className="contact-info">
                                <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>LinkedIn</div>
                                <div style={{ fontSize: '0.9rem', color: 'white' }}>Connect Profile</div>
                            </div>
                        </a>
                        <a href={TEXT.ABOUT_MODAL.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="contact-link-card">
                            <div className="contact-icon">📸</div>
                            <div className="contact-info">
                                <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Instagram</div>
                                <div style={{ fontSize: '0.9rem', color: 'white' }}>@{TEXT.ABOUT_MODAL.INSTAGRAM.split('/').filter(Boolean).pop()}</div>
                            </div>
                        </a>
                    </div>

                    <button className="btn-ghost" onClick={() => setShowContact(false)} style={{ width: '100%' }}>
                        {TEXT.LEGAL.CLOSE}
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="landing-container">
            {/* Minimal Header */}
            <header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.5rem var(--landing-h-padding, 2rem)', // Use variable
                maxWidth: '1200px',
                margin: '0 auto',
                width: '100%',
                boxSizing: 'border-box'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    {/* Logo Image */}
                    <img
                        src="/logo.png"
                        alt="VisualGPA Logo"
                        style={{ height: '32px', width: 'auto' }}
                    />
                    <span style={{ fontWeight: 700, fontSize: '1.2rem', color: 'white', letterSpacing: '-0.02em' }}>
                        VisualGPA
                    </span>
                </div>
            </header>

            <main style={{
                width: '100%',
                maxWidth: '1000px',
                margin: '0 auto',
                padding: '3rem var(--landing-h-padding, 1.5rem)', // Use variable
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxSizing: 'border-box',
                overflowX: 'hidden' // Safety gate
            }}>

                {/* 1. Primary Action Hierarchy - Compressed */}
                <h1 style={{
                    fontSize: 'var(--landing-title-size)', // Responsive font size via CSS variable
                    fontWeight: 800,
                    lineHeight: '1.1',
                    marginBottom: '1rem', // Tighter spacing
                    letterSpacing: '-0.02em',
                    maxWidth: '100%', // Prevent overflow
                    overflowWrap: 'break-word' // Handle long words
                }}>
                    Plan your CGPA <br />
                    <span style={{ color: 'var(--accent-cyan)' }}>before next semester</span>
                </h1>

                <p style={{
                    fontSize: '1.15rem',
                    color: '#94a3b8',
                    marginBottom: '2rem', // Tighter spacing
                    maxWidth: '600px',
                    lineHeight: '1.5'
                }}>
                    Select your university to start. No signup required.
                </p>

                {/* 2. Central Search Input - Enhanced Focus */}
                <div style={{
                    width: '100%',
                    maxWidth: '600px',
                    position: 'relative',
                    marginBottom: '2rem'
                }}>
                    <input
                        autoFocus // Immediate interaction
                        type="text"
                        placeholder="Search your university..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '1.15rem 1.5rem', // Slightly tighter
                            fontSize: '1.1rem',
                            background: 'rgba(255,255,255,0.08)', // Slightly higher contrast
                            border: '1px solid rgba(255,255,255,0.15)', // Stronger border
                            borderRadius: '12px',
                            color: 'white',
                            outline: 'none',
                            transition: 'all 0.2s ease',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.3)' // Subtle lift
                        }}
                        onFocus={(e) => {
                            e.target.style.background = 'rgba(255,255,255,0.12)';
                            e.target.style.borderColor = 'var(--accent-cyan)';
                        }}
                        onBlur={(e) => {
                            e.target.style.background = 'rgba(255,255,255,0.08)';
                            e.target.style.borderColor = 'rgba(255,255,255,0.15)';
                        }}
                    />
                    <div style={{
                        position: 'absolute',
                        right: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: 'rgba(255,255,255,0.4)',
                        fontSize: '0.9rem',
                        pointerEvents: 'none'
                    }}>
                        Press Enter ↵
                    </div>
                </div>

                {/* 3. University List - Quick Start Shortcuts */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'var(--landing-grid-cols)', // Responsive via CSS variable
                    gap: '0.75rem', // Tighter grid
                    width: '100%',
                    maxWidth: '800px',
                    marginBottom: '2rem', // Reduced bottom margin to connect with custom option
                    boxSizing: 'border-box'
                }}>
                    {filteredUnis.map((uni) => (
                        <div
                            key={uni.id}
                            onClick={() => router.push(`/${uni.id}`)}
                            style={{
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                borderRadius: '10px',
                                padding: '1rem',
                                cursor: 'pointer',
                                textAlign: 'left',
                                transition: 'all 0.15s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%', // Fill the grid column
                                minWidth: 0 // Allow shrinking
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                            }}
                        >
                            <div style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                <div style={{ fontWeight: 500, fontSize: '0.95rem', color: 'white', overflow: 'hidden', textOverflow: 'ellipsis' }}>{uni.name}</div>
                            </div>
                            <div style={{ color: 'var(--accent-cyan)', opacity: 0.6, fontSize: '1.2rem', marginLeft: '0.5rem' }}>›</div>
                        </div>
                    ))}

                    {filteredUnis.length === 0 && (
                        <div style={{ gridColumn: '1 / -1', padding: '2rem', color: '#64748b' }}>
                            University not found. <br />
                            <span
                                onClick={() => setShowContact(true)}
                                style={{ color: 'var(--accent-cyan)', cursor: 'pointer', textDecoration: 'underline' }}
                            >
                                Request it here.
                            </span>
                        </div>
                    )}
                </div>

                {/* 3b. Secondary/Fallback Action - Custom Architecture */}
                <div style={{
                    marginBottom: '4rem',
                    color: '#64748b',
                    fontSize: '0.9rem',
                    width: '100%',
                    maxWidth: '100%',
                    boxSizing: 'border-box',
                    padding: '0 var(--landing-h-padding, 1rem)',
                    textAlign: 'center',
                    lineHeight: '1.5' // Better mobile wrapping
                }}>
                    Don't see your university?{' '}
                    <span
                        onClick={() => handleUniversitySelect('custom')}
                        style={{
                            color: '#94a3b8',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                            textUnderlineOffset: '4px',
                            transition: 'color 0.2s',
                            display: 'inline' // Changed from inline-block to allow natural wrapping
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                    >
                        Configure a custom grading architecture
                    </span>
                </div>

                {/* 4. Secondary Content - Outcome Focused */}
                <div style={{
                    width: '100%',
                    maxWidth: '900px',
                    marginTop: '0', // Removed gap to demo
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '3rem'
                }}>
                    <div className="predict-future-grid">
                        <div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 600, color: 'white' }}>
                                Predict your future
                            </h3>
                            <p style={{ color: '#94a3b8', lineHeight: '1.5', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                                See exactly how your CGPA changes when you adjust next semester’s grades.
                                Make data-driven decisions about your coursework.
                            </p>
                            <a
                                href="/__sample__"
                                style={{
                                    fontSize: '0.9rem',
                                    color: 'var(--accent-cyan)',
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                    borderBottom: '1px solid transparent',
                                    transition: 'all 0.2s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--accent-cyan)'}
                                onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
                            >
                                Try with sample data →
                            </a>
                        </div>

                        {/* Demo Placeholder (Secondary) */}
                        <div className="demo-placeholder-wrapper">
                            <DemoPlaceholder />
                        </div>
                    </div>
                </div>

            </main>

            {/* Footer */}
            <footer className="landing-footer" style={{ marginTop: 'auto', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <div className="footer-nav">
                    <span className="footer-link" onClick={() => setShowLegal(true)}>{TEXT.FOOTER.LEGAL}</span>
                    <span className="footer-link" onClick={() => setShowContact(true)}>{TEXT.FOOTER.CONTACT}</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', marginTop: '1rem' }}>
                    {TEXT.FOOTER.DISCLAIMER}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', opacity: 0.5, marginTop: '0.5rem' }}>
                    © {new Date().getFullYear()} {TEXT.BRAND.NAME}. All rights reserved.
                </div>
            </footer>

            <LegalModal />
            <ContactModal />
        </div>
    );
}
