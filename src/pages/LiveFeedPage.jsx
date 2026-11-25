import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router";
import CategoryIcon from "../components/CategoryIcon";
import { Icon } from "../components/Icons";
import StatusBadge from "../components/StatusBadge";
import Thumbnail from "../components/Thumbnail";
import UpvoteButton from "../components/UpvoteButton";
import { REPORT_STATUSES } from "../constants/status";
import useFlash from "../hooks/useFlash";
import { fetchAdminData } from "../redux/slices/adminSlice";
import { fetchReports } from "../redux/slices/reportsSlice";
import { formatDateTime } from "../utils/format";

const container = "mx-auto w-full max-w-7xl px-5 md:px-(--gutter)";

const CHIP = "inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full border px-3.5 py-2 text-xs font-medium";
const CHIP_ON = `${CHIP} border-(--success) bg-(--success) text-(--light)`;
const CHIP_OFF = `${CHIP} border-(--bd-primary) bg-(--bg-secondary) text-(--disabled) hover:border-(--green)`;

const SEG = "inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.75 text-xs font-medium";
const SEG_ON = `${SEG} bg-(--success) text-(--light)`;
const SEG_OFF = `${SEG} text-(--disabled)`;

export default function LiveFeedPage() {
    const dispatch = useDispatch();
    const { items: userReports, loading, error, fetched } = useSelector(state => state.reports);
    const categories = useSelector(state => state.admin.categories);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (!fetched) dispatch(fetchReports());
        dispatch(fetchAdminData());
    }, [dispatch, fetched]);
    const search = searchParams.get("q") ?? "";
    const category = searchParams.get("category") ?? "";
    const status = searchParams.get("status") ?? "";
    const proofOnly = searchParams.get("proof") === "true";
    const updateFilter = (key, value) => setSearchParams(params => {
        const next = new URLSearchParams(params);
        if (value) next.set(key, value); else next.delete(key);
        return next;
    }, { replace: true });
    const setSearch = value => updateFilter("q", value);
    const setCategory = value => updateFilter("category", value);
    const setStatus = value => updateFilter("status", value);
    const setProofOnly = value => updateFilter("proof", value ? "true" : "");
    const [mapNote, setMapNote] = useFlash();

    const all = [...userReports].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const keyword = search.trim().toLowerCase();
    const visible = all.filter(report => {
        const text = `${report.id} ${report.title} ${report.location} ${report.agency} ${report.category}`.toLowerCase();
        return (
            text.includes(keyword) &&
            (!category || report.category === category) &&
            (!status || report.status === status) &&
            (!proofOnly || report.evidence.length > 0)
        );
    });

    return (
        <main>
            <section className={`${container} flex flex-col gap-4 pb-6 pt-12 sm:flex-row sm:items-end sm:justify-between`}>
                <div>
                    <p className="mb-2 font-(family-name:--font-pm) text-[11px] font-medium uppercase tracking-widest text-(--disabled)">
                        Public Incident Registry
                    </p>
                    <h1 className="mb-2 font-(family-name:--font-f) text-[38px] font-semibold leading-[1.1]">Community Reports &amp; Fixes</h1>
                    <p className="max-w-125 text-[15px] leading-relaxed text-(--disabled)">
                        Open incident feed in Jakarta and surrounding urban regions. Public visitors may browse; sign in to interact.
                    </p>
                </div>
                <div className="inline-flex items-center gap-0.5 self-start rounded-full border border-(--bd-secondary) bg-(--bg-secondary) p-0.75 sm:self-auto">
                    <button type="button" className={SEG_ON}>
                        <Icon.Feed />
                        Feed
                    </button>
                    <button type="button" className={SEG_OFF} onClick={() => setMapNote("Coming soon")}>
                        <Icon.MapView />
                        {mapNote ?? "Map"}
                    </button>
                </div>
            </section>

            <section className={`${container} flex flex-col gap-3.5`} aria-label="Filters">
                <label className="flex max-w-110 items-center gap-2.5 rounded-xl border border-(--bd-primary) bg-(--bg-secondary) px-3.5 focus-within:border-(--green) focus-within:ring-4 focus-within:ring-(--green-20)">
                    <Icon.Search />
                    <input
                        type="search"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Search by street name, complaint ID, or keyword..."
                        className="min-w-0 flex-1 bg-transparent py-3 text-sm text-(--dark) outline-none placeholder:text-(--disabled2)"
                    />
                </label>

                <div className="flex flex-wrap gap-2">
                    <button type="button" className={category === "" ? CHIP_ON : CHIP_OFF} onClick={() => setCategory("")}>
                        All Issues ({all.length})
                    </button>
                    {categories.map(item => (
                        <button key={item.name} type="button" className={category === item.name ? CHIP_ON : CHIP_OFF} onClick={() => setCategory(item.name)}>
                            <CategoryIcon name={item.name} />
                            {item.name}
                        </button>
                    ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="inline-flex max-w-full items-center gap-0.5 overflow-x-auto rounded-full border border-(--bd-secondary) bg-(--bg-secondary) p-0.75">
                        <span className="pl-3 pr-2.5 font-(family-name:--font-pm) text-[10px] uppercase tracking-[0.08em] text-(--disabled2)">Status:</span>
                        <button type="button" className={status === "" ? SEG_ON : SEG_OFF} onClick={() => setStatus("")}>
                            All
                        </button>
                        {REPORT_STATUSES.map(name => (
                            <button key={name} type="button" className={status === name ? SEG_ON : SEG_OFF} onClick={() => setStatus(name)}>
                                {name}
                            </button>
                        ))}
                    </div>
                    <label className="inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3.5 py-2 text-xs font-medium text-(--disabled) hover:border-(--green)">
                        <input type="checkbox" checked={proofOnly} onChange={e => setProofOnly(e.target.checked)} className="accent-(--success)" />
                        With photos/proof only
                    </label>
                </div>
            </section>

            <section className={container}>
                {loading && userReports.length === 0 && (
                    <p className="mt-6 rounded-[18px] border border-(--bd-secondary) bg-(--bg-secondary) px-4 py-8 text-center text-sm text-(--disabled)">
                        Loading community reports...
                    </p>
                )}
                {error && (
                    <p role="alert" className="mt-6 rounded-[18px] border border-(--txt-alert) bg-(--bg-alert) px-4 py-4 text-center text-sm text-(--txt-alert)">
                        {error}
                    </p>
                )}
                {visible.length > 0 && (
                    <ul className="mt-6 divide-y divide-(--bd-secondary) overflow-hidden rounded-[18px] border border-(--bd-secondary) bg-(--bg-secondary)">
                        {visible.map(report => (
                            <li key={report.id} className="flex flex-wrap items-center gap-3.5 px-5 py-3.5">
                                <Thumbnail report={report} size="h-18 w-18" />
                                <div className="flex min-w-0 flex-1 flex-col gap-1.25">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <StatusBadge status={report.status} />
                                        <span className="font-(family-name:--font-pm) text-[10px] text-(--disabled2)">{report.id}</span>
                                        <span className="text-xs font-semibold">
                                            <span className="mr-1.5 text-(--disabled)">·</span>
                                            {report.agency}
                                        </span>
                                    </div>
                                    <Link to={`/reports/${report.id}`} className="text-[15px] font-semibold leading-snug hover:text-(--success)">
                                        {report.title}
                                    </Link>
                                    <p className="flex flex-wrap items-center gap-1.5 text-xs text-(--disabled2)">
                                        <Icon.Pin />
                                        {report.location}
                                        <span>· {report.category}</span>
                                    </p>
                                </div>
                                <div className="flex w-full shrink-0 items-center justify-between gap-3.5 sm:w-auto sm:justify-start">
                                    <UpvoteButton caseId={report.id} baseVotes={report.votes} />
                                    <span className="inline-flex min-w-15.5 items-center gap-1.5 font-(family-name:--font-pm) text-[11px] text-(--disabled)">
                                        <Icon.Proof />
                                        {report.evidence.length} proof
                                    </span>
                                    <span className="min-w-10.5 font-(family-name:--font-pm) text-[11px] text-(--disabled2)">{formatDateTime(report.createdAt).date}</span>
                                    <Link to={`/reports/${report.id}`} className="whitespace-nowrap text-[13px] font-semibold text-(--success)">
                                        Track →
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                {!loading && visible.length === 0 && <p className="py-10 text-center text-sm text-(--disabled)">No reports match your filters.</p>}
            </section>
        </main>
    );
}
