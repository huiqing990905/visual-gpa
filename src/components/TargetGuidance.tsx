'use client';

import type { AcademicPolicy, TargetSolveResult } from '../types';
import { solveRequiredAverage, sumCourseCredits } from '../logic/target';
import type { Course } from '../types';

interface TargetGuidanceProps {
    baselineCgpa: number;
    baselineCredits: number;
    targetCgpa: number;
    courses: Course[];
    policy: AcademicPolicy;
    /** Optional manual credit override when course list is empty. */
    manualCredits?: number;
}

export function TargetGuidance({
    baselineCgpa,
    baselineCredits,
    targetCgpa,
    courses,
    policy,
    manualCredits,
}: TargetGuidanceProps) {
    if (!targetCgpa || targetCgpa <= 0 || baselineCredits <= 0) return null;

    const fromCourses = sumCourseCredits(courses);
    const plannedCredits = fromCourses > 0 ? fromCourses : (manualCredits ?? 0);

    const solve: TargetSolveResult = solveRequiredAverage({
        baselineCgpa,
        baselineCredits,
        plannedCredits,
        targetCgpa,
        policy,
    });

    return (
        <section className="system-panel target-guidance-panel" aria-label="Target CGPA guidance">
            <div className="system-panel-kicker">Target Reverse-Solve</div>
            <div className="target-guidance-goal">
                Goal <strong>{targetCgpa.toFixed(2)}</strong>
                {plannedCredits > 0 && (
                    <span className="target-guidance-meta"> over {plannedCredits} planned credits</span>
                )}
            </div>

            {plannedCredits <= 0 ? (
                <p className="target-guidance-body">
                    Add courses (or planned credits) to estimate the average grade needed.
                </p>
            ) : solve.feasible ? (
                <div className="target-guidance-body">
                    <p>
                        Need ~<strong>{solve.requiredAverage.toFixed(3)}</strong> grade points average
                        {solve.suggestedGrade && (
                            <> → aim for <strong>{solve.suggestedGrade}</strong>
                                {solve.suggestedGradePoint !== undefined && (
                                    <> ({solve.suggestedGradePoint.toFixed(2)})</>
                                )}
                            </>
                        )}
                        {solve.floorGrade && (
                            <> · below <strong>{solve.floorGrade}</strong> misses the target</>
                        )}
                    </p>
                </div>
            ) : (
                <p className="target-guidance-body target-guidance-warn">
                    {solve.reason}
                </p>
            )}
        </section>
    );
}
