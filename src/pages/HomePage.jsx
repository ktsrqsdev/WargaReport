import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { Icon } from "../components/Icons";
import StatusBadge from "../components/StatusBadge";
import Thumbnail from "../components/Thumbnail";
import UpvoteButton from "../components/UpvoteButton";
import { btnOutline } from "../components/ui";
import { fetchReports } from "../redux/slices/reportsSlice";

const STEPS = [
    { title: "Snap & Tag", text: "Take a photo or quick audio of the issue and provide the street location." },
    { title: "Report Review", text: "Our team verifies evidence and routes directly to the responsible bureau." },
    { title: "Field Fix", text: "Dispatched technicians do the repairs under strict public SLA windows." },
    { title: "Proof & Close", text: "Before/after photos published openly so everyone sees the resolution." },
];

const container = "mx-auto w-full max-w-7xl px-5 md:px-(--gutter)";

export default function HomePage() {
    const dispatch = useDispatch();
    const { items: userReports, loading, error, fetched } = useSelector(state => state.reports);

    useEffect(() => {
        if (!fetched) dispatch(fetchReports());
    }, [dispatch, fetched]);

    const recent = [...userReports].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 4);
    const resolved = userReports.filter(r => r.status === "Resolved").length;

    return (
        <main>
            <section className={`${container} flex flex-col gap-4.25 py-10`}>
                <h1 className="max-w-160 font-(family-name:--font-f) text-[clamp(2rem,5vw,3.125rem)] font-semibold leading-[1.06] tracking-tight">
                    See something broken? Snap it. We push the city to fix it.
                </h1>
                <p className="max-w-145 text-[17px] leading-7.5 text-(--disabled)">
                    Potholes, dark streetlights, PAM water leaks, or trash piles. Drop photos, track fixes like a food delivery
                    order, and keep authorities accountable.
                </p>
                <div className="my-2.5 flex flex-wrap items-center gap-3">
                    <Link
                        to="/report/topic"
                        className="inline-flex items-center justify-center gap-1.75 rounded-full border border-(--success) bg-(--success) px-6 py-2.5 text-[15px] font-semibold text-(--light)">
                        <Icon.Camera15 />
                        Snap a report
                        <Icon.ArrowRight15 />
                    </Link>
                    <Link to="/track" className={`${btnOutline} px-6! text-[15px]!`}>
                        Track a case
                    </Link>
                </div>
                <p className="mt-2.5 flex flex-wrap font-(family-name:--font-pm) text-xs text-(--disabled)">
                    <span>
                        <b className="text-[13px] font-semibold text-(--dark)">{userReports.length}</b> reports filed
                    </span>
                    <span className="mx-2.5">·</span>
                    <span>
                        <b className="text-[13px] font-semibold text-(--green)">{resolved}</b> resolved
                    </span>
                </p>
            </section>

            <section className={container}>
                <ol className="grid gap-5 border-t border-(--bd-secondary) py-8 sm:grid-cols-2 lg:grid-cols-4">
                    {STEPS.map((step, index) => (
                        <li key={step.title} className="rounded-[18px] border border-(--bd-secondary) bg-(--bg-secondary) px-4.5 py-4.25">
                            <span className="mb-2 grid h-8.5 w-8.5 place-items-center rounded-full border border-(--green-20) bg-(--light-green) font-(family-name:--font-pm) text-[11px] font-semibold text-(--success)">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <h2 className="font-(family-name:--font-f) text-[17px] font-semibold">{step.title}</h2>
                            <p className="mt-1 text-xs leading-relaxed text-(--disabled)">{step.text}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <section className={container}>
                <div className="flex items-center justify-between gap-4 border-t border-(--bd-secondary) pt-7">
                    <div>
                        <h2 className="font-(family-name:--font-f) text-xl font-semibold">Recent Community Reports</h2>
                        <p className="text-xs text-(--disabled2)">Latest reports lodged by citizens</p>
                    </div>
                    <Link to="/live-feed" className="flex flex-col whitespace-nowrap text-[13px] font-semibold text-(--success)">
                        View live feed <span>→</span>
                    </Link>
                </div>
                {loading && recent.length === 0 && (
                    <p className="mt-4 rounded-[18px] border border-(--bd-secondary) bg-(--bg-secondary) px-4 py-8 text-center text-sm text-(--disabled)">
                        Loading community reports...
                    </p>
                )}
                {error && (
                    <p role="alert" className="mt-4 rounded-[18px] border border-(--txt-alert) bg-(--bg-alert) px-4 py-4 text-center text-sm text-(--txt-alert)">
                        {error}
                    </p>
                )}
                {!loading && !error && recent.length === 0 && (
                    <p className="mt-4 rounded-[18px] border border-dashed border-(--bd-primary) px-4 py-8 text-center text-sm text-(--disabled)">
                        No reports yet. Be the first to report an issue.
                    </p>
                )}
                <div className="mt-4 grid gap-5 md:grid-cols-2">
                    {recent.map(report => (
                        <article key={report.id} className="flex gap-3.5 rounded-[18px] border border-(--bd-secondary) bg-(--bg-secondary) p-3.5">
                            <Thumbnail report={report} size="h-22.5 w-22.5" />
                            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                                <div className="flex items-center gap-2">
                                    <StatusBadge status={report.status} />
                                    <span className="font-(family-name:--font-pm) text-[10px] text-(--disabled2)">{report.id}</span>
                                </div>
                                <h3 className="text-[15px] font-semibold leading-snug">{report.title}</h3>
                                <p className="flex gap-1.5 text-xs leading-snug text-(--disabled2)">
                                    <Icon.Pin className="mt-0.5 shrink-0" />
                                    {report.location}
                                </p>
                                <div className="mt-auto flex items-center justify-between pt-1.5">
                                    <UpvoteButton caseId={report.id} baseVotes={report.votes} />
                                    <Link to={`/reports/${report.id}`} className="flex flex-col whitespace-nowrap text-[13px] font-semibold text-(--success)">
                                        Inspect <span>→</span>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
