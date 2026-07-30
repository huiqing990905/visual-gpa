# Adding a University Policy Pack

VisualGPA keeps **policy configuration** out of the calculation engine. To support a new university you only add data — you do not touch `calculator.ts`.

## Steps

1. **Create a pack file**

   Copy an existing pack:

   ```bash
   cp src/data/packs/tarumt.ts src/data/packs/myuni.ts
   ```

2. **Fill metadata + policies**

   Required fields on `University`:

   - `id` — URL segment (`/myuni`)
   - `name`, `shortName`, `country`, `type`, `imageUrl`
   - `policies[]` — one or more `AcademicPolicy` records

   On each policy, set:

   | Field | Purpose |
   |---|---|
   | `id` | Stable key for exports / snapshots |
   | `name` | Human label |
   | `academicYearLabel` | Version picker text (e.g. `2010–present`) |
   | `effectiveFrom` / `effectiveTo` | Inclusive start, exclusive end (ISO dates) |
   | `repeatPolicy` | `LatestAttempt` \| `BestAttempt` \| `Average` |
   | `roundingPrecision` | Decimal places for CGPA |
   | `maxCGPA` | Scale ceiling |
   | `gradingScale` | Letter → point map |
   | `honors` | Pack-specific classification bands from `src/data/honors.ts` |

3. **Cite the source in a file comment**

   Prefer official exam regulations / DEAS pages / student handbooks. If the source is third-party only, mark the policy name as **unverified**.

4. **Register the pack**

   In `src/data/registry.ts`:

   ```ts
   import myuni from './packs/myuni';
   // ...
   export const POLICY_PACKS: University[] = [
     // ...
     myuni,
   ];
   ```

5. **Verify**

   ```bash
   npm test
   npm run dev
   # open http://localhost:3000/myuni
   ```

## Current pack audit (Jul 2026)

| Pack | Country | Grading scale | Honors / award class | Confidence |
|---|---|---|---|---|
| TAR UMT | Malaysia | Official DECA/510 + Jul 2023 handbook | Distinction / Merit / Honours | High |
| UTAR | Malaysia | DEAS Grade-Sys (Jan 2010) | First Class ≥ 3.50 (Jan 2011+) | High |
| Sunway | Malaysia | Academic Regulations Jan 2024 | Distinction / High Merit / Merit / Pass | High |
| Taylor's | Malaysia | Official Exam & Results table | First Class ≥ 3.67 (WCGPA) | High / Medium |
| HELP | Malaysia | Third-party HD/DI/CR/PS map | None | Low |
| UM | Malaysia | Faculty handbook 2024/2025 | Distinction ≥ 3.70 | High |
| UPM | Malaysia | UG briefing grading table | First Class ≥ 3.75 | High |
| MMU | Malaysia | Handbook letter floors | First Class ≥ 3.50 (confirm faculty) | Medium |
| NUS | Singapore | Registrar 5-point scale | Highest Distinction ≥ 4.50 | High |
| NTU | Singapore | Academic Handbook AY2025/26 | Highest Distinction ≥ 4.50 | High |
| SMU | Singapore | Published 4.3 GPA table | Summa ≥ 3.80 | Medium-High |

## Versioning rules

- Treat published policies as **immutable**. New academic year = new policy object with a new `id`.
- Keep old policies in the pack so prior exports / share links that embed a `policySnapshot` remain reproducible.
- JSON export and share links freeze a `PolicySnapshot` so later pack edits do not silently change historical results.

## What not to change

- Do not hard-code university rules inside React components.
- Do not scrape university websites for grades or scales.
- Do not upload student transcripts by default — packs are static, grades stay in `localStorage`.
