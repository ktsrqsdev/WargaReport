import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router";
import { ErrorText, TextField } from "../components/Field";
import { Icon } from "../components/Icons";
import { btnPrimary } from "../components/ui";
import { findReport } from "../utils/reports";

export default function TrackPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const userReports = useSelector(state => state.reports.items);

    const [caseId, setCaseId] = useState(searchParams.get("id") ?? "");
    const [contact, setContact] = useState("");
    const [error, setError] = useState("");

    function lookup(id) {
        const clean = id.trim().toUpperCase();
        if (!clean) return setError("Please enter your complaint reference ID.");
        if (!findReport(userReports, clean)) return setError(`No case found for ${clean}.`);
        navigate(`/reports/${clean}`);
    }

    return (
        <main className="mx-auto my-10 grid w-full max-w-7xl items-start gap-10 px-5 md:grid-cols-[7fr_5fr] md:px-(--gutter)">
            <section className="rounded-[22px] border border-(--bd-secondary) bg-(--bg-secondary) p-6 sm:p-8">
                <p className="mb-2 font-(family-name:--font-pm) text-[11px] uppercase tracking-widest text-(--disabled)">Citizen Portal</p>
                <h1 className="mb-2 font-(family-name:--font-f) text-[38px] font-semibold leading-[1.1]">Track your complaint</h1>
                <p className="max-w-125 text-[15px] leading-relaxed text-(--disabled)">
                    Enter your official case reference number to view real-time triage progress, inspector assignment, and official
                    replies.
                </p>
                <form
                    className="mt-6 flex flex-col gap-4"
                    onSubmit={e => {
                        e.preventDefault();
                        lookup(caseId);
                    }}>
                    <TextField
                        label="Complaint Reference ID *"
                        id="case-id"
                        mono
                        placeholder="e.g. CMP-2026-0001"
                        value={caseId}
                        onChange={e => {
                            setCaseId(e.target.value);
                            setError("");
                        }}
                    />
                    <ErrorText text={error} />
                    <TextField
                        label="Email address or phone (optional verification)"
                        id="contact"
                        placeholder="citizen@example.com"
                        value={contact}
                        onChange={e => setContact(e.target.value)}
                    />
                    <button type="submit" className={`${btnPrimary} self-start px-6! py-3.5! text-[15px]!`}>
                        <Icon.TrackSearch />
                        Lookup report status
                        <Icon.TrackArrow />
                    </button>
                </form>
            </section>
            <aside className="pt-2">
                <div className="flex gap-3">
                    <Icon.Info className="shrink-0" />
                    <div className="mt-1 flex flex-col gap-2.5 text-[13px] leading-relaxed text-(--disabled)">
                        <p>
                            Your tracking ID was displayed on your confirmation receipt and sent to your registered email address
                            immediately upon intake.
                        </p>
                        <p>
                            Reports filed anonymously can only be tracked using this unique key; officers cannot retrieve records by name
                            without it.
                        </p>
                    </div>
                </div>
                <hr className="my-4.5 border-(--bd-secondary)" />
                <Link to="/live-feed" className="whitespace-nowrap text-[13px] font-semibold text-(--success)">
                    Lost your tracking ID? Search recent reports by location →
                </Link>
            </aside>
        </main>
    );
}
