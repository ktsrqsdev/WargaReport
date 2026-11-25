import { useState } from "react";
import { Icon } from "./Icons";
import { inputBareClass, inputClass, inputWrapClass, labelClass } from "./ui";

// Input teks dengan label. Kalau ada prop `icon`, input dibungkus kotak dengan ikon di kiri.
export function TextField({ label, id, icon, mono, ...inputProps }) {
    const monoClass = mono ? "font-(family-name:--font-pm) text-[13px]" : "";
    return (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={id} className={labelClass}>
                {label}
            </label>
            {icon ? (
                <div className={inputWrapClass}>
                    {icon}
                    <input id={id} className={`${inputBareClass} ${monoClass}`} {...inputProps} />
                </div>
            ) : (
                <input id={id} className={`${inputClass} ${monoClass}`} {...inputProps} />
            )}
        </div>
    );
}

// Input password dengan tombol mata untuk melihat/menyembunyikan isinya
export function PasswordField({ label, id, hint, ...inputProps }) {
    const [visible, setVisible] = useState(false);
    return (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={id} className={labelClass}>
                {label}
            </label>
            <div className={inputWrapClass}>
                <Icon.Lock />
                <input id={id} type={visible ? "text" : "password"} className={inputBareClass} {...inputProps} />
                <button type="button" aria-label="Show or hide password" className="cursor-pointer" onClick={() => setVisible(!visible)}>
                    <Icon.Eye />
                </button>
            </div>
            {hint && <p className="text-[10.5px] text-(--disabled)">{hint}</p>}
        </div>
    );
}

// Pesan error kecil, tidak tampil kalau teksnya kosong
export function ErrorText({ text, className = "" }) {
    if (!text) return null;
    return <p className={`text-xs text-(--txt-alert) ${className}`}>{text}</p>;
}
