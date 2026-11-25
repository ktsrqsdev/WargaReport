import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { ErrorText, TextField } from "../components/Field";
import ReportStepLayout, { StepButtons } from "../components/ReportStepLayout";
import { labelClass } from "../components/ui";
import { useToast } from "../context/ToastContext";
import { addNotification } from "../redux/slices/notificationsSlice";
import { addReport } from "../redux/slices/reportsSlice";
import { selectCurrentUser } from "../redux/slices/registerSlice";
import { formatDateTime } from "../utils/format";
import { isValidEmail, isValidName, isValidPhone } from "../utils/validators";

const checkbox = "h-4 w-4 shrink-0 cursor-pointer accent-(--success)";

export default function ReportReviewPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { showToast } = useToast();
    const user = useSelector(selectCurrentUser);
    const draft = useSelector(state => state.reports.draft);
    const reportCount = useSelector(state => state.reports.items.length);

    const [form, setForm] = useState({
        title: "",
        details: "",
        anonymous: false,
        name: user.name,
        email: user.email,
        phone: user.phone,
        emailAlert: true,
        smsAlert: false,
        agree: false,
    });
    const [error, setError] = useState("");

    if (!draft.address || !draft.evidence?.length) return <Navigate to="/report/proof" replace />;

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
        setError("");
    }

    function validate() {
        if (form.title.trim().length < 10) return "Title is too short (min 10 characters).";
        if (form.details.trim().length < 15) return "Please describe the incident in at least 15 characters.";
        if (!isValidName(form.name.trim())) return "Filer name must be letters only and at least 2 characters.";
        if (!isValidEmail(form.email.trim())) return "Please enter a valid email for status alerts.";
        if (!form.emailAlert && !form.smsAlert) return "Pick at least one status alert channel.";
        if ((form.smsAlert || form.phone.trim()) && !isValidPhone(form.phone.trim())) return "Enter a valid mobile number, e.g. 0812 3456 7890.";
        if (!form.agree) return "Please confirm the declaration before sending.";
        return "";
    }

    function handleSubmit() {
        const message = validate();
        if (message) return setError(message);

        const createdAt = new Date().toISOString();
        const id = `CMP-${new Date().getFullYear()}-${String(reportCount + 1).padStart(4, "0")}`;
        const report = {
            id,
            email: user.email,
            reporter: form.anonymous ? "Warga Anonim" : form.name.trim(),
            title: form.title.trim(),
            detail: form.details.trim(),
            category: draft.category,
            agency: draft.agency,
            sla: draft.sla,
            location: draft.address,
            district: `${draft.district}, Kota Bandung`,
            evidence: draft.evidence,
            votes: 0,
            status: "Submitted",
            createdAt,
        };
        dispatch(addReport(report));

        const { date, time } = formatDateTime(createdAt);
        dispatch(
            addNotification({
                email: user.email,
                caseId: id,
                date,
                time,
                title: "Report received — verification pending",
                type: "Status Change",
                status: "Submitted",
                body: `Your report ${id} is queued for WargaReport evidence verification. Proposed bureau: ${report.agency}. The SLA countdown starts once the report is routed.`,
            }),
        );

        showToast(`Report ${id} dispatched`);
        navigate("/report/receipt");
    }

    return (
        <ReportStepLayout step={4} title="Report summary & declaration" subtitle="Review the report and choose notifications before final submission.">
            <StepButtons backTo="/report/proof" onContinue={handleSubmit} continueLabel="Dispatch Report">
                <div className="mt-6 flex max-w-140 flex-col gap-5">
                    <TextField label="Concise Title *" id="title" name="title" maxLength={120} value={form.title} onChange={handleChange} />

                    <div className="flex flex-col gap-1.5">
                        <div className="flex items-end justify-between gap-3">
                            <label htmlFor="details" className={labelClass}>
                                Incident Observation Details *
                            </label>
                            <span className="font-(family-name:--font-pm) text-xs text-(--disabled)">{form.details.length} / 1000 chars (min 15)</span>
                        </div>
                        <textarea
                            id="details"
                            name="details"
                            rows={3}
                            maxLength={1000}
                            value={form.details}
                            onChange={handleChange}
                            className="min-h-20 w-full resize-y rounded-xl border border-(--bd-primary) bg-(--bg-secondary) px-4 py-3 text-sm leading-relaxed text-(--dark) outline-none focus:border-(--green) focus:ring-4 focus:ring-(--green-20)"
                        />
                    </div>

                    <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-(--success)/20 bg-(--light-green) px-4 py-3.5">
                        <span className="flex flex-1 flex-col text-xs font-semibold">
                            Post anonymously on public feed
                            <span className="mt-0.5 text-[11px] font-normal text-(--disabled)">Your name will be masked as Warga Anonim on open records.</span>
                        </span>
                        <input type="checkbox" name="anonymous" checked={form.anonymous} onChange={handleChange} className={checkbox} />
                    </label>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
                        <TextField label="Filer Name *" id="filer" name="name" value={form.name} onChange={handleChange} />
                        <TextField label="Email for Status Alerts *" id="alert-email" name="email" type="email" value={form.email} onChange={handleChange} />
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
                        <TextField label="Phone / WhatsApp" id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />
                        <div className="flex flex-col gap-1.5">
                            <p className={labelClass}>Status alert channels</p>
                            <div className="flex items-center gap-5 sm:h-11.5">
                                <label className="flex cursor-pointer items-center gap-2 text-xs text-(--disabled)">
                                    <input type="checkbox" name="emailAlert" checked={form.emailAlert} onChange={handleChange} className={checkbox} />
                                    Email
                                </label>
                                <label className="flex cursor-pointer items-center gap-2 text-xs text-(--disabled)">
                                    <input type="checkbox" name="smsAlert" checked={form.smsAlert} onChange={handleChange} className={checkbox} />
                                    SMS
                                </label>
                            </div>
                        </div>
                    </div>

                    <label className="flex cursor-pointer items-center gap-2.5 text-xs text-(--disabled)">
                        <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} className={checkbox} />I confirm this incident was
                        authentically observed on-site under Law No. 25/2009.
                    </label>
                </div>
                <ErrorText text={error} className="mt-4" />
            </StepButtons>
        </ReportStepLayout>
    );
}
