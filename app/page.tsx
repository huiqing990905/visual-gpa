'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { sampleUniversities } from '../src/data/sample';
import { TEXT } from '../src/text';

export default function LandingPage() {
    const router = useRouter();
    const [showLegal, setShowLegal] = (typeof window !== 'undefined') ? require('react').useState(false) : [false, () => { }];
    const [showContact, setShowContact] = (typeof window !== 'undefined') ? require('react').useState(false) : [false, () => { }];

    const handleUniversitySelect = (id: string) => {
        router.push(`/${id}`);
    };

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



    // Search & Filter State
    const [searchTerm, setSearchTerm] = (typeof window !== 'undefined') ? require('react').useState('') : ['', () => { }];
    const [visibleLimit, setVisibleLimit] = (typeof window !== 'undefined') ? require('react').useState(8) : [8, () => { }];

    // Filter Logic
    const filteredUniversities = sampleUniversities.filter(uni => {
        const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (uni.shortName && uni.shortName.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesSearch && uni.id !== 'custom'; // Custom is handled separately at the bottom
    });

    const displayedUniversities = filteredUniversities.slice(0, visibleLimit);
    const hasMore = filteredUniversities.length > visibleLimit;

    return (
        <div className="landing-hero">
            <img
                src="/logo.svg"
                alt="VisualGPA Logo"
                className="landing-logo"
            />

            <h1 className="landing-title">
                {TEXT.BRAND.NAME}
            </h1>

            <div className="landing-tagline">
                {TEXT.BRAND.TAGLINE}
            </div>

            {/* Search Section */}
            <div className="search-container">
                <div className="glass-search-bar">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        placeholder="Search your university..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="glass-search-input"
                    />
                </div>
            </div>

            <p style={{ color: '#64748b', fontSize: '1rem', marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem auto', lineHeight: '1.5' }}>
                {filteredUniversities.length} Architecture{filteredUniversities.length !== 1 ? 's' : ''} Available
            </p>

            <div className="uni-orbit">
                {displayedUniversities.map(uni => (
                    <div key={uni.id} className="uni-planet" onClick={() => handleUniversitySelect(uni.id)}>
                        <div className="uni-img" style={{
                            background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), url(${uni.imageUrl}) center/cover`
                        }}>

                        </div>
                        <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', textAlign: 'left', zIndex: 2 }}>
                            <div className="uni-name">
                                {uni.name}
                                {uni.shortName && <span style={{ opacity: 0.7, fontWeight: 400, marginLeft: '0.4rem', fontSize: '0.9em' }}>({uni.shortName})</span>}
                            </div>
                            <div className="uni-country">{uni.country.toUpperCase()}</div>
                        </div>
                    </div>
                ))}
            </div>

            {hasMore && (
                <button
                    className="load-more-btn"
                    onClick={() => setVisibleLimit((prev: number) => prev + 8)}
                >
                    Load More
                </button>
            )}

            {/* FEATURES GRID */}
            <div className="feature-grid">
                {TEXT.LANDING_FEATURES.map((feat, idx) => (
                    <div key={idx} className="feature-card">
                        <div className="feature-icon" style={{ background: 'transparent', padding: 0 }}>
                            <img src={feat.ICON} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 0 10px rgba(34,211,238,0.3))' }} />
                        </div>
                        <div className="feature-text">
                            <div className="feature-title">{feat.TITLE}</div>
                            <div className="feature-desc">{feat.DESC}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* FOOTER */}
            <footer className="landing-footer">
                <div className="footer-nav">
                    <span className="footer-link" onClick={() => setShowLegal(true)}>{TEXT.FOOTER.LEGAL}</span>
                    <span className="footer-link" onClick={() => setShowContact(true)}>{TEXT.FOOTER.CONTACT}</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>
                    {TEXT.FOOTER.DISCLAIMER}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', opacity: 0.5 }}>
                    © {new Date().getFullYear()} {TEXT.BRAND.NAME}. All rights reserved.
                </div>
            </footer>

            <LegalModal />
            <ContactModal />
        </div>
    );
}
