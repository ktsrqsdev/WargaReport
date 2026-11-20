export default function ReportProofPage() {
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
                            className="flex items-center gap-2.5 rounded-full px-3.5 py-2.5 text-[13px] font-medium text-(--disabled)">
                            <span className="font-(family-name:--font-pm) text-[11px]">02</span>Location
                            <span className="ml-auto text-(--success)">✓</span>
                        </a>
                        <a
                            href="report-proof.html"
                            className="flex items-center gap-2.5 rounded-full px-3.5 py-2.5 text-[13px] font-medium bg-(--success) text-(--light)">
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
                    <a
                        href="liveFeed.html"
                        className="whitespace-nowrap text-[13px] font-semibold text-(--success)">
                        Cancel and return to feed
                    </a>
                </aside>
                <section className="rounded-[22px] border border-(--bd-secondary) bg-(--bg-secondary) p-6 sm:p-8">
                    <div className="mb-4.5">
                        <p className="mb-2 font-(family-name:--font-pm) text-[11px] uppercase tracking-widest text-(--disabled)">
                            Step 03 of 04
                        </p>
                        <h2 className="font-(family-name:--font-f) text-[28px] font-semibold leading-[1.15]">
                            Attach evidence
                        </h2>
                        <p className="text-xs leading-relaxed text-(--disabled)">
                            Reports with photographic proof or audio notes are prioritized by field dispatchers.
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 rounded-2xl border-[1.5px] border-(--bd-primary) bg-(--bg-secondary) px-5 py-7 text-center">
                        <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_214_920)">
                                <path
                                    d="M4.66662 17.3834C3.79616 16.4991 3.13866 15.428 2.74405 14.2516C2.34943 13.0752 2.22809 11.8243 2.38922 10.594C2.55035 9.36362 2.98973 8.18618 3.67398 7.15104C4.35823 6.11591 5.26937 5.25031 6.33819 4.61997C7.40702 3.98964 8.60542 3.61115 9.8424 3.51325C11.0794 3.41535 12.3224 3.60061 13.4771 4.05497C14.6318 4.50932 15.6677 5.22082 16.5063 6.13544C17.3448 7.05005 17.964 8.14372 18.3166 9.3334H20.4166C21.5295 9.3484 22.6088 9.71667 23.4987 10.385C24.3886 11.0534 25.0431 11.9873 25.3676 13.0519C25.6922 14.1165 25.6701 15.2566 25.3044 16.3078C24.9387 17.359 24.2485 18.2668 23.3333 18.9001"
                                    strokeWidth="2.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="#0F6B4F"
                                />
                                <path
                                    d="M14 14V24.5"
                                    strokeWidth="2.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="#0F6B4F"
                                />
                                <path
                                    d="M9.33325 19.8334L13.9999 15.1667L18.6666 19.8334"
                                    strokeWidth="2.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="#0F6B4F"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_214_920">
                                    <rect width={28} height={28} fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="text-sm font-semibold">Upload evidence files or use camera simulation</p>
                        <p className="text-xs leading-relaxed text-(--disabled)">
                            Images, audio voice notes, inspection video clips (JPG, MP4, M4A)
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                            <button
                                type="button"
                                className="cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3.5 py-2 text-xs font-medium text-(--dark) hover:border-(--green)">
                                <svg
                                    width={12}
                                    height={12}
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_214_928)">
                                        <g clipPath="url(#clip1_214_928)">
                                            <path
                                                d="M7.25 2H4.75L3.5 3.5H2C1.73478 3.5 1.48043 3.60536 1.29289 3.79289C1.10536 3.98043 1 4.23478 1 4.5V9C1 9.26522 1.10536 9.51957 1.29289 9.70711C1.48043 9.89464 1.73478 10 2 10H10C10.2652 10 10.5196 9.89464 10.7071 9.70711C10.8946 9.51957 11 9.26522 11 9V4.5C11 4.23478 10.8946 3.98043 10.7071 3.79289C10.5196 3.60536 10.2652 3.5 10 3.5H8.5L7.25 2Z"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                stroke="#13231B"
                                            />
                                            <path
                                                d="M8 6.5C8 7.60457 7.10457 8.5 6 8.5C4.89543 8.5 4 7.60457 4 6.5C4 5.39543 4.89543 4.5 6 4.5C7.10457 4.5 8 5.39543 8 6.5Z"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                stroke="#13231B"
                                            />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_214_928">
                                            <rect width={12} height={12} fill="white" />
                                        </clipPath>
                                        <clipPath id="clip1_214_928">
                                            <rect width={12} height={12} fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Capture Photo
                            </button>
                            <button
                                type="button"
                                className="cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3.5 py-2 text-xs font-medium text-(--dark) hover:border-(--green)">
                                <svg
                                    width={12}
                                    height={12}
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_214_934)">
                                        <g clipPath="url(#clip1_214_934)">
                                            <path
                                                d="M6 1C5.60218 1 5.22064 1.15804 4.93934 1.43934C4.65804 1.72064 4.5 2.10218 4.5 2.5V6C4.5 6.39782 4.65804 6.77936 4.93934 7.06066C5.22064 7.34196 5.60218 7.5 6 7.5C6.39782 7.5 6.77936 7.34196 7.06066 7.06066C7.34196 6.77936 7.5 6.39782 7.5 6V2.5C7.5 2.10218 7.34196 1.72064 7.06066 1.43934C6.77936 1.15804 6.39782 1 6 1Z"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                stroke="#13231B"
                                            />
                                            <path
                                                d="M9.5 5V6C9.5 6.92826 9.13125 7.8185 8.47487 8.47487C7.8185 9.13125 6.92826 9.5 6 9.5C5.07174 9.5 4.1815 9.13125 3.52513 8.47487C2.86875 7.8185 2.5 6.92826 2.5 6V5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                stroke="#13231B"
                                            />
                                            <path
                                                d="M6 9.5V11"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                stroke="#13231B"
                                            />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_214_934">
                                            <rect width={12} height={12} fill="white" />
                                        </clipPath>
                                        <clipPath id="clip1_214_934">
                                            <rect width={12} height={12} fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Record Audio Memo
                            </button>
                            <button
                                type="button"
                                className="cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3.5 py-2 text-xs font-medium text-(--dark) hover:border-(--green)">
                                <svg
                                    width={12}
                                    height={12}
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_214_941)">
                                        <g clipPath="url(#clip1_214_941)">
                                            <path
                                                d="M11 4L8 6L11 8V4Z"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                stroke="#13231B"
                                            />
                                            <path
                                                d="M2 3H7C7.55228 3 8 3.44772 8 4V8C8 8.55228 7.55228 9 7 9H2C1.44772 9 1 8.55228 1 8V4C1 3.44772 1.44772 3 2 3Z"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                stroke="#13231B"
                                            />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_214_941">
                                            <rect width={12} height={12} fill="white" />
                                        </clipPath>
                                        <clipPath id="clip1_214_941">
                                            <rect width={12} height={12} fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Attach Video Clip
                            </button>
                        </div>
                    </div>
                    <div className="mb-2.5 mt-4.5 flex items-center justify-between">
                        <p className="font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--dark)">
                            Attached evidence (2)
                        </p>
                        <span className="whitespace-nowrap text-[13px] font-semibold text-(--success)">
                            Click any card to inspect
                        </span>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                        <article className="overflow-hidden rounded-[14px] border border-(--bd-secondary) bg-(--bg-secondary)">
                            <img
                                src="assets/img/img5.png"
                                alt="Fallen tree branch on a walking path"
                                className="aspect-video w-full object-cover"
                            />
                            <div className="flex items-start justify-between gap-2 px-3.5 py-3">
                                <div>
                                    <p className="font-(family-name:--font-pm) text-[11px]">
                                        incident_capture_camera.jpg
                                    </p>
                                    <p className="mb-1 mt-0.5 font-(family-name:--font-pm) text-[10px] uppercase text-(--disabled)">
                                        Image · 2.4 MB
                                    </p>
                                    <p className="text-xs leading-relaxed text-(--disabled)">
                                        Photographed live on site by resident camera.
                                    </p>
                                </div>
                                <button type="button" className="shrink-0" />
                            </div>
                        </article>
                        <article className="overflow-hidden rounded-[14px] border border-(--bd-secondary) bg-(--bg-secondary)">
                            <div className="relative grid aspect-video place-items-center bg-(--dark)">
                                <svg className="h-9 w-9" viewBox="0 0 36 36">
                                    <circle cx={18} cy={18} r={18} className="fill-(--light)" />
                                    <path d="M15 12l9 6-9 6z" className="fill-(--dark)" />
                                </svg>
                                <span className="absolute bottom-2 right-2 rounded-md bg-(--dark-70) px-1.5 py-0.5 font-(family-name:--font-pm) text-[10px] text-(--light)">
                                    0:12
                                </span>
                            </div>
                            <div className="flex items-start justify-between gap-2 px-3.5 py-3">
                                <div>
                                    <p className="font-(family-name:--font-pm) text-[11px]">quick_site_clip.mp4</p>
                                    <p className="mb-1 mt-0.5 font-(family-name:--font-pm) text-[10px] uppercase text-(--disabled)">
                                        Video · 4.8 MB
                                    </p>
                                    <p className="text-xs leading-relaxed text-(--disabled)">
                                        12 second horizontal pan of incident.
                                    </p>
                                </div>
                                <button type="button" className="shrink-0" />
                            </div>
                        </article>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                        <a
                            href="report-location.html"
                            className="cursor-pointer inline-flex items-center justify-center gap-1.75 rounded-full border font-semibold px-5 py-2.5 text-xs border-(--bd-primary) bg-(--bg-secondary) text-(--dark)">
                            <svg
                                width={12}
                                height={12}
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_214_1058)">
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
                                    <clipPath id="clip0_214_1058">
                                        <rect width={12} height={12} fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Back
                        </a>
                        <a
                            href="report-review.html"
                            className="cursor-pointer inline-flex items-center justify-center gap-1.75 rounded-full border font-semibold px-5 py-2.5 text-xs border-(--success) bg-(--success) text-(--light)">
                            Continue
                            <svg
                                width={13}
                                height={13}
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_214_1065)">
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
                                    <clipPath id="clip0_214_1065">
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
