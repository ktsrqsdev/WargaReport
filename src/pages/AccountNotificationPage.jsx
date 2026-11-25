import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { btnPrimary } from "../components/ui";
import { NOTIFICATION_PREFERENCES } from "../constants/notifications";
import useFlash from "../hooks/useFlash";
import { selectCurrentUser, updateUser } from "../redux/slices/registerSlice";

export default function AccountNotificationPage() {
    const dispatch = useDispatch();
    const user = useSelector(selectCurrentUser);
    const [saved, setSaved] = useFlash();

    const [values, setValues] = useState(user.notif ?? NOTIFICATION_PREFERENCES.map(item => item.defaultValue));

    function toggle(index) {
        setValues(values.map((value, i) => (i === index ? !value : value)));
    }

    function handleSave() {
        dispatch(updateUser({ email: user.email, changes: { notif: values } }));
        setSaved("Preferences saved");
    }

    return (
        <section className="max-w-140 rounded-[22px] border border-(--bd-secondary) bg-(--bg-secondary) p-6 sm:p-8">
            <h2 className="font-(family-name:--font-f) text-xl font-semibold">Dispatch Notification Preferences</h2>
            <p className="mb-5 text-xs leading-relaxed text-(--disabled)">Control when municipal bureaus may send automated status alerts.</p>
            <div className="flex flex-col gap-3">
                {NOTIFICATION_PREFERENCES.map((item, index) => (
                    <label key={item.label} className="flex cursor-pointer items-start gap-3 rounded-xl border border-(--bd-secondary) bg-(--bg-secondary) px-4 py-3.5">
                        <input type="checkbox" checked={values[index]} onChange={() => toggle(index)} className="mt-0.5 accent-(--success)" />
                        <span className="flex flex-col gap-0.5">
                            <span className="text-[13px] font-semibold">{item.label}</span>
                            <span className="text-xs leading-relaxed text-(--disabled)">{item.description}</span>
                        </span>
                    </label>
                ))}
                <button type="button" onClick={handleSave} className={`${btnPrimary} mt-2 self-start`}>
                    {saved ?? "Update alert preferences"}
                </button>
            </div>
        </section>
    );
}
