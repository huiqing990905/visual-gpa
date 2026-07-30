
// -- Enums & Types --

export type GradeType = 'Letter' | 'Percentage' | 'PassFail';

export interface GradingScaleItem {
  grade: string;
  point: number;
  minPercentage?: number;
  maxPercentage?: number;
}

export type RepeatPolicyType = 'BestAttempt' | 'LatestAttempt' | 'Average';

/** Degree / awards classification band driven by policy config. */
export interface HonorsBand {
  title: string;
  minCgpa: number;
  /** Exclusive upper bound; omit for open-ended top band. */
  maxCgpa?: number;
  description?: string;
}

export interface AcademicPolicy {
  id: string;
  universityId?: string;
  name: string;
  /** Inclusive start of policy validity (ISO date). */
  effectiveFrom?: string;
  /** Exclusive end of policy validity (ISO date). Omit = still active. */
  effectiveTo?: string;
  /** Human label for version picker, e.g. "AY 2024/25" or "2010–present". */
  academicYearLabel?: string;
  gradingScale: GradingScaleItem[];
  repeatPolicy?: RepeatPolicyType;
  roundingPrecision?: number; // e.g. 2 for 3.85
  maxCGPA?: number; // Optional limit for input validation (default 4.0)
  /** Optional honors / class of degree thresholds for this policy. */
  honors?: HonorsBand[];
}

/**
 * Immutable snapshot of the rules used for a calculation.
 * Stored with exports / share summaries so old results stay reproducible
 * even if live policy packs are later edited.
 */
export interface PolicySnapshot {
  policyId: string;
  policyName: string;
  universityId?: string;
  effectiveFrom?: string;
  effectiveTo?: string;
  academicYearLabel?: string;
  repeatPolicy: RepeatPolicyType;
  roundingPrecision: number;
  maxCGPA: number;
  gradingScale: GradingScaleItem[];
  honors?: HonorsBand[];
  snapshottedAt: string;
}

/** Grade-free scenario summary for share links (privacy-safe). */
export interface SharePlanSummary {
  name: string;
  courseCount: number;
  plannedCredits: number;
  projectedCgpa: number;
  classification?: string;
}

/** Client-side share payload — never includes letter grades or course codes. */
export interface ShareSummary {
  v: 1;
  universityId: string;
  universityName: string;
  policy: PolicySnapshot;
  baseline: { cgpa: number; credits: number };
  targetCgpa?: number;
  plans: SharePlanSummary[];
  createdAt: string;
}

export interface University {
  id: string;
  name: string;
  shortName?: string;
  country: string;
  type: 'Public' | 'Private' | 'Foreign';
  imageUrl: string;
  policies: AcademicPolicy[];
}

export interface Course {
  id: string; // Unique instance ID
  code: string; // e.g. CS101
  name: string;
  credits: number | string; // Allow string for input handling (decimals)
  grade: string; // The letter grade received
  semester: string; // e.g. "2023-Sem1" (used for sorting)
  isExcluded?: boolean; // Manual exclusion
  isRepeat?: boolean; // Flagged by system
}

/** A named what-if plan under the same baseline + policy. */
export interface ScenarioPlan {
  id: string;
  name: string;
  courses: Course[];
}

export interface CalculationStep {
  description: string;
  resultData?: any;
  totalPoints?: number;
  policy?: string;
  count?: number;
}

export interface CGPAResult {
  totalCreditsAttempted: number;
  totalValidCredits: number; // Denominator
  totalGradePoints: number; // Numerator
  cgpa: number;
  history: CalculationStep[]; // For transparency
  processedCourses: Course[]; // Courses after processing (showing exclusions)
}

export type CalculationMode = 'predict' | 'transcript';

/** Structured, UI-ready explanation of the active ruleset. */
export interface PolicyExplanation {
  universityId: string;
  universityName: string;
  policyId: string;
  policyName: string;
  effectiveFrom?: string;
  repeatPolicy: RepeatPolicyType;
  repeatPolicyLabel: string;
  roundingPrecision: number;
  maxCGPA: number;
  scaleSummary: string;
  honorsConfigured: boolean;
  rules: { key: string; label: string; value: string }[];
}

/** Result of reverse-solving for a target CGPA. */
export interface TargetSolveResult {
  feasible: boolean;
  reason?: string;
  /** Required average grade points over plannedCredits to hit target. */
  requiredAverage: number;
  /** Closest letter grade at or above requiredAverage (if any). */
  suggestedGrade?: string;
  suggestedGradePoint?: number;
  /** Letter grade just below the requirement (risk floor). */
  floorGrade?: string;
  targetCgpa: number;
  projectedIfPerfect: number;
  creditsNeeded: number;
}

/** Portable backup format (local-only; never uploaded by default). */
export interface ExportBundle {
  version: 1;
  exportedAt: string;
  universityId: string;
  policyId: string;
  baseline: { cgpa: number; credits: number };
  targetCgpa?: number;
  scenarios: ScenarioPlan[];
  activeScenarioId?: string;
  customGradingScale?: GradingScaleItem[];
  /**
   * Frozen copy of the rules used when exporting.
   * Prefer this on import so results stay reproducible if live packs change.
   */
  policySnapshot?: PolicySnapshot;
}
