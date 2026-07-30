import type { University } from '../types';
import tarumt from './packs/tarumt';
import utar from './packs/utar';
import sunway from './packs/sunway';
import taylors from './packs/taylors';
import help from './packs/help';
import um from './packs/um';
import upm from './packs/upm';
import mmu from './packs/mmu';
import nus from './packs/nus';
import ntu from './packs/ntu';
import smu from './packs/smu';
import custom from './packs/custom';

/**
 * Registry of drop-in university policy packs.
 * To add a university: create `packs/<id>.ts` and append it here.
 * Calculation engine stays untouched.
 */
export const POLICY_PACKS: University[] = [
    // Malaysia
    tarumt,
    utar,
    sunway,
    taylors,
    help,
    um,
    upm,
    mmu,
    // Singapore
    nus,
    ntu,
    smu,
    // Escape hatch
    custom,
];

export function getUniversity(id: string): University | undefined {
    return POLICY_PACKS.find(u => u.id === id);
}

export function listUniversities(opts?: { includeCustom?: boolean; country?: string }): University[] {
    let list = opts?.includeCustom
        ? [...POLICY_PACKS]
        : POLICY_PACKS.filter(u => u.id !== 'custom');
    if (opts?.country) {
        list = list.filter(u => u.country === opts.country);
    }
    return list;
}

export function listCountries(): string[] {
    const set = new Set(
        POLICY_PACKS.filter(u => u.id !== 'custom').map(u => u.country)
    );
    return Array.from(set).sort((a, b) => a.localeCompare(b));
}
