import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router";
import { Icon } from "../components/Icons";
import { btnOutline, btnPrimary } from "../components/ui";
import { selectCurrentUser } from "../redux/slices/registerSlice";
import { clearDraft } from "../redux/slices/reportsSlice";
import { formatDateTime } from "../utils/format";

export default function ReportReceiptPage() {
    const dispatch = useDispatch();
    const user = useSelector(selectCurrentUser);
    const report = useSelector(state => state.reports.items.find(r => r.email === user.email));

    useEffect(() => {
        dispatch(clearDraft());
    }, [dispatch]);

    if (!report) return <Navigate to="/report/topic" replace />;

    const { fullDate, time } = formatDateTime(report.createdAt);

    return (
        <main className="mx-auto my-10 w-full max-w-170 px-5">
            <section className="rounded-[22px] border border-(--bd-secondary) bg-(--bg-secondary) p-6 sm:p-8">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <span className="mb-3 grid h-10 w-10 place-items-center rounded-full bg-(--light-green) text-(--success)">
                            <Icon.Check />
                        </span>
                        <p className="mb-1 font-(family-name:--font-pm) text-[11px] uppercase tracking-widest text-(--disabled)">Report dispatched</p>
                        <p className="font-(family-name:--font-pm) text-xl font-semibold text-(--success)">{report.id}</p>
                    </div>
                    <span className="font-(family-name:--font-pm) text-[11px] text-(--disabled)">
                        Logged {time} · {fullDate}
                    </span>
                </div>
                <hr className="my-5 border-(--bd-secondary)" />
                <h1 className="font-(family-name:--font-f) text-[26px] font-semibold leading-tight">{report.title}</h1>
                <p className="mt-2 text-[13px] text-(--disabled)">
                    {report.agency} · {report.location}
                </p>

                <p className="mb-2.5 mt-6 font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--disabled)">What happens next</p>
                <ol className="flex flex-col gap-2.5">
                    <li className="rounded-xl bg-(--bg-submitted) px-4 py-3 text-xs leading-relaxed">
                        Your report is awaiting evidence verification. Proposed bureau: {report.agency}.
                    </li>
                    <li className="rounded-xl bg-(--bg-submitted) px-4 py-3 text-xs leading-relaxed">
                        A duty inspector will assess site urgency within the target {report.sla}-hour SLA window once routed.
                    </li>
                </ol>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Link to={`/reports/${report.id}`} className={btnPrimary}>
                        Track this report
                    </Link>
                    <button type="button" onClick={() => window.print()} className={btnOutline}>
                        Print receipt
                    </button>
                    <Link to="/report/topic" className="text-[13px] font-semibold text-(--success)">
                        File another report
                    </Link>
                </div>
            </section>
        </main>
    );
}
