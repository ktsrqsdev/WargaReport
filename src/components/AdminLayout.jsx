import { useEffect } from "react";
import { NavLink, Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminData } from "../redux/slices/adminSlice";
import { fetchReports } from "../redux/slices/reportsSlice";

const TABS = [
    { label: "Escalation Desk", path: "/admin/escalation" },
    { label: "SLA Benchmarks", path: "/admin/sla" },
    { label: "Categories", path: "/" },
    { label: "Agencies", path: "/" },
    { label: "Officer Accounts", path: "/" },
    { label: "Moderation", path: "/" },
];

export default function AdminLayout() {
    const dispatch = useDispatch();
    const admin = useSelector(state => state.admin);
    const reports = useSelector(state => state.reports);

    useEffect(() => {
        dispatch(fetchAdminData());
        if (!reports.fetched) dispatch(fetchReports());
    }, [dispatch, reports.fetched]);

    // menhitung laporan yang belum diproses untuk badge di tab Escalation Desk
    const pendingCount =
        admin.escalation.filter(row => row.status === "Awaiting evidence review").length +
        reports.items.filter(r => r.status === "Submitted" && !admin.escalation.some(e => e.id === r.id)).length;

    const tabClass = ({ isActive }) =>
        `inline-flex cursor-pointer items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
            isActive ? "bg-(--success) text-(--light)" : "text-(--disabled) hover:text-(--dark)"
        }`;

    return (
        <main className="mx-auto w-full max-w-7xl px-5 pb-4 pt-12 md:px-(--gutter)">
            <p className="mb-2 font-(family-name:--font-pm) text-[11px] uppercase tracking-widest text-(--disabled)">
                System Governance
            </p>
            <h1 className="mb-2 font-(family-name:--font-f) text-[38px] font-semibold leading-[1.1]">
                Civic Administration &amp; Policies
            </h1>
            <p className="max-w-135 text-sm leading-relaxed text-(--disabled)">
                Verify incoming citizen reports, route them to the responsible bureau, and configure statutory SLA
                benchmarks, taxonomy, and agency contacts.
            </p>

            <nav aria-label="Admin sections" className="mt-6 flex flex-wrap items-center gap-1.5">
                {TABS.map(tab => (
                    <NavLink key={tab.path} to={tab.path} className={tabClass}>
                        {({ isActive }) => (
                            <>
                                <span>{tab.label}</span>
                                {tab.label === "Escalation Desk" && (
                                    <span
                                        className={`grid h-4.5 min-w-4.5 place-items-center rounded-full px-1.5 font-(family-name:--font-pm) text-[10px] font-semibold ${
                                            isActive
                                                ? "bg-white/20 text-(--light)"
                                                : "bg-(--bg-submitted) text-(--disabled)"
                                        }`}>
                                        {pendingCount}
                                    </span>
                                )}
                            </>
                        )}
                    </NavLink>
                ))}
            </nav>

            <div className="mt-7">
                <Outlet />
            </div>
        </main>
    );
}
