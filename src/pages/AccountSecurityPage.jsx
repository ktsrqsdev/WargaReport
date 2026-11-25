import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorText, PasswordField } from "../components/Field";
import { btnPrimary } from "../components/ui";
import { useToast } from "../context/ToastContext";
import useFlash from "../hooks/useFlash";
import { selectCurrentUser, updateUser } from "../redux/slices/registerSlice";
import { isStrongPassword } from "../utils/validators";

const EMPTY = { current: "", next: "", confirm: "" };

export default function AccountSecurityPage() {
    const dispatch = useDispatch();
    const { showToast } = useToast();
    const user = useSelector(selectCurrentUser);
    const [form, setForm] = useState(EMPTY);
    const [error, setError] = useState("");
    const [saved, setSaved] = useFlash();

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    }

    function handleSubmit() {
        if (form.current !== user.password) return setError("Current password is incorrect.");
        if (!isStrongPassword(form.next)) return setError("New password needs at least 8 characters, including a letter and a number.");
        if (form.next === form.current) return setError("New password must be different from the current one.");
        if (form.next !== form.confirm) return setError("New passwords do not match.");

        dispatch(updateUser({ email: user.email, changes: { password: form.next } }));
        setForm(EMPTY);
        setSaved("Password updated");
        showToast("Password updated successfully");
    }

    return (
        <section className="max-w-140 rounded-[22px] border border-(--bd-secondary) bg-(--bg-secondary) p-6 sm:p-8">
            <h2 className="font-(family-name:--font-f) text-xl font-semibold">Security</h2>
            <p className="mb-5 text-xs leading-relaxed text-(--disabled)">Change the password used to sign in to your WargaReport account.</p>
            <div className="flex flex-col gap-4">
                <PasswordField label="Current Password" id="current-password" name="current" placeholder="Enter current password" hint="Required to confirm any password change." value={form.current} onChange={handleChange} />
                <PasswordField label="New Password" id="new-password" name="next" placeholder="At least 8 characters" hint="Use at least 8 characters, including a letter and a number." value={form.next} onChange={handleChange} />
                <PasswordField label="Confirm New Password" id="confirm-password" name="confirm" placeholder="Re-enter new password" value={form.confirm} onChange={handleChange} />
                <ErrorText text={error} />
                <button type="button" onClick={handleSubmit} className={`${btnPrimary} self-start`}>
                    {saved ?? "Update password"}
                </button>
            </div>
        </section>
    );
}
