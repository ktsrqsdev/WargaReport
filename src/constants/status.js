export const STATUS_STYLES = {
    Submitted: "bg-(--bg-submitted) text-(--txt-submitted) [border:var(--bd-submitted)]",
    Received: "bg-(--bg-received) text-(--txt-received) [border:var(--bd-received)]",
    "In review": "bg-(--bg-review) text-(--txt-review) [border:var(--bd-review)]",
    Assigned: "bg-(--bg-assigned) text-(--txt-assigned) [border:var(--bd-assigned)]",
    "Awaiting your info": "bg-(--bg-awaiting) text-(--txt-awaiting) [border:var(--bd-awaiting)]",
    Resolved: "bg-(--bg-resolved) text-(--txt-resolved) [border:var(--bd-resolved)]",
    Closed: "bg-(--bg-closed) text-(--txt-closed) [border:var(--bd-closed)]",
};

export const REPORT_STATUSES = Object.keys(STATUS_STYLES);

export const PIPELINE = ["Submitted", "Verified by WargaReport", "Dispatched to Agency", "Fixed & Verified"];
export const PIPELINE_DONE = {
    Submitted: 1,
    Received: 2,
    "In review": 2,
    Assigned: 3,
    "Awaiting your info": 3,
    Resolved: 4,
    Closed: 4,
};

export const NOTIFICATION_FILTERS = ["All", "Unread", "Status", "Replies"];
