export default function NotificationPage() {
    return (
        <>
            <main className="mx-auto w-full max-w-7xl px-5 md:px-(--gutter) pb-4 pt-12">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="mb-2 font-(family-name:--font-pm) text-[11px] uppercase tracking-widest text-(--disabled)">
                            Alerts &amp; Activity
                        </p>
                        <h1 className="mb-2 font-(family-name:--font-f) text-[38px] font-semibold leading-[1.1]">
                            Notifications
                        </h1>
                    </div>
                    <a
                        href="#"
                        className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-(--success)">
                        <img src="assets/check.svg" alt />
                        Mark all as read
                    </a>
                </div>
                <div className="flex flex-wrap items-center gap-2 border-b border-(--bd-primary) pb-4">
                    <span className="mr-1 font-(family-name:--font-pm) text-[11px] uppercase tracking-wider text-(--disabled)">
                        Filter:
                    </span>
                    <a
                        href="#"
                        className="cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-(--success) bg-(--success) px-3.5 py-2 text-xs font-medium text-(--light)">
                        All
                    </a>
                    <a
                        href="#"
                        className="cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3.5 py-2 text-xs font-medium text-(--dark) hover:border-(--green)">
                        Unread
                    </a>
                    <a
                        href="#"
                        className="cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3.5 py-2 text-xs font-medium text-(--dark) hover:border-(--green)">
                        Status
                    </a>
                    <a
                        href="#"
                        className="cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3.5 py-2 text-xs font-medium text-(--dark) hover:border-(--green)">
                        Replies
                    </a>
                </div>
                <div className="mt-5 grid items-start gap-5 md:grid-cols-[5fr_7fr]">
                    <ul className="min-h-50 divide-y divide-(--bd-secondary) overflow-hidden rounded-[18px] border border-(--bd-secondary) bg-(--bg-secondary)">
                        <li>
                            <a href="#" className="block px-4 py-3.5 border-l-2 border-(--green) bg-(--light-green)">
                                <div className="flex items-center justify-between">
                                    <span className="font-(family-name:--font-pm) text-xs text-(--success)">
                                        CMP-2026-9472
                                    </span>
                                    <span className="font-(family-name:--font-pm) text-[11px] text-(--disabled)">
                                        04:41 PM
                                    </span>
                                </div>
                                <p className="mt-1 text-xs font-semibold">Report received — verification pending</p>
                                <p className="mt-1 flex items-center justify-between text-[11px] text-(--disabled2)">
                                    Status Change
                                    <span className="h-1.5 w-1.5 rounded-full bg-(--success)" />
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-3.5 ">
                                <div className="flex items-center justify-between">
                                    <span className="font-(family-name:--font-pm) text-xs text-(--success)">
                                        CMP-2026-8841
                                    </span>
                                    <span className="font-(family-name:--font-pm) text-[11px] text-(--disabled)">
                                        01:28 PM
                                    </span>
                                </div>
                                <p className="mt-1 text-xs font-semibold">Status changed to In review</p>
                                <p className="mt-1 flex items-center justify-between text-[11px] text-(--disabled2)">
                                    Status Change
                                    <span className="h-1.5 w-1.5 rounded-full bg-(--success)" />
                                </p>
                            </a>
                        </li>
                    </ul>
                    <section className="rounded-[22px] border border-(--bd-secondary) bg-(--bg-secondary) p-6 sm:p-8">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--disabled)">
                                    Incident Reference
                                </p>
                                <p className="mt-1 font-(family-name:--font-pm) text-xl font-semibold text-(--success)">
                                    CMP-2026-9472
                                </p>
                            </div>
                            <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 font-(family-name:--font-pm) text-[10px] bg-(--bg-submitted) text-(--txt-submitted) [border:var(--bd-submitted)]">
                                <img src="assets/submitted.svg" alt className="h-3 w-3" />
                                Submitted
                            </span>
                        </div>
                        <hr className="my-4 border-(--bd-secondary)" />
                        <h2 className="font-(family-name:--font-f) text-[22px] font-semibold leading-snug">
                            Report received — verification pending
                        </h2>
                        <p className="mb-4 mt-1 font-(family-name:--font-pm) text-[11px] text-(--disabled)">
                            Dispatched Oct 30, 04:41 PM GMT+7
                        </p>
                        <p className="mb-5 rounded-xl bg-(--bg-submitted) px-4 py-3.5 text-xs leading-relaxed">
                            Your report CMP-2026-9472 is queued for WargaReport evidence verification. Proposed bureau:
                            Dinas Pertamanan dan Hutan Kota DKI Jakarta. The SLA countdown starts once the report is
                            routed.
                        </p>
                        <a
                            href="report-detail.html"
                            className="cursor-pointer inline-flex items-center justify-center gap-1.75 rounded-full border font-semibold px-5 py-2.5 text-xs border-(--success) bg-(--success) text-(--light)">
                            Open complaint tracking record
                            <img src="assets/i-arrow-right.svg" alt />
                        </a>
                    </section>
                </div>
            </main>
        </>
    );
}
