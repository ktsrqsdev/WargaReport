import { useSelector } from "react-redux";
import { Link } from "react-router";
import { Icon } from "../components/Icons";
import StatusBadge from "../components/StatusBadge";
import { btnPrimary } from "../components/ui";
import { selectCurrentUser } from "../redux/slices/registerSlice";
import { formatDateTime, getSlaInfo } from "../utils/format";
import { getMyReports } from "../utils/reports";

const th = "px-5 py-2.5 font-medium";

function SlaCell({ report }) {
    if (report.status === "Submitted") return <span className="text-(--disabled)">Awaiting verification</span>;

    const sla = getSlaInfo(report.createdAt, report.sla);
    if (sla.breached) {
        return (
            <span className="inline-flex items-center gap-1.5 text-(--txt-alert)">
                <Icon.AlertClock />
                Breached by {sla.text}
            </span>
        );
    }
    return <span>{sla.text} left</span>;
}

export default function AccountComplaintPage() {
    const user = useSelector(selectCurrentUser);
    const userReports = useSelector(state => state.reports.items);
    const reports = getMyReports(userReports, user);

    return (
        <>
            <div className="mb-3 flex items-center justify-between gap-3">
                <p className="font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--disabled)">Your tracked records ({reports.length})</p>
                <Link to="/report/topic" className={btnPrimary}>
                    + File new complaint
                </Link>
            </div>
            <div className="overflow-x-auto rounded-[18px] border border-(--bd-secondary) bg-(--bg-secondary)">
                <table className="w-full min-w-205 text-left">
                    <thead>
                        <tr className="border-b border-(--bd-secondary) bg-(--bg-primary) font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--disabled)">
                            <th className={th}>Case ID</th>
                            <th className={th}>Title / Location</th>
                            <th className={th}>Agency</th>
                            <th className={th}>Status</th>
                            <th className={th}>SLA Target</th>
                            <th className={th}>Last Update</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-(--bd-secondary)">
                        {reports.map(report => (
                            <tr key={report.id} className="align-top">
                                <td className="w-28 px-5 py-4 font-(family-name:--font-pm) text-[13px] font-semibold text-(--success)">{report.id}</td>
                                <td className="px-5 py-4">
                                    <Link to={`/reports/${report.id}`} className="text-[13px] font-semibold leading-snug hover:text-(--success)">
                                        {report.title}
                                    </Link>
                                    <p className="mt-1 flex gap-1.5 text-[11px] text-(--disabled)">
                                        <Icon.Pin className="shrink-0" />
                                        {report.location}
                                    </p>
                                </td>
                                <td className="px-5 py-4 text-xs">{report.agency}</td>
                                <td className="px-5 py-4">
                                    <StatusBadge status={report.status} />
                                </td>
                                <td className="px-5 py-4 font-(family-name:--font-pm) text-[11px]">
                                    <SlaCell report={report} />
                                </td>
                                <td className="px-5 py-4 font-(family-name:--font-pm) text-[11px] text-(--disabled)">{formatDateTime(report.createdAt).date}</td>
                            </tr>
                        ))}
                        {reports.length === 0 && (
                            <tr>
                                <td colSpan={6} className="px-4 py-8 text-center text-xs text-(--disabled)">
                                    You have not filed any complaints yet.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}
