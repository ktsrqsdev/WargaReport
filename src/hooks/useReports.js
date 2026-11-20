import { useMemo } from "react";
import { DEMO_ACCOUNT_CASE_IDS, DEMO_CASES } from "../constants/cases";
import { STORAGE_KEYS } from "../constants/storageKeys";
import { isDemoAccount } from "../services/userService";
import useAuth from "./useAuth";
import useStoredValue from "./useStoredValue";

export default function useReports() {
    const { user } = useAuth();
    const userReports = useStoredValue(STORAGE_KEYS.reports, []);

    const reports = useMemo(() => [...userReports, ...DEMO_CASES], [userReports]);

    const myReports = useMemo(() => {
        if (!user) return [];
        const demo = isDemoAccount(user) ? DEMO_CASES.filter(c => DEMO_ACCOUNT_CASE_IDS.includes(c.id)) : [];
        return [...userReports.filter(report => report.email === user.email), ...demo];
    }, [user, userReports]);

    return { reports, myReports };
}
