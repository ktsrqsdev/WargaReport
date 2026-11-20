export default function ReportReviewPage() {
    return (
        <>
            <main className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-5 pb-28 pt-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-9 lg:px-8 xl:px-(--gutter)">
                <aside className="flex flex-col gap-6 lg:pt-3">
                    <div>
                        <p className="font-(family-name:--font-pm) text-[10px] uppercase tracking-[0.14em] text-(--disabled)">
                            Community Intake
                        </p>
                        <h1 className="mt-3 font-(family-name:--font-f) text-2xl font-bold tracking-tight">
                            Report an Issue
                        </h1>
                        <p className="mt-1 text-[13px] leading-snug text-(--disabled)">
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
                            className="flex items-center gap-2.5 rounded-full px-3.5 py-2.5 text-[13px] font-medium text-(--disabled)">
                            <span className="font-(family-name:--font-pm) text-[11px]">03</span>Proof
                            <span className="ml-auto text-(--success)">✓</span>
                        </a>
                        <a
                            href="report-review.html"
                            className="flex items-center gap-2.5 rounded-full px-3.5 py-2.5 text-[13px] font-medium bg-(--success) text-(--light)">
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
                    <a href="liveFeed.html" className="text-[13px] font-semibold text-(--success) hover:underline">
                        Cancel and return to feed
                    </a>
                </aside>
                <section
                    data-review-form
                    className="rounded-3xl border border-(--bd-secondary) bg-(--bg-secondary) p-6 shadow-sm sm:p-9">
                    <div>
                        <p className="font-(family-name:--font-pm) text-[10px] uppercase tracking-[0.14em] text-(--disabled)">
                            Step 04 of 04
                        </p>
                        <h2 className="mt-3 font-(family-name:--font-f) text-[28px] font-bold leading-tight tracking-tight ">
                            Report summary &amp; declaration
                        </h2>
                        <p className="mt-1.5 text-[13px] text-(--disabled)">
                            Review the report and choose notifications before final submission.
                        </p>
                    </div>
                    <div className="mt-6 flex max-w-140 flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="title"
                                className="font-(family-name:--font-pm) text-[10px] uppercase tracking-widest text-(--disabled)">
                                Concise Title *
                            </label>
                            <input
                                id="title"
                                name="title"
                                type="text"
                                maxLength={120}
                                defaultValue="Pohon tumbang di depan Kebun Binatang samping Kampus ITB"
                                className="w-full rounded-xl border border-(--bd-secondary) bg-(--bg-secondary) px-4 py-3 text-[13px] outline-none focus:border-(--success) focus:ring-2 focus:ring-(--success)/15"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-end justify-between gap-3">
                                <label
                                    htmlFor="details"
                                    className="font-(family-name:--font-pm) text-[10px] uppercase tracking-widest text-(--disabled)">
                                    Incident Observation Details *
                                </label>
                                <span className="font-(family-name:--font-pm) text-xs text-(--disabled)">
                                    0 / 1000 chars (min 15)
                                </span>
                            </div>
                            <textarea
                                id="details"
                                name="details"
                                rows={3}
                                maxLength={1000}
                                className="min-h-20 w-full resize-y rounded-xl border border-(--bd-secondary) bg-(--bg-secondary) px-4 py-3 text-[13px] leading-relaxed outline-none focus:border-(--success) focus:ring-2 focus:ring-(--success)/15"
                                defaultValue={
                                    "Pohon tumbang sekitar lokasi mengganggu mobilitas masyarakat yang melintas, mohon untuk diperhatikan"
                                }
                            />
                        </div>
                        <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-(--success)/20 bg-(--light-green) px-4 py-3.5">
                            <svg
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_214_1162)">
                                    <g clipPath="url(#clip1_214_1162)">
                                        <path
                                            d="M3.33333 7.33325H12.6667C13.403 7.33325 14 7.93021 14 8.66659V13.3333C14 14.0696 13.403 14.6666 12.6667 14.6666H3.33333C2.59695 14.6666 2 14.0696 2 13.3333V8.66659C2 7.93021 2.59695 7.33325 3.33333 7.33325Z"
                                            strokeWidth="1.33333"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#0F6B4F"
                                        />
                                        <path
                                            d="M4.6665 7.33325V4.66659C4.6665 3.78253 5.01769 2.93468 5.64281 2.30956C6.26794 1.68444 7.11578 1.33325 7.99984 1.33325C8.88389 1.33325 9.73174 1.68444 10.3569 2.30956C10.982 2.93468 11.3332 3.78253 11.3332 4.66659V7.33325"
                                            strokeWidth="1.33333"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="#0F6B4F"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_214_1162">
                                        <rect width={16} height={16} fill="white" />
                                    </clipPath>
                                    <clipPath id="clip1_214_1162">
                                        <rect width={16} height={16} fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className="flex flex-1 flex-col text-xs font-semibold">
                                Post anonymously on public feed
                                <span className="mt-0.5 text-[11px] font-normal text-(--disabled)">
                                    Your name will be masked as Warga Anonim on open records.
                                </span>
                            </span>
                            <input
                                data-anonim
                                type="checkbox"
                                className="h-4 w-4 shrink-0 cursor-pointer accent-(--success)"
                            />
                        </label>
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="filer"
                                    className="font-(family-name:--font-pm) text-[10px] uppercase tracking-widest text-(--disabled)">
                                    Filer Name *
                                </label>
                                <input
                                    id="filer"
                                    name="filer"
                                    type="text"
                                    defaultValue="Fahrul Septiana"
                                    className="w-full rounded-xl border border-(--bd-secondary) bg-(--bg-secondary) px-4 py-3 text-[13px] outline-none focus:border-(--success) focus:ring-2 focus:ring-(--success)/15"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="alert-email"
                                    className="font-(family-name:--font-pm) text-[10px] uppercase tracking-widest text-(--disabled)">
                                    Email for Status Alerts *
                                </label>
                                <input
                                    id="alert-email"
                                    name="alert-email"
                                    type="email"
                                    defaultValue="fahrul@wargareport.id"
                                    className="w-full rounded-xl border border-(--bd-secondary) bg-(--bg-secondary) px-4 py-3 text-[13px] outline-none focus:border-(--success) focus:ring-2 focus:ring-(--success)/15"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="phone"
                                    className="font-(family-name:--font-pm) text-[10px] uppercase tracking-widest text-(--disabled)">
                                    Phone / WhatsApp
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    defaultValue="+62 812-9842-1054"
                                    className="w-full rounded-xl border border-(--bd-secondary) bg-(--bg-secondary) px-4 py-3 text-[13px] outline-none focus:border-(--success) focus:ring-2 focus:ring-(--success)/15"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-(family-name:--font-pm) text-[10px] uppercase tracking-widest text-(--disabled)">
                                    Status alert channels
                                </p>
                                <div className="flex items-center gap-5 sm:h-11.5">
                                    <label className="flex cursor-pointer items-center gap-2 text-xs text-(--disabled)">
                                        <input
                                            data-channel-email
                                            type="checkbox"
                                            defaultChecked
                                            className="h-4 w-4 cursor-pointer accent-(--success)"
                                        />
                                        Email
                                    </label>
                                    <label className="flex cursor-pointer items-center gap-2 text-xs text-(--disabled)">
                                        <input
                                            data-channel-sms
                                            type="checkbox"
                                            className="h-4 w-4 cursor-pointer accent-(--success)"
                                        />
                                        SMS
                                    </label>
                                </div>
                            </div>
                        </div>
                        <label className="flex cursor-pointer items-center gap-2.5 text-xs text-(--disabled)">
                            <input
                                data-declaration
                                type="checkbox"
                                className="h-4 w-4 shrink-0 cursor-pointer accent-(--success)"
                            />
                            I confirm this incident was authentically observed on-site under Law No. 25/2009.
                        </label>
                    </div>
                    <p data-review-message className="mt-4 text-xs text-(--danger)" hidden />
                    <div className="mt-5 flex items-center justify-between border-t border-(--bd-secondary) pt-5">
                        <a
                            href="report-proof.html"
                            className="inline-flex items-center gap-2 rounded-full border border-(--bd-secondary) bg-(--bg-secondary) px-4 py-2 text-xs font-medium hover:bg-(--bg-primary)">
                            <svg
                                width={12}
                                height={12}
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_214_1193)">
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
                                    <clipPath id="clip0_214_1193">
                                        <rect width={12} height={12} fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Back
                        </a>
                        <button
                            data-dispatch
                            type="button"
                            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-(--success) px-6 py-3 text-[13px] font-semibold text-white hover:bg-(--success)/90">
                            Dispatch Report
                            <svg
                                width={13}
                                height={13}
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.7085 6.5H10.2918"
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
                            </svg>
                        </button>
                    </div>
                </section>
            </main>
        </>
    );
}
