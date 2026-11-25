import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router";
import EvidenceCard from "../components/EvidenceCard";
import { Icon } from "../components/Icons";
import StatusBadge from "../components/StatusBadge";
import UpvoteButton from "../components/UpvoteButton";
import { btnOutline, btnPrimary } from "../components/ui";
import { PIPELINE, PIPELINE_DONE } from "../constants/status";
import { useToast } from "../context/ToastContext";
import useFlash from "../hooks/useFlash";
import { fetchReports } from "../redux/slices/reportsSlice";
import { formatDateTime, getRemainingSla } from "../utils/format";
import { summarizeEvidence } from "../utils/evidence";
import { findReport } from "../utils/reports";

const label = "font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--disabled)";
const container = "mx-auto w-full max-w-7xl px-5 md:px-(--gutter)";

function buildHistory(report) {
    const status = report.status ?? "Submitted";
    const history = [
        {
            icon: <Icon.User />,
            title: "Report submitted via WargaReport intake",
            status: "Submitted",
            author: report.reporter,
            at: report.createdAt,
            text: `Citizen attached ${summarizeEvidence(report.evidence)}. Awaiting evidence verification by WargaReport.`,
        },
    ];
    if (status === "Closed") {
        history.push({
            icon: <Icon.Shield />,
            title: "Report rejected during evidence review",
            status: "Closed",
            author: "WargaReport Civic Router",
            at: new Date(new Date(report.createdAt).getTime() + 3 * 60000).toISOString(),
            text: report.auditNote ? `Reason: ${report.auditNote}` : "Report closed after admin review.",
        });
    } else if (status !== "Submitted") {
        const noteText = report.auditNote ? ` Note: ${report.auditNote}` : "";
        history.push({
            icon: <Icon.Shield />,
            title: `Verified by WargaReport & dispatched to ${report.agency}`,
            status: "Received",
            author: "WargaReport Civic Router",
            at: new Date(new Date(report.createdAt).getTime() + 3 * 60000).toISOString(),
            text: `Priority: ${report.priority || "Standard"}. ${report.sla}h statutory countdown initiated.${noteText}`,
        });
    }
    return history;
}

export default function ReportDetailPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { showToast } = useToast();
    const { items: userReports, fetched } = useSelector(state => state.reports);
    const [shareLabel, setShareLabel] = useFlash();

    useEffect(() => {
        if (!fetched) dispatch(fetchReports());
    }, [dispatch, fetched]);

    const report = findReport(userReports, id);

    if (!report) {
        return (
            <main className={`${container} py-20 text-center`}>
                <h1 className="font-(family-name:--font-f) text-[28px] font-semibold">Report not found</h1>
                <p className="mb-5 mt-2 text-sm text-(--disabled)">No case matches {id}.</p>
                <Link to="/track" className={btnPrimary}>
                    Back to tracking
                </Link>
            </main>
        );
    }

    const status = report.status ?? "Submitted";
    const done = PIPELINE_DONE[status];
    const created = formatDateTime(report.createdAt);

    async function handleShare() {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setShareLabel("Link copied");
            showToast("Report link copied to clipboard");
        } catch {
            setShareLabel("Copy failed");
            showToast("Failed to copy report link", "error");
        }
    }

    return (
        <main className={`${container} pb-4 pt-8`}>
            <div className="mb-4 flex items-center justify-between">
                <Link to="/live-feed" className="inline-flex items-center gap-1.5 text-xs font-semibold text-(--success)">
                    <Icon.ArrowLeft />
                    Back to Live Feed
                </Link>
                <button type="button" onClick={handleShare} className={btnOutline}>
                    <Icon.Share />
                    {shareLabel ?? "Share"}
                </button>
            </div>

            <div className="grid items-start gap-5 md:grid-cols-[2fr_1fr]">
                <div className="flex flex-col gap-8">
                    <section className="rounded-[22px] border border-(--bd-secondary) bg-(--bg-secondary) p-6 sm:p-8">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                                <StatusBadge status={status} />
                                <span className="inline-flex items-center gap-1.5 font-(family-name:--font-pm) text-[11px] text-(--disabled)">
                                    <Icon.Clock />
                                    {getRemainingSla(report.createdAt, report.sla)}
                                </span>
                            </div>
                            <UpvoteButton caseId={report.id} baseVotes={report.votes} label="Upvote" />
                        </div>
                        <h1 className="mt-4 font-(family-name:--font-f) text-[26px] font-semibold leading-tight">{report.title}</h1>
                        {report.detail && <p className="mt-3 text-[13px] leading-relaxed text-(--disabled)">{report.detail}</p>}
                        <hr className="my-5 border-(--bd-secondary)" />
                        <p className={`${label} mb-2.5`}>Resolution Pipeline</p>
                        <ol className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                            {PIPELINE.map((step, index) => (
                                <li
                                    key={step}
                                    className={`flex flex-col items-center gap-0.5 rounded-xl px-2 py-2.5 text-center text-[11px] font-semibold ${
                                        index < done ? "bg-(--bg-received) text-(--success) [border:var(--bd-received)]" : "bg-(--bg-submitted) text-(--disabled2)"
                                    }`}>
                                    <span className="font-(family-name:--font-pm) text-[10px] font-normal">{String(index + 1).padStart(2, "0")}</span>
                                    {step}
                                </li>
                            ))}
                        </ol>
                    </section>

                    <section>
                        <h2 className="font-(family-name:--font-f) text-xl font-semibold">Evidence on File</h2>
                        <p className="mb-3 text-xs leading-relaxed text-(--disabled)">
                            {report.evidence.length} attachment{report.evidence.length === 1 ? "" : "s"}
                        </p>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {report.evidence.map((item, index) => (
                                <EvidenceCard key={index} item={item} ratio="aspect-4/3" />
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-(family-name:--font-f) text-xl font-semibold">Action History</h2>
                        <p className="mb-4 text-xs leading-relaxed text-(--disabled)">Chronological updates from intake router and field teams</p>
                        <ol className="relative ml-3 border-l border-(--bd-primary)">
                            {buildHistory(report).map((entry, index) => {
                                const when = formatDateTime(entry.at);
                                return (
                                    <li key={index} className="relative pb-5 pl-6 last:pb-0">
                                        <span className="absolute -left-3 top-0 grid h-6 w-6 place-items-center rounded-full border border-(--bd-primary) bg-(--bg-secondary)">
                                            {entry.icon}
                                        </span>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <p className="text-[13px] font-medium">{entry.title}</p>
                                            <StatusBadge status={entry.status} />
                                        </div>
                                        <p className="mt-1 text-[11px]">
                                            <span className="font-medium">{entry.author}</span>{" "}
                                            <span className="font-(family-name:--font-pm) text-(--disabled)">
                                                · {when.date}, {when.time} GMT+7
                                            </span>
                                        </p>
                                        <p className="mt-2 rounded-xl border border-(--bd-secondary) bg-(--bg-primary) px-3.5 py-2.5 text-xs text-(--disabled)">{entry.text}</p>
                                    </li>
                                );
                            })}
                        </ol>
                    </section>
                </div>

                <aside className="flex flex-col gap-4 rounded-[22px] border border-(--bd-secondary) bg-(--bg-secondary) p-6 sm:p-8">
                    <div>
                        <p className={label}>Tracking Code</p>
                        <p className="mt-1 font-(family-name:--font-pm) text-xl font-semibold text-(--success)">{report.id}</p>
                    </div>
                    <hr className="border-(--bd-secondary)" />
                    <Info title="Assigned Authority">{report.agency}</Info>
                    <Info title="Category">{report.category}</Info>
                    <Info title="Location">
                        <p className="flex gap-1.5">
                            <Icon.Pin className="mt-0.5 shrink-0" />
                            {report.location}
                        </p>
                        <p className="pl-5 text-[11px] font-normal text-(--disabled)">{report.district}</p>
                    </Info>
                    <Info title="Reported On">
                        <span className="font-(family-name:--font-pm)">{created.fullDate}</span>
                    </Info>
                    <Info title="Reported By">{report.reporter}</Info>
                                    <hr className="border-(--bd-secondary)" />
                    <Link to="/report/topic" className={`${btnPrimary} w-full`}>
                        Report similar issue nearby
                    </Link>
                </aside>
            </div>
        </main>
    );
}

function Info({ title, children }) {
    return (
        <div>
            <p className={label}>{title}</p>
            <div className="mt-1 text-[13px] font-medium">{children}</div>
        </div>
    );
}
