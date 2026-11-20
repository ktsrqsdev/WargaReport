export const DEMO_ACCOUNT = {
    name: "Fahrul Septiana",
    email: "fahrul@wargareport.id",
    phone: "+62 812-9842-1054",
    nik: "3174051809900004",
    password: "warga1234",
    demo: true,
};

export const DEMO_NOTIFICATIONS = [
    {
        id: "ntf-demo-1",
        email: DEMO_ACCOUNT.email,
        caseId: "CMP-2026-9472",
        date: "Oct 30",
        time: "04:41 PM",
        title: "Report received — verification pending",
        type: "Status Change",
        status: "Submitted",
        body: "Your report CMP-2026-9472 is queued for WargaReport evidence verification. Proposed bureau: Dinas Pertamanan dan Hutan Kota DKI Jakarta. The SLA countdown starts once the report is routed.",
        read: false,
    },
    {
        id: "ntf-demo-2",
        email: DEMO_ACCOUNT.email,
        caseId: "CMP-2026-8841",
        date: "Oct 29",
        time: "03:10 PM",
        title: "Officer reply: valve isolation team dispatched",
        type: "Reply",
        status: "In review",
        body: "Hendra Kurniawan: Dispatched secondary valve isolation team from Cilandak maintenance station.",
        read: false,
    },
    {
        id: "ntf-demo-3",
        email: DEMO_ACCOUNT.email,
        caseId: "CMP-2026-8841",
        date: "Oct 29",
        time: "01:28 PM",
        title: "Status changed to In review",
        type: "Status Change",
        status: "In review",
        body: "Your report CMP-2026-8841 was accepted by the duty triage coordinator and is now in review by Perumda PAM JAYA.",
        read: false,
    },
];

export const NOTIFICATION_PREFERENCES = [
    { label: "Status changes on my complaints", defaultValue: true },
    { label: "Replies from field officers", defaultValue: true },
    { label: "Upvote milestones", defaultValue: false },
    { label: "WargaReport news and updates", defaultValue: false },
];
