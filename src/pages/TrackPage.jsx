export default function TrackPage() {
    return (
        <>
            <body className="bg-(--bg-primary) font-(family-name:--font-ps) text-(--dark) antialiased">
                <main className="mx-auto w-full max-w-7xl px-5 md:px-(--gutter) my-10 grid items-start gap-10 md:grid-cols-[7fr_5fr]">
                    <section className="rounded-[22px] border border-(--bd-secondary) bg-(--bg-secondary) p-6 sm:p-8">
                        <p className="mb-2 font-(family-name:--font-pm) text-[11px] uppercase tracking-widest text-(--disabled)">
                            Citizen Portal
                        </p>
                        <h1 className="mb-2 font-(family-name:--font-f) text-[38px] font-semibold leading-[1.1]">
                            Track your complaint
                        </h1>
                        <p className="max-w-125 text-[15px] leading-relaxed text-(--disabled)">
                            Enter your official case reference number to view real-time triage progress, inspector
                            assignment, and official replies.
                        </p>
                        <div className="mt-6 flex flex-col gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label
                                    htmlFor="case-id"
                                    className="font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--dark)">
                                    Complaint Reference ID *
                                </label>
                                <input
                                    id="case-id"
                                    type="text"
                                    placeholder="e.g. CMP-2026-8841"
                                    className="w-full rounded-xl border border-(--bd-primary) bg-(--bg-secondary) px-4 py-3 text-sm text-(--dark) placeholder:text-(--disabled2) focus:border-(--green) focus:outline-none focus:ring-4 focus:ring-(--green-20) font-(family-name:--font-pm) text-[13px]"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label
                                    htmlFor="contact"
                                    className="font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--dark)">
                                    Email address or phone (optional verification)
                                </label>
                                <input
                                    id="contact"
                                    type="text"
                                    placeholder="citizen@example.com"
                                    className="w-full rounded-xl border border-(--bd-primary) bg-(--bg-secondary) px-4 py-3 text-sm text-(--dark) placeholder:text-(--disabled2) focus:border-(--green) focus:outline-none focus:ring-4 focus:ring-(--green-20)"
                                />
                            </div>
                            <button
                                type="button"
                                className="cursor-pointer inline-flex items-center justify-center gap-1.75 rounded-full border font-semibold px-6 py-3.5 text-[15px] border-(--success) bg-(--success) text-(--light) self-start">
                                <svg
                                    width={13}
                                    height={13}
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_2_698)">
                                        <path
                                            d="M9.75008 5.95835C9.75008 8.05243 8.05249 9.75002 5.95841 9.75002C3.86434 9.75002 2.16675 8.05243 2.16675 5.95835C2.16675 3.86427 3.86434 2.16669 5.95841 2.16669C8.05249 2.16669 9.75008 3.86427 9.75008 5.95835Z"
                                            strokeWidth="1.08333"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="white"
                                        />
                                        <path
                                            d="M11.3751 11.375L9.0459 9.04584"
                                            strokeWidth="1.08333"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_698">
                                            <rect width={13} height={13} fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Lookup report status
                                <svg
                                    width={13}
                                    height={13}
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_2_703)">
                                        <path
                                            d="M2.70825 6.5H10.2916"
                                            strokeWidth="1.08333"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="white"
                                        />
                                        <path
                                            d="M6.5 2.70831L10.2917 6.49998L6.5 10.2916"
                                            strokeWidth="1.08333"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_703">
                                            <rect width={13} height={13} fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                        <hr className="my-4.5 border-(--bd-secondary)" />
                        <p className="text-xs leading-relaxed text-(--disabled)">
                            Try a sample record: {""}
                            <a href="#" className="font-(family-name:--font-pm) font-semibold text-(--success)">
                                CMP-2026-8841
                            </a>
                            {" · "}
                            <a href="#" className="font-(family-name:--font-pm) font-semibold text-(--success)">
                                CMP-2026-8794 (Resolved)
                            </a>
                        </p>
                    </section>
                    <aside className="pt-2">
                        <div className="flex gap-3">
                            <svg
                                width={30}
                                height={30}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2_713)">
                                    <path
                                        d="M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#84928A"
                                    />
                                    <path
                                        d="M7.58325 7.5C7.79055 6.95969 8.17887 6.50804 8.68198 6.22207C9.18509 5.9361 9.77183 5.83354 10.3421 5.93186C10.9124 6.03019 11.4309 6.32332 11.8092 6.76125C12.1875 7.19919 12.4022 7.7548 12.4166 8.33333C12.4166 10 9.91658 10.8333 9.91658 10.8333"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#84928A"
                                    />
                                    <path
                                        d="M10 14.1667H10.0083"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#84928A"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2_713">
                                        <rect width={30} height={30} fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div className="flex flex-col mt-1 gap-2.5 text-[13px] leading-relaxed text-(--disabled)">
                                <p>
                                    Your tracking ID was displayed on your confirmation receipt and sent to your
                                    registered email address immediately upon intake.
                                </p>
                                <p>
                                    Reports filed anonymously can only be tracked using this unique key; officers cannot
                                    retrieve records by name without it.
                                </p>
                            </div>
                        </div>
                        <hr className="my-4.5 border-(--bd-secondary)" />
                        <a
                            href="liveFeed.html"
                            className="whitespace-nowrap text-[13px] font-semibold text-(--success)">
                            Lost your tracking ID? Search recent reports by location →
                        </a>
                    </aside>
                </main>
            </body>
        </>
    );
}
