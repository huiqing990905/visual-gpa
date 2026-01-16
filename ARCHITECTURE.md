# CGPA Calculator System Architecture

## Overview
This system is designed as a modular, client-side application (extensible to server-side) that decouples **Academic Policy Configuration** from the **Calculation Logic**. This allows the system to handle multiple universities, grading scales, and historical policy changes without code modification.

## Core Modules

### 1. Data Layer (Types & Models)
Definitions for the immutable data structures.
- **University**: Metadata about the institution.
- **AcademicPolicy**: The "ruleset" (active years, rounding logic, repeating logic).
- **GradingScale**: Mapping of letter grades to numeric points.
- **StudentRecord**: The input data (courses, grades, credits).

### 2. Calculation Engine (The Kernel)
A pure functional pipeline that takes `StudentRecord + AcademicPolicy` and returns `CGPAResult`.
**Pipeline Steps:**
1.  **Filter**: Exclude non-evaluative grades (e.g., 'W', 'Audit').
2.  **Deduplicate**: Identify repeated courses based on Course Code.
3.  **Apply Repeat Policy**:
    *   *Policy: Best Attempt* -> Keep highest grade.
    *   *Policy: Latest Attempt* -> Keep most recent.
    *   *Policy: Averaging* -> (Advanced) Average the attempts.
4.  **Map**: Convert remaining letter grades to Grade Points (GP) using `GradingScale`.
5.  **Aggregate**:
    *   `Total GP = Sum(Course.GP * Course.Credit)`
    *   `Total Credits = Sum(Course.Credit)`
6.  **Compute**: `Raw CGPA = Total GP / Total Credits`.
7.  **Finalize**: Apply `RoundingRule` (e.g., Round to 2 decimals, Truncate).

### 3. User Interface (Presentation)
- **Configuration View**: Select University/Policy.
- **Transcript Input**: Data entry for courses.
- **Calculation Breakdown**: A transparent view showing the "Math" step-by-step.

## Data Flow
```
[Configuration] --> (Select Policy)
                        |
[Transcript Input] --> (Raw Course List)
                        |
                        v
               [Calculation Engine]
                        |
            (Apply Rules & Exclusions)
                        |
                        v
                 [Calculation Result]
       { CGPA: 3.85, Credits: 120, Breakdown: [...] }
```

## Tech Stack
- **Framework**: React (Vite) for interactivity.
- **Language**: TypeScript (Critical for strict data modeling).
- **Styling**: Vanilla CSS (CSS Modules) for modular, premium design.
