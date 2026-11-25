import { useSelector } from "react-redux";
import { Icon } from "../components/Icons";
import { btnOutline } from "../components/ui";
import { selectCurrentUser } from "../redux/slices/registerSlice";
import { getMyReports } from "../utils/reports";

export default function AccountPrivacyPage() {
    const user = useSelector(selectCurrentUser);
    const userReports = useSelector(state => state.reports.items);
    const notifications = useSelector(state => state.notifications.items);

    function handleDownload() {
        const archive = {
            profile: { name: user.name, email: user.email, phone: user.phone, nik: user.nik },
            complaints: getMyReports(userReports, user),
            notifications: notifications.filter(n => n.email === user.email),
        };
        const file = new Blob([JSON.stringify(archive, null, 2)], { type: "application/json" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        link.download = "wargareport-archive.json";
        link.click();
        URL.revokeObjectURL(link.href);
    }

    return (
        <section className="max-w-140 rounded-[22px] border border-(--bd-secondary) bg-(--bg-secondary) p-6 sm:p-8">
            <h2 className="font-(family-name:--font-f) text-xl font-semibold">Privacy Rights &amp; Data Portability</h2>
            <p className="mb-4 text-xs leading-relaxed text-(--disabled)">Review personal records retained under municipal open data laws.</p>
            <p className="mb-5 text-[13px] leading-relaxed text-(--disabled)">
                Under Indonesian Law No. 27/2022 on Personal Data Protection (UU PDP) and Law No. 14/2008 on Public Information Openness
                (UU KIP), personal citizen identifiers are strictly segregated from public registers.
            </p>
            <div className="rounded-xl border border-(--bd-secondary) bg-(--bg-primary) px-4 py-4">
                <h3 className="text-[13px] font-semibold">Download your case archive</h3>
                <p className="mb-3 text-xs leading-relaxed text-(--disabled)">
                    Export all submitted complaints, attached media metadata, and officer replies as standard JSON.
                </p>
                <button type="button" onClick={handleDownload} className={btnOutline}>
                    <Icon.Download />
                    Download JSON archive
                </button>
            </div>
        </section>
    );
}
