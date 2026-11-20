export default function AccountComplaintPage() {
    return (
        <>
            <main className="mx-auto w-full max-w-7xl px-5 md:px-(--gutter) pb-4 pt-12">
                <p className="mb-2 font-(family-name:--font-pm) text-[11px] uppercase tracking-widest text-(--disabled)">
                    Citizen Management
                </p>
                <h1 className="mb-2 font-(family-name:--font-f) text-[38px] font-semibold leading-[1.1]">
                    Account &amp; Case History
                </h1>
                <nav className="mt-4 flex flex-wrap gap-1.5">
                    <a
                        href="account-complaints.html"
                        className="rounded-full px-3.5 py-1.5 text-xs font-medium bg-(--success) text-(--light)">
                        My complaints
                    </a>
                    <a
                        href="account-profile.html"
                        className="rounded-full px-3.5 py-1.5 text-xs font-medium text-(--disabled) hover:text-(--dark)">
                        Profile
                    </a>
                    <a
                        href="account-notifications.html"
                        className="rounded-full px-3.5 py-1.5 text-xs font-medium text-(--disabled) hover:text-(--dark)">
                        Notifications
                    </a>
                    <a
                        href="account-privacy.html"
                        className="rounded-full px-3.5 py-1.5 text-xs font-medium text-(--disabled) hover:text-(--dark)">
                        Privacy &amp; data
                    </a>
                    <a
                        href="account-security.html"
                        className="rounded-full px-3.5 py-1.5 text-xs font-medium text-(--disabled) hover:text-(--dark)">
                        Security
                    </a>
                </nav>
                <div className="mt-6">
                    <div className="mb-3 flex items-center justify-between gap-3">
                        <p className="font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--disabled)">
                            Your tracked records (2)
                        </p>
                        <a
                            href="report-topic.html"
                            className="cursor-pointer inline-flex items-center justify-center gap-1.75 rounded-full border font-semibold px-5 py-2.5 text-xs border-(--success) bg-(--success) text-(--light)">
                            + File new complaint
                        </a>
                    </div>
                    <div className="overflow-x-auto rounded-[18px] border border-(--bd-secondary) bg-(--bg-secondary)">
                        <table className="w-full min-w-205 text-left">
                            <thead>
                                <tr className="border-b border-(--bd-secondary) bg-(--bg-primary) font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--disabled)">
                                    <th className="px-5 py-2.5 font-medium">Case ID</th>
                                    <th className="px-5 py-2.5 font-medium">Title / Location</th>
                                    <th className="px-5 py-2.5 font-medium">Agency</th>
                                    <th className="px-5 py-2.5 font-medium">Status</th>
                                    <th className="px-5 py-2.5 font-medium">SLA Target</th>
                                    <th className="px-5 py-2.5 font-medium">Last Update</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-(--bd-secondary)">
                                <tr className="align-top">
                                    <td className="w-28 px-5 py-4 font-(family-name:--font-pm) text-[13px] font-semibold text-(--success)">
                                        CMP-2026-9472
                                    </td>
                                    <td className="px-5 py-4">
                                        <a
                                            href="report-detail.html"
                                            className="text-[13px] font-semibold leading-snug hover:text-(--success)">
                                            Pohon tumbang di depan Kebun Binatang samping Kampus ITB
                                        </a>
                                        <p className="mt-1 flex gap-1.5 text-[11px] text-(--disabled)">
                                            <img src="assets/maps.svg" alt />
                                            Jl. Tamansari depan Kebun Binatang
                                        </p>
                                    </td>
                                    <td className="px-5 py-4 text-xs">Dinas Pertamanan dan Hutan Kota Bandung</td>
                                    <td className="px-5 py-4">
                                        <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 font-(family-name:--font-pm) text-[10px] bg-(--bg-submitted) text-(--txt-submitted) [border:var(--bd-submitted)]">
                                            <img src="assets/submitted.svg" alt className="h-3 w-3" />
                                            Submitted
                                        </span>
                                    </td>
                                    <td className="px-5 py-4 font-(family-name:--font-pm) text-[11px]">
                                        <span className="text-(--disabled)">Awaiting verification</span>
                                    </td>
                                    <td className="px-5 py-4 font-(family-name:--font-pm) text-[11px] text-(--disabled)">
                                        Oct 30
                                    </td>
                                </tr>
                                <tr className="align-top">
                                    <td className="w-28 px-5 py-4 font-(family-name:--font-pm) text-[13px] font-semibold text-(--success)">
                                        CMP-2026-8841
                                    </td>
                                    <td className="px-5 py-4">
                                        <a
                                            href="report-detail.html"
                                            className="text-[13px] font-semibold leading-snug hover:text-(--success)">
                                            PAM clean drinking water pipeline burst flooding sidewalk in front of Cipete
                                            Raya MRT
                                        </a>
                                        <p className="mt-1 flex gap-1.5 text-[11px] text-(--disabled)">
                                            <img src="assets/maps.svg" alt />
                                            Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)
                                        </p>
                                    </td>
                                    <td className="px-5 py-4 text-xs">Perumda PAM JAYA (Clean Drinking Water)</td>
                                    <td className="px-5 py-4">
                                        <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 font-(family-name:--font-pm) text-[10px] bg-(--bg-review) text-(--txt-review) [border:var(--bd-review)]">
                                            <img src="assets/review.svg" alt className="h-3 w-3" />
                                            In review
                                        </span>
                                    </td>
                                    <td className="px-5 py-4 font-(family-name:--font-pm) text-[11px]">
                                        <span className="inline-flex items-center gap-1.5 text-(--txt-alert)">
                                            <img src="assets/alert-clock.svg" alt />
                                            Breached by 64h 2m
                                        </span>
                                    </td>
                                    <td className="px-5 py-4 font-(family-name:--font-pm) text-[11px] text-(--disabled)">
                                        Oct 29
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    );
}
