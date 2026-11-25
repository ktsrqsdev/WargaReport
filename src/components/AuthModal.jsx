import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { useModal } from "../context/ModalContext";
import { useToast } from "../context/ToastContext";
import { login } from "../redux/slices/loginSlice";
import { register } from "../redux/slices/registerSlice";
import { isStrongPassword, isValidEmail, isValidName, isValidNik, isValidPhone } from "../utils/validators";
import { ErrorText, PasswordField, TextField } from "./Field";
import { Icon } from "./Icons";
import { btnModal } from "./ui";

const TAB_ACTIVE = "bg-(--success) text-(--light)";
const TAB_IDLE = "bg-(--bg-submitted) text-(--dark)";

export default function AuthModal() {
    const { modal, openModal, closeModal } = useModal();
    if (!modal) return null;

    const isSignIn = modal === "signin";
    const title = isSignIn ? "Sign In to WargaReport" : "Register Citizen Account";
    const description = isSignIn
        ? "Sign in to lodge a complaint or upvote issues."
        : "Create an account to lodge a complaint or upvote issues.";

    return (
        <div className="fixed inset-0 z-50 flex overflow-y-auto bg-(--dark-70) p-4">
            {/*  tutup modal jika klik di luar*/}
            <button type="button" aria-label="Close" className="fixed inset-0 cursor-default" onClick={closeModal} />
            <div
                role="dialog"
                aria-label={title}
                className="relative m-auto w-full max-w-135 overflow-hidden rounded-[18px] border border-(--bd-secondary) bg-(--bg-secondary) shadow-2xl">
                <div className="flex items-start justify-between gap-4 border-b border-(--bd-secondary) bg-(--bg-primary) px-5.5 pb-4 pt-5">
                    <div>
                        <h2 className="font-(family-name:--font-f) text-xl font-semibold">{title}</h2>
                        <p className="text-xs leading-relaxed text-(--disabled)">{description}</p>
                    </div>
                    <button type="button" aria-label="Close" className="cursor-pointer" onClick={closeModal}>
                        <Icon.X />
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-2.5 border-b border-(--bd-secondary) px-5.5 py-3.5">
                    <button
                        type="button"
                        onClick={() => openModal("signin")}
                        className={`cursor-pointer rounded-full px-4 py-3 text-center text-[13px] font-medium ${isSignIn ? TAB_ACTIVE : TAB_IDLE}`}>
                        Sign In Existing Account
                    </button>
                    <button
                        type="button"
                        onClick={() => openModal("register")}
                        className={`cursor-pointer rounded-full px-4 py-3 text-center text-[13px] font-medium ${isSignIn ? TAB_IDLE : TAB_ACTIVE}`}>
                        Register as Citizen
                    </button>
                </div>
                {isSignIn ? <SignInForm /> : <RegisterForm />}
            </div>
        </div>
    );
}

function useAfterAuth() {
    const { next, closeModal } = useModal();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    return () => {
        closeModal();
        navigate(next ?? pathname);
    };
}

function SignInForm() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.items);
    const { showToast } = useToast();
    const afterAuth = useAfterAuth();
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    }

    function handleSubmit(e) {
        e.preventDefault();
        const email = form.email.trim().toLowerCase();
        const found = users.find(u => u.email === email && u.password === form.password);
        if (!found) return setError("Incorrect email or password.");

        dispatch(login(found.email));
        showToast(`Welcome back, ${found.name}`);
        afterAuth();
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-5.5 pb-5.5 pt-4.5">
            <TextField label="Email Address" id="signin-email" name="email" type="email" placeholder="Enter your Email" icon={<Icon.Mail />} value={form.email} onChange={handleChange} />
            <PasswordField label="Password" id="signin-password" name="password" placeholder="Enter your password" value={form.password} onChange={handleChange} />
            <ErrorText text={error} />
            <button type="submit" className={btnModal}>
                Sign In
                <Icon.ArrowWhite />
            </button>
        </form>
    );
}

function RegisterForm() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.items);
    const { showToast } = useToast();
    const afterAuth = useAfterAuth();
    const [form, setForm] = useState({ name: "", email: "", phone: "", nik: "", password: "" });
    const [error, setError] = useState("");

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    }

    function validate(data) {
        if (!isValidName(data.name)) return "Name must be letters only and at least 2 characters.";
        if (!isValidEmail(data.email)) return "Please enter a valid email address.";
        if (users.some(u => u.email === data.email)) return "That email is already registered.";
        if (!isValidPhone(data.phone)) return "Enter a valid mobile number, e.g. 0812 3456 7890 or +62 812 3456 7890.";
        if (data.nik && !isValidNik(data.nik)) return "NIK must be 16 digits.";
        if (!isStrongPassword(data.password)) return "Password needs at least 8 characters, including a letter and a number.";
        return "";
    }

    function handleSubmit(e) {
        e.preventDefault();
        const data = { ...form, name: form.name.trim(), email: form.email.trim().toLowerCase(), phone: form.phone.trim(), nik: form.nik.trim() };
        const message = validate(data);
        if (message) return setError(message);

        dispatch(register(data));
        dispatch(login(data.email));
        showToast("Account created & signed in");
        afterAuth();
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-5.5 pb-5.5 pt-4.5">
            <TextField label="Full Name (Nama Lengkap) *" id="reg-name" name="name" placeholder="e.g. Budi Santoso" icon={<Icon.Person />} value={form.name} onChange={handleChange} />
            <div className="grid gap-3 sm:grid-cols-2">
                <TextField label="Email Address *" id="reg-email" name="email" type="email" placeholder="e.g. budi@wargareport.id" icon={<Icon.Mail />} value={form.email} onChange={handleChange} />
                <TextField label="Phone / WhatsApp *" id="reg-phone" name="phone" type="tel" placeholder="+62 812 ..." value={form.phone} onChange={handleChange} />
            </div>
            <TextField label="NIK" id="reg-nik" name="nik" mono placeholder="16 digits for verified resident badge" value={form.nik} onChange={handleChange} />
            <p className="-mt-2 text-[10.5px] text-(--disabled)">Used exclusively for verification under UU PDP and never shown to the public.</p>
            <PasswordField label="Password *" id="reg-password" name="password" placeholder="Create a password" value={form.password} onChange={handleChange} />
            <ErrorText text={error} />
            <button type="submit" className={btnModal}>
                Create Account &amp; Continue
            </button>
        </form>
    );
}
