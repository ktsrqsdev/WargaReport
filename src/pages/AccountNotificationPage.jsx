export default function AccountNotificationPage() {
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
                        className="rounded-full px-3.5 py-1.5 text-xs font-medium bg-(--success) text-(--light)">
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
                            Dispatch Notification Preferences
                        </h2>
                        <p className="text-xs leading-relaxed text-(--disabled) mb-5">
                            Control when municipal bureaus may send automated status alerts.
                        </p>
                        <div className="flex flex-col gap-3">
                            <label className="flex items-start gap-3 rounded-xl border border-(--bd-secondary) bg-(--bg-secondary) px-4 py-3.5">
                                <input type="checkbox" defaultChecked className="mt-0.5 accent-(--success)" />
                                <span className="flex flex-col gap-0.5">
                                    <span className="text-[13px] font-semibold">Email Status Transitions</span>
                                    <span className="text-xs leading-relaxed text-(--disabled)">
                                        Receive an email whenever an inspector triages, assigns, or resolves your case.
                                    </span>
                                </span>
                            </label>
                            <label className="flex items-start gap-3 rounded-xl border border-(--bd-secondary) bg-(--bg-secondary) px-4 py-3.5">
                                <input type="checkbox" defaultChecked className="mt-0.5 accent-(--success)" />
                                <span className="flex flex-col gap-0.5">
                                    <span className="text-[13px] font-semibold">Urgent SMS Alerts</span>
                                    <span className="text-xs leading-relaxed text-(--disabled)">
                                        Receive text messages when emergency crews need physical gate access.
                                    </span>
                                </span>
                            </label>
                            <label className="flex items-start gap-3 rounded-xl border border-(--bd-secondary) bg-(--bg-secondary) px-4 py-3.5">
                                <input type="checkbox" className="mt-0.5 accent-(--success)" />
                                <span className="flex flex-col gap-0.5">
                                    <span className="text-[13px] font-semibold">Weekly Ward Resolution Digest</span>
                                    <span className="text-xs leading-relaxed text-(--disabled)">
                                        Summary of all public infrastructure projects completed in your postal code.
                                    </span>
                                </span>
                            </label>
                            <button
                                type="button"
                                className="cursor-pointer inline-flex items-center justify-center gap-1.75 rounded-full border font-semibold px-5 py-2.5 text-xs border-(--success) bg-(--success) text-(--light) mt-2 self-start">
                                Update alert preferences
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
