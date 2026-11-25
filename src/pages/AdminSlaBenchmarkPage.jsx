import { useSelector } from "react-redux";

function resolveBureauName(agencies, agencyName = "") {
    return agencies.find(item => item.name === agencyName || item.name.startsWith(agencyName))?.name ?? agencyName;
}

export default function AdminSlaBenchmarkPage() {
    const { slaBenchmarks, agencies, loading, error } = useSelector(state => state.admin);

    return (
        <section id="sla-benchmarks-section" aria-label="SLA Benchmarks">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-(family-name:--font-pm) text-[11px] uppercase tracking-widest text-(--disabled)">
                    Statutory Resolution Windows
                </p>
                <p className="font-(family-name:--font-pm) text-xs text-(--success)">
                    Enforced across all wards
                </p>
            </div>

            {loading && slaBenchmarks.length === 0 && (
                <p className="mt-4 rounded-[18px] border border-(--bd-secondary) bg-(--bg-secondary) px-4 py-6 text-center text-xs text-(--disabled)">
                    Loading SLA benchmarks...
                </p>
            )}
            {error && (
                <p role="alert" className="mt-4 rounded-xl border border-(--txt-alert) bg-(--bg-alert) px-4 py-3 text-xs text-(--txt-alert)">
                    {error}
                </p>
            )}

            <div className="mt-4 overflow-x-auto rounded-[18px] border border-(--bd-secondary) bg-(--bg-secondary)">
                <table className="w-full min-w-180 text-left">
                    <thead>
                        <tr className="border-b border-(--bd-secondary) bg-(--bg-primary)/50 font-(family-name:--font-pm) text-[10px] uppercase tracking-wider text-(--disabled)">
                            <th className="px-5 py-3 font-medium">Service Domain</th>
                            <th className="px-5 py-3 font-medium">Responsible Bureau</th>
                            <th className="px-5 py-3 font-medium">Target SLA</th>
                            <th className="px-5 py-3 font-medium">Escalation Threshold</th>
                            <th className="px-5 py-3 text-right font-medium">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-(--bd-secondary)">
                        {slaBenchmarks.map(row => (
                            <tr key={row.domain} className="align-middle transition hover:bg-(--bg-primary)/30">
                                <td className="px-5 py-4 text-[13px] font-semibold text-(--dark)">
                                    {row.domain}
                                </td>
                                <td className="px-5 py-4 text-xs text-(--disabled)">
                                    {resolveBureauName(agencies, row.agency)}
                                </td>
                                <td className="whitespace-nowrap px-5 py-4 font-(family-name:--font-pm) text-xs font-semibold text-(--success)">
                                    {row.target} hours
                                </td>
                                <td className="whitespace-nowrap px-5 py-4 font-(family-name:--font-pm) text-xs text-(--disabled2)">
                                    +{row.escalation}h (Warning)
                                </td>
                                <td className="px-5 py-4 text-right">
                                    <span className="inline-flex items-center rounded-full bg-(--bg-received) px-2.5 py-0.5 font-(family-name:--font-pm) text-[10px] font-medium uppercase tracking-wider text-(--txt-received) [border:var(--bd-received)]">
                                        {row.status ?? "ACTIVE"}
                                    </span>
                                </td>
                            </tr>
                        ))}
                        {!loading && slaBenchmarks.length === 0 && (
                            <tr>
                                <td colSpan={5} className="px-5 py-10 text-center text-xs text-(--disabled)">
                                    No SLA benchmarks configured.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
