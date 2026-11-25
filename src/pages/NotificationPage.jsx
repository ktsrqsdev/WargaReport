import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { Icon } from "../components/Icons";
import StatusBadge from "../components/StatusBadge";
import { btnPrimary } from "../components/ui";
import { NOTIFICATION_FILTERS } from "../constants/status";
import { selectCurrentUser } from "../redux/slices/registerSlice";
import { markAllRead, markRead } from "../redux/slices/notificationsSlice";

const CHIP = "inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full border px-3.5 py-2 text-xs font-medium";

function matchesFilter(notification, filter) {
    if (filter === "Unread") return !notification.read;
    if (filter === "Status") return notification.type === "Status Change";
    if (filter === "Replies") return notification.type === "Reply";
    return true;
}

export default function NotificationPage() {
    const dispatch = useDispatch();
    const user = useSelector(selectCurrentUser);
    const allNotifications = useSelector(state => state.notifications.items);

    const [filter, setFilter] = useState("All");
    const [selectedId, setSelectedId] = useState(null);

    const mine = allNotifications.filter(n => n.email === user.email);
    const visible = mine.filter(n => matchesFilter(n, filter));
    const selected = mine.find(n => n.id === selectedId) ?? mine[0];

    function handleSelect(notification) {
        setSelectedId(notification.id);
        dispatch(markRead(notification.id));
    }

    return (
        <main className="mx-auto w-full max-w-7xl px-5 pb-4 pt-12 md:px-(--gutter)">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="mb-2 font-(family-name:--font-pm) text-[11px] uppercase tracking-widest text-(--disabled)">Alerts &amp; Activity</p>
                    <h1 className="mb-2 font-(family-name:--font-f) text-[38px] font-semibold leading-[1.1]">Notifications</h1>
                </div>
                <button
                    type="button"
                    onClick={() => dispatch(markAllRead(user.email))}
                    className="mt-6 inline-flex cursor-pointer items-center gap-1.5 text-[13px] font-semibold text-(--success)">
                    <Icon.Check />
                    Mark all as read
                </button>
            </div>

            <div className="flex flex-wrap items-center gap-2 border-b border-(--bd-primary) pb-4">
                <span className="mr-1 font-(family-name:--font-pm) text-[11px] uppercase tracking-wider text-(--disabled)">Filter:</span>
                {NOTIFICATION_FILTERS.map(name => (
                    <button
                        key={name}
                        type="button"
                        onClick={() => setFilter(name)}
                        className={`${CHIP} ${
                            filter === name
                                ? "border-(--success) bg-(--success) text-(--light)"
                                : "border-(--bd-primary) bg-(--bg-secondary) text-(--dark) hover:border-(--green)"
                        }`}>
                        {name}
                    </button>
                ))}
            </div>

            <div className="mt-5 grid items-start gap-5 md:grid-cols-[5fr_7fr]">
                <ul className="min-h-50 divide-y divide-(--bd-secondary) overflow-hidden rounded-[18px] border border-(--bd-secondary) bg-(--bg-secondary)">
                    {visible.map(n => (
                        <li key={n.id}>
                            <button
                                type="button"
                                onClick={() => handleSelect(n)}
                                className={`block w-full cursor-pointer px-4 py-3.5 text-left ${
                                    n.id === selected?.id ? "border-l-2 border-(--green) bg-(--light-green)" : ""
                                }`}>
                                <div className="flex items-center justify-between">
                                    <span className="font-(family-name:--font-pm) text-xs text-(--success)">{n.caseId}</span>
                                    <span className="font-(family-name:--font-pm) text-[11px] text-(--disabled)">{n.time}</span>
                                </div>
                                <p className="mt-1 text-xs font-semibold">{n.title}</p>
                                <p className="mt-1 flex items-center justify-between text-[11px] text-(--disabled2)">
                                    {n.type}
                                    {!n.read && <span className="h-1.5 w-1.5 rounded-full bg-(--success)" />}
                                </p>
                            </button>
                        </li>
                    ))}
                    {visible.length === 0 && <li className="px-4 py-6 text-center text-xs text-(--disabled)">No notifications here.</li>}
                </ul>

                {selected && (
                    <section className="rounded-[22px] border border-(--bd-secondary) bg-(--bg-secondary) p-6 sm:p-8">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--disabled)">Incident Reference</p>
                                <p className="mt-1 font-(family-name:--font-pm) text-xl font-semibold text-(--success)">{selected.caseId}</p>
                            </div>
                            <StatusBadge status={selected.status} />
                        </div>
                        <hr className="my-4 border-(--bd-secondary)" />
                        <h2 className="font-(family-name:--font-f) text-[22px] font-semibold leading-snug">{selected.title}</h2>
                        <p className="mb-4 mt-1 font-(family-name:--font-pm) text-[11px] text-(--disabled)">
                            Dispatched {selected.date}, {selected.time} GMT+7
                        </p>
                        <p className="mb-5 rounded-xl bg-(--bg-submitted) px-4 py-3.5 text-xs leading-relaxed">{selected.body}</p>
                        <Link to={`/reports/${selected.caseId}`} className={btnPrimary}>
                            Open complaint tracking record
                            <Icon.ArrowWhite />
                        </Link>
                    </section>
                )}
            </div>
        </main>
    );
}
