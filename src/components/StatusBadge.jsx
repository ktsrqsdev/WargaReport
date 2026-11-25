import { STATUS_STYLES } from "../constants/status";
import { Icon } from "./Icons";

const STATUS_ICONS = {
    Submitted: Icon.Submitted,
    Received: Icon.Received,
    "In review": Icon.InReview,
    Assigned: Icon.Assigned,
    "Awaiting your info": Icon.Awaiting,
    Resolved: Icon.Resolved,
    Closed: Icon.Closed,
};

export default function StatusBadge({ status = "Submitted" }) {
    const StatusIcon = STATUS_ICONS[status];
    return (
        <span
            className={`inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 font-(family-name:--font-pm) text-[10px] font-semibold ${STATUS_STYLES[status]}`}>
            <StatusIcon className="h-3 w-3" />
            {status}
        </span>
    );
}
