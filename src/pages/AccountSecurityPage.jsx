export default function AccountSecurityPage() {
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
                        className="rounded-full px-3.5 py-1.5 text-xs font-medium text-(--disabled) hover:text-(--dark)">
                        Privacy &amp; data
                    </a>
                    <a
                        href="account-security.html"
                        className="rounded-full px-3.5 py-1.5 text-xs font-medium bg-(--success) text-(--light)">
                        Security
                    </a>
                </nav>
                <div className="mt-6">
                    <section className="rounded-[22px] border border-(--bd-secondary) bg-(--bg-secondary) p-6 sm:p-8 max-w-140">
                        <h2 className="font-(family-name:--font-f) text-xl font-semibold">Security</h2>
                        <p className="text-xs leading-relaxed text-(--disabled) mb-5">
                            Change the password used to sign in to your WargaReport account.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label
                                    htmlFor="current-password"
                                    className="font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--dark)">
                                    Current Password
                                </label>
                                <div className="flex items-center gap-2.5 rounded-xl border border-(--bd-primary) bg-(--bg-secondary) px-3.5 focus-within:border-(--green) focus-within:ring-4 focus-within:ring-(--green-20)">
                                    <img src="assets/lock.svg" alt />
                                    <input
                                        id="current-password"
                                        type="password"
                                        placeholder="Enter current password"
                                        className="min-w-0 flex-1 bg-transparent py-3 text-sm text-(--dark) outline-none placeholder:text-(--disabled2)"
                                    />
                                    <img src="assets/eye.svg" alt />
                                </div>
                                <p className="text-[10.5px] text-(--disabled)">
                                    Required to confirm any password change.
                                </p>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label
                                    htmlFor="new-password"
                                    className="font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--dark)">
                                    New Password
                                </label>
                                <div className="flex items-center gap-2.5 rounded-xl border border-(--bd-primary) bg-(--bg-secondary) px-3.5 focus-within:border-(--green) focus-within:ring-4 focus-within:ring-(--green-20)">
                                    <img src="assets/lock.svg" alt />
                                    <input
                                        id="new-password"
                                        type="password"
                                        placeholder="At least 8 characters"
                                        className="min-w-0 flex-1 bg-transparent py-3 text-sm text-(--dark) outline-none placeholder:text-(--disabled2)"
                                    />
                                    <img src="assets/eye.svg" alt />
                                </div>
                                <p className="text-[10.5px] text-(--disabled)">
                                    Use at least 8 characters, including a letter and a number.
                                </p>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label
                                    htmlFor="confirm-password"
                                    className="font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--dark)">
                                    Confirm New Password
                                </label>
                                <div className="flex items-center gap-2.5 rounded-xl border border-(--bd-primary) bg-(--bg-secondary) px-3.5 focus-within:border-(--green) focus-within:ring-4 focus-within:ring-(--green-20)">
                                    <img src="assets/lock.svg" alt />
                                    <input
                                        id="confirm-password"
                                        type="password"
                                        placeholder="Re-enter new password"
                                        className="min-w-0 flex-1 bg-transparent py-3 text-sm text-(--dark) outline-none placeholder:text-(--disabled2)"
                                    />
                                    <img src="assets/eye.svg" alt />
                                </div>
                            </div>
                            <button
                                type="button"
                                className="cursor-pointer inline-flex items-center justify-center gap-1.75 rounded-full border font-semibold px-5 py-2.5 text-xs border-(--success) bg-(--success) text-(--light) self-start">
                                Update password
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
