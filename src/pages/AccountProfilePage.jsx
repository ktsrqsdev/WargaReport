export default function AccountProfilePage() {
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
                        className="rounded-full px-3.5 py-1.5 text-xs font-medium bg-(--success) text-(--light)">
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
                    <section className="rounded-[22px] border border-(--bd-secondary) bg-(--bg-secondary) p-6 sm:p-8 max-w-140">
                        <h2 className="font-(family-name:--font-f) text-xl font-semibold">
                            Filer Identity &amp; Preferences
                        </h2>
                        <p className="text-xs leading-relaxed text-(--disabled) mb-5">
                            Used to pre-fill future complaint forms and verify status inquiries.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-(--bg-received) [border:var(--bd-received)] font-(family-name:--font-pm) text-base font-semibold text-(--success)">
                                    FS
                                </span>
                                <div>
                                    <p className="text-[13px] font-semibold">Profile photo</p>
                                    <p className="text-xs leading-relaxed text-(--disabled) mb-2">
                                        JPG, PNG, or WebP. Square images work best.
                                    </p>
                                    <button
                                        type="button"
                                        className="cursor-pointer inline-flex items-center justify-center gap-1.75 rounded-full border font-semibold px-5 py-2.5 text-xs border-(--bd-primary) bg-(--bg-secondary) text-(--dark)">
                                        Upload photo
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label
                                    htmlFor="full-name"
                                    className="font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--dark)">
                                    Full Legal Name
                                </label>
                                <input
                                    id="full-name"
                                    type="text"
                                    defaultValue="Fahrul Septiana"
                                    className="w-full rounded-xl border border-(--bd-primary) bg-(--bg-secondary) px-4 py-3 text-sm text-(--dark) placeholder:text-(--disabled2) focus:border-(--green) focus:outline-none focus:ring-4 focus:ring-(--green-20)"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label
                                    htmlFor="primary-email"
                                    className="font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--dark)">
                                    Primary Notification Email
                                </label>
                                <input
                                    id="primary-email"
                                    type="email"
                                    defaultValue="fahrul@wargareport.id"
                                    className="w-full rounded-xl border border-(--bd-primary) bg-(--bg-secondary) px-4 py-3 text-sm text-(--dark) placeholder:text-(--disabled2) focus:border-(--green) focus:outline-none focus:ring-4 focus:ring-(--green-20)"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label
                                    htmlFor="sms-number"
                                    className="font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--dark)">
                                    SMS Contact Number
                                </label>
                                <input
                                    id="sms-number"
                                    type="tel"
                                    defaultValue="+62 812-9842-1054"
                                    className="w-full rounded-xl border border-(--bd-primary) bg-(--bg-secondary) px-4 py-3 text-sm text-(--dark) placeholder:text-(--disabled2) focus:border-(--green) focus:outline-none focus:ring-4 focus:ring-(--green-20)"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label
                                    htmlFor="nik"
                                    className="font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--dark)">
                                    NIK
                                </label>
                                <input
                                    id="nik"
                                    type="text"
                                    defaultValue={3174051809900004}
                                    className="w-full rounded-xl border border-(--bd-primary) bg-(--bg-secondary) px-4 py-3 text-sm text-(--dark) placeholder:text-(--disabled2) focus:border-(--green) focus:outline-none focus:ring-4 focus:ring-(--green-20) font-(family-name:--font-pm) text-[13px]"
                                />
                            </div>
                            <button
                                type="button"
                                className="cursor-pointer inline-flex items-center justify-center gap-1.75 rounded-full border font-semibold px-5 py-2.5 text-xs border-(--success) bg-(--success) text-(--light) self-start">
                                Save profile changes
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
