export default function ReportLocationPage() {
    return (
        <>
            <main className="mx-auto w-full max-w-7xl px-5 md:px-(--gutter) my-10 grid items-start gap-9 md:grid-cols-[260px_1fr]">
                <aside className="flex flex-col gap-5">
                    <div>
                        <p className="mb-2 font-(family-name:--font-pm) text-[11px] uppercase tracking-widest text-(--disabled)">
                            Community Intake
                        </p>
                        <h1 className="font-(family-name:--font-f) text-[28px] font-semibold leading-[1.15]">
                            Report an Issue
                        </h1>
                        <p className="text-xs leading-relaxed text-(--disabled)">
                            Public civic reporting for Indonesian municipal services.
                        </p>
                    </div>
                    <nav className="flex flex-col gap-1.5">
                        <a
                            href="report-topic.html"
                            className="flex items-center gap-2.5 rounded-full px-3.5 py-2.5 text-[13px] font-medium text-(--disabled)">
                            <span className="font-(family-name:--font-pm) text-[11px]">01</span>Topic
                            <span className="ml-auto text-(--success)">✓</span>
                        </a>
                        <a
                            href="report-location.html"
                            className="flex items-center gap-2.5 rounded-full px-3.5 py-2.5 text-[13px] font-medium bg-(--success) text-(--light)">
                            <span className="font-(family-name:--font-pm) text-[11px]">02</span>Location
                        </a>
                        <a
                            href="report-proof.html"
                            className="flex items-center gap-2.5 rounded-full px-3.5 py-2.5 text-[13px] font-medium text-(--disabled)">
                            <span className="font-(family-name:--font-pm) text-[11px]">03</span>Proof
                        </a>
                        <a
                            href="report-review.html"
                            className="flex items-center gap-2.5 rounded-full px-3.5 py-2.5 text-[13px] font-medium text-(--disabled)">
                            <span className="font-(family-name:--font-pm) text-[11px]">04</span>Review &amp; Send
                        </a>
                    </nav>
                    <section className="rounded-[18px] border border-dashed border-(--bd-secondary) bg-(--bg-secondary) px-4.5 py-4.25">
                        <h2 className="mb-1.5 text-[13px] font-semibold flex items-center gap-2">
                            <svg
                                width={14}
                                height={14}
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_214_639)">
                                    <g clipPath="url(#clip1_214_639)">
                                        <path
                                            d="M6.99999 12.8334C6.99999 12.8334 11.6667 10.5001 11.6667 7.00008V2.91675L6.99999 1.16675L2.33333 2.91675V7.00008C2.33333 10.5001 6.99999 12.8334 6.99999 12.8334Z"
                                            strokeWidth="1.16667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#0F6B4F"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_214_639">
                                        <rect width={14} height={14} fill="white" />
                                    </clipPath>
                                    <clipPath id="clip1_214_639">
                                        <rect width={14} height={14} fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Independent Verification
                        </h2>
                        <p className="text-xs leading-relaxed text-(--disabled)">
                            Our verification desk checks each report and routes it to the municipal agency (Bina Marga,
                            PAM JAYA, Dishub, DLH, Satpol PP, Citata). Resolution timestamps are tracked publicly.
                        </p>
                    </section>
                    <a href="liveFeed.html" className="whitespace-nowrap text-[13px] font-semibold text-(--success)">
                        Cancel and return to feed
                    </a>
                </aside>
                <section className="rounded-[22px] border border-(--bd-secondary) bg-(--bg-secondary) p-6 sm:p-8">
                    <div className="mb-4.5">
                        <p className="mb-2 font-(family-name:--font-pm) text-[11px] uppercase tracking-widest text-(--disabled)">
                            Step 02 of 04
                        </p>
                        <h2 className="font-(family-name:--font-f) text-[28px] font-semibold leading-[1.15]">
                            Where is it located?
                        </h2>
                        <p className="text-xs leading-relaxed text-(--disabled)">
                            Provide street address, RT/RW, or notable landmark for inspection crews.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="area"
                                className="font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--dark)">
                                Kelurahan / Kecamatan &amp; Wilayah
                            </label>
                            <select
                                id="area"
                                className="w-full rounded-xl border border-(--bd-primary) bg-(--bg-secondary) px-4 py-3 text-sm text-(--dark) placeholder:text-(--disabled2) focus:border-(--green) focus:outline-none focus:ring-4 focus:ring-(--green-20)">
                                <option>Coblong</option>
                                <option>Bandung Wetan</option>
                                <option>Cicendo</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <p className="font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--dark)">
                                Common areas in Coblong · Kota Bandung
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    type="button"
                                    className="cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3.5 py-2 text-xs font-medium text-(--dark) hover:border-(--green)">
                                    Jl. Dago
                                </button>
                                <button
                                    type="button"
                                    className="cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3.5 py-2 text-xs font-medium text-(--dark) hover:border-(--green)">
                                    Institut Teknologi Bandung (ITB)
                                </button>
                                <button
                                    type="button"
                                    className="cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3.5 py-2 text-xs font-medium text-(--dark) hover:border-(--green)">
                                    Simpang Dago
                                </button>
                                <button
                                    type="button"
                                    className="cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3.5 py-2 text-xs font-medium text-(--dark) hover:border-(--green)">
                                    Pasar Dago
                                </button>
                                <button
                                    type="button"
                                    className="cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3.5 py-2 text-xs font-medium text-(--dark) hover:border-(--green)">
                                    Jl. Ir. H. Juanda
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="address"
                                className="font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--dark)">
                                Street Address, RT/RW, or Landmark *
                            </label>
                            <div className="flex items-center gap-2.5 rounded-xl border border-(--bd-primary) bg-(--bg-secondary) px-3.5 focus-within:border-(--green) focus-within:ring-4 focus-within:ring-(--green-20)">
                                <input
                                    id="address"
                                    type="text"
                                    defaultValue="Jl. Tamansari depan Kebun Binatang"
                                    className="min-w-0 flex-1 bg-transparent py-3 text-sm text-(--dark) outline-none placeholder:text-(--disabled2)"
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-30 rounded-xl [border:var(--bd-secondary)] bg-(--bg-primary) px-4 py-3 text-xs">
                            <svg
                                width={14}
                                height={14}
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_214_751)">
                                    <g clipPath="url(#clip1_214_751)">
                                        <path
                                            d="M12.25 5.83325C12.25 9.91658 7 13.4166 7 13.4166C7 13.4166 1.75 9.91658 1.75 5.83325C1.75 4.44087 2.30312 3.10551 3.28769 2.12094C4.27226 1.13638 5.60761 0.583252 7 0.583252C8.39239 0.583252 9.72774 1.13638 10.7123 2.12094C11.6969 3.10551 12.25 4.44087 12.25 5.83325Z"
                                            strokeWidth="1.16667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#0F6B4F"
                                        />
                                        <path
                                            d="M8.75 5.83325C8.75 6.79975 7.9665 7.58325 7 7.58325C6.0335 7.58325 5.25 6.79975 5.25 5.83325C5.25 4.86675 6.0335 4.08325 7 4.08325C7.9665 4.08325 8.75 4.86675 8.75 5.83325Z"
                                            strokeWidth="1.16667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#0F6B4F"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_214_751">
                                        <rect width={14} height={14} fill="white" />
                                    </clipPath>
                                    <clipPath id="clip1_214_751">
                                        <rect width={14} height={14} fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Coordinates auto-pinned
                            <span className="ml-auto font-(family-name:--font-pm) text-[11px] text-(--disabled)">
                                6.2088° S, 106.8456° E (WIB)
                            </span>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                        <a
                            href="report-topic.html"
                            className="cursor-pointer inline-flex items-center justify-center gap-1.75 rounded-full border font-semibold px-5 py-2.5 text-xs border-(--bd-primary) bg-(--bg-secondary) text-(--dark)">
                            <svg
                                width={12}
                                height={12}
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_214_759)">
                                    <path
                                        d="M9.5 6H2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#13231B"
                                    />
                                    <path
                                        d="M6 9.5L2.5 6L6 2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#13231B"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_214_759">
                                        <rect width={12} height={12} fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Back
                        </a>
                        <a
                            href="report-proof.html"
                            className="cursor-pointer inline-flex items-center justify-center gap-1.75 rounded-full border font-semibold px-5 py-2.5 text-xs border-(--success) bg-(--success) text-(--light)">
                            Continue
                            <svg
                                width={13}
                                height={13}
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_214_766)">
                                    <path
                                        d="M2.70825 6.5H10.2916"
                                        strokeWidth="1.08333"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="white"
                                    />
                                    <path
                                        d="M6.5 2.70825L10.2917 6.49992L6.5 10.2916"
                                        strokeWidth="1.08333"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="white"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_214_766">
                                        <rect width={13} height={13} fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}
