export default function Footer() {
    return (
    <>
        <footer className="mt-20 border-t border-(--bd-primary) bg-(--bg-secondary)">
            <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr] md:px-(--gutter)">
                <div className="sm:col-span-2 md:col-span-1">
                    <p className="mb-3 font-(family-name:--font-f) text-[19px] font-bold">WargaReport</p>
                    <p className="max-w-[44ch] text-[13px] leading-[1.7] text-(--disabled)">
                        WargaReport is an independent civic reporting platform for municipal infrastructure issues
                        across Indonesia. Residents submit evidence, follow SLA countdowns, and track resolution updates
                        from the responsible agencies.
                    </p>
                    <p className="mt-4 max-w-[44ch] text-[13px] leading-relaxed text-(--danger)">
                        Not for life-threatening emergencies — call 112 (National Emergency Call Center) or BPBD DKI
                        directly.
                    </p>
                </div>
                <div>
                    <h2 className="mb-3 font-(family-name:--font-pm) text-[10px] font-medium uppercase tracking-[0.08em] text-(--success)">
                        Citizens
                    </h2>
                    <ul className="flex flex-col gap-2.5 text-[13px] text-(--disabled)">
                        <li>
                            <a href="#" className="hover:text-(--dark)">
                                File a report
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-(--dark)">
                                Track complaint
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-(--dark)">
                                Public reports registry
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-(--dark)">
                                My filing history
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-3 font-(family-name:--font-pm) text-[10px] font-medium uppercase tracking-[0.08em] text-(--success)">
                        Agencies
                    </h2>
                    <ul className="flex flex-col gap-2.5 text-[13px] text-(--disabled)">
                        <li>
                            <a href="#" className="hover:text-(--dark)">
                                Participating bureaus
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-(--dark)">
                                Officer triage queue
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-(--dark)">
                                SLA benchmarks
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-3 font-(family-name:--font-pm) text-[10px] font-medium uppercase tracking-[0.08em] text-(--success)">
                        Civic Trust
                    </h2>
                    <ul className="flex flex-col gap-2.5 text-[13px] text-(--disabled)">
                        <li>
                            <a href="#" className="hover:text-(--dark)">
                                Help &amp; FAQs
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-(--dark)">
                                Evidence guidelines
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-(--dark)">
                                PII &amp; redaction policy
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-5 md:px-(--gutter)">
                <div className="flex flex-col justify-between gap-2 border-t border-(--bd-secondary) py-5 text-[11px] text-(--disabled) sm:flex-row">
                    <p>© 2026 WargaReport. All rights reserved.</p>
                    <p className="font-(family-name:--font-pm) text-[10px]">UU No. 25/2009 Compliant</p>
                </div>
            </div>
        </footer>
    </>
    )
}
