export default function ReportDetailPage() {
    return (
        <>
            <main className="mx-auto w-full max-w-7xl px-5 md:px-(--gutter) pb-4 pt-8">
                <div className="mb-4 flex items-center justify-between">
                    <a
                        href="liveFeed.html"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-(--success)">
                        <img src="assets/arrow-left.svg" alt />
                        Back to Live Feed
                    </a>
                    <button
                        type="button"
                        className="cursor-pointer inline-flex items-center justify-center gap-1.75 rounded-full border font-semibold px-5 py-2.5 text-xs border-(--bd-primary) bg-(--bg-secondary) text-(--dark)">
                        <img src="assets/share.svg" alt />
                        Share
                    </button>
                </div>
                <div className="grid items-start gap-5 md:grid-cols-[2fr_1fr]">
                    <div className="flex flex-col gap-8">
                        <section className="rounded-[22px] border border-(--bd-secondary) bg-(--bg-secondary) p-6 sm:p-8">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 font-(family-name:--font-pm) text-[10px] bg-(--bg-review) text-(--txt-review) [border:var(--bd-review)]">
                                        <img src="assets/review.svg" alt className="h-3 w-3" />
                                        In review
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 font-(family-name:--font-pm) text-[11px] text-(--disabled)">
                                        <img src="assets/clock.svg" alt />
                                        18h 59m left
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    className="cursor-pointer inline-flex items-center gap-1.5 rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3 py-1 font-(family-name:--font-pm) text-[11px]">
                                    <img src="assets/i-thumbs-up.svg" alt />
                                    Upvote (148)
                                </button>
                            </div>
                            <h1 className="mt-4 font-(family-name:--font-f) text-[26px] font-semibold leading-tight">
                                PAM clean drinking water pipeline burst flooding sidewalk in front of Cipete Raya MRT
                            </h1>
                            <p className="mt-3 text-[13px] leading-relaxed text-(--disabled)">
                                Clean drinking water is bursting through the sidewalk pavement outside Jl. Fatmawati
                                Raya No. 42 (RT 04 / RW 07, Cilandak Barat) right in front of Cipete Raya MRT. Clean
                                water has been flooding the roadway for 4 hours, causing motorbikes to slip.
                            </p>
                            <hr className="my-5 border-(--bd-secondary)" />
                            <p className="font-(family-name:--font-pm) text-[10px] uppercase tracking-wider mb-2.5 text-(--disabled)">
                                Resolution Pipeline
                            </p>
                            <ol className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                                <li className="flex flex-col items-center gap-0.5 rounded-xl px-2 py-2.5 text-center text-[11px] font-semibold bg-(--bg-received) [border:var(--bd-received)] text-(--success)">
                                    <span className="font-(family-name:--font-pm) text-[10px] font-normal">01</span>
                                    Submitted
                                </li>
                                <li className="flex flex-col items-center gap-0.5 rounded-xl px-2 py-2.5 text-center text-[11px] font-semibold bg-(--bg-received) [border:var(--bd-received)] text-(--success)">
                                    <span className="font-(family-name:--font-pm) text-[10px] font-normal">02</span>
                                    Verified by WargaReport
                                </li>
                                <li className="flex flex-col items-center gap-0.5 rounded-xl px-2 py-2.5 text-center text-[11px] font-semibold bg-(--bg-submitted) text-(--disabled2)">
                                    <span className="font-(family-name:--font-pm) text-[10px] font-normal">03</span>
                                    Dispatched to Agency
                                </li>
                                <li className="flex flex-col items-center gap-0.5 rounded-xl px-2 py-2.5 text-center text-[11px] font-semibold bg-(--bg-submitted) text-(--disabled2)">
                                    <span className="font-(family-name:--font-pm) text-[10px] font-normal">04</span>
                                    Fixed &amp; Verified
                                </li>
                            </ol>
                        </section>
                        <section>
                            <h2 className="font-(family-name:--font-f) text-xl font-semibold">Evidence on File</h2>
                            <p className="text-xs leading-relaxed text-(--disabled) mb-3">
                                2 attachments (tap to expand)
                            </p>
                            <div className="grid gap-3 sm:grid-cols-2">
                                <article className="overflow-hidden rounded-[14px] border border-(--bd-secondary) bg-(--bg-secondary)">
                                    <img
                                        src="assets/img/img1.png"
                                        alt="Water flooding the sidewalk in front of the MRT"
                                        className="aspect-4/3 w-full object-cover"
                                    />
                                    <div className="px-3.5 py-3">
                                        <p className="font-(family-name:--font-pm) text-[11px]">
                                            pam_water_pipeline_fracture.jpg
                                        </p>
                                        <p className="mb-1 mt-0.5 font-(family-name:--font-pm) text-[10px] uppercase text-(--disabled)">
                                            Image · 2.4 MB
                                        </p>
                                        <p className="truncate text-xs text-(--disabled)">
                                            Water runoff flooding pedestrian sidewalk slabs and bike lane on Jl.
                                            Fatmawati Raya.
                                        </p>
                                    </div>
                                </article>
                                <article className="overflow-hidden rounded-[14px] border border-(--bd-secondary) bg-(--bg-secondary)">
                                    <div className="grid aspect-4/3 place-items-center bg-(--bg-received)">
                                        <div className="flex flex-col items-center gap-2">
                                            <img src="assets/music.svg" alt />
                                            <span className="font-(family-name:--font-pm) text-[11px] text-(--success)">
                                                Audio clip · 0:34
                                            </span>
                                        </div>
                                    </div>
                                    <div className="px-3.5 py-3">
                                        <p className="font-(family-name:--font-pm) text-[11px]">
                                            acoustic_pipe_pressure_sound.m4a
                                        </p>
                                        <p className="mb-1 mt-0.5 font-(family-name:--font-pm) text-[10px] uppercase text-(--disabled)">
                                            Audio · 1.1 MB
                                        </p>
                                        <p className="truncate text-xs text-(--disabled)">
                                            Acoustic underground hissing recorded near customer meter vault.
                                        </p>
                                    </div>
                                </article>
                            </div>
                        </section>
                        <section>
                            <h2 className="font-(family-name:--font-f) text-xl font-semibold">Action History</h2>
                            <p className="text-xs leading-relaxed text-(--disabled) mb-4">
                                Chronological updates from intake router and field teams
                            </p>
                            <ol className="relative ml-3 border-l border-(--bd-primary)">
                                <li className="relative pb-5 pl-6 last:pb-0">
                                    <span className="absolute -left-3 top-0 grid h-6 w-6 place-items-center rounded-full border border-(--bd-primary) bg-(--bg-secondary)">
                                        <img src="assets/tl-user.svg" alt />
                                    </span>
                                    <div className="flex flex-wrap items-center gap-2">
                                        <p className="text-[13px] font-medium">
                                            Report submitted via WargaReport intake
                                        </p>
                                        <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 font-(family-name:--font-pm) text-[10px] bg-(--bg-submitted) text-(--txt-submitted) [border:var(--bd-submitted)]">
                                            <img src="assets/submitted.svg" alt className="h-3 w-3" />
                                            Submitted
                                        </span>
                                    </div>
                                    <p className="mt-1 text-[11px]">
                                        <span className="font-medium">Fahrul Septiana</span>{" "}
                                        <span className="font-(family-name:--font-pm) text-(--disabled)">
                                            · Nov 6, 05:09 PM GMT+7
                                        </span>
                                    </p>
                                    <p className="mt-2 rounded-xl border border-(--bd-secondary) bg-(--bg-primary) px-3.5 py-2.5 text-xs text-(--disabled)">
                                        Citizen attached visual photo evidence and acoustic audio note.
                                    </p>
                                </li>
                                <li className="relative pb-5 pl-6 last:pb-0">
                                    <span className="absolute -left-3 top-0 grid h-6 w-6 place-items-center rounded-full border border-(--bd-primary) bg-(--bg-secondary)">
                                        <img src="assets/tl-router.svg" alt />
                                    </span>
                                    <div className="flex flex-wrap items-center gap-2">
                                        <p className="text-[13px] font-medium">
                                            Verified by WargaReport &amp; dispatched to Perumda PAM JAYA
                                        </p>
                                        <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 font-(family-name:--font-pm) text-[10px] bg-(--bg-received) text-(--txt-received) [border:var(--bd-received)]">
                                            <img src="assets/received.svg" alt className="h-3 w-3" />
                                            Received
                                        </span>
                                    </div>
                                    <p className="mt-1 text-[11px]">
                                        <span className="font-medium">WargaReport Civic Router</span>{" "}
                                        <span className="font-(family-name:--font-pm) text-(--disabled)">
                                            · Nov 6, 05:12 PM GMT+7
                                        </span>
                                    </p>
                                    <p className="mt-2 rounded-xl border border-(--bd-secondary) bg-(--bg-primary) px-3.5 py-2.5 text-xs text-(--disabled)">
                                        Priority: High. Clean water conservation target. 24h statutory countdown
                                        initiated.
                                    </p>
                                </li>
                                <li className="relative pb-5 pl-6 last:pb-0">
                                    <span className="absolute -left-3 top-0 grid h-6 w-6 place-items-center rounded-full border border-(--bd-primary) bg-(--bg-secondary)">
                                        <img src="assets/tl-shield.svg" alt />
                                    </span>
                                    <div className="flex flex-wrap items-center gap-2">
                                        <p className="text-[13px] font-medium">
                                            Case accepted by Duty Triage Coordinator
                                        </p>
                                        <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 font-(family-name:--font-pm) text-[10px] bg-(--bg-review) text-(--txt-review) [border:var(--bd-review)]">
                                            <img src="assets/review.svg" alt className="h-3 w-3" />
                                            In review
                                        </span>
                                    </div>
                                    <p className="mt-1 text-[11px]">
                                        <span className="font-medium">Hendra Kurniawan</span>{" "}
                                        <span className="font-(family-name:--font-pm) text-(--disabled)">
                                            · Nov 6, 06:39 PM GMT+7
                                        </span>
                                    </p>
                                    <p className="mt-2 rounded-xl border border-(--bd-secondary) bg-(--bg-primary) px-3.5 py-2.5 text-xs text-(--disabled)">
                                        Dispatched secondary valve isolation team from Cilandak maintenance station.
                                    </p>
                                </li>
                            </ol>
                        </section>
                    </div>
                    <aside className="rounded-[22px] border border-(--bd-secondary) bg-(--bg-secondary) p-6 sm:p-8 flex flex-col gap-4">
                        <div>
                            <p className="font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--disabled)">
                                Tracking Code
                            </p>
                            <p className="mt-1 font-(family-name:--font-pm) text-xl font-semibold text-(--success)">
                                CMP-2026-8841
                            </p>
                        </div>
                        <hr className="border-(--bd-secondary)" />
                        <div>
                            <p className="font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--disabled)">
                                Assigned Authority
                            </p>
                            <div className="mt-1 text-[13px] font-medium">Perumda PAM JAYA (Clean Drinking Water)</div>
                        </div>
                        <div>
                            <p className="font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--disabled)">
                                Category
                            </p>
                            <div className="mt-1 text-[13px] font-medium">Water &amp; Sewage</div>
                        </div>
                        <div>
                            <p className="font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--disabled)">
                                Location
                            </p>
                            <div className="mt-1 text-[13px] font-medium">
                                <p className="flex gap-1.5">
                                    <img src="assets/maps.svg" alt className="mt-0.5" />
                                    Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)
                                </p>
                                <p className="pl-5 text-[11px] font-normal text-(--disabled)">
                                    Cilandak Barat, Jakarta Selatan
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--disabled)">
                                Reported On
                            </p>
                            <div className="mt-1 text-[13px] font-medium">
                                <span className="font-(family-name:--font-pm)">Nov 6, 2026</span>
                            </div>
                        </div>
                        <div>
                            <p className="font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--disabled)">
                                Reported By
                            </p>
                            <div className="mt-1 text-[13px] font-medium">Fahrul S.</div>
                        </div>
                        <div>
                            <p className="font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--disabled)">
                                Field Officer
                            </p>
                            <div className="mt-1 text-[13px] font-medium">
                                Hendra Kurniawan
                                <p className="font-(family-name:--font-pm) text-[10px] font-normal text-(--disabled)">
                                    Tim Reaksi Cepat PAM JAYA [PAM-JKT-044]
                                </p>
                            </div>
                        </div>
                        <hr className="border-(--bd-secondary)" />
                        <a
                            href="report-topic.html"
                            className="cursor-pointer inline-flex items-center justify-center gap-1.75 rounded-full border font-semibold px-5 py-2.5 text-xs border-(--success) bg-(--success) text-(--light) w-full">
                            Report similar issue nearby
                        </a>
                    </aside>
                </div>
            </main>
        </>
    );
}
