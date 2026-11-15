export default function HelpPage() {
    return (
        <>
            <body className="bg-(--bg-primary) font-(family-name:--font-ps) text-(--dark) antialiased">
                <main className="mx-auto w-full max-w-7xl px-5 md:px-(--gutter) pb-4 pt-12 bg-(--bg-primary)">
                    <p className="mb-2 font-(family-name:--font-pm) text-[11px] uppercase tracking-widest text-(--disabled2)">
                        Citizen Help
                    </p>
                    <h1 className="mb-2 font-(family-name:--font-f) text-[38px] font-semibold leading-[1.1]">
                        How WargaReport Works
                    </h1>
                    <p className="max-w-125 text-[15px] leading-relaxed text-(--disabled)">
                        Everything you need to know about reporting civic issues, public countdown timers, and tracking
                        city fixes.
                    </p>
                    <div className="mt-8 grid items-start gap-8 md:grid-cols-[7fr_5fr]">
                        <section>
                            <h2 className="mb-2 font-(family-name:--font-pm) text-[11px] uppercase tracking-widest text-(--disabled2)">
                                Frequently Asked Questions
                            </h2>
                            <div className="flex flex-col gap-2.5">
                                <details
                                    name="faq"
                                    className="group overflow-hidden rounded-[14px] border border-(--bd-secondary) bg-(--bg-secondary)"
                                    open>
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 group-open:border-b group-open:border-(--bd-secondary) group-open:bg-(--bg-primary) [&::-webkit-details-marker]:hidden">
                                        <span>
                                            <span className="mb-1 block font-(family-name:--font-pm) text-[10px] uppercase tracking-[0.06em] text-(--success) font-semibold">
                                                How it works
                                            </span>
                                            <span className="text-[15px] font-medium">
                                                How does WargaReport get city issues fixed?
                                            </span>
                                        </span>
                                        <svg
                                            className="h-4 w-4 shrink-0 text-(--disabled) transition-transform group-open:rotate-180"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5">
                                            <path d="M5 8l5 5 5-5" />
                                        </svg>
                                    </summary>
                                    <div className="px-5 pb-4.5 pt-4 text-[13px] leading-[1.7] text-(--disabled)">
                                        <ol className="flex list-inside list-decimal flex-col gap-0.5">
                                            <li>
                                                You spot an issue (pothole, water leak, dark street) and snap a photo.
                                            </li>
                                            <li>
                                                WargaReport verifies the evidence and dispatches it directly to the
                                                responsible municipal agency (PAM JAYA, Bina Marga, Dishub, DLH, Satpol
                                                PP, Citata).
                                            </li>
                                            <li>
                                                A public countdown starts. Neighbors can upvote the report to increase
                                                priority.
                                            </li>
                                            <li>
                                                Field crews resolve the physical issue and post verification proof
                                                before closing.
                                            </li>
                                        </ol>
                                    </div>
                                </details>
                                <details
                                    name="faq"
                                    className="group overflow-hidden rounded-[14px] border border-(--bd-secondary) bg-(--bg-secondary)">
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 group-open:border-b group-open:border-(--bd-secondary) group-open:bg-(--bg-primary) [&::-webkit-details-marker]:hidden">
                                        <span>
                                            <span className="mb-1 block font-(family-name:--font-pm) text-[10px] uppercase tracking-[0.06em] text-(--success) font-semibold">
                                                Privacy (UU PDP)
                                            </span>
                                            <span className="text-[15px] font-medium">
                                                Will my name or contact info be visible to the public?
                                            </span>
                                        </span>
                                        <svg
                                            className="h-4 w-4 shrink-0 text-(--disabled) transition-transform group-open:rotate-180"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5">
                                            <path d="M5 8l5 5 5-5" />
                                        </svg>
                                    </summary>
                                    <div className="px-5 pb-4.5 pt-4 text-[13px] leading-[1.7] text-(--disabled)">
                                        <p>
                                            No. Public pages only show the report details, location and status. Your
                                            name, email and phone number stay private and are visible only to the agency
                                            officers handling your case.
                                        </p>
                                    </div>
                                </details>
                                <details
                                    name="faq"
                                    className="group overflow-hidden rounded-[14px] border border-(--bd-secondary) bg-(--bg-secondary)">
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 group-open:border-b group-open:border-(--bd-secondary) group-open:bg-(--bg-primary) [&::-webkit-details-marker]:hidden">
                                        <span>
                                            <span className="mb-1 block font-(family-name:--font-pm) text-[10px] uppercase tracking-[0.06em] text-(--success) font-semibold">
                                                Account Mandatory
                                            </span>
                                            <span className="text-[15px] font-medium">
                                                Do I need an account to lodge a report or interact?
                                            </span>
                                        </span>
                                        <svg
                                            className="h-4 w-4 shrink-0 text-(--disabled) transition-transform group-open:rotate-180"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5">
                                            <path d="M5 8l5 5 5-5" />
                                        </svg>
                                    </summary>
                                    <div className="px-5 pb-4.5 pt-4 text-[13px] leading-[1.7] text-(--disabled)">
                                        <p>
                                            Browsing the Live Feed and tracking a case with its ID does not require an
                                            account. You need to sign in to file a report, upvote or comment.
                                        </p>
                                    </div>
                                </details>
                                <details
                                    name="faq"
                                    className="group overflow-hidden rounded-[14px] border border-(--bd-secondary) bg-(--bg-secondary)">
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 group-open:border-b group-open:border-(--bd-secondary) group-open:bg-(--bg-primary) [&::-webkit-details-marker]:hidden">
                                        <span>
                                            <span className="mb-1 block font-(family-name:--font-pm) text-[10px] uppercase tracking-[0.06em] text-(--success) font-semibold">
                                                Escalation
                                            </span>
                                            <span className="text-[15px] font-medium">
                                                What happens if an agency ignores or delays the report?
                                            </span>
                                        </span>
                                        <svg
                                            className="h-4 w-4 shrink-0 text-(--disabled) transition-transform group-open:rotate-180"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5">
                                            <path d="M5 8l5 5 5-5" />
                                        </svg>
                                    </summary>
                                    <div className="px-5 pb-4.5 pt-4 text-[13px] leading-[1.7] text-(--disabled)">
                                        <p>
                                            Every report runs against a public SLA countdown. If the deadline passes
                                            without a response, the case is flagged as overdue on the public feed and
                                            escalated to the agency's supervising office.
                                        </p>
                                    </div>
                                </details>
                                <details
                                    name="faq"
                                    className="group overflow-hidden rounded-[14px] border border-(--bd-secondary) bg-(--bg-secondary)">
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 group-open:border-b group-open:border-(--bd-secondary) group-open:bg-(--bg-primary) [&::-webkit-details-marker]:hidden">
                                        <span>
                                            <span className="mb-1 block font-(family-name:--font-pm) text-[10px] uppercase tracking-[0.06em] text-(--success) font-semibold">
                                                Notifications
                                            </span>
                                            <span className="text-[15px] font-medium">
                                                Can I get status alerts sent to my WhatsApp or Email?
                                            </span>
                                        </span>
                                        <svg
                                            className="h-4 w-4 shrink-0 text-(--disabled) transition-transform group-open:rotate-180"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5">
                                            <path d="M5 8l5 5 5-5" />
                                        </svg>
                                    </summary>
                                    <div className="px-5 pb-4.5 pt-4 text-[13px] leading-[1.7] text-(--disabled)">
                                        <p>
                                            Yes. Add your email or WhatsApp number when filing a report and you will be
                                            notified each time the status changes.
                                        </p>
                                    </div>
                                </details>
                            </div>
                        </section>
                        <div className="flex flex-col gap-5">
                            <section className="rounded-[18px] border border-(--bd-secondary) bg-(--bg-secondary) p-5.75">
                                <p className="mb-2 font-(family-name:--font-pm) text-[11px] uppercase tracking-widest text-(--disabled2) font-medium">
                                    Status Meanings
                                </p>
                                <h2 className="font-(family-name:--font-f) text-xl font-semibold">
                                    What does each status mean?
                                </h2>
                                <ul className="mt-3.5 flex flex-col gap-2.5">
                                    <li className="flex items-start gap-2">
                                        <span className="inline-flex font-semibold shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 font-(family-name:--font-ps) text-[10px] bg-(--bg-submitted) text-(--txt-submitted) [border:var(--bd-submitted)]">
                                            <svg
                                                width={12}
                                                height={12}
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_2_833)">
                                                    <path
                                                        d="M10.5 6C10.5 8.48528 8.48528 10.5 6 10.5C3.51472 10.5 1.5 8.48528 1.5 6C1.5 3.51472 3.51472 1.5 6 1.5C8.48528 1.5 10.5 3.51472 10.5 6Z"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#4C5B52"
                                                    />
                                                    <path
                                                        d="M6 3.5V6L7.75 7"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#4C5B52"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2_833">
                                                        <rect width={12} height={12} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            Submitted
                                        </span>
                                        <p className="text-xs leading-relaxed text-(--disabled)">
                                            Your report was submitted and received by our intake router.
                                        </p>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="inline-flex font-semibold shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 font-(family-name:--font-ps) text-[10px] bg-(--bg-received) text-(--txt-received) [border:var(--bd-received)]">
                                            <svg
                                                width={12}
                                                height={12}
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_2_840)">
                                                    <g clipPath="url(#clip1_2_840)">
                                                        <path
                                                            d="M11 6H8L7 7.5H5L4 6H1"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            stroke="#0F6B4F"
                                                        />
                                                        <path
                                                            d="M2.725 2.555L1 6V9C1 9.26522 1.10536 9.51957 1.29289 9.70711C1.48043 9.89464 1.73478 10 2 10H10C10.2652 10 10.5196 9.89464 10.7071 9.70711C10.8946 9.51957 11 9.26522 11 9V6L9.275 2.555C9.19221 2.38839 9.06459 2.24819 8.90648 2.15014C8.74837 2.05209 8.56604 2.0001 8.38 2H3.62C3.43396 2.0001 3.25163 2.05209 3.09352 2.15014C2.93541 2.24819 2.80779 2.38839 2.725 2.555Z"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            stroke="#0F6B4F"
                                                        />
                                                    </g>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2_840">
                                                        <rect width={12} height={12} fill="white" />
                                                    </clipPath>
                                                    <clipPath id="clip1_2_840">
                                                        <rect width={12} height={12} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            Received
                                        </span>
                                        <p className="text-xs leading-relaxed text-(--disabled)">
                                            Verified by WargaReport and queued for agency dispatch.
                                        </p>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="inline-flex font-semibold shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 font-(family-name:--font-ps) text-[10px] bg-(--bg-review) text-(--txt-review) [border:var(--bd-review)]">
                                            <svg
                                                width={12}
                                                height={12}
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_2_847)">
                                                    <path
                                                        d="M9 5.5C9 7.433 7.433 9 5.5 9C3.567 9 2 7.433 2 5.5C2 3.567 3.567 2 5.5 2C7.433 2 9 3.567 9 5.5Z"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#96680F"
                                                    />
                                                    <path
                                                        d="M10.5001 10.5L8.3501 8.34998"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#96680F"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2_847">
                                                        <rect width={12} height={12} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            In review
                                        </span>
                                        <p className="text-xs leading-relaxed text-(--disabled)">
                                            Agency coordinators are assessing field safety and equipment.
                                        </p>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="inline-flex font-semibold shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 font-(family-name:--font-ps) text-[10px] bg-(--bg-assigned) text-(--txt-assigned) [border:var(--bd-assigned)]">
                                            <svg
                                                width={12}
                                                height={12}
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_2_855)">
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
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2_855">
                                                        <rect width={12} height={12} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            Assigned
                                        </span>
                                        <p className="text-xs leading-relaxed text-(--disabled)">
                                            A field crew or technician is dispatched to the street.
                                        </p>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="inline-flex font-semibold shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 font-(family-name:--font-ps) text-[10px] bg-(--bg-awaiting) text-(--txt-awaiting) [border:var(--bd-awaiting)]">
                                            <svg
                                                width={12}
                                                height={12}
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_2_862)">
                                                    <path
                                                        d="M10.5 6C10.5 8.48528 8.48528 10.5 6 10.5C3.51472 10.5 1.5 8.48528 1.5 6C1.5 3.51472 3.51472 1.5 6 1.5C8.48528 1.5 10.5 3.51472 10.5 6Z"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#96680F"
                                                    />
                                                    <path
                                                        d="M6 4V6"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#96680F"
                                                    />
                                                    <path
                                                        d="M6 8H6.005"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#96680F"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2_862">
                                                        <rect width={12} height={12} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            Awaiting your info
                                        </span>
                                        <p className="text-xs leading-relaxed text-(--disabled)">
                                            Inspector needs clarification or an updated photo.
                                        </p>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="inline-flex font-semibold shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 font-(family-name:--font-ps) text-[10px] bg-(--bg-resolved) text-(--txt-resolved) [border:var(--bd-resolved)]">
                                            <svg
                                                width={12}
                                                height={12}
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_2_870)">
                                                    <g clipPath="url(#clip1_2_870)">
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
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2_870">
                                                        <rect width={12} height={12} fill="white" />
                                                    </clipPath>
                                                    <clipPath id="clip1_2_870">
                                                        <rect width={12} height={12} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            Resolved
                                        </span>
                                        <p className="text-xs leading-relaxed text-(--disabled)">
                                            Physical fix completed and inspection statement published.
                                        </p>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="inline-flex font-semibold shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 font-(family-name:--font-ps) text-[10px] bg-(--bg-closed) text-(--txt-closed) [border:var(--bd-closed)]">
                                            <svg
                                                width={12}
                                                height={12}
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_2_877)">
                                                    <path
                                                        d="M2 2H10C10.2761 2 10.5 2.22386 10.5 2.5V3.5C10.5 3.77614 10.2761 4 10 4H2C1.72386 4 1.5 3.77614 1.5 3.5V2.5C1.5 2.22386 1.72386 2 2 2Z"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#84928A"
                                                    />
                                                    <path
                                                        d="M2.5 4V9.5C2.5 9.76522 2.60536 10.0196 2.79289 10.2071C2.98043 10.3946 3.23478 10.5 3.5 10.5H8.5C8.76522 10.5 9.01957 10.3946 9.20711 10.2071C9.39464 10.0196 9.5 9.76522 9.5 9.5V4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#84928A"
                                                    />
                                                    <path
                                                        d="M5 6H7"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#84928A"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2_877">
                                                        <rect width={12} height={12} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            Closed
                                        </span>
                                        <p className="text-xs leading-relaxed text-(--disabled)">
                                            Case completed and archived.
                                        </p>
                                    </li>
                                </ul>
                            </section>
                            <section className="flex flex-col gap-2.5 rounded-[18px] [border:var(--bd-alert)] bg-(--bg-alert) px-5.5 py-5 min-w-118">
                                <p className="flex items-center gap-2 text-sm font-medium text-(--txt-alert)">
                                    <svg
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2_885)">
                                            <g clipPath="url(#clip1_2_885)">
                                                <path
                                                    d="M13.7499 10.5751V12.4501C13.7506 12.6241 13.7149 12.7964 13.6452 12.9559C13.5755 13.1154 13.4732 13.2586 13.3449 13.3762C13.2167 13.4939 13.0653 13.5835 12.9004 13.6393C12.7355 13.695 12.5608 13.7157 12.3874 13.7001C10.4642 13.4911 8.61677 12.8339 6.99365 11.7813C5.48354 10.8217 4.20323 9.54142 3.24365 8.03131C2.18738 6.40081 1.53005 4.54443 1.3249 2.61256C1.30928 2.43973 1.32982 2.26554 1.38521 2.10108C1.4406 1.93662 1.52963 1.78549 1.64663 1.65732C1.76362 1.52916 1.90603 1.42675 2.06477 1.35664C2.22351 1.28652 2.39511 1.25022 2.56865 1.25006H4.44365C4.74696 1.24708 5.04102 1.35448 5.271 1.55227C5.50098 1.75005 5.6512 2.02471 5.69365 2.32506C5.7749 2.92506 5.91865 3.51256 6.13115 4.08131C6.21524 4.30501 6.23344 4.54813 6.18359 4.78186C6.13374 5.01559 6.01794 5.23013 5.8499 5.40006L5.05615 6.19381C5.94587 7.75853 7.24143 9.05409 8.80615 9.94381L9.5999 9.15006C9.76983 8.98202 9.98437 8.86622 10.2181 8.81637C10.4518 8.76652 10.6949 8.78472 10.9186 8.86881C11.4874 9.08131 12.0749 9.22506 12.6749 9.30631C12.9785 9.34914 13.2558 9.50206 13.454 9.73599C13.6522 9.96993 13.7575 10.2685 13.7499 10.5751Z"
                                                    strokeWidth="1.25"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    stroke="#A33F31"
                                                />
                                                <path
                                                    d="M9.375 1.25C10.2038 1.25 10.9987 1.57924 11.5847 2.16529C12.1708 2.75134 12.5 3.5462 12.5 4.375"
                                                    strokeWidth="1.25"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    stroke="#A33F31"
                                                />
                                                <path
                                                    d="M9.375 3.75C9.70652 3.75 10.0245 3.8817 10.2589 4.11612C10.4933 4.35054 10.625 4.66848 10.625 5"
                                                    strokeWidth="1.25"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    stroke="#A33F31"
                                                />
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2_885">
                                                <rect width={15} height={15} fill="white" />
                                            </clipPath>
                                            <clipPath id="clip1_2_885">
                                                <rect width={15} height={15} fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Is this an acute life-safety emergency?
                                </p>
                                <p className="text-xs leading-relaxed text-(--disabled)">
                                    WargaReport is for non-urgent municipal infrastructure. If there is an active fire,
                                    medical crisis, or immediate hazard to life:
                                </p>
                                <div className="inline-flex flex-wrap gap-2">
                                    <a
                                        href="tel:112"
                                        className="rounded-full bg-(--btn-alert) [border:var(--bd-alert)] px-3.5 py-1.5 font-(family-name:--font-pm) text-[11px] text-(--txt-alert) font-semibold">
                                        Call 112 (National Emergency)
                                    </a>
                                    <a
                                        href="tel:113"
                                        className="rounded-full bg-(--btn-alert) [border:var(--bd-alert)] px-3.5 py-1.5 font-(family-name:--font-pm) text-[11px] text-(--txt-alert) font-semibold">
                                        Call 113 (Fire Dispatch)
                                    </a>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
            </body>
        </>
    );
}
