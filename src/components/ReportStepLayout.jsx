import { Link } from "react-router";
import { Icon } from "./Icons";

const STEPS = [
    { label: "Topic", path: "/report/topic" },
    { label: "Location", path: "/report/location" },
    { label: "Proof", path: "/report/proof" },
    { label: "Review & Send", path: "/report/review" },
];

export default function ReportStepLayout({ step, title, subtitle, children }) {
    return (
        <main className="mx-auto my-10 grid w-full max-w-7xl items-start gap-9 px-5 md:grid-cols-[260px_1fr] md:px-(--gutter)">
            <aside className="flex flex-col gap-5">
                <div>
                    <p className="mb-2 font-(family-name:--font-pm) text-[11px] uppercase tracking-widest text-(--disabled)">Community Intake</p>
                    <h1 className="font-(family-name:--font-f) text-[28px] font-semibold leading-[1.15]">Report an Issue</h1>
                    <p className="text-xs leading-relaxed text-(--disabled)">Public civic reporting for Indonesian municipal services.</p>
                </div>
                <nav className="flex flex-col gap-1.5">
                    {STEPS.map((item, index) => {
                        const number = index + 1;
                        const active = number === step;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-2.5 rounded-full px-3.5 py-2.5 text-[13px] font-medium ${
                                    active ? "bg-(--success) text-(--light)" : "text-(--disabled)"
                                }`}>
                                <span className="font-(family-name:--font-pm) text-[11px]">{String(number).padStart(2, "0")}</span>
                                {item.label}
                                {number < step && <span className="ml-auto text-(--success)">✓</span>}
                            </Link>
                        );
                    })}
                </nav>
                <section className="rounded-[18px] border border-dashed border-(--bd-secondary) bg-(--bg-secondary) px-4.5 py-4.25">
                    <h2 className="mb-1.5 flex items-center gap-2 text-[13px] font-semibold">
                        <Icon.Shield />
                        Independent Verification
                    </h2>
                    <p className="text-xs leading-relaxed text-(--disabled)">
                        Our verification desk checks each report and routes it to the municipal agency (Bina Marga, PAM JAYA, Dishub, DLH,
                        Satpol PP, Citata). Resolution timestamps are tracked publicly.
                    </p>
                </section>
                <Link to="/live-feed" className="whitespace-nowrap text-[13px] font-semibold text-(--success)">
                    Cancel and return to feed
                </Link>
            </aside>

            <section className="rounded-[22px] border border-(--bd-secondary) bg-(--bg-secondary) p-6 sm:p-8">
                <div className="mb-4.5">
                    <p className="mb-2 font-(family-name:--font-pm) text-[11px] uppercase tracking-widest text-(--disabled)">
                        Step {String(step).padStart(2, "0")} of 04
                    </p>
                    <h2 className="font-(family-name:--font-f) text-[28px] font-semibold leading-[1.15]">{title}</h2>
                    <p className="text-xs leading-relaxed text-(--disabled)">{subtitle}</p>
                </div>
                {children}
            </section>
        </main>
    );
}

export function StepButtons({ backTo, onContinue, continueLabel = "Continue", children }) {
    return (
        <>
            {children}
            <div className="mt-6 flex items-center justify-between">
                {backTo ? (
                    <Link
                        to={backTo}
                        className="inline-flex cursor-pointer items-center justify-center gap-1.75 rounded-full border border-(--bd-primary) bg-(--bg-secondary) px-5 py-2.5 text-xs font-semibold text-(--dark)">
                        <Icon.ArrowLeft />
                        Back
                    </Link>
                ) : (
                    <Link to="/live-feed" className="whitespace-nowrap text-[13px] font-semibold text-(--success)">
                        Cancel
                    </Link>
                )}
                <button
                    type="button"
                    onClick={onContinue}
                    className="inline-flex cursor-pointer items-center justify-center gap-1.75 rounded-full border border-(--success) bg-(--success) px-5 py-2.5 text-xs font-semibold text-(--light)">
                    {continueLabel}
                    <Icon.ArrowRight />
                </button>
            </div>
        </>
    );
}
