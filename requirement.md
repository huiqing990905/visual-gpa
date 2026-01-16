
---

### 3. CGPA Calculation Flow
The calculation engine must follow this pipeline:

1. Remove excluded grades
2. Group repeated courses
3. Apply repeat policy
4. Convert grades to grade points
5. Multiply grade points by credits
6. Sum total grade points
7. Divide by total valid credits
8. Apply rounding rules

Each step must be modular and testable.

---

## Data Model Requirements

### University
- id
- name
- country

### Academic Policy
- id
- university_id
- program
- academic_year
- rounding_rule
- repeat_policy
- effective_from
- effective_to

### Grading Scale
- policy_id
- grade
- grade_point

### Honors Classification (Optional)
- policy_id
- min_cgpa
- title

---

## Versioning & Maintainability
- Policies must be immutable once published
- New academic years = new policy records
- Old calculations must remain reproducible

---

## UX Requirements
- Clear indication of which rules are applied
- Error messages must be user-friendly
- Results must be transparent and explainable

---

## Non-Goals (DO NOT IMPLEMENT)
- No authentication required (initial MVP)
- No payment system
- No scraping university websites

---

## Optional Enhancements (If Time Allows)
- CGPA target prediction
- Honors / classification display
- CSV import/export
- Admin panel for rule management

---

## Output Expectations
Generate:
- System architecture explanation
- Backend logic (code)
- Frontend UI components
- Sample rule configuration data
- Example CGPA calculation walkthrough

The final result should resemble a **real production system**, not a demo calculator.
