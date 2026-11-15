export default function HomePage() {
    return (
        <>
            <main>
                <section className="mx-auto w-full max-w-7xl px-5 md:px-(--gutter) flex flex-col gap-4.25 py-10">
                    <h1 className="max-w-160 font-(family-name:--font-f) text-[clamp(2rem,5vw,3.125rem)] font-semibold leading-[1.06] tracking-tight">
                        See something broken? Snap it. We push the city to fix it.
                    </h1>
                    <p className="max-w-145 text-[17px] leading-7.5 text-(--disabled)">
                        Potholes, dark streetlights, PAM water leaks, or trash piles. Drop photos, track fixes like a
                        food delivery order, and keep authorities accountable.
                    </p>
                    <div className="my-2.5 flex flex-wrap items-center gap-3">
                        <a
                            href="report-topic.html"
                            className="inline-flex items-center justify-center gap-1.75 rounded-full border font-semibold px-6 py-2.5 text-[15px] border-(--success) bg-(--success) text-(--light)">
                            <svg
                                width={15}
                                height={15}
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2_8)">
                                    <path
                                        d="M9.0625 2.5H5.9375L4.375 4.375H2.5C2.16848 4.375 1.85054 4.5067 1.61612 4.74112C1.3817 4.97554 1.25 5.29348 1.25 5.625V11.25C1.25 11.5815 1.3817 11.8995 1.61612 12.1339C1.85054 12.3683 2.16848 12.5 2.5 12.5H12.5C12.8315 12.5 13.1495 12.3683 13.3839 12.1339C13.6183 11.8995 13.75 11.5815 13.75 11.25V5.625C13.75 5.29348 13.6183 4.97554 13.3839 4.74112C13.1495 4.5067 12.8315 4.375 12.5 4.375H10.625L9.0625 2.5Z"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="white"
                                    />
                                    <path
                                        d="M10 8.125C10 9.50571 8.88071 10.625 7.5 10.625C6.11929 10.625 5 9.50571 5 8.125C5 6.74429 6.11929 5.625 7.5 5.625C8.88071 5.625 10 6.74429 10 8.125Z"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="white"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2_8">
                                        <rect width={15} height={15} fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Snap a report
                            <svg
                                width={15}
                                height={15}
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2_13)">
                                    <path
                                        d="M3.125 7.5H11.875"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="white"
                                    />
                                    <path
                                        d="M7.5 3.125L11.875 7.5L7.5 11.875"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="white"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2_13">
                                        <rect width={15} height={15} fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a
                            href="track.html"
                            className="inline-flex items-center justify-center gap-1.75 rounded-full border font-semibold px-6 py-2.5 text-[15px] border-(--bd-primary) bg-(--bg-secondary) text-(--dark)">
                            Track a case
                        </a>
                    </div>
                    <p className="mt-2.5 flex flex-wrap font-(family-name:--font-pm) text-xs text-(--disabled) ">
                        <span>
                            <b className="text-[13px] font-semibold text-(--dark)">48</b> reports today
                        </span>
                        <span className="mx-2.5">·</span>
                        <span>
                            <b className="text-[13px] font-semibold text-(--green)">194</b> fixed this week
                        </span>
                        <span className="mx-2.5">·</span>
                        <span>
                            <b className="text-[13px] font-semibold text-(--green)">2.3 days</b> avg response
                        </span>
                    </p>
                </section>
                <section className="mx-auto w-full max-w-7xl px-5 md:px-(--gutter)">
                    <ol className="grid gap-5 border-t border-(--bd-secondary) py-8 sm:grid-cols-2 lg:grid-cols-4">
                        <li className="rounded-[18px] border border-(--bd-secondary) bg-(--bg-secondary) px-4.5 py-4.25">
                            <span className="mb-2 grid h-8.5 w-8.5 place-items-center rounded-full border border-(--green-20) bg-(--light-green) font-(family-name:--font-pm) text-[11px] font-semibold text-(--success)">
                                01
                            </span>
                            <h2 className="font-(family-name:--font-f) text-[17px] font-semibold">Snap &amp; Tag</h2>
                            <p className="mt-1 text-xs leading-relaxed text-(--disabled)">
                                Take a photo or quick audio of the issue and provide the street location.
                            </p>
                        </li>
                        <li className="rounded-[18px] border border-(--bd-secondary) bg-(--bg-secondary) px-4.5 py-4.25">
                            <span className="mb-2 grid h-8.5 w-8.5 place-items-center rounded-full border border-(--green-20) bg-(--light-green) font-(family-name:--font-pm) text-[11px] font-semibold text-(--success)">
                                02
                            </span>
                            <h2 className="font-(family-name:--font-f) text-[17px] font-semibold">Report Review</h2>
                            <p className="mt-1 text-xs leading-relaxed text-(--disabled)">
                                Our team verifies evidence and routes directly to the responsible bureau.
                            </p>
                        </li>
                        <li className="rounded-[18px] border border-(--bd-secondary) bg-(--bg-secondary) px-4.5 py-4.25">
                            <span className="mb-2 grid h-8.5 w-8.5 place-items-center rounded-full border border-(--green-20) bg-(--light-green) font-(family-name:--font-pm) text-[11px] font-semibold text-(--success)">
                                03
                            </span>
                            <h2 className="font-(family-name:--font-f) text-[17px] font-semibold">Field Fix</h2>
                            <p className="mt-1 text-xs leading-relaxed text-(--disabled)">
                                Dispatched technicians do the repairs under strict public SLA windows.
                            </p>
                        </li>
                        <li className="rounded-[18px] border border-(--bd-secondary) bg-(--bg-secondary) px-4.5 py-4.25">
                            <span className="mb-2 grid h-8.5 w-8.5 place-items-center rounded-full border border-(--green-20) bg-(--light-green) font-(family-name:--font-pm) text-[11px] font-semibold text-(--success)">
                                04
                            </span>
                            <h2 className="font-(family-name:--font-f) text-[17px] font-semibold">Proof &amp; Close</h2>
                            <p className="mt-1 text-xs leading-relaxed text-(--disabled)">
                                Before/after photos published openly so everyone sees the resolution.
                            </p>
                        </li>
                    </ol>
                </section>
                <section className="mx-auto w-full max-w-7xl px-5 md:px-(--gutter)">
                    <div className="flex items-center justify-between gap-4 border-t border-(--bd-secondary) pt-7">
                        <div>
                            <h2 className="font-(family-name:--font-f) text-xl font-semibold">
                                Recent Community Reports
                            </h2>
                            <p className="text-xs text-(--disabled2)">
                                Verified reports lodged in Jakarta and surrounding regions
                            </p>
                        </div>
                        <a
                            href="liveFeed.html"
                            className="whitespace-nowrap text-[13px] font-semibold text-(--success) flex flex-col">
                            View live feed <span>→</span>
                        </a>
                    </div>
                    <div className="mt-4 grid gap-5 md:grid-cols-2">
                        <article className="flex gap-3.5 rounded-[18px] border border-(--bd-secondary) bg-(--bg-secondary) p-3.5">
                            <img
                                src="../../public/images/CMP-2026-8841.png"
                                alt
                                className="h-22.5 w-22.5 shrink-0 rounded-xl border border-(--bd-secondary) object-cover"
                            />
                            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 font-(family-name:--font-ps) text-[10px] bg-(--bg-review) text-(--txt-review) [border:var(--bd-review)] font-semibold">
                                        <svg
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9 5.5C9 7.433 7.433 9 5.5 9C3.567 9 2 7.433 2 5.5C2 3.567 3.567 2 5.5 2C7.433 2 9 3.567 9 5.5Z"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                stroke="#96680F"
                                            />
                                            <path
                                                d="M10.5 10.5L8.35 8.34998"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                stroke="#96680F"
                                            />
                                        </svg>
                                        In review
                                    </span>
                                    <span className="font-(family-name:--font-pm) text-[10px] text-(--disabled2)">
                                        CMP-2026-8841
                                    </span>
                                </div>
                                <h3 className="text-[15px] font-semibold leading-snug">
                                    PAM clean drinking water pipeline burst flooding sidewalk in front of Cipete Raya
                                    MRT
                                </h3>
                                <p className="flex gap-1.5 text-xs leading-snug text-(--disabled2)">
                                    <svg
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2_64)">
                                            <g clipPath="url(#clip1_2_64)">
                                                <path
                                                    d="M10.5 5C10.5 8.5 6 11.5 6 11.5C6 11.5 1.5 8.5 1.5 5C1.5 3.80653 1.97411 2.66193 2.81802 1.81802C3.66193 0.974106 4.80653 0.5 6 0.5C7.19347 0.5 8.33807 0.974106 9.18198 1.81802C10.0259 2.66193 10.5 3.80653 10.5 5Z"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    stroke="#0F6B4F"
                                                />
                                                <path
                                                    d="M7.5 5C7.5 5.82843 6.82843 6.5 6 6.5C5.17157 6.5 4.5 5.82843 4.5 5C4.5 4.17157 5.17157 3.5 6 3.5C6.82843 3.5 7.5 4.17157 7.5 5Z"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    stroke="#0F6B4F"
                                                />
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2_64">
                                                <rect width={12} height={12} fill="white" />
                                            </clipPath>
                                            <clipPath id="clip1_2_64">
                                                <rect width={12} height={12} fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)
                                </p>
                                <div className="mt-auto flex items-center justify-between pt-1.5">
                                    <button
                                        type="button"
                                        className="inline-flex items-center gap-1.5 rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3 py-1 font-(family-name:--font-pm) text-[11px]">
                                        <svg
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2_71)">
                                                <g clipPath="url(#clip1_2_71)">
                                                    <path
                                                        d="M3.5 5V11"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                    <path
                                                        d="M7.5 2.94L7 5H9.915C10.0702 5 10.2234 5.03614 10.3622 5.10557C10.5011 5.175 10.6219 5.2758 10.715 5.4C10.8081 5.5242 10.8711 5.66837 10.8989 5.82111C10.9266 5.97386 10.9185 6.13096 10.875 6.28L9.71 10.28C9.64942 10.4877 9.5231 10.6702 9.35 10.8C9.1769 10.9298 8.96637 11 8.75 11H2C1.73478 11 1.48043 10.8946 1.29289 10.7071C1.10536 10.5196 1 10.2652 1 10V6C1 5.73478 1.10536 5.48043 1.29289 5.29289C1.48043 5.10536 1.73478 5 2 5H3.38C3.56604 4.9999 3.74837 4.94791 3.90648 4.84986C4.06459 4.75181 4.19221 4.61161 4.275 4.445L6 1C6.23579 1.00292 6.46787 1.05908 6.6789 1.1643C6.88994 1.26951 7.07446 1.42105 7.2187 1.6076C7.36294 1.79415 7.46316 2.01088 7.51187 2.2416C7.56058 2.47232 7.55652 2.71107 7.5 2.94Z"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2_71">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                                <clipPath id="clip1_2_71">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        148
                                    </button>
                                    <a
                                        href="#"
                                        className="whitespace-nowrap text-[13px] font-semibold text-(--success) flex flex-col">
                                        Inspect <span>→</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                        <article className="flex gap-3.5 rounded-[18px] border border-(--bd-secondary) bg-(--bg-secondary) p-3.5">
                            <img
                                src="../../public/images/CMP-2026-8819.png"
                                alt
                                className="h-22.5 w-22.5 shrink-0 rounded-xl border border-(--bd-secondary) object-cover"
                            />
                            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 font-(family-name:--font-ps) text-[10px] bg-(--bg-assigned) text-(--txt-assigned) [border:var(--bd-assigned)] font-semibold">
                                        <svg
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8 10.5V9.5C8 8.96957 7.78929 8.46086 7.41421 8.08579C7.03914 7.71071 6.53043 7.5 6 7.5H3C2.46957 7.5 1.96086 7.71071 1.58579 8.08579C1.21071 8.46086 1 8.96957 1 9.5V10.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                stroke="#2F607E"
                                            />
                                            <path
                                                d="M6.5 3.5C6.5 4.60457 5.60457 5.5 4.5 5.5C3.39543 5.5 2.5 4.60457 2.5 3.5C2.5 2.39543 3.39543 1.5 4.5 1.5C5.60457 1.5 6.5 2.39543 6.5 3.5Z"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                stroke="#2F607E"
                                            />
                                            <path
                                                d="M8 5.5L9 6.5L11 4.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                stroke="#2F607E"
                                            />
                                        </svg>
                                        Assigned
                                    </span>
                                    <span className="font-(family-name:--font-pm) text-[10px] text-(--disabled2)">
                                        CMP-2026-8819
                                    </span>
                                </div>
                                <h3 className="text-[15px] font-semibold leading-snug">
                                    Severe 15cm asphalt cavity in TransJakarta corridor causing motorbike rim damage
                                </h3>
                                <p className="flex gap-1.5 text-xs leading-snug text-(--disabled2)">
                                    <svg
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2_64)">
                                            <g clipPath="url(#clip1_2_64)">
                                                <path
                                                    d="M10.5 5C10.5 8.5 6 11.5 6 11.5C6 11.5 1.5 8.5 1.5 5C1.5 3.80653 1.97411 2.66193 2.81802 1.81802C3.66193 0.974106 4.80653 0.5 6 0.5C7.19347 0.5 8.33807 0.974106 9.18198 1.81802C10.0259 2.66193 10.5 3.80653 10.5 5Z"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    stroke="#0F6B4F"
                                                />
                                                <path
                                                    d="M7.5 5C7.5 5.82843 6.82843 6.5 6 6.5C5.17157 6.5 4.5 5.82843 4.5 5C4.5 4.17157 5.17157 3.5 6 3.5C6.82843 3.5 7.5 4.17157 7.5 5Z"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    stroke="#0F6B4F"
                                                />
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2_64">
                                                <rect width={12} height={12} fill="white" />
                                            </clipPath>
                                            <clipPath id="clip1_2_64">
                                                <rect width={12} height={12} fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Jl. Gatot Subroto Kav. 38 (depan Menara Mulia, Jalur TransJakarta)
                                </p>
                                <div className="mt-auto flex items-center justify-between pt-1.5">
                                    <button
                                        type="button"
                                        className="inline-flex items-center gap-1.5 rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3 py-1 font-(family-name:--font-pm) text-[11px]">
                                        <svg
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2_71)">
                                                <g clipPath="url(#clip1_2_71)">
                                                    <path
                                                        d="M3.5 5V11"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                    <path
                                                        d="M7.5 2.94L7 5H9.915C10.0702 5 10.2234 5.03614 10.3622 5.10557C10.5011 5.175 10.6219 5.2758 10.715 5.4C10.8081 5.5242 10.8711 5.66837 10.8989 5.82111C10.9266 5.97386 10.9185 6.13096 10.875 6.28L9.71 10.28C9.64942 10.4877 9.5231 10.6702 9.35 10.8C9.1769 10.9298 8.96637 11 8.75 11H2C1.73478 11 1.48043 10.8946 1.29289 10.7071C1.10536 10.5196 1 10.2652 1 10V6C1 5.73478 1.10536 5.48043 1.29289 5.29289C1.48043 5.10536 1.73478 5 2 5H3.38C3.56604 4.9999 3.74837 4.94791 3.90648 4.84986C4.06459 4.75181 4.19221 4.61161 4.275 4.445L6 1C6.23579 1.00292 6.46787 1.05908 6.6789 1.1643C6.88994 1.26951 7.07446 1.42105 7.2187 1.6076C7.36294 1.79415 7.46316 2.01088 7.51187 2.2416C7.56058 2.47232 7.55652 2.71107 7.5 2.94Z"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2_71">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                                <clipPath id="clip1_2_71">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        92
                                    </button>
                                    <a
                                        href="#"
                                        className="whitespace-nowrap text-[13px] font-semibold text-(--success) flex flex-col">
                                        Inspect <span>→</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                        <article className="flex gap-3.5 rounded-[18px] border border-(--bd-secondary) bg-(--bg-secondary) p-3.5">
                            <img
                                src="../../public/images/CMP-2026-8794.png"
                                alt
                                className="h-22.5 w-22.5 shrink-0 rounded-xl border border-(--bd-secondary) object-cover"
                            />
                            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 font-(family-name:--font-ps) text-[10px] bg-(--bg-resolved) text-(--txt-resolved) [border:var(--bd-resolved)] font-semibold">
                                        <svg
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2_107)">
                                                <path
                                                    d="M11 5.54005V6.00005C10.9994 7.07827 10.6503 8.12739 10.0047 8.99097C9.35908 9.85454 8.45164 10.4863 7.41768 10.792C6.38372 11.0977 5.27863 11.061 4.26724 10.6873C3.25584 10.3137 2.39233 9.6231 1.80548 8.71859C1.21863 7.81407 0.939896 6.74409 1.01084 5.66821C1.08178 4.59234 1.4986 3.56822 2.19914 2.74859C2.89968 1.92896 3.84639 1.35775 4.89809 1.12013C5.9498 0.882509 7.05013 0.991223 8.035 1.43005"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    stroke="#217A51"
                                                />
                                                <path
                                                    d="M4.5 5.5L6 7L11 2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    stroke="#217A51"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2_107">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        Resolved
                                    </span>
                                    <span className="font-(family-name:--font-pm) text-[10px] text-(--disabled2)">
                                        CMP-2026-8794
                                    </span>
                                </div>
                                <h3 className="text-[15px] font-semibold leading-snug">
                                    Complete PJU streetlight outage spanning 300 meters along residential corridor
                                </h3>
                                <p className="flex gap-1.5 text-xs leading-snug text-(--disabled2)">
                                    <svg
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2_64)">
                                            <g clipPath="url(#clip1_2_64)">
                                                <path
                                                    d="M10.5 5C10.5 8.5 6 11.5 6 11.5C6 11.5 1.5 8.5 1.5 5C1.5 3.80653 1.97411 2.66193 2.81802 1.81802C3.66193 0.974106 4.80653 0.5 6 0.5C7.19347 0.5 8.33807 0.974106 9.18198 1.81802C10.0259 2.66193 10.5 3.80653 10.5 5Z"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    stroke="#0F6B4F"
                                                />
                                                <path
                                                    d="M7.5 5C7.5 5.82843 6.82843 6.5 6 6.5C5.17157 6.5 4.5 5.82843 4.5 5C4.5 4.17157 5.17157 3.5 6 3.5C6.82843 3.5 7.5 4.17157 7.5 5Z"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    stroke="#0F6B4F"
                                                />
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2_64">
                                                <rect width={12} height={12} fill="white" />
                                            </clipPath>
                                            <clipPath id="clip1_2_64">
                                                <rect width={12} height={12} fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Jl. Tebet Barat Dalam Raya No. 24, RT 08 / RW 03
                                </p>
                                <div className="mt-auto flex items-center justify-between pt-1.5">
                                    <button
                                        type="button"
                                        className="inline-flex items-center gap-1.5 rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3 py-1 font-(family-name:--font-pm) text-[11px] opacity-60">
                                        <svg
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2_71)">
                                                <g clipPath="url(#clip1_2_71)">
                                                    <path
                                                        d="M3.5 5V11"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                    <path
                                                        d="M7.5 2.94L7 5H9.915C10.0702 5 10.2234 5.03614 10.3622 5.10557C10.5011 5.175 10.6219 5.2758 10.715 5.4C10.8081 5.5242 10.8711 5.66837 10.8989 5.82111C10.9266 5.97386 10.9185 6.13096 10.875 6.28L9.71 10.28C9.64942 10.4877 9.5231 10.6702 9.35 10.8C9.1769 10.9298 8.96637 11 8.75 11H2C1.73478 11 1.48043 10.8946 1.29289 10.7071C1.10536 10.5196 1 10.2652 1 10V6C1 5.73478 1.10536 5.48043 1.29289 5.29289C1.48043 5.10536 1.73478 5 2 5H3.38C3.56604 4.9999 3.74837 4.94791 3.90648 4.84986C4.06459 4.75181 4.19221 4.61161 4.275 4.445L6 1C6.23579 1.00292 6.46787 1.05908 6.6789 1.1643C6.88994 1.26951 7.07446 1.42105 7.2187 1.6076C7.36294 1.79415 7.46316 2.01088 7.51187 2.2416C7.56058 2.47232 7.55652 2.71107 7.5 2.94Z"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2_71">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                                <clipPath id="clip1_2_71">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        64
                                    </button>
                                    <a
                                        href="#"
                                        className="whitespace-nowrap text-[13px] font-semibold text-(--success) flex flex-col">
                                        Inspect <span>→</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                        <article className="flex gap-3.5 rounded-[18px] border border-(--bd-secondary) bg-(--bg-secondary) p-3.5">
                            <img
                                src="../../public/images/CMP-2026-8720.png"
                                alt
                                className="h-22.5 w-22.5 shrink-0 rounded-xl border border-(--bd-secondary) object-cover"
                            />
                            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 font-(family-name:--font-ps) text-[10px] bg-(--bg-review) text-(--txt-review) [border:var(--bd-review)] font-semibold">
                                        <svg
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9 5.5C9 7.433 7.433 9 5.5 9C3.567 9 2 7.433 2 5.5C2 3.567 3.567 2 5.5 2C7.433 2 9 3.567 9 5.5Z"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                stroke="#96680F"
                                            />
                                            <path
                                                d="M10.5 10.5L8.35001 8.34998"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                stroke="#96680F"
                                            />
                                        </svg>
                                        In review
                                    </span>
                                    <span className="font-(family-name:--font-pm) text-[10px] text-(--disabled2)">
                                        CMP-2026-8720
                                    </span>
                                </div>
                                <h3 className="text-[15px] font-semibold leading-snug">
                                    Illegal household trash accumulation obstructing drainage at Kali Krukut Kemang
                                </h3>
                                <p className="flex gap-1.5 text-xs leading-snug text-(--disabled2)">
                                    <svg
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2_64)">
                                            <g clipPath="url(#clip1_2_64)">
                                                <path
                                                    d="M10.5 5C10.5 8.5 6 11.5 6 11.5C6 11.5 1.5 8.5 1.5 5C1.5 3.80653 1.97411 2.66193 2.81802 1.81802C3.66193 0.974106 4.80653 0.5 6 0.5C7.19347 0.5 8.33807 0.974106 9.18198 1.81802C10.0259 2.66193 10.5 3.80653 10.5 5Z"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    stroke="#0F6B4F"
                                                />
                                                <path
                                                    d="M7.5 5C7.5 5.82843 6.82843 6.5 6 6.5C5.17157 6.5 4.5 5.82843 4.5 5C4.5 4.17157 5.17157 3.5 6 3.5C6.82843 3.5 7.5 4.17157 7.5 5Z"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    stroke="#0F6B4F"
                                                />
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2_64">
                                                <rect width={12} height={12} fill="white" />
                                            </clipPath>
                                            <clipPath id="clip1_2_64">
                                                <rect width={12} height={12} fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Kampung Kemang, RT 02 / RW 01 (bantaran Kali Krukut)
                                </p>
                                <div className="mt-auto flex items-center justify-between pt-1.5">
                                    <button
                                        type="button"
                                        className="inline-flex items-center gap-1.5 rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3 py-1 font-(family-name:--font-pm) text-[11px]">
                                        <svg
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2_71)">
                                                <g clipPath="url(#clip1_2_71)">
                                                    <path
                                                        d="M3.5 5V11"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                    <path
                                                        d="M7.5 2.94L7 5H9.915C10.0702 5 10.2234 5.03614 10.3622 5.10557C10.5011 5.175 10.6219 5.2758 10.715 5.4C10.8081 5.5242 10.8711 5.66837 10.8989 5.82111C10.9266 5.97386 10.9185 6.13096 10.875 6.28L9.71 10.28C9.64942 10.4877 9.5231 10.6702 9.35 10.8C9.1769 10.9298 8.96637 11 8.75 11H2C1.73478 11 1.48043 10.8946 1.29289 10.7071C1.10536 10.5196 1 10.2652 1 10V6C1 5.73478 1.10536 5.48043 1.29289 5.29289C1.48043 5.10536 1.73478 5 2 5H3.38C3.56604 4.9999 3.74837 4.94791 3.90648 4.84986C4.06459 4.75181 4.19221 4.61161 4.275 4.445L6 1C6.23579 1.00292 6.46787 1.05908 6.6789 1.1643C6.88994 1.26951 7.07446 1.42105 7.2187 1.6076C7.36294 1.79415 7.46316 2.01088 7.51187 2.2416C7.56058 2.47232 7.55652 2.71107 7.5 2.94Z"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2_71">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                                <clipPath id="clip1_2_71">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        78
                                    </button>
                                    <a
                                        href="#"
                                        className="whitespace-nowrap text-[13px] font-semibold text-(--success) flex flex-col">
                                        Inspect <span>→</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </main>
        </>
    );
}
