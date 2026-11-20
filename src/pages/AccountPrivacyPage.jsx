export default function AccountPrivacyPage() {
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
                        className="rounded-full px-3.5 py-1.5 text-xs font-medium text-(--disabled) hover:text-(--dark)">
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
                        className="rounded-full px-3.5 py-1.5 text-xs font-medium bg-(--success) text-(--light)">
                        Privacy &amp; data
                    </a>
                    <a
                        href="account-security.html"
                        className="rounded-full px-3.5 py-1.5 text-xs font-medium text-(--disabled) hover:text-(--dark)">
                        Security
                    </a>
                </nav>
                <div className="mt-6">
                    <section className="rounded-[22px] border border-(--bd-secondary) bg-(--bg-secondary) p-6 sm:p-8 max-w-140">
                        <h2 className="font-(family-name:--font-f) text-xl font-semibold">
                            Privacy Rights &amp; Data Portability
                        </h2>
                        <p className="text-xs leading-relaxed text-(--disabled) mb-4">
                            Review personal records retained under municipal open data laws.
                        </p>
                        <p className="mb-5 text-[13px] leading-relaxed text-(--disabled)">
                            Under Indonesian Law No. 27/2022 on Personal Data Protection (UU PDP) and Law No. 14/2008 on
                            Public Information Openness (UU KIP), personal citizen identifiers are strictly segregated
                            from public registers.
                        </p>
                        <div className="rounded-xl border border-(--bd-secondary) bg-(--bg-primary) px-4 py-4">
                            <h3 className="text-[13px] font-semibold">Download your case archive</h3>
                            <p className="text-xs leading-relaxed text-(--disabled) mb-3">
                                Export all submitted complaints, attached media metadata, and officer replies as
                                standard JSON.
                            </p>
                            <button
                                type="button"
                                className="cursor-pointer inline-flex items-center justify-center gap-1.75 rounded-full border font-semibold px-5 py-2.5 text-xs border-(--bd-primary) bg-(--bg-secondary) text-(--dark)">
                                <img src="assets/download.svg" alt />
                                Download JSON archive
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
