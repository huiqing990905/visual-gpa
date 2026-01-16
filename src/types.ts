
// -- Enums & Types --

export type GradeType = 'Letter' | 'Percentage' | 'PassFail';

export interface GradingScaleItem {
  grade: string;
  point: number;
  minPercentage?: number;
  maxPercentage?: number;
}

export type RepeatPolicyType = 'BestAttempt' | 'LatestAttempt' | 'Average';

export interface AcademicPolicy {
  id: string;
  universityId?: string;
  name: string;
  effectiveFrom?: string; // ISO Date
  gradingScale: GradingScaleItem[];
  repeatPolicy?: RepeatPolicyType;
  roundingPrecision?: number; // e.g. 2 for 3.85
  maxCGPA?: number; // Optional limit for input validation (default 4.0)
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
