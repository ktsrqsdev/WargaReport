import { DEMO_ACCOUNT_CASE_IDS, DEMO_CASES } from "../constants/cases";
import { STORAGE_KEYS } from "../constants/storageKeys";
import { load, remove, save } from "../utils/storage";
import { isDemoAccount } from "./userService";

export const getUserReports = () => load(STORAGE_KEYS.reports, []);

export const getReportsByEmail = email => getUserReports().filter(report => report.email === email);

export function getMyReports(user) {
    const demoReports = isDemoAccount(user) ? DEMO_CASES.filter(c => DEMO_ACCOUNT_CASE_IDS.includes(c.id)) : [];
    return [...getReportsByEmail(user.email), ...demoReports];
}

export const findCase = id => DEMO_CASES.find(c => c.id === id) ?? getUserReports().find(report => report.id === id);

export const generateReportId = () => `CMP-2026-${9473 + getUserReports().length}`;

export const addReport = report => save(STORAGE_KEYS.reports, [report, ...getUserReports()]);

export const getDraft = () => load(STORAGE_KEYS.draft, {});

export const saveDraft = patch => save(STORAGE_KEYS.draft, { ...getDraft(), ...patch });

export const clearDraft = () => remove(STORAGE_KEYS.draft);
