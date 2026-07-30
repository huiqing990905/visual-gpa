'use client';

import { useRef, useState } from 'react';
import type { AcademicPolicy, Course, ExportBundle, ScenarioPlan } from '../types';
import {
    buildExportBundle,
    coursesToCsv,
    csvTemplate,
    downloadTextFile,
    parseCoursesCsv,
    parseExportBundle,
    safeExportSlug,
    serializeBundleJson,
    unsupportedImportReason,
} from '../logic/io';

interface ImportExportBarProps {
    universityId: string;
    universityLabel?: string;
    policyId: string;
    policy: AcademicPolicy;
    baselineCgpa: number;
    baselineCredits: number;
    targetCgpa?: number;
    scenarios: ScenarioPlan[];
    activeScenarioId?: string;
    activeCourses: Course[];
    customGradingScale?: ExportBundle['customGradingScale'];
    onImportBundle: (bundle: ExportBundle) => void;
    onImportCourses: (courses: Course[]) => void;
}

type StatusTone = 'ok' | 'error' | 'info';

export function ImportExportBar({
    universityId,
    universityLabel,
    policyId,
    policy,
    baselineCgpa,
    baselineCredits,
    targetCgpa,
    scenarios,
    activeScenarioId,
    activeCourses,
    customGradingScale,
    onImportBundle,
    onImportCourses,
}: ImportExportBarProps) {
    const fileRef = useRef<HTMLInputElement>(null);
    const [status, setStatus] = useState<{ tone: StatusTone; text: string } | null>(null);
    const [showGuide, setShowGuide] = useState(false);

    const slug = safeExportSlug(universityLabel || universityId, 'plan');

    const setMsg = (tone: StatusTone, text: string) => setStatus({ tone, text });

    const handleExportJson = () => {
        const bundle = buildExportBundle({
            universityId,
            policyId,
            baselineCgpa,
            baselineCredits,
            targetCgpa,
            scenarios,
            activeScenarioId,
            customGradingScale,
            policy,
        });
        downloadTextFile(
            `visualgpa-${slug}-backup.json`,
            serializeBundleJson(bundle),
            'application/json'
        );
        setMsg(
            'ok',
            'Full backup downloaded. Includes baseline, goal, every plan, courses, and a frozen policy snapshot.'
        );
    };

    const handleExportCsv = () => {
        if (activeCourses.length === 0) {
            setMsg('error', 'Add at least one course before exporting CSV.');
            return;
        }
        downloadTextFile(
            `visualgpa-${slug}-courses.csv`,
            coursesToCsv(activeCourses),
            'text/csv'
        );
        setMsg(
            'ok',
            'CSV exported for the active plan only (course rows). Baseline, goal, and other plans are not in CSV.'
        );
    };

    const handleTemplate = () => {
        downloadTextFile('visualgpa-courses-template.csv', csvTemplate(), 'text/csv');
        setMsg('info', 'Blank CSV template downloaded. Keep the header row; fill credits + grade at minimum.');
    };

    const handleFile = async (file: File) => {
        const blocked = unsupportedImportReason(file.name);
        if (blocked) {
            setMsg('error', blocked);
            return;
        }

        const text = await file.text();
        const lower = file.name.toLowerCase();

        if (lower.endsWith('.csv')) {
            const parsed = parseCoursesCsv(text);
            if (!parsed.ok) {
                setMsg('error', parsed.error);
                return;
            }
            onImportCourses(parsed.courses);
            setMsg(
                'ok',
                `Imported ${parsed.courses.length} course(s) into the active plan. Baseline, goal, and other plans were left unchanged.`
            );
            return;
        }

        const parsed = parseExportBundle(text);
        if (!parsed.ok) {
            setMsg('error', parsed.error);
            return;
        }
        onImportBundle(parsed.bundle);
        const snapNote = parsed.bundle.policySnapshot
            ? ' Policy snapshot restored for reproducible rules.'
            : '';
        setMsg(
            'ok',
            `Restored full backup (${parsed.bundle.scenarios.length} plan(s)).${snapNote}`
        );
    };

    return (
        <div className="io-panel">
            <div className="io-actions-grid">
                <div className="io-action-card">
                    <strong>Full backup</strong>
                    <p>JSON · baseline, goal, all plans, courses, policy snapshot</p>
                    <button type="button" className="btn-ghost io-btn" onClick={handleExportJson}>
                        Export JSON
                    </button>
                </div>
                <div className="io-action-card">
                    <strong>Course list</strong>
                    <p>CSV · active plan only · spreadsheet-friendly</p>
                    <button type="button" className="btn-ghost io-btn" onClick={handleExportCsv}>
                        Export CSV
                    </button>
                </div>
                <div className="io-action-card">
                    <strong>Import</strong>
                    <p>Accepts VisualGPA JSON or courses CSV</p>
                    <button
                        type="button"
                        className="btn-ghost io-btn"
                        onClick={() => fileRef.current?.click()}
                    >
                        Choose file
                    </button>
                    <input
                        ref={fileRef}
                        type="file"
                        accept=".json,.csv,application/json,text/csv"
                        style={{ display: 'none' }}
                        onChange={e => {
                            const f = e.target.files?.[0];
                            if (f) void handleFile(f);
                            e.target.value = '';
                        }}
                    />
                </div>
            </div>

            <div className="io-guide-toggle">
                <button type="button" className="text-button" onClick={() => setShowGuide(v => !v)}>
                    {showGuide ? 'Hide' : 'Show'} what you can import
                </button>
                <button type="button" className="text-button" onClick={handleTemplate}>
                    Download CSV template
                </button>
            </div>

            {showGuide && (
                <div className="io-guide" aria-label="Import and export guide">
                    <div>
                        <div className="system-panel-kicker">Can import</div>
                        <ul>
                            <li>
                                <strong>JSON backup</strong> from VisualGPA — restores baseline, goal,
                                every scenario plan, courses, and frozen policy rules.
                            </li>
                            <li>
                                <strong>CSV course list</strong> with header{' '}
                                <code>code,name,credits,grade,semester</code>. Only{' '}
                                <code>credits</code> + <code>grade</code> are required. Replaces the
                                active plan&apos;s courses.
                            </li>
                            <li>
                                A CSV you exported from here, or filled from the template.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="system-panel-kicker">Cannot import</div>
                        <ul>
                            <li>Excel workbooks (<code>.xlsx</code> / <code>.xls</code>) — save as CSV first.</li>
                            <li>PDF or photo transcripts — no OCR / portal scrape.</li>
                            <li>Official university portal dumps in unknown formats.</li>
                            <li>
                                Share links (<code>#share=</code>) — those are grade-free summaries, not backups.
                            </li>
                        </ul>
                    </div>
                </div>
            )}

            {status && (
                <div className={`io-status io-status-${status.tone}`} role="status">
                    {status.text}
                </div>
            )}
        </div>
    );
}
