'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { listCountries, listUniversities } from '../src/data/registry';
import { TEXT } from '../src/text';
import { DemoPlaceholder } from '../src/components/DemoPlaceholder';

const COUNTRY_META: Record<string, { code: string; label: string }> = {
    Malaysia: { code: 'MY', label: 'Malaysia' },
    Singapore: { code: 'SG', label: 'Singapore' },
};

export default function LandingPage() {
    const router = useRouter();
    const [showLegal, setShowLegal] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [country, setCountry] = useState('Malaysia');

    const countries = useMemo(() => listCountries(), []);
    const universities = useMemo(() => listUniversities(), []);
    const countryUniversities = useMemo(
        () => universities.filter(uni => uni.country === country),
        [universities, country]
    );

    return (
        <div className="landing-container">
            <header className="landing-nav">
                <div className="brand-lockup">
                    <span className="brand-mark" aria-hidden="true">V</span>
                    <span>VisualGPA</span>
                </div>
                <a className="nav-text-link" href="/demo">Open sample</a>
            </header>

            <main className="landing-main">
                <section className="landing-hero-grid">
                    <div className="landing-copy">
                        <div className="eyebrow">Private CGPA planner</div>
                        <h1>See what your next semester can change.</h1>
                        <p>
                            Plan courses, compare scenarios, and reverse-solve a target CGPA.
                            Your grades stay on this device.
                        </p>
                        <div className="trust-row" aria-label="Product principles">
                            <span>Local-only data</span>
                            <span>Explainable rules</span>
                            <span>No account needed</span>
                        </div>
                        <div className="landing-cta-row">
                            <a className="btn-primary" href="#choose-university">Choose university</a>
                            <a className="text-button" href="/demo">Try sample plan →</a>
                        </div>
                    </div>
                    <DemoPlaceholder />
                </section>

                <section className="university-onboarding" aria-labelledby="choose-university" id="choose-university">
                    <div className="selector-intro">
                        <div className="eyebrow">Set up your workspace</div>
                        <h2>Where do you study?</h2>
                        <p>
                            Tell us your country and university. We’ll load the matching
                            grading scale automatically.
                        </p>
                        <div className="selector-stats" aria-label="Available policy packs">
                            <span><strong>{universities.length}</strong> universities</span>
                            <span><strong>{countries.length}</strong> countries</span>
                            <span><strong>0</strong> accounts needed</span>
                        </div>
                    </div>

                    <div className="selector-form">
                        <div className="selector-step">
                            <div className="selector-step-label">
                                <span>1</span>
                                <div>
                                    <small>Country</small>
                                    <strong>Choose your location</strong>
                                </div>
                            </div>
                            <div className="country-switch" role="group" aria-label="Choose country">
                                {countries.map(item => (
                                    <button
                                        type="button"
                                        key={item}
                                        aria-pressed={country === item}
                                        className={country === item ? 'is-active' : ''}
                                        onClick={() => setCountry(item)}
                                    >
                                        <b>{COUNTRY_META[item]?.code ?? item.slice(0, 2).toUpperCase()}</b>
                                        <span>{COUNTRY_META[item]?.label ?? item}</span>
                                        <small>
                                            {universities.filter(uni => uni.country === item).length}
                                        </small>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="selector-divider" />

                        <label className="selector-step">
                            <span className="selector-step-label">
                                <span>2</span>
                                <span>
                                    <small>University</small>
                                    <strong>Select your institution</strong>
                                </span>
                            </span>
                            <span className="university-select-wrap">
                                <select
                                    key={country}
                                    defaultValue=""
                                    onChange={event => {
                                        if (event.target.value) router.push(`/${event.target.value}`);
                                    }}
                                >
                                    <option value="" disabled>Choose a university</option>
                                    {countryUniversities.map(uni => (
                                        <option key={uni.id} value={uni.id}>
                                            {uni.shortName || uni.name} — {uni.name}
                                        </option>
                                    ))}
                                </select>
                                <span aria-hidden="true">⌄</span>
                            </span>
                            <small className="selector-help">
                                {countryUniversities.length} policy packs available in {country}
                            </small>
                        </label>

                        <div className="selector-alt">
                            <button type="button" onClick={() => router.push('/custom')}>
                                My university isn’t listed
                            </button>
                            <a href="/demo">Try sample workspace →</a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="landing-footer">
                <div className="brand-lockup footer-brand">
                    <span className="brand-mark" aria-hidden="true">V</span>
                    <span>VisualGPA</span>
                </div>
                <div className="footer-nav">
                    <button type="button" className="footer-link" onClick={() => setShowLegal(true)}>
                        {TEXT.FOOTER.LEGAL}
                    </button>
                    <button type="button" className="footer-link" onClick={() => setShowContact(true)}>
                        {TEXT.FOOTER.CONTACT}
                    </button>
                </div>
                <small>© {new Date().getFullYear()} VisualGPA · Planning aid, not an official record.</small>
            </footer>

            {showLegal && (
                <div className="gl-modal-overlay" onClick={() => setShowLegal(false)}>
                    <div className="gl-modal" onClick={e => e.stopPropagation()}>
                        <h2>{TEXT.LEGAL.TITLE}</h2>
                        {TEXT.LEGAL.SECTIONS.map((section, index) => (
                            <section key={index} className="modal-section">
                                <h3>{section.HEADING}</h3>
                                {section.CONTENT.map((line, lineIndex) => <p key={lineIndex}>{line}</p>)}
                            </section>
                        ))}
                        <button className="btn-ghost modal-close" onClick={() => setShowLegal(false)}>
                            {TEXT.LEGAL.CLOSE}
                        </button>
                    </div>
                </div>
            )}

            {showContact && (
                <div className="gl-modal-overlay" onClick={() => setShowContact(false)}>
                    <div className="gl-modal contact-modal" onClick={e => e.stopPropagation()}>
                        <h2>{TEXT.FOOTER.CONTACT}</h2>
                        <p>{TEXT.ABOUT_MODAL.CONTACT_MSG}</p>
                        <div className="contact-grid">
                            <a href={`mailto:${TEXT.ABOUT_MODAL.EMAIL}`} className="contact-link-card">
                                <span className="contact-icon">@</span>
                                <span className="contact-info">
                                    <small>Email</small>
                                    <strong>{TEXT.ABOUT_MODAL.EMAIL}</strong>
                                </span>
                            </a>
                            <a href={TEXT.ABOUT_MODAL.LINKEDIN} target="_blank" rel="noopener noreferrer" className="contact-link-card">
                                <span className="contact-icon">in</span>
                                <span className="contact-info">
                                    <small>LinkedIn</small>
                                    <strong>Connect profile</strong>
                                </span>
                            </a>
                        </div>
                        <button className="btn-ghost modal-close" onClick={() => setShowContact(false)}>
                            {TEXT.LEGAL.CLOSE}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
