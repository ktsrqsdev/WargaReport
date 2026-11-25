import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "../components/Navbar";
import { ErrorText, TextField } from "../components/Field";
import { btnOutline, btnPrimary } from "../components/ui";
import { useToast } from "../context/ToastContext";
import useFlash from "../hooks/useFlash";
import { selectCurrentUser, updateUser } from "../redux/slices/registerSlice";
import { isValidEmail, isValidName, isValidNik, isValidPhone } from "../utils/validators";

const MAX_PHOTO_SIZE = 300000;

export default function AccountProfilePage() {
    const dispatch = useDispatch();
    const { showToast } = useToast();
    const user = useSelector(selectCurrentUser);
    const users = useSelector(state => state.users.items);

    const [form, setForm] = useState({ name: user.name, email: user.email, phone: user.phone, nik: user.nik ?? "" });
    const [photo, setPhoto] = useState(user.photo ?? "");
    const [error, setError] = useState("");
    const [saved, setSaved] = useFlash();
    const fileInput = useRef(null);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    }

    function handlePhoto(e) {
        const file = e.target.files[0];
        if (!file) return;
        if (file.size > MAX_PHOTO_SIZE) return setError("Photo must be smaller than 300 KB.");

        const reader = new FileReader();
        reader.onload = () => {
            setPhoto(reader.result);
            setError("");
        };
        reader.readAsDataURL(file);
    }

    function handleSave() {
        const data = { name: form.name.trim(), email: form.email.trim().toLowerCase(), phone: form.phone.trim(), nik: form.nik.trim() };

        if (!isValidName(data.name)) return setError("Name must be letters only and at least 2 characters.");
        if (!isValidEmail(data.email)) return setError("Please enter a valid email address.");
        if (data.email !== user.email && users.some(u => u.email === data.email)) return setError("That email is already registered.");
        if (!isValidPhone(data.phone)) return setError("Enter a valid mobile number, e.g. 0812 3456 7890.");
        if (data.nik && !isValidNik(data.nik)) return setError("NIK must be 16 digits.");

        dispatch(updateUser({ email: user.email, changes: { ...data, photo } }));
        setError("");
        setSaved("Profile saved");
        showToast("Profile updated successfully");
    }

    return (
        <section className="max-w-140 rounded-[22px] border border-(--bd-secondary) bg-(--bg-secondary) p-6 sm:p-8">
            <h2 className="font-(family-name:--font-f) text-xl font-semibold">Filer Identity &amp; Preferences</h2>
            <p className="mb-5 text-xs leading-relaxed text-(--disabled)">Used to pre-fill future complaint forms and verify status inquiries.</p>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <Avatar user={{ name: form.name, photo }} size="h-14 w-14 text-base" />
                    <div>
                        <p className="text-[13px] font-semibold">Profile photo</p>
                        <p className="mb-2 text-xs leading-relaxed text-(--disabled)">JPG, PNG, or WebP. Square images work best.</p>
                        <input ref={fileInput} type="file" accept="image/*" hidden onChange={handlePhoto} />
                        <button type="button" onClick={() => fileInput.current.click()} className={btnOutline}>
                            Upload photo
                        </button>
                    </div>
                </div>
                <TextField label="Full Legal Name" id="full-name" name="name" value={form.name} onChange={handleChange} />
                <TextField label="Primary Notification Email" id="primary-email" name="email" type="email" value={form.email} onChange={handleChange} />
                <TextField label="SMS Contact Number" id="sms-number" name="phone" type="tel" value={form.phone} onChange={handleChange} />
                <TextField label="NIK" id="nik" name="nik" mono value={form.nik} onChange={handleChange} />
                <ErrorText text={error} />
                <button type="button" onClick={handleSave} className={`${btnPrimary} self-start`}>
                    {saved ?? "Save profile changes"}
                </button>
            </div>
        </section>
    );
}
