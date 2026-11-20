export default function ReportTopicPage() {
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
                            className="flex items-center gap-2.5 rounded-full px-3.5 py-2.5 text-[13px] font-medium bg-(--success) text-(--light)">
                            <span className="font-(family-name:--font-pm) text-[11px]">01</span>Topic
                        </a>
                        <a
                            href="report-location.html"
                            className="flex items-center gap-2.5 rounded-full px-3.5 py-2.5 text-[13px] font-medium text-(--disabled)">
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
                            Step 01 of 04
                        </p>
                        <h2 className="font-(family-name:--font-f) text-[28px] font-semibold leading-[1.15]">
                            What needs fixing?
                        </h2>
                        <p className="text-xs leading-relaxed text-(--disabled)">
                            Select the municipal service category that best matches the issue observed.
                        </p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                        <div className="flex flex-col gap-1.5 rounded-[14px] border px-4 py-3.5 border-(--bd-secondary) bg-(--bg-secondary)">
                            <div className="flex items-center gap-2 text-sm font-semibold">
                                <svg
                                    width={15}
                                    height={15}
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_214_529)">
                                        <path
                                            d="M6.43125 2.41251L1.1375 11.25C1.02835 11.439 0.970602 11.6533 0.969991 11.8716C0.96938 12.0898 1.02593 12.3045 1.13401 12.4941C1.2421 12.6837 1.39795 12.8417 1.58607 12.9524C1.77418 13.0631 1.988 13.1226 2.20625 13.125H12.7937C13.012 13.1226 13.2258 13.0631 13.4139 12.9524C13.602 12.8417 13.7579 12.6837 13.866 12.4941C13.9741 12.3045 14.0306 12.0898 14.03 11.8716C14.0294 11.6533 13.9716 11.439 13.8625 11.25L8.56875 2.41251C8.45733 2.22882 8.30045 2.07696 8.11325 1.97156C7.92604 1.86616 7.71483 1.81079 7.5 1.81079C7.28516 1.81079 7.07395 1.86616 6.88675 1.97156C6.69955 2.07696 6.54267 2.22882 6.43125 2.41251Z"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#0F6B4F"
                                        />
                                        <path
                                            d="M7.5 5.625V8.125"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#0F6B4F"
                                        />
                                        <path
                                            d="M7.5 10.625H7.50625"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#0F6B4F"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_214_529">
                                            <rect width={15} height={15} fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Roads &amp; Transit
                                <span className="ml-auto rounded-full bg-(--light-green) px-2 py-0.5 font-(family-name:--font-pm) text-[10px] font-normal text-(--success)">
                                    48h SLA
                                </span>
                            </div>
                            <p className="text-[13px] font-medium">Pothole / Sidewalk (Trotoar)</p>
                            <p className="text-xs leading-relaxed text-(--disabled)">
                                Potholes, broken sidewalk slabs, damaged drainage grates
                            </p>
                        </div>
                        <div className="flex flex-col gap-1.5 rounded-[14px] border px-4 py-3.5 border-(--bd-secondary) bg-(--bg-secondary)">
                            <div className="flex items-center gap-2 text-sm font-semibold">
                                <svg
                                    width={15}
                                    height={15}
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_214_539)">
                                        <path
                                            d="M7.5 1.6875L3.5625 5.625C2.98484 6.36312 2.62627 7.24874 2.52772 8.18084C2.42917 9.11293 2.59459 10.054 3.00512 10.8966C3.41566 11.7392 4.05476 12.4494 4.84953 12.9463C5.64429 13.4431 6.56271 13.7066 7.5 13.7066C8.43729 13.7066 9.35571 13.4431 10.1505 12.9463C10.9452 12.4494 11.5843 11.7392 11.9949 10.8966C12.4054 10.054 12.5708 9.11293 12.4723 8.18084C12.3737 7.24874 12.0152 6.36312 11.4375 5.625L7.5 1.6875Z"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#0F6B4F"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_214_539">
                                            <rect width={15} height={15} fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Water &amp; Sewage
                                <span className="ml-auto rounded-full bg-(--light-green) px-2 py-0.5 font-(family-name:--font-pm) text-[10px] font-normal text-(--success)">
                                    24h SLA
                                </span>
                            </div>
                            <p className="text-[13px] font-medium">Water Burst / Pipa Bocor</p>
                            <p className="text-xs leading-relaxed text-(--disabled)">
                                Pipeline bursts, flooding tap leaks, dry taps
                            </p>
                        </div>
                        <div className="flex flex-col gap-1.5 rounded-[14px] border px-4 py-3.5 border-(--bd-secondary) bg-(--bg-secondary)">
                            <div className="flex items-center gap-2 text-sm font-semibold">
                                <svg
                                    width={15}
                                    height={15}
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_214_547)">
                                        <path
                                            d="M10 7.5C10 8.88071 8.88071 10 7.5 10C6.11929 10 5 8.88071 5 7.5C5 6.11929 6.11929 5 7.5 5C8.88071 5 10 6.11929 10 7.5Z"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#0F6B4F"
                                        />
                                        <path
                                            d="M7.5 1.25V2.5"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#0F6B4F"
                                        />
                                        <path
                                            d="M7.5 12.5V13.75"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#0F6B4F"
                                        />
                                        <path
                                            d="M3.0625 3.0625L3.9375 3.9375"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#0F6B4F"
                                        />
                                        <path
                                            d="M11.0625 11.0625L11.9375 11.9375"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#0F6B4F"
                                        />
                                        <path
                                            d="M1.25 7.5H2.5"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#0F6B4F"
                                        />
                                        <path
                                            d="M12.5 7.5H13.75"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#0F6B4F"
                                        />
                                        <path
                                            d="M3.9375 11.0625L3.0625 11.9375"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#0F6B4F"
                                        />
                                        <path
                                            d="M11.9375 3.0625L11.0625 3.9375"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#0F6B4F"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_214_547">
                                            <rect width={15} height={15} fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Street Lighting
                                <span className="ml-auto rounded-full bg-(--light-green) px-2 py-0.5 font-(family-name:--font-pm) text-[10px] font-normal text-(--success)">
                                    72h SLA
                                </span>
                            </div>
                            <p className="text-[13px] font-medium">Dark Street / PJU Padam</p>
                            <p className="text-xs leading-relaxed text-(--disabled)">
                                Dark street lamps (PJU), damaged base poles, broken traffic signals
                            </p>
                        </div>
                        <div className="flex flex-col gap-1.5 rounded-[14px] border px-4 py-3.5 border-(--bd-secondary) bg-(--bg-secondary)">
                            <div className="flex items-center gap-2 text-sm font-semibold">
                                <svg
                                    width={15}
                                    height={15}
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_214_563)">
                                        <path
                                            d="M1.875 3.75H13.125"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#0F6B4F"
                                        />
                                        <path
                                            d="M11.875 3.75L11.25 12.5C11.25 12.8315 11.1183 13.1495 10.8839 13.3839C10.6495 13.6183 10.3315 13.75 10 13.75H5C4.66848 13.75 4.35054 13.6183 4.11612 13.3839C3.8817 13.1495 3.75 12.8315 3.75 12.5L3.125 3.75"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#0F6B4F"
                                        />
                                        <path
                                            d="M6.25 6.875V10.625"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#0F6B4F"
                                        />
                                        <path
                                            d="M8.75 6.875V10.625"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#0F6B4F"
                                        />
                                        <path
                                            d="M5.625 3.75V2.5C5.625 2.33424 5.69085 2.17527 5.80806 2.05806C5.92527 1.94085 6.08424 1.875 6.25 1.875H8.75C8.91576 1.875 9.07473 1.94085 9.19194 2.05806C9.30915 2.17527 9.375 2.33424 9.375 2.5V3.75"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#0F6B4F"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_214_563">
                                            <rect width={15} height={15} fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Sanitation &amp; Waste
                                <span className="ml-auto rounded-full bg-(--light-green) px-2 py-0.5 font-(family-name:--font-pm) text-[10px] font-normal text-(--success)">
                                    36h SLA
                                </span>
                            </div>
                            <p className="text-[13px] font-medium">Trash Pile / Sampah Liar</p>
                            <p className="text-xs leading-relaxed text-(--disabled)">
                                Illegal dump spots in alleys, overflowing TPS bins, river refuse
                            </p>
                        </div>
                        <div className="flex flex-col gap-1.5 rounded-[14px] border px-4 py-3.5 border-(--green) bg-(--light-green)">
                            <div className="flex items-center gap-2 text-sm font-semibold">
                                <svg
                                    width={15}
                                    height={15}
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.5 1.25L4.6875 5.3125H10.3125L7.5 1.25Z"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#0F6B4F"
                                    />
                                    <path
                                        d="M7.5 4.375L3.75 9.375H11.25L7.5 4.375Z"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#0F6B4F"
                                    />
                                    <path
                                        d="M7.5 9.375V13.75"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#0F6B4F"
                                    />
                                </svg>
                                Public Parks &amp; Trees
                                <span className="ml-auto rounded-full bg-(--light-green) px-2 py-0.5 font-(family-name:--font-pm) text-[10px] font-normal text-(--success)">
                                    48h SLA
                                </span>
                            </div>
                            <p className="text-[13px] font-medium">Hazardous Tree / Rawan Tumbang</p>
                            <p className="text-xs leading-relaxed text-(--disabled)">
                                Falling branches (pohon rawan tumbang), RPTRA playground hazards
                            </p>
                        </div>
                        <div className="flex flex-col gap-1.5 rounded-[14px] border px-4 py-3.5 border-(--bd-secondary) bg-(--bg-secondary)">
                            <div className="flex items-center gap-2 text-sm font-semibold">
                                <svg
                                    width={15}
                                    height={15}
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.875 3.125L3.75 5.625H1.25V9.375H3.75L6.875 11.875V3.125Z"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#0F6B4F"
                                    />
                                    <path
                                        d="M9.6875 5.3125C10.0137 5.57614 10.2769 5.90941 10.4576 6.28791C10.6384 6.66641 10.7322 7.08055 10.7322 7.5C10.7322 7.91945 10.6384 8.33359 10.4576 8.71209C10.2769 9.09059 10.0137 9.42386 9.6875 9.6875"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#0F6B4F"
                                    />
                                    <path
                                        d="M11.5625 3.4375C12.1543 3.93618 12.63 4.55813 12.9563 5.25985C13.2827 5.96157 13.4517 6.72611 13.4517 7.5C13.4517 8.27389 13.2827 9.03843 12.9563 9.74015C12.63 10.4419 12.1543 11.0638 11.5625 11.5625"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#0F6B4F"
                                    />
                                </svg>
                                Noise &amp; Disturbance
                                <span className="ml-auto rounded-full bg-(--light-green) px-2 py-0.5 font-(family-name:--font-pm) text-[10px] font-normal text-(--success)">
                                    48h SLA
                                </span>
                            </div>
                            <p className="text-[13px] font-medium">Late-night Noise / Ketertiban</p>
                            <p className="text-xs leading-relaxed text-(--disabled)">
                                Nocturnal construction past 22:00 WIB, sidewalk encroachment
                            </p>
                        </div>
                        <div className="flex flex-col gap-1.5 rounded-[14px] border px-4 py-3.5 border-(--bd-secondary) bg-(--bg-secondary)">
                            <div className="flex items-center gap-2 text-sm font-semibold">
                                <svg
                                    width={15}
                                    height={15}
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.875 13.125H13.125"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#0F6B4F"
                                    />
                                    <path
                                        d="M3.125 13.125V3.75L7.5 1.875V13.125"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#0F6B4F"
                                    />
                                    <path
                                        d="M11.875 13.125V6.25L7.5 4.375"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#0F6B4F"
                                    />
                                    <path
                                        d="M5 5H5.625"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#0F6B4F"
                                    />
                                    <path
                                        d="M5 7.5H5.625"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#0F6B4F"
                                    />
                                    <path
                                        d="M5 10H5.625"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#0F6B4F"
                                    />
                                    <path
                                        d="M9.375 6.875H10"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#0F6B4F"
                                    />
                                    <path
                                        d="M9.375 9.375H10"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#0F6B4F"
                                    />
                                </svg>
                                Building &amp; Zoning
                                <span className="ml-auto rounded-full bg-(--light-green) px-2 py-0.5 font-(family-name:--font-pm) text-[10px] font-normal text-(--success)">
                                    72h SLA
                                </span>
                            </div>
                            <p className="text-[13px] font-medium">Unsafe Construction / Bangunan</p>
                            <p className="text-xs leading-relaxed text-(--disabled)">
                                Unsafe scaffolding, structural hazards, building boundary violations
                            </p>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                        <a
                            href="liveFeed.html"
                            className="whitespace-nowrap text-[13px] font-semibold text-(--success)">
                            Cancel
                        </a>
                        <a
                            href="report-location.html"
                            className="cursor-pointer inline-flex items-center justify-center gap-1.75 rounded-full border font-semibold px-5 py-2.5 text-xs border-(--success) bg-(--success) text-(--light)">
                            Continue
                            <svg
                                width={13}
                                height={13}
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_214_614)">
                                    <path
                                        d="M2.70831 6.5H10.2916"
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
                                    <clipPath id="clip0_214_614">
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
