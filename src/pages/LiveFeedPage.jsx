export default function LiveFeedPage() {
    return (
        <>
            <body className="bg-(--bg-primary) font-(family-name:--font-ps) text-(--dark) antialiased">
                <main>
                    <section className="mx-auto w-full max-w-7xl px-5 md:px-(--gutter) flex flex-col gap-4 pb-6 pt-12 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="mb-2 font-(family-name:--font-pm) text-[11px] uppercase tracking-widest text-(--disabled) font-medium">
                                Public Incident Registry
                            </p>
                            <h1 className="mb-2 font-(family-name:--font-f) text-[38px] font-semibold leading-[1.1]">
                                Community Reports &amp; Fixes
                            </h1>
                            <p className="max-w-125 text-[15px] leading-relaxed text-(--disabled)">
                                Open incident feed in Jakarta and surrounding urban regions. Public visitors may browse;
                                sign in to interact.
                            </p>
                        </div>
                        <div className="inline-flex items-center gap-0.5 self-start rounded-full border border-(--bd-secondary) bg-(--bg-secondary) p-0.75 sm:self-auto">
                            <button
                                type="button"
                                className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-(--success) px-3.5 py-1.75 text-xs font-medium text-(--light)">
                                <svg
                                    width={13}
                                    height={13}
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_2_214)">
                                        <path
                                            d="M4.33325 3.25H11.3749"
                                            strokeWidth="1.08333"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="white"
                                        />
                                        <path
                                            d="M4.33325 6.5H11.3749"
                                            strokeWidth="1.08333"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="white"
                                        />
                                        <path
                                            d="M4.33325 9.75H11.3749"
                                            strokeWidth="1.08333"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="white"
                                        />
                                        <path
                                            d="M1.625 3.25H1.63042"
                                            strokeWidth="1.08333"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="white"
                                        />
                                        <path
                                            d="M1.625 6.5H1.63042"
                                            strokeWidth="1.08333"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="white"
                                        />
                                        <path
                                            d="M1.625 9.75H1.63042"
                                            strokeWidth="1.08333"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_214">
                                            <rect width={13} height={13} fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Feed
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.75 text-xs font-medium text-(--disabled)">
                                <svg
                                    width={13}
                                    height={13}
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_2_224)">
                                        <g clipPath="url(#clip1_2_224)">
                                            <path
                                                d="M0.541748 3.24998V11.9166L4.33341 9.74998L8.66675 11.9166L12.4584 9.74998V1.08331L8.66675 3.24998L4.33341 1.08331L0.541748 3.24998Z"
                                                strokeWidth="1.08333"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                stroke="#4C5B52"
                                            />
                                            <path
                                                d="M4.33325 1.08331V9.74998"
                                                strokeWidth="1.08333"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                stroke="#4C5B52"
                                            />
                                            <path
                                                d="M8.66675 3.25V11.9167"
                                                strokeWidth="1.08333"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                stroke="#4C5B52"
                                            />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_224">
                                            <rect width={13} height={13} fill="white" />
                                        </clipPath>
                                        <clipPath id="clip1_2_224">
                                            <rect width={13} height={13} fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Map
                            </button>
                        </div>
                    </section>
                    <section
                        className="mx-auto w-full max-w-7xl px-5 md:px-(--gutter) flex flex-col gap-3.5"
                        aria-label="Filters">
                        <label className="flex items-center gap-2.5 rounded-xl border border-(--bd-primary) bg-(--bg-secondary) px-3.5 focus-within:border-(--green) focus-within:ring-4 focus-within:ring-(--green-20) max-w-110">
                            <svg
                                width={15}
                                height={15}
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2_302)">
                                    <path
                                        d="M11.25 6.875C11.25 9.29125 9.29125 11.25 6.875 11.25C4.45875 11.25 2.5 9.29125 2.5 6.875C2.5 4.45875 4.45875 2.5 6.875 2.5C9.29125 2.5 11.25 4.45875 11.25 6.875Z"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#84928A"
                                    />
                                    <path
                                        d="M13.125 13.125L10.4375 10.4375"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#84928A"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2_302">
                                        <rect width={15} height={15} fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <input
                                type="search"
                                placeholder="Search by street name, complaint ID, or keyword..."
                                className="min-w-0 flex-1 bg-transparent py-3 text-sm text-(--dark) outline-none placeholder:text-(--disabled2)"
                            />
                        </label>
                        <div className="flex flex-wrap gap-2">
                            <button
                                type="button"
                                className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-(--success) bg-(--success) px-3.5 py-2 text-xs font-medium text-(--light)">
                                All Issues (6)
                            </button>
                            <button
                                type="button"
                                className="text-(--disabled) inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3.5 py-2 text-xs font-medium hover:border-(--green)">
                                <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_2_233)">
                                        <path
                                            d="M6.00245 2.25166L1.06162 10.5C0.959749 10.6764 0.905848 10.8764 0.905278 11.0801C0.904708 11.2838 0.957487 11.4842 1.05837 11.6611C1.15925 11.8381 1.30471 11.9856 1.48028 12.0889C1.65585 12.1922 1.85542 12.2478 2.05912 12.25H11.9408C12.1445 12.2478 12.344 12.1922 12.5196 12.0889C12.6952 11.9856 12.8407 11.8381 12.9415 11.6611C13.0424 11.4842 13.0952 11.2838 13.0946 11.0801C13.0941 10.8764 13.0402 10.6764 12.9383 10.5L7.99745 2.25166C7.89346 2.08023 7.74704 1.93848 7.57231 1.84011C7.39759 1.74174 7.20046 1.69006 6.99995 1.69006C6.79944 1.69006 6.60231 1.74174 6.42759 1.84011C6.25286 1.93848 6.10644 2.08023 6.00245 2.25166Z"
                                            strokeWidth="1.16667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#4C5B52"
                                        />
                                        <path
                                            d="M7 5.25V7.58333"
                                            strokeWidth="1.16667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#4C5B52"
                                        />
                                        <path
                                            d="M7 9.91669H7.00583"
                                            strokeWidth="1.16667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#4C5B52"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_233">
                                            <rect width={14} height={14} fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Roads &amp; Transit
                            </button>
                            <button
                                type="button"
                                className="text-(--disabled) inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3.5 py-2 text-xs font-medium hover:border-(--green)">
                                <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.00004 1.57501L3.32504 5.25001C2.78589 5.93892 2.45123 6.76551 2.35925 7.63546C2.26726 8.50542 2.42166 9.38371 2.80482 10.1701C3.18799 10.9566 3.78449 11.6195 4.52627 12.0832C5.26805 12.5469 6.12524 12.7928 7.00004 12.7928C7.87485 12.7928 8.73204 12.5469 9.47382 12.0832C10.2156 11.6195 10.8121 10.9566 11.1953 10.1701C11.5784 9.38371 11.7328 8.50542 11.6408 7.63546C11.5489 6.76551 11.2142 5.93892 10.675 5.25001L7.00004 1.57501Z"
                                        strokeWidth="1.16667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#4C5B52"
                                    />
                                </svg>
                                Water &amp; Sewage
                            </button>
                            <button
                                type="button"
                                className="text-(--disabled) inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3.5 py-2 text-xs font-medium hover:border-(--green)">
                                <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_2_243)">
                                        <path
                                            d="M9.33329 7.00002C9.33329 8.28868 8.28862 9.33335 6.99996 9.33335C5.71129 9.33335 4.66663 8.28868 4.66663 7.00002C4.66663 5.71136 5.71129 4.66669 6.99996 4.66669C8.28862 4.66669 9.33329 5.71136 9.33329 7.00002Z"
                                            strokeWidth="1.16667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#4C5B52"
                                        />
                                        <path
                                            d="M7 1.16669V2.33335"
                                            strokeWidth="1.16667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#4C5B52"
                                        />
                                        <path
                                            d="M7 11.6667V12.8334"
                                            strokeWidth="1.16667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#4C5B52"
                                        />
                                        <path
                                            d="M2.85828 2.85834L3.67494 3.675"
                                            strokeWidth="1.16667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#4C5B52"
                                        />
                                        <path
                                            d="M10.325 10.325L11.1416 11.1417"
                                            strokeWidth="1.16667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#4C5B52"
                                        />
                                        <path
                                            d="M1.16663 7H2.33329"
                                            strokeWidth="1.16667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#4C5B52"
                                        />
                                        <path
                                            d="M11.6666 7H12.8333"
                                            strokeWidth="1.16667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#4C5B52"
                                        />
                                        <path
                                            d="M3.67494 10.325L2.85828 11.1417"
                                            strokeWidth="1.16667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#4C5B52"
                                        />
                                        <path
                                            d="M11.1416 2.85834L10.325 3.675"
                                            strokeWidth="1.16667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#4C5B52"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_243">
                                            <rect width={14} height={14} fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Street Lighting
                            </button>
                            <button
                                type="button"
                                className="text-(--disabled) inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3.5 py-2 text-xs font-medium hover:border-(--green)">
                                <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_2_255)">
                                        <path
                                            d="M1.75 3.5H12.25"
                                            strokeWidth="1.16667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#4C5B52"
                                        />
                                        <path
                                            d="M11.0833 3.5L10.5 11.6667C10.5 11.9761 10.377 12.2728 10.1582 12.4916C9.93946 12.7104 9.64271 12.8333 9.33329 12.8333H4.66663C4.35721 12.8333 4.06046 12.7104 3.84167 12.4916C3.62288 12.2728 3.49996 11.9761 3.49996 11.6667L2.91663 3.5"
                                            strokeWidth="1.16667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#4C5B52"
                                        />
                                        <path
                                            d="M5.83337 6.41669V9.91669"
                                            strokeWidth="1.16667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#4C5B52"
                                        />
                                        <path
                                            d="M8.16663 6.41669V9.91669"
                                            strokeWidth="1.16667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#4C5B52"
                                        />
                                        <path
                                            d="M5.25 3.5V2.33333C5.25 2.17862 5.31146 2.03025 5.42085 1.92085C5.53025 1.81146 5.67862 1.75 5.83333 1.75H8.16667C8.32138 1.75 8.46975 1.81146 8.57915 1.92085C8.68854 2.03025 8.75 2.17862 8.75 2.33333V3.5"
                                            strokeWidth="1.16667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#4C5B52"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_255">
                                            <rect width={14} height={14} fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Sanitation &amp; Waste
                            </button>
                            <button
                                type="button"
                                className="text-(--disabled) inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3.5 py-2 text-xs font-medium hover:border-(--green)">
                                <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_2_263)">
                                        <path
                                            d="M7 1.16669L4.375 4.95835H9.625L7 1.16669Z"
                                            strokeWidth="1.16667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#4C5B52"
                                        />
                                        <path
                                            d="M7 4.08331L3.5 8.74998H10.5L7 4.08331Z"
                                            strokeWidth="1.16667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#4C5B52"
                                        />
                                        <path
                                            d="M7 8.75V12.8333"
                                            strokeWidth="1.16667"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#4C5B52"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_263">
                                            <rect width={14} height={14} fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Public Parks &amp; Trees
                            </button>
                            <button
                                type="button"
                                className="text-(--disabled) inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3.5 py-2 text-xs font-medium hover:border-(--green)">
                                <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.41675 2.91669L3.50008 5.25002H1.16675V8.75002H3.50008L6.41675 11.0834V2.91669Z"
                                        strokeWidth="1.16667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#4C5B52"
                                    />
                                    <path
                                        d="M9.04175 4.95831C9.34624 5.20438 9.59183 5.51543 9.76055 5.8687C9.92927 6.22196 10.0168 6.60849 10.0168 6.99998C10.0168 7.39147 9.92927 7.778 9.76055 8.13126C9.59183 8.48453 9.34624 8.79558 9.04175 9.04165"
                                        strokeWidth="1.16667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#4C5B52"
                                    />
                                    <path
                                        d="M10.7917 3.20831C11.3441 3.67375 11.7881 4.25423 12.0927 4.90917C12.3972 5.56411 12.555 6.27768 12.555 6.99998C12.555 7.72227 12.3972 8.43585 12.0927 9.09079C11.7881 9.74573 11.3441 10.3262 10.7917 10.7916"
                                        strokeWidth="1.16667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#4C5B52"
                                    />
                                </svg>
                                Noise &amp; Disturbance
                            </button>
                            <button
                                type="button"
                                className="text-(--disabled) inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3.5 py-2 text-xs font-medium hover:border-(--green)">
                                <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.75 12.25H12.25"
                                        strokeWidth="1.16667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#4C5B52"
                                    />
                                    <path
                                        d="M2.91663 12.25V3.5L6.99996 1.75V12.25"
                                        strokeWidth="1.16667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#4C5B52"
                                    />
                                    <path
                                        d="M11.0833 12.25V5.83331L7 4.08331"
                                        strokeWidth="1.16667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#4C5B52"
                                    />
                                    <path
                                        d="M4.66663 4.66669H5.24996"
                                        strokeWidth="1.16667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#4C5B52"
                                    />
                                    <path
                                        d="M4.66663 7H5.24996"
                                        strokeWidth="1.16667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#4C5B52"
                                    />
                                    <path
                                        d="M4.66663 9.33331H5.24996"
                                        strokeWidth="1.16667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#4C5B52"
                                    />
                                    <path
                                        d="M8.75 6.41669H9.33333"
                                        strokeWidth="1.16667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#4C5B52"
                                    />
                                    <path
                                        d="M8.75 8.75H9.33333"
                                        strokeWidth="1.16667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#4C5B52"
                                    />
                                </svg>
                                Building &amp; Zoning
                            </button>
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <div className="inline-flex max-w-full items-center gap-0.5 overflow-x-auto rounded-full border border-(--bd-secondary) bg-(--bg-secondary) p-0.75">
                                <span className="pl-3 pr-2.5 font-(family-name:--font-pm) text-[10px] uppercase tracking-[0.08em] text-(--disabled2)">
                                    Status:
                                </span>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-(--success) px-3.5 py-1.75 text-xs font-medium text-(--light)">
                                    All
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.75 text-xs font-medium text-(--disabled)">
                                    Submitted
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.75 text-xs font-medium text-(--disabled)">
                                    Received
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.75 text-xs font-medium text-(--disabled)">
                                    In review
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.75 text-xs font-medium text-(--disabled)">
                                    Assigned
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.75 text-xs font-medium text-(--disabled)">
                                    Awaiting your info
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.75 text-xs font-medium text-(--disabled)">
                                    Resolved
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.75 text-xs font-medium text-(--disabled)">
                                    Closed
                                </button>
                            </div>
                            <label className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3.5 py-2 text-xs font-medium text-(--disabled) hover:border-(--green)">
                                <input type="checkbox" className="accent-(--success)" />
                                With photos/proof only
                            </label>
                        </div>
                    </section>
                    <section className="mx-auto w-full max-w-7xl px-5 md:px-(--gutter)">
                        <ul className="mt-6 divide-y divide-(--bd-secondary) overflow-hidden rounded-[18px] border border-(--bd-secondary) bg-(--bg-secondary)">
                            <li className="flex flex-wrap items-center gap-3.5 px-5 py-3.5">
                                <img
                                    src="./images/CMP-2026-8841.png"
                                    alt="PAM clean drinking water pipeline burst flooding sidewalk in front of Cipete Raya MRT"
                                    className="h-18 w-18 shrink-0 rounded-xl border border-(--bd-secondary) object-cover"
                                />
                                <div className="flex min-w-0 flex-1 flex-col gap-1.25">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="inline-flex shrink-0 items-center gap-1 font-semibold whitespace-nowrap rounded-full px-2 py-0.5 font-(family-name:--font-ps) text-[10px] bg-(--bg-review) text-(--txt-review) [border:var(--bd-review)]">
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
                                                    d="M10.5 10.5L8.34998 8.34998"
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
                                        <span className="text-xs font-semibold">
                                            <span className="mr-1.5 text-(--disabled)">·</span>Perumda PAM JAYA (Clean
                                            Drinking Water)
                                        </span>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-[15px] font-semibold leading-snug hover:text-(--success)">
                                        PAM clean drinking water pipeline burst flooding sidewalk in front of Cipete
                                        Raya MRT
                                    </a>
                                    <p className="flex flex-wrap items-center gap-1.5 text-xs text-(--disabled2)">
                                        <svg
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2_596)">
                                                <g clipPath="url(#clip1_2_596)">
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
                                                <clipPath id="clip0_2_596">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                                <clipPath id="clip1_2_596">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        Jl. Fatmawati Raya No. 42 (depan Stasiun MRT Cipete Raya)
                                        <span>· Water &amp; Sewage</span>
                                    </p>
                                </div>
                                <div className="flex w-full shrink-0 items-center justify-between gap-3.5 sm:w-auto sm:justify-start">
                                    <button
                                        type="button"
                                        className="inline-flex items-center gap-1.5 rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3 py-1 font-(family-name:--font-pm) text-[11px]">
                                        <svg
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2_328)">
                                                <g clipPath="url(#clip1_2_328)">
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
                                                <clipPath id="clip0_2_328">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                                <clipPath id="clip1_2_328">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        148
                                    </button>
                                    <span className="inline-flex min-w-15.5 items-center gap-1.5 font-(family-name:--font-pm) text-[11px] text-(--disabled)">
                                        <svg
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2_333)">
                                                <g clipPath="url(#clip1_2_333)">
                                                    <path
                                                        d="M7 1H3C2.73478 1 2.48043 1.10536 2.29289 1.29289C2.10536 1.48043 2 1.73478 2 2V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H9C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V4L7 1Z"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                    <path
                                                        d="M7 1V4H10"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                    <path
                                                        d="M8 6.5H4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                    <path
                                                        d="M8 8.5H4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                    <path
                                                        d="M5 4.5H4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2_333">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                                <clipPath id="clip1_2_333">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        2 proof
                                    </span>
                                    <span className="min-w-10.5 font-(family-name:--font-pm) text-[11px] text-(--disabled2)">
                                        Oct 29
                                    </span>
                                    <a
                                        href="#"
                                        className="whitespace-nowrap text-[13px] font-semibold text-(--success)">
                                        Track →
                                    </a>
                                </div>
                            </li>
                            <li className="flex flex-wrap items-center gap-3.5 px-5 py-3.5">
                                <img
                                    src="./images/CMP-2026-8819.png"
                                    alt="Severe 15cm asphalt cavity in TransJakarta corridor causing motorbike rim damage"
                                    className="h-18 w-18 shrink-0 rounded-xl border border-(--bd-secondary) object-cover"
                                />
                                <div className="flex min-w-0 flex-1 flex-col gap-1.25">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="inline-flex shrink-0 items-center gap-1 font-semibold whitespace-nowrap rounded-full px-2 py-0.5 font-(family-name:--font-ps) text-[10px] bg-(--bg-assigned) text-(--txt-assigned) [border:var(--bd-assigned)]">
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
                                        <span className="text-xs font-semibold">
                                            <span className="mr-1.5 text-(--disabled)">·</span>Dinas Bina Marga DKI
                                            Jakarta (Roads &amp; Sidewalks)
                                        </span>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-[15px] font-semibold leading-snug hover:text-(--success)">
                                        Severe 15cm asphalt cavity in TransJakarta corridor causing motorbike rim damage
                                    </a>
                                    <p className="flex flex-wrap items-center gap-1.5 text-xs text-(--disabled2)">
                                        <svg
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2_596)">
                                                <g clipPath="url(#clip1_2_596)">
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
                                                <clipPath id="clip0_2_596">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                                <clipPath id="clip1_2_596">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        Jl. Gatot Subroto Kav. 38 (depan Menara Mulia, Jalur TransJakarta)
                                        <span>· Roads &amp; Transit</span>
                                    </p>
                                </div>
                                <div className="flex w-full shrink-0 items-center justify-between gap-3.5 sm:w-auto sm:justify-start">
                                    <button
                                        type="button"
                                        className="inline-flex items-center gap-1.5 rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3 py-1 font-(family-name:--font-pm) text-[11px]">
                                        <svg
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2_328)">
                                                <g clipPath="url(#clip1_2_328)">
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
                                                <clipPath id="clip0_2_328">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                                <clipPath id="clip1_2_328">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        92
                                    </button>
                                    <span className="inline-flex min-w-15.5 items-center gap-1.5 font-(family-name:--font-pm) text-[11px] text-(--disabled)">
                                        <svg
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2_333)">
                                                <g clipPath="url(#clip1_2_333)">
                                                    <path
                                                        d="M7 1H3C2.73478 1 2.48043 1.10536 2.29289 1.29289C2.10536 1.48043 2 1.73478 2 2V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H9C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V4L7 1Z"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                    <path
                                                        d="M7 1V4H10"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                    <path
                                                        d="M8 6.5H4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                    <path
                                                        d="M8 8.5H4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                    <path
                                                        d="M5 4.5H4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2_333">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                                <clipPath id="clip1_2_333">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        1 proof
                                    </span>
                                    <span className="min-w-10.5 font-(family-name:--font-pm) text-[11px] text-(--disabled2)">
                                        Oct 28
                                    </span>
                                    <a
                                        href="#"
                                        className="whitespace-nowrap text-[13px] font-semibold text-(--success)">
                                        Track →
                                    </a>
                                </div>
                            </li>
                            <li className="flex flex-wrap items-center gap-3.5 px-5 py-3.5">
                                <img
                                    src="./images/CMP-2026-8794.png"
                                    alt="Complete PJU streetlight outage spanning 300 meters along residential corridor"
                                    className="h-18 w-18 shrink-0 rounded-xl border border-(--bd-secondary) object-cover"
                                />
                                <div className="flex min-w-0 flex-1 flex-col gap-1.25">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="inline-flex shrink-0 items-center gap-1 font-semibold whitespace-nowrap rounded-full px-2 py-0.5 font-(family-name:--font-ps) text-[10px] bg-(--bg-resolved) text-(--txt-resolved) [border:var(--bd-resolved)]">
                                            <svg
                                                width={12}
                                                height={12}
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_2_395)">
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
                                                    <clipPath id="clip0_2_395">
                                                        <rect width={12} height={12} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            Resolved
                                        </span>
                                        <span className="font-(family-name:--font-pm) text-[10px] text-(--disabled2)">
                                            CMP-2026-8794
                                        </span>
                                        <span className="text-xs font-semibold">
                                            <span className="mr-1.5 text-(--disabled)">·</span>Dinas Perhubungan DKI
                                            Jakarta (PJU &amp; Traffic)
                                        </span>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-[15px] font-semibold leading-snug hover:text-(--success)">
                                        Complete PJU streetlight outage spanning 300 meters along residential corridor
                                    </a>
                                    <p className="flex flex-wrap items-center gap-1.5 text-xs text-(--disabled2)">
                                        <svg
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2_596)">
                                                <g clipPath="url(#clip1_2_596)">
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
                                                <clipPath id="clip0_2_596">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                                <clipPath id="clip1_2_596">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        Jl. Tebet Barat Dalam Raya No. 24, RT 08 / RW 03<span>· Street Lighting</span>
                                    </p>
                                </div>
                                <div className="flex w-full shrink-0 items-center justify-between gap-3.5 sm:w-auto sm:justify-start">
                                    <button
                                        type="button"
                                        className="inline-flex items-center gap-1.5 rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3 py-1 font-(family-name:--font-pm) text-[11px] opacity-60">
                                        <svg
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2_328)">
                                                <g clipPath="url(#clip1_2_328)">
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
                                                <clipPath id="clip0_2_328">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                                <clipPath id="clip1_2_328">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        64
                                    </button>
                                    <span className="inline-flex min-w-15.5 items-center gap-1.5 font-(family-name:--font-pm) text-[11px] text-(--disabled)">
                                        <svg
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2_333)">
                                                <g clipPath="url(#clip1_2_333)">
                                                    <path
                                                        d="M7 1H3C2.73478 1 2.48043 1.10536 2.29289 1.29289C2.10536 1.48043 2 1.73478 2 2V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H9C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V4L7 1Z"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                    <path
                                                        d="M7 1V4H10"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                    <path
                                                        d="M8 6.5H4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                    <path
                                                        d="M8 8.5H4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                    <path
                                                        d="M5 4.5H4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2_333">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                                <clipPath id="clip1_2_333">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        1 proof
                                    </span>
                                    <span className="min-w-10.5 font-(family-name:--font-pm) text-[11px] text-(--disabled2)">
                                        Oct 28
                                    </span>
                                    <a
                                        href="#"
                                        className="whitespace-nowrap text-[13px] font-semibold text-(--success)">
                                        Track →
                                    </a>
                                </div>
                            </li>
                            <li className="flex flex-wrap items-center gap-3.5 px-5 py-3.5">
                                <img
                                    src="./images/CMP-2026-8720.png"
                                    alt="Illegal household trash accumulation obstructing drainage at Kali Krukut Kemang"
                                    className="h-18 w-18 shrink-0 rounded-xl border border-(--bd-secondary) object-cover"
                                />
                                <div className="flex min-w-0 flex-1 flex-col gap-1.25">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="inline-flex shrink-0 items-center gap-1 font-semibold whitespace-nowrap rounded-full px-2 py-0.5 font-(family-name:--font-ps) text-[10px] bg-(--bg-review) text-(--txt-review) [border:var(--bd-review)]">
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
                                                    d="M10.5 10.5L8.34998 8.34998"
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
                                        <span className="text-xs font-semibold">
                                            <span className="mr-1.5 text-(--disabled)">·</span>Dinas Lingkungan Hidup
                                            DKI Jakarta (Waste &amp; Rivers)
                                        </span>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-[15px] font-semibold leading-snug hover:text-(--success)">
                                        Illegal household trash accumulation obstructing drainage at Kali Krukut Kemang
                                    </a>
                                    <p className="flex flex-wrap items-center gap-1.5 text-xs text-(--disabled2)">
                                        <svg
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2_596)">
                                                <g clipPath="url(#clip1_2_596)">
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
                                                <clipPath id="clip0_2_596">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                                <clipPath id="clip1_2_596">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        Kampung Kemang, RT 02 / RW 01 (bantaran Kali Krukut)
                                        <span>· Sanitation &amp; Waste</span>
                                    </p>
                                </div>
                                <div className="flex w-full shrink-0 items-center justify-between gap-3.5 sm:w-auto sm:justify-start">
                                    <button
                                        type="button"
                                        className="inline-flex items-center gap-1.5 rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3 py-1 font-(family-name:--font-pm) text-[11px]">
                                        <svg
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2_328)">
                                                <g clipPath="url(#clip1_2_328)">
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
                                                <clipPath id="clip0_2_328">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                                <clipPath id="clip1_2_328">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        78
                                    </button>
                                    <span className="inline-flex min-w-15.5 items-center gap-1.5 font-(family-name:--font-pm) text-[11px] text-(--disabled)">
                                        <svg
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2_333)">
                                                <g clipPath="url(#clip1_2_333)">
                                                    <path
                                                        d="M7 1H3C2.73478 1 2.48043 1.10536 2.29289 1.29289C2.10536 1.48043 2 1.73478 2 2V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H9C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V4L7 1Z"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                    <path
                                                        d="M7 1V4H10"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                    <path
                                                        d="M8 6.5H4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                    <path
                                                        d="M8 8.5H4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                    <path
                                                        d="M5 4.5H4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2_333">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                                <clipPath id="clip1_2_333">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        1 proof
                                    </span>
                                    <span className="min-w-10.5 font-(family-name:--font-pm) text-[11px] text-(--disabled2)">
                                        Oct 29
                                    </span>
                                    <a
                                        href="#"
                                        className="whitespace-nowrap text-[13px] font-semibold text-(--success)">
                                        Track →
                                    </a>
                                </div>
                            </li>
                            <li className="flex flex-wrap items-center gap-3.5 px-5 py-3.5">
                                <img
                                    src="./images/CMP-2026-8650.png"
                                    alt="Hazardous decayed Trembesi tree limb at risk of collapse over walking path"
                                    className="h-18 w-18 shrink-0 rounded-xl border border-(--bd-secondary) object-cover"
                                />
                                <div className="flex min-w-0 flex-1 flex-col gap-1.25">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="inline-flex shrink-0 items-center gap-1 font-semibold whitespace-nowrap rounded-full px-2 py-0.5 font-(family-name:--font-ps) text-[10px] bg-(--bg-assigned) text-(--txt-assigned) [border:var(--bd-assigned)]">
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
                                            CMP-2026-8650
                                        </span>
                                        <span className="text-xs font-semibold">
                                            <span className="mr-1.5 text-(--disabled)">·</span>Dinas Pertamanan dan
                                            Hutan Kota DKI Jakarta
                                        </span>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-[15px] font-semibold leading-snug hover:text-(--success)">
                                        Hazardous decayed Trembesi tree limb at risk of collapse over walking path
                                    </a>
                                    <p className="flex flex-wrap items-center gap-1.5 text-xs text-(--disabled2)">
                                        <svg
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2_596)">
                                                <g clipPath="url(#clip1_2_596)">
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
                                                <clipPath id="clip0_2_596">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                                <clipPath id="clip1_2_596">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        Taman Suropati (sisi timur, dekat patung ASEAN)
                                        <span>· Public Parks &amp; Trees</span>
                                    </p>
                                </div>
                                <div className="flex w-full shrink-0 items-center justify-between gap-3.5 sm:w-auto sm:justify-start">
                                    <button
                                        type="button"
                                        className="inline-flex items-center gap-1.5 rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3 py-1 font-(family-name:--font-pm) text-[11px]">
                                        <svg
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2_328)">
                                                <g clipPath="url(#clip1_2_328)">
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
                                                <clipPath id="clip0_2_328">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                                <clipPath id="clip1_2_328">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        45
                                    </button>
                                    <span className="inline-flex min-w-15.5 items-center gap-1.5 font-(family-name:--font-pm) text-[11px] text-(--disabled)">
                                        <svg
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2_333)">
                                                <g clipPath="url(#clip1_2_333)">
                                                    <path
                                                        d="M7 1H3C2.73478 1 2.48043 1.10536 2.29289 1.29289C2.10536 1.48043 2 1.73478 2 2V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H9C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V4L7 1Z"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                    <path
                                                        d="M7 1V4H10"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                    <path
                                                        d="M8 6.5H4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                    <path
                                                        d="M8 8.5H4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                    <path
                                                        d="M5 4.5H4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2_333">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                                <clipPath id="clip1_2_333">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        1 proof
                                    </span>
                                    <span className="min-w-10.5 font-(family-name:--font-pm) text-[11px] text-(--disabled2)">
                                        Oct 28
                                    </span>
                                    <a
                                        href="#"
                                        className="whitespace-nowrap text-[13px] font-semibold text-(--success)">
                                        Track →
                                    </a>
                                </div>
                            </li>
                            <li className="flex flex-wrap items-center gap-3.5 px-5 py-3.5">
                                <div className="flex min-w-0 flex-1 flex-col gap-1.25">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="inline-flex shrink-0 items-center gap-1 font-semibold whitespace-nowrap rounded-full px-2 py-0.5 font-(family-name:--font-ps) text-[10px] bg-(--bg-submitted) text-(--txt-submitted) [border:var(--bd-submitted)]">
                                            <svg
                                                width={12}
                                                height={12}
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
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
                                            </svg>
                                            Submitted
                                        </span>
                                        <span className="font-(family-name:--font-pm) text-[10px] text-(--disabled2)">
                                            CMP-2026-8601
                                        </span>
                                        <span className="text-xs font-semibold">
                                            <span className="mr-1.5 text-(--disabled)">·</span>Satpol PP Provinsi DKI
                                            Jakarta (Public Order)
                                        </span>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-[15px] font-semibold leading-snug hover:text-(--success)">
                                        Heavy excavation equipment operating past 22:00 WIB in residential alley
                                    </a>
                                    <p className="flex flex-wrap items-center gap-1.5 text-xs text-(--disabled2)">
                                        <svg
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2_596)">
                                                <g clipPath="url(#clip1_2_596)">
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
                                                <clipPath id="clip0_2_596">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                                <clipPath id="clip1_2_596">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        Jl. Senopati No. 18, RT 06 / RW 02<span>· Noise &amp; Disturbance</span>
                                    </p>
                                </div>
                                <div className="flex w-full shrink-0 items-center justify-between gap-3.5 sm:w-auto sm:justify-start">
                                    <button
                                        type="button"
                                        className="inline-flex items-center gap-1.5 rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-3 py-1 font-(family-name:--font-pm) text-[11px]">
                                        <svg
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2_328)">
                                                <g clipPath="url(#clip1_2_328)">
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
                                                <clipPath id="clip0_2_328">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                                <clipPath id="clip1_2_328">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        39
                                    </button>
                                    <span className="inline-flex min-w-15.5 items-center gap-1.5 font-(family-name:--font-pm) text-[11px] text-(--disabled)">
                                        <svg
                                            width={12}
                                            height={12}
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2_333)">
                                                <g clipPath="url(#clip1_2_333)">
                                                    <path
                                                        d="M7 1H3C2.73478 1 2.48043 1.10536 2.29289 1.29289C2.10536 1.48043 2 1.73478 2 2V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H9C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V4L7 1Z"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                    <path
                                                        d="M7 1V4H10"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                    <path
                                                        d="M8 6.5H4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                    <path
                                                        d="M8 8.5H4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                    <path
                                                        d="M5 4.5H4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        stroke="#0F6B4F"
                                                    />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2_333">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                                <clipPath id="clip1_2_333">
                                                    <rect width={12} height={12} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        1 proof
                                    </span>
                                    <span className="min-w-10.5 font-(family-name:--font-pm) text-[11px] text-(--disabled2)">
                                        Oct 29
                                    </span>
                                    <a
                                        href="#"
                                        className="whitespace-nowrap text-[13px] font-semibold text-(--success)">
                                        Track →
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </section>
                </main>
            </body>
        </>
    );
}
