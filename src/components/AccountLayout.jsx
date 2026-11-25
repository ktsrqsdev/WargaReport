import { NavLink, Outlet } from "react-router";

const TABS = [
    { label: "My complaints", path: "/account/complaints" },
    { label: "Profile", path: "/account/profile" },
    { label: "Notifications", path: "/account/notifications" },
    { label: "Privacy & data", path: "/account/privacy" },
    { label: "Security", path: "/account/security" },
];

const tabClass = ({ isActive }) =>
    `rounded-full px-3.5 py-1.5 text-xs font-medium ${isActive ? "bg-(--success) text-(--light)" : "text-(--disabled) hover:text-(--dark)"}`;

export default function AccountLayout() {
    return (
        <main className="mx-auto w-full max-w-7xl px-5 pb-4 pt-12 md:px-(--gutter)">
            <p className="mb-2 font-(family-name:--font-pm) text-[11px] uppercase tracking-widest text-(--disabled)">Citizen Management</p>
            <h1 className="mb-2 font-(family-name:--font-f) text-[38px] font-semibold leading-[1.1]">Account &amp; Case History</h1>
            <nav className="mt-4 flex flex-wrap gap-1.5">
                {TABS.map(tab => (
                    <NavLink key={tab.path} to={tab.path} className={tabClass}>
                        {tab.label}
                    </NavLink>
                ))}
            </nav>
            <div className="mt-6">
                <Outlet />
            </div>
        </main>
    );
}
