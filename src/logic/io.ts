import type { AcademicPolicy, Course, ExportBundle, PolicySnapshot, ScenarioPlan } from '../types';
import { snapshotPolicy } from './policyResolve';

const BUNDLE_VERSION = 1 as const;

function newId(): string {
    return Math.random().toString(36).slice(2, 11);
}

function isPolicySnapshot(value: unknown): value is PolicySnapshot {
    if (!value || typeof value !== 'object') return false;
    const s = value as Record<string, unknown>;
    return typeof s.policyId === 'string'
        && typeof s.policyName === 'string'
        && Array.isArray(s.gradingScale)
        && typeof s.snapshottedAt === 'string';
}

/** Build a versioned JSON backup bundle (local-only by design). */
export function buildExportBundle(input: {
    universityId: string;
    policyId: string;
    baselineCgpa: number;
    baselineCredits: number;
    targetCgpa?: number;
    scenarios: ScenarioPlan[];
    activeScenarioId?: string;
    customGradingScale?: ExportBundle['customGradingScale'];
    /** Live policy to freeze into the backup for reproducibility. */
    policy?: AcademicPolicy;
    policySnapshot?: PolicySnapshot;
}): ExportBundle {
    const policySnapshot = input.policySnapshot
        ?? (input.policy ? snapshotPolicy(input.policy) : undefined);

    return {
        version: BUNDLE_VERSION,
        exportedAt: new Date().toISOString(),
        universityId: input.universityId,
        policyId: input.policyId,
        baseline: {
            cgpa: input.baselineCgpa,
            credits: input.baselineCredits,
        },
        targetCgpa: input.targetCgpa,
        scenarios: input.scenarios,
        activeScenarioId: input.activeScenarioId,
        customGradingScale: input.customGradingScale,
        policySnapshot,
    };
}

export function serializeBundleJson(bundle: ExportBundle): string {
    return JSON.stringify(bundle, null, 2);
}

export type ParseBundleResult =
    | { ok: true; bundle: ExportBundle }
    | { ok: false; error: string };

/** Validate and parse a VisualGPA JSON backup. */
export function parseExportBundle(raw: string): ParseBundleResult {
    let data: unknown;
    try {
        data = JSON.parse(raw);
    } catch {
        return { ok: false, error: 'Invalid JSON — file could not be parsed.' };
    }

    if (!data || typeof data !== 'object') {
        return { ok: false, error: 'Backup root must be an object.' };
    }

    const obj = data as Record<string, unknown>;

    // Legacy: bare course array
    if (Array.isArray(data)) {
        const courses = normalizeCourses(data);
        return {
            ok: true,
            bundle: {
                version: 1,
                exportedAt: new Date().toISOString(),
                universityId: '',
                policyId: '',
                baseline: { cgpa: 0, credits: 0 },
                scenarios: [{ id: newId(), name: 'Imported', courses }],
            },
        };
    }

    if (obj.version !== 1) {
        // Soft-accept missing version if scenarios/courses look present
        if (!obj.scenarios && !obj.courses) {
            return { ok: false, error: 'Unsupported or missing backup version.' };
        }
    }

    const scenarios: ScenarioPlan[] = [];

    if (Array.isArray(obj.scenarios)) {
        for (const s of obj.scenarios) {
            if (!s || typeof s !== 'object') continue;
            const sc = s as Record<string, unknown>;
            scenarios.push({
                id: typeof sc.id === 'string' ? sc.id : newId(),
                name: typeof sc.name === 'string' ? sc.name : 'Plan',
                courses: normalizeCourses(Array.isArray(sc.courses) ? sc.courses : []),
            });
        }
    } else if (Array.isArray(obj.courses)) {
        scenarios.push({
            id: newId(),
            name: 'Imported',
            courses: normalizeCourses(obj.courses),
        });
    }

    if (scenarios.length === 0) {
        return { ok: false, error: 'No courses or scenarios found in backup.' };
    }

    const baseline = (obj.baseline && typeof obj.baseline === 'object'
        ? obj.baseline
        : {}) as Record<string, unknown>;

    return {
        ok: true,
        bundle: {
            version: 1,
            exportedAt: typeof obj.exportedAt === 'string' ? obj.exportedAt : new Date().toISOString(),
            universityId: typeof obj.universityId === 'string' ? obj.universityId : '',
            policyId: typeof obj.policyId === 'string' ? obj.policyId : '',
            baseline: {
                cgpa: Number(baseline.cgpa) || 0,
                credits: Number(baseline.credits) || 0,
            },
            targetCgpa: obj.targetCgpa !== undefined ? Number(obj.targetCgpa) : undefined,
            scenarios,
            activeScenarioId: typeof obj.activeScenarioId === 'string' ? obj.activeScenarioId : scenarios[0].id,
            customGradingScale: Array.isArray(obj.customGradingScale)
                ? (obj.customGradingScale as ExportBundle['customGradingScale'])
                : undefined,
            policySnapshot: isPolicySnapshot(obj.policySnapshot) ? obj.policySnapshot : undefined,
        },
    };
}

function normalizeCourses(raw: unknown[]): Course[] {
    return raw.map((item, idx) => {
        const c = (item && typeof item === 'object' ? item : {}) as Record<string, unknown>;
        return {
            id: typeof c.id === 'string' ? c.id : newId(),
            code: String(c.code ?? ''),
            name: String(c.name ?? c.code ?? `Course ${idx + 1}`),
            credits: c.credits === undefined || c.credits === null ? 3 : (c.credits as number | string),
            grade: String(c.grade ?? 'B'),
            semester: String(c.semester ?? ''),
            isExcluded: Boolean(c.isExcluded),
        };
    });
}

/** CSV header + rows for the active scenario (spreadsheet-friendly). */
export function coursesToCsv(courses: Course[]): string {
    const header = 'code,name,credits,grade,semester';
    const rows = courses.map(c =>
        [c.code, c.name, c.credits, c.grade, c.semester]
            .map(escapeCsv)
            .join(',')
    );
    return [header, ...rows].join('\n');
}

function escapeCsv(value: unknown): string {
    const s = String(value ?? '');
    if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
    return s;
}

export type ParseCsvResult =
    | { ok: true; courses: Course[] }
    | { ok: false; error: string };

/** Parse a simple courses CSV (header required). */
export function parseCoursesCsv(raw: string): ParseCsvResult {
    const lines = raw
        .replace(/^\uFEFF/, '')
        .split(/\r?\n/)
        .map(l => l.trim())
        .filter(Boolean);

    if (lines.length < 2) {
        return { ok: false, error: 'CSV needs a header row and at least one course.' };
    }

    const headers = splitCsvLine(lines[0]).map(h => h.toLowerCase());
    const idx = {
        code: headers.indexOf('code'),
        name: headers.indexOf('name'),
        credits: headers.indexOf('credits'),
        grade: headers.indexOf('grade'),
        semester: headers.indexOf('semester'),
    };

    if (idx.grade < 0 || idx.credits < 0) {
        return { ok: false, error: 'CSV must include at least "credits" and "grade" columns.' };
    }

    const courses: Course[] = [];
    for (let i = 1; i < lines.length; i++) {
        const cols = splitCsvLine(lines[i]);
        courses.push({
            id: newId(),
            code: idx.code >= 0 ? cols[idx.code] ?? '' : '',
            name: idx.name >= 0 ? cols[idx.name] ?? '' : '',
            credits: parseFloat(cols[idx.credits] ?? '0') || 0,
            grade: cols[idx.grade] ?? 'B',
            semester: idx.semester >= 0 ? cols[idx.semester] ?? '' : '',
        });
    }

    return { ok: true, courses };
}

function splitCsvLine(line: string): string[] {
    const out: string[] = [];
    let cur = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (inQuotes) {
            if (ch === '"' && line[i + 1] === '"') {
                cur += '"';
                i++;
            } else if (ch === '"') {
                inQuotes = false;
            } else {
                cur += ch;
            }
        } else if (ch === '"') {
            inQuotes = true;
        } else if (ch === ',') {
            out.push(cur.trim());
            cur = '';
        } else {
            cur += ch;
        }
    }
    out.push(cur.trim());
    return out;
}

/** Sanitize university ids for download filenames (e.g. `__sample__` → `sample`). */
export function safeExportSlug(label: string, fallback = 'plan'): string {
    const cleaned = label
        .trim()
        .replace(/^_+|_+$/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
    return cleaned || fallback;
}

/** Blank CSV template users can fill in a spreadsheet. */
export function csvTemplate(): string {
    return [
        'code,name,credits,grade,semester',
        'CS101,Intro to Computing,4,A,Y1S1',
        'MATH101,Calculus I,4,B+,Y1S1',
    ].join('\n');
}

/** Detect clearly unsupported upload types before attempting parse. */
export function unsupportedImportReason(filename: string): string | null {
    const lower = filename.toLowerCase();
    if (lower.endsWith('.xlsx') || lower.endsWith('.xls')) {
        return 'Excel files (.xlsx / .xls) are not supported. Save as CSV, or use a VisualGPA JSON backup.';
    }
    if (lower.endsWith('.pdf') || lower.endsWith('.png') || lower.endsWith('.jpg') || lower.endsWith('.jpeg')) {
        return 'Transcript images and PDFs cannot be imported. Enter courses manually, or use CSV / JSON.';
    }
    if (lower.endsWith('.tsv') || lower.endsWith('.txt')) {
        return 'Only .csv and .json are accepted. Rename or export your sheet as CSV with a header row.';
    }
    if (!lower.endsWith('.csv') && !lower.endsWith('.json')) {
        return 'Unsupported file type. Import a VisualGPA .json backup or a courses .csv.';
    }
    return null;
}

/** Trigger a browser download for a text blob. */
export function downloadTextFile(filename: string, content: string, mime: string): void {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}
