import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import EvidenceCard from "../components/EvidenceCard";
import { ErrorText } from "../components/Field";
import { Icon } from "../components/Icons";
import { labelClass } from "../components/ui";
import { useToast } from "../context/ToastContext";
import { updateEscalation } from "../redux/slices/adminSlice";
import { addNotification } from "../redux/slices/notificationsSlice";
import { updateReportStatus } from "../redux/slices/reportsSlice";
import { formatDateTime } from "../utils/format";

const PRIORITIES = ["Standard", "High", "Urgent"];

const selectClass =
    "mt-1.5 w-full rounded-xl border border-(--bd-primary) bg-(--bg-secondary) px-3.5 py-2.5 text-xs text-(--dark) outline-none transition focus:border-(--green) focus:ring-4 focus:ring-(--green-20)";

const inputBoxClass =
    "mt-1.5 w-full rounded-xl border border-(--bd-primary) bg-(--bg-secondary) px-3.5 py-2.5 text-xs text-(--dark) placeholder:text-(--disabled2) outline-none transition focus:border-(--green) focus:ring-4 focus:ring-(--green-20)";

function matchAgencyOption(agencies, value = "") {
    if (!value) return "";
    return agencies.find(agency => agency.name === value || agency.name.startsWith(value))?.name ?? value;
}

function buildEscalationQueue(escalationItems, reportItems, agencies) {
    const combined = [...escalationItems];

    reportItems.forEach(report => {
        const sudahAda = escalationItems.some(item => item.id === report.id);
        if (report.status !== "Submitted" || sudahAda) return;
        const { date, time } = formatDateTime(report.createdAt);
        combined.push({
            id: report.id,
            email: report.email,
            title: report.title,
            detail: report.detail,
            location: report.location,
            district: report.district,
            reporter: report.reporter === "Warga Anonim" ? "an anonymous resident" : report.reporter,
            category: report.category,
            agency: matchAgencyOption(agencies, report.agency),
            priority: "Standard",
            sla: report.sla ?? 48,
            submitted: `${date}, ${time} GMT+7`,
            createdAt: report.createdAt,
            evidence: report.evidence ?? [],
            status: "Awaiting evidence review",
            auditNote: "",
        });
    });

    return combined;
}

export default function AdminEscalationDeskPage() {
    const dispatch = useDispatch();
    const { showToast } = useToast();
    const admin = useSelector(state => state.admin);
    const reports = useSelector(state => state.reports);

    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState(null);
    const [evidenceOpen, setEvidenceOpen] = useState(false);
    const [form, setForm] = useState({
        category: "",
        agency: "",
        priority: "Standard",
        sla: 48,
        auditNote: "",
    });
    const [error, setError] = useState("");

    const queue = buildEscalationQueue(admin.escalation, reports.items, admin.agencies);
    const pendingItems = queue.filter(row => row.status === "Awaiting evidence review");
    const oldestPending = [...pendingItems].sort((a, b) => new Date(a.createdAt || 0) - new Date(b.createdAt || 0))[0];

    const keyword = search.trim().toLowerCase();
    const visibleItems = pendingItems.filter(row => {
        const text = `${row.id} ${row.title} ${row.category} ${row.agency} ${row.location ?? ""} ${row.district ?? ""}`.toLowerCase();
        return text.includes(keyword);
    });

    useEffect(() => {
        if (!selected) return;
        const handleKeyDown = event => {
            if (event.key === "Escape") closeReview();
        };
        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [selected]);

    function openReview(row) {
        setSelected(row);
        setEvidenceOpen(false);
        setError("");
        setForm({
            category: row.category || admin.categories[0]?.name || "",
            agency: matchAgencyOption(admin.agencies, row.agency),
            priority: row.priority || "Standard",
            sla: row.sla || 48,
            auditNote: row.auditNote || "",
        });
    }

    function closeReview() {
        setSelected(null);
        setEvidenceOpen(false);
        setError("");
    }

    function handleCategoryChange(nextCategory) {
        const matched = admin.categories.find(item => item.name === nextCategory);
        setError("");
        setForm(prev => ({
            ...prev,
            category: nextCategory,
            agency: matched ? matchAgencyOption(admin.agencies, matched.agency) : prev.agency,
            sla: matched ? matched.sla : prev.sla,
        }));
    }

    function validateCommon() {
        if (!form.category?.trim()) return "Please select a category.";
        if (!form.agency?.trim()) return "Please select an agency to route to.";
        if (!Number.isFinite(Number(form.sla)) || Number(form.sla) < 1) return "SLA window must be at least 1 hour.";
        return "";
    }

    function notifyReporter(targetStatus, title, body) {
        if (!selected?.email) return;
        const { date, time } = formatDateTime(new Date().toISOString());
        dispatch(
            addNotification({
                email: selected.email,
                caseId: selected.id,
                date,
                time,
                title,
                type: "Status Change",
                status: targetStatus,
                body,
            }),
        );
    }

    function handleVerify(event) {
        event.preventDefault();
        const validationError = validateCommon();
        if (validationError) return setError(validationError);

        const slaHours = Number(form.sla);
        const note = form.auditNote.trim();

        dispatch(
            updateEscalation({
                ...selected,
                category: form.category,
                agency: form.agency,
                priority: form.priority,
                sla: slaHours,
                auditNote: note,
                status: "Verified & routed",
            }),
        );
        dispatch(
            updateReportStatus({
                id: selected.id,
                category: form.category,
                agency: form.agency,
                priority: form.priority,
                sla: slaHours,
                auditNote: note,
                status: "Received",
            }),
        );
        notifyReporter(
            "Received",
            "Report verified & routed",
            `Your report ${selected.id} has been verified and routed to ${form.agency} with a ${slaHours}-hour SLA target.`,
        );
        showToast(`Case ${selected.id} verified & routed`);
        closeReview();
    }

    function handleReject() {
        const note = form.auditNote.trim();
        if (!note) return setError("Please enter a routing / audit note explaining the rejection reason.");

        dispatch(
            updateEscalation({
                ...selected,
                category: form.category,
                agency: form.agency,
                priority: form.priority,
                sla: Number(form.sla) || selected.sla || 48,
                auditNote: note,
                status: "Rejected",
            }),
        );
        dispatch(
            updateReportStatus({
                id: selected.id,
                auditNote: note,
                status: "Closed",
            }),
        );
        notifyReporter(
            "Closed",
            "Report rejected during evidence review",
            `Your report ${selected.id} was closed after review. Note: ${note}`,
        );
        showToast(`Case ${selected.id} rejected`, "info");
        closeReview();
    }

    const evidenceList = selected?.evidence ?? [];
    const reporterLabel =
        selected?.reporter === "Warga Anonim" || selected?.reporter === "an anonymous resident"
            ? "an anonymous resident"
            : selected?.reporter || "a verified resident";

    return (
        <section aria-label="Escalation Desk">
            <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                    <p className="font-(family-name:--font-pm) text-[11px] uppercase tracking-widest text-(--disabled)">
                        Verification &amp; Agency Routing
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-(--disabled)">
                        {pendingItems.length} {pendingItems.length === 1 ? "report" : "reports"} awaiting evidence review and agency routing.
                        {oldestPending ? ` Oldest submitted ${oldestPending.submitted}.` : ""}
                    </p>
                </div>
                <button
                    type="button"
                    className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-4 py-2 text-xs font-semibold text-(--dark) transition hover:border-(--green) hover:bg-(--bg-primary)">
                    <Icon.Shield stroke="currentColor" />
                    Open officer queue
                </button>
            </div>

            <div className="mt-5">
                <input
                    id="escalation-search"
                    type="search"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search by ID, title, category, or street..."
                    className="w-full max-w-88 rounded-xl border border-(--bd-primary) bg-(--bg-secondary) px-3.5 py-2.5 text-xs text-(--dark) placeholder:text-(--disabled2) outline-none transition focus:border-(--green) focus:ring-4 focus:ring-(--green-20)"
                />
            </div>

            {(admin.loading || reports.loading) && pendingItems.length === 0 && (
                <p className="mt-4 rounded-[18px] border border-(--bd-secondary) bg-(--bg-secondary) px-4 py-6 text-center text-xs text-(--disabled)">
                    Loading escalation queue...
                </p>
            )}
            {(admin.error || reports.error) && (
                <p role="alert" className="mt-4 rounded-xl border border-(--txt-alert) bg-(--bg-alert) px-4 py-3 text-xs text-(--txt-alert)">
                    {admin.error || reports.error}
                </p>
            )}

            <div className="mt-4 overflow-x-auto rounded-[18px] border border-(--bd-secondary) bg-(--bg-secondary)">
                <table className="w-full min-w-180 text-left">
                    <thead>
                        <tr className="border-b border-(--bd-secondary) bg-(--bg-primary)/50 font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--disabled)">
                            <th className="px-5 py-3 font-medium">Case</th>
                            <th className="px-5 py-3 font-medium">Proposed Route</th>
                            <th className="px-5 py-3 font-medium">Submitted</th>
                            <th className="px-5 py-3 font-medium">Evidence</th>
                            <th className="px-5 py-3 text-right font-medium">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-(--bd-secondary)">
                        {visibleItems.map(row => {
                            const fileCount = row.evidence?.length ?? 0;
                            return (
                                <tr key={row.id} className="align-middle transition hover:bg-(--bg-primary)/30">
                                    <td className="px-5 py-4">
                                        <p className="text-[13px] font-semibold leading-snug text-(--dark)">{row.title}</p>
                                        <p className="mt-0.5 font-(family-name:--font-pm) text-[11px] text-(--disabled2)">{row.id}</p>
                                    </td>
                                    <td className="px-5 py-4">
                                        <p className="text-xs font-medium text-(--dark)">{row.category}</p>
                                        <p className="mt-0.5 text-[11px] text-(--disabled2)">{row.agency}</p>
                                    </td>
                                    <td className="whitespace-nowrap px-5 py-4 font-(family-name:--font-pm) text-xs text-(--dark)">
                                        {row.submitted}
                                    </td>
                                    <td className="whitespace-nowrap px-5 py-4 font-(family-name:--font-pm) text-xs text-(--dark)">
                                        {fileCount} {fileCount === 1 ? "file" : "files"}
                                    </td>
                                    <td className="px-5 py-4 text-right">
                                        <button
                                            type="button"
                                            onClick={() => openReview(row)}
                                            className="cursor-pointer rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3.5 py-1.5 text-xs font-semibold text-(--dark) transition hover:border-(--green) hover:bg-(--bg-primary)">
                                            Review
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                        {!admin.loading && visibleItems.length === 0 && (
                            <tr>
                                <td colSpan={5} className="px-5 py-10 text-center text-xs text-(--disabled)">
                                    No incoming reports awaiting evidence review.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {selected && (
                <div
                    id="escalation-review-backdrop"
                    className="fixed inset-0 z-100 flex justify-end bg-(--dark-70)"
                    onMouseDown={event => {
                        if (event.target === event.currentTarget) closeReview();
                    }}>
                    <section
                        id="escalation-review-drawer"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Verify incoming report"
                        className="flex h-full w-full max-w-115 flex-col border-l border-(--bd-secondary) bg-(--bg-secondary) shadow-2xl">
                        <header className="flex items-start justify-between gap-4 border-b border-(--bd-secondary) px-6 py-5">
                            <div>
                                <p className="font-(family-name:--font-pm) text-[10px] uppercase tracking-widest text-(--disabled)">
                                    Escalation Desk
                                </p>
                                <h2 className="mt-1 font-(family-name:--font-f) text-xl font-semibold text-(--dark)">
                                    Verify incoming report
                                </h2>
                            </div>
                            <button
                                type="button"
                                onClick={closeReview}
                                aria-label="Close modal"
                                className="cursor-pointer rounded-full p-1 text-(--disabled) transition hover:bg-(--bg-primary) hover:text-(--dark)">
                                <Icon.X />
                            </button>
                        </header>

                        <form onSubmit={handleVerify} noValidate className="flex min-h-0 flex-1 flex-col">
                            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
                                <div className="rounded-2xl border border-(--bd-secondary) bg-(--bg-primary)/60 p-4.5">
                                    <p className="font-(family-name:--font-pm) text-[11px] font-medium text-(--success)">{selected.id}</p>
                                    <h3 className="mt-1.5 text-[15px] font-semibold leading-snug text-(--dark)">{selected.title}</h3>
                                    {selected.detail && (
                                        <p className="mt-2 text-xs leading-relaxed text-(--disabled)">{selected.detail}</p>
                                    )}
                                    {(selected.location || selected.district) && (
                                        <p className="mt-3 font-(family-name:--font-pm) text-[11px] leading-relaxed text-(--disabled2)">
                                            {selected.location}
                                            {selected.district ? ` · ${selected.district}` : ""}
                                        </p>
                                    )}
                                    <p className="mt-1 font-(family-name:--font-pm) text-[11px] text-(--disabled2)">
                                        Reported by {reporterLabel}
                                    </p>
                                    <p className="mt-1 font-(family-name:--font-pm) text-[11px] text-(--disabled2)">
                                        {evidenceList.length} evidence {evidenceList.length === 1 ? "file" : "files"} · submitted {selected.submitted}
                                    </p>
                                    <Link
                                        to={`/reports/${selected.id}`}
                                        onClick={closeReview}
                                        className="mt-3 inline-flex flex-col text-xs font-semibold text-(--success) hover:underline">
                                        <span>Open full case record</span>
                                        <span>→</span>
                                    </Link>
                                </div>

                                <div className="rounded-xl border border-(--bd-secondary) bg-(--bg-secondary)">
                                    <button
                                        type="button"
                                        onClick={() => setEvidenceOpen(open => !open)}
                                        aria-expanded={evidenceOpen}
                                        className="flex w-full cursor-pointer items-center gap-2.5 px-3.5 py-2.5 text-left text-xs font-medium text-(--dark) transition hover:bg-(--bg-primary)/40">
                                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-(--disabled)" />
                                        <span>Review attached evidence ({evidenceList.length})</span>
                                    </button>
                                    {evidenceOpen && (
                                        <div className="border-t border-(--bd-secondary) p-3">
                                            {evidenceList.length > 0 ? (
                                                <div className="grid gap-2.5 sm:grid-cols-2">
                                                    {evidenceList.map((item, idx) => (
                                                        <EvidenceCard key={`${item.name}-${idx}`} item={item} ratio="aspect-4/3" />
                                                    ))}
                                                </div>
                                            ) : (
                                                <p className="text-xs text-(--disabled)">No evidence files attached to this report.</p>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="review-category" className={labelClass}>
                                        Category
                                    </label>
                                    <select
                                        id="review-category"
                                        value={form.category}
                                        onChange={e => handleCategoryChange(e.target.value)}
                                        className={selectClass}>
                                        <option value="">Select category</option>
                                        {admin.categories.map(category => (
                                            <option key={category.id} value={category.name}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="review-agency" className={labelClass}>
                                        Route to agency
                                    </label>
                                    <select
                                        id="review-agency"
                                        value={form.agency}
                                        onChange={e => {
                                            setForm(prev => ({ ...prev, agency: e.target.value }));
                                            setError("");
                                        }}
                                        className={selectClass}>
                                        <option value="">Select agency</option>
                                        {admin.agencies.map(agency => (
                                            <option key={agency.id} value={agency.name}>
                                                {agency.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label htmlFor="review-priority" className={labelClass}>
                                            Priority
                                        </label>
                                        <select
                                            id="review-priority"
                                            value={form.priority}
                                            onChange={e => setForm(prev => ({ ...prev, priority: e.target.value }))}
                                            className={selectClass}>
                                            {PRIORITIES.map(level => (
                                                <option key={level} value={level}>
                                                    {level}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="review-sla" className={labelClass}>
                                            SLA window (hours)
                                        </label>
                                        <input
                                            id="review-sla"
                                            type="number"
                                            min="1"
                                            value={form.sla}
                                            onChange={e => {
                                                setForm(prev => ({ ...prev, sla: e.target.value }));
                                                setError("");
                                            }}
                                            className={inputBoxClass}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="review-audit-note" className={labelClass}>
                                        Routing / audit note
                                    </label>
                                    <textarea
                                        id="review-audit-note"
                                        rows={3}
                                        value={form.auditNote}
                                        onChange={e => {
                                            setForm(prev => ({ ...prev, auditNote: e.target.value }));
                                            setError("");
                                        }}
                                        placeholder="Evidence check, priority override, or reason for rejection..."
                                        className={`${inputBoxClass} min-h-20 resize-y leading-relaxed`}
                                    />
                                    <p className="mt-1.5 text-[10.5px] text-(--disabled2)">
                                        Required when rejecting. Saved to the public audit trail.
                                    </p>
                                </div>

                                <ErrorText text={error} />
                            </div>

                            <footer className="flex flex-wrap items-center justify-end gap-2.5 border-t border-(--bd-secondary) bg-(--bg-secondary) px-6 py-4">
                                <button
                                    type="button"
                                    onClick={closeReview}
                                    className="cursor-pointer rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-4 py-2 text-xs font-semibold text-(--dark) transition hover:bg-(--bg-primary)">
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={handleReject}
                                    className="cursor-pointer rounded-full bg-(--txt-alert) px-4 py-2 text-xs font-semibold text-(--light) transition hover:opacity-90">
                                    Reject report
                                </button>
                                <button
                                    type="submit"
                                    className="cursor-pointer rounded-full bg-(--success) px-4 py-2 text-xs font-semibold text-(--light) transition hover:opacity-90">
                                    Verify &amp; route
                                </button>
                            </footer>
                        </form>
                    </section>
                </div>
            )}
        </section>
    );
}
