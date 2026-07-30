'use client';

import type { PolicySnapshot } from '../types';

interface PolicySnapshotBannerProps {
    snapshot: PolicySnapshot;
    onClear: () => void;
}

/** Shown when calculations are driven by an imported frozen policy. */
export function PolicySnapshotBanner({ snapshot, onClear }: PolicySnapshotBannerProps) {
    return (
        <div className="policy-snapshot-banner" role="status">
            <div>
                <div className="system-panel-kicker">Frozen policy snapshot</div>
                <div className="policy-snapshot-banner-body">
                    Using <strong>{snapshot.academicYearLabel || snapshot.policyName}</strong>
                    {' '}locked at {snapshot.snapshottedAt.slice(0, 10)} — results ignore later pack edits.
                </div>
            </div>
            <button type="button" className="btn-ghost io-btn" onClick={onClear}>
                Use live pack
            </button>
        </div>
    );
}
