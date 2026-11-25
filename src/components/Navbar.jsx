import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router";
import { useModal } from "../context/ModalContext";
import { useToast } from "../context/ToastContext";
import { logout } from "../redux/slices/loginSlice";
import { selectCurrentUser } from "../redux/slices/registerSlice";
import { getInitials } from "../utils/format";
import { Icon } from "./Icons";
import { btnPrimary } from "./ui";

const desktopNav = ({ isActive }) =>
    `whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${isActive ? "bg-(--success) text-(--light) hover:text-(--light-green)" : "text-(--disabled) hover:text-(--dark)"}`;

const mobileNav = ({ isActive }) =>
    `block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive ? "bg-(--success) text-(--light) hover:text-(--light-green)" : "text-(--disabled) hover:bg-(--bg-primary)"}`;

const menuItem = "flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium hover:bg-(--bg-primary)";

export default function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { openModal } = useModal();
    const { showToast } = useToast();
    const user = useSelector(selectCurrentUser);
    const isAdmin = user?.role === "admin";
    const hasUnread = useSelector(state => !!user && state.notifications.items.some(n => n.email === user.email && !n.read));

    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const userMenuRef = useRef(null);

    // klik di luar dropdown user -> dropdown menutup
    useEffect(() => {
        function handleClickOutside(e) {
            if (userMenuRef.current && !userMenuRef.current.contains(e.target)) setUserMenuOpen(false);
        }
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    function handleLogout() {
        setUserMenuOpen(false);
        setMobileOpen(false);
        dispatch(logout());
        showToast("Signed out", "info");
        navigate("/");
    }

    return (
        <header className="relative z-30 border-b border-(--bd-primary) bg-(--bg-secondary)">
            <nav className="mx-auto flex h-17 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8 xl:grid xl:grid-cols-[1fr_auto_1fr] xl:px-(--gutter)">
                <NavLink to="/" className="flex items-center gap-2 font-(family-name:--font-f) text-[19px] font-bold tracking-tight">
                    <Icon.Logo />
                    WargaReport
                </NavLink>

                {/* tampilan desktop */}
                {isAdmin ? (
                    <div className="hidden items-center justify-center lg:flex">
                        <NavLink
                            to="/admin"
                            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-(--success) px-4.5 py-2 text-xs font-semibold text-(--light) transition hover:text-(--light-green)">
                            <Icon.Shield stroke="currentColor" />
                            Admin Console
                        </NavLink>
                    </div>
                ) : (
                    <ul className="hidden items-center gap-2 lg:flex">
                        <li><NavLink to="/live-feed" className={desktopNav}>Live Feed</NavLink></li>
                        <li><NavLink to="/track" className={desktopNav}>Track</NavLink></li>
                        <li><NavLink to="/help" className={desktopNav}>How it works</NavLink></li>
                        {user && <li><NavLink to="/account/complaints" className={desktopNav}>My Reports</NavLink></li>}
                    </ul>
                )}
                <div className="hidden items-center justify-end gap-3 lg:flex xl:gap-4">
                    {!user && (
                        <button
                            type="button"
                            onClick={() => openModal("signin")}
                            className="cursor-pointer inline-flex items-center justify-center gap-1.75 whitespace-nowrap rounded-full border border-transparent bg-transparent py-2.5 text-xs font-semibold text-(--disabled)">
                            <Icon.SignIn />
                            Sign In
                        </button>
                    )}
                    {user && (
                        <>
                            <Link to="/notifications" className="relative p-1" aria-label="Notifications">
                                <Icon.Bell />
                                {hasUnread && <span className="absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-(--success)" />}
                            </Link>
                            <div ref={userMenuRef} className="relative">
                                <button
                                    type="button"
                                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                                    className="flex cursor-pointer items-center gap-2 rounded-full border border-(--bd-primary) bg-(--bg-secondary) py-1 pl-1 pr-3.5">
                                    <Avatar user={user} />
                                    <span className="hidden flex-col whitespace-nowrap text-left text-xs font-semibold leading-tight xl:flex">
                                        <span>{user.name}</span>
                                        <span className="font-(family-name:--font-pm) text-[9px] font-normal uppercase text-(--disabled)">{isAdmin ? "Admin" : "Citizen"}</span>
                                    </span>
                                    <Icon.ChevronDown className={`h-4 w-4 text-(--disabled) transition-transform ${userMenuOpen ? "rotate-180" : ""}`} />
                                </button>
                                {userMenuOpen && (
                                    <div className="absolute right-0 z-40 mt-2 w-57.5 rounded-xl border border-(--bd-secondary) bg-(--bg-secondary) p-1.5 shadow-lg">
                                        <div className="border-b border-(--bd-secondary) px-3 py-2.5">
                                            <p className="text-[13px] font-semibold">{user.name}</p>
                                            <p className="text-[11px] text-(--disabled)">{user.email}</p>
                                        </div>
                                        {isAdmin ? (
                                            <Link to="/admin" onClick={() => setUserMenuOpen(false)} className={`mt-1 ${menuItem}`}>
                                                <Icon.Shield />
                                                Admin Console
                                            </Link>
                                        ) : (
                                            <Link to="/account/complaints" onClick={() => setUserMenuOpen(false)} className={`mt-1 ${menuItem}`}>
                                                <Icon.FileText />
                                                My Filed Reports
                                            </Link>
                                        )}
                                        <button type="button" onClick={handleLogout} className={`w-full cursor-pointer text-(--txt-alert) ${menuItem}`}>
                                            <Icon.SignOut />
                                            Sign Out
                                        </button>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                    {!isAdmin && (
                        <Link to="/report/topic" className={`${btnPrimary} shrink-0`}>
                            <Icon.Plus />
                            Report an Issue
                        </Link>
                    )}
                </div>

                {/* tampilan mobile */}
                <div className="relative lg:hidden">
                    <button
                        type="button"
                        aria-label="Menu"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-(--bd-primary)">
                        {mobileOpen ? <Icon.Close /> : <Icon.Menu />}
                    </button>
                    {mobileOpen && (
                        <div onClick={() => setMobileOpen(false)} className="absolute right-0 z-40 mt-2 w-64 rounded-xl border border-(--bd-secondary) bg-(--bg-secondary) p-2 shadow-lg">
                            {!isAdmin && (
                                <>
                                    <NavLink to="/live-feed" className={mobileNav}>Live Feed</NavLink>
                                    <NavLink to="/track" className={mobileNav}>Track</NavLink>
                                    <NavLink to="/help" className={mobileNav}>How it works</NavLink>
                                </>
                            )}
                            {user ? (
                                <>
                                    {isAdmin ? <NavLink to="/admin" className={mobileNav}>Admin Console</NavLink> : <NavLink to="/account/complaints" className={mobileNav}>My Reports</NavLink>}
                                    <div className="mt-1 border-t border-(--bd-secondary) pt-1">
                                        <div className="px-3 py-2.5">
                                            <p className="text-[13px] font-semibold">{user.name}</p>
                                            <p className="text-[11px] text-(--disabled)">{user.email}</p>
                                        </div>
                                        <NavLink to="/notifications" className={mobileNav}>Notifications</NavLink>
                                        <button type="button" onClick={handleLogout} className="block w-full cursor-pointer rounded-lg px-3 py-2.5 text-left text-sm font-medium text-(--txt-alert) hover:bg-(--bg-primary)">
                                            Sign Out
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <button type="button" onClick={() => openModal("signin")} className="block w-full cursor-pointer rounded-lg px-3 py-2.5 text-left text-sm font-medium text-(--disabled) hover:bg-(--bg-primary)">
                                    Sign In
                                </button>
                            )}
                            {!isAdmin && (
                                <Link to="/report/topic" className={`mt-2 w-full ${btnPrimary}`}>
                                    <Icon.Plus />
                                    Report an Issue
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}

// Lingkaran berisi foto profil, atau inisial nama kalau belum punya foto
export function Avatar({ user, size = "h-7 w-7 text-[11px]" }) {
    return (
        <span
            style={user.photo ? { backgroundImage: `url(${user.photo})`, backgroundSize: "cover" } : undefined}
            className={`grid ${size} place-items-center rounded-full bg-(--light-green) font-(family-name:--font-pm) font-semibold text-(--success)`}>
            {user.photo ? "" : getInitials(user.name)}
        </span>
    );
}
