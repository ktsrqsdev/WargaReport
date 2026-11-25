import { useToast } from "../context/ToastContext";
import { Icon } from "./Icons";

const VARIANT_STYLES = {
    success: "border-(--success) bg-(--bg-secondary) text-(--dark)",
    error: "border-(--txt-alert) bg-(--bg-alert) text-(--txt-alert)",
    info: "border-(--bd-primary) bg-(--bg-secondary) text-(--dark)",
};

const ICON_BADGE_STYLES = {
    success: "bg-(--light-green) text-(--success)",
    error: "bg-(--bg-alert) text-(--txt-alert)",
    info: "bg-(--bg-submitted) text-(--disabled)",
};

export default function ToastContainer() {
    const { toasts, dismissToast } = useToast();

    if (toasts.length === 0) return null;

    return (
        <aside
            id="toast-region"
            aria-live="polite"
            aria-label="Notifications"
            className="pointer-events-none fixed bottom-5 right-5 z-110 flex w-[calc(100vw-2.5rem)] max-w-sm flex-col gap-2.5">
            {toasts.map(toast => (
                <div
                    key={toast.id}
                    role="status"
                    className={`pointer-events-auto flex items-center gap-3 rounded-2xl border px-4 py-3 shadow-lg transition ${VARIANT_STYLES[toast.variant] ?? VARIANT_STYLES.info}`}>
                    <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full ${ICON_BADGE_STYLES[toast.variant] ?? ICON_BADGE_STYLES.info}`}>
                        {toast.variant === "error" ? <Icon.AlertClock /> : <Icon.Check />}
                    </span>
                    <p className="min-w-0 flex-1 text-xs font-semibold leading-snug">{toast.message}</p>
                    <button
                        type="button"
                        aria-label="Dismiss notification"
                        onClick={() => dismissToast(toast.id)}
                        className="cursor-pointer rounded-full p-1 text-(--disabled) transition hover:bg-(--bg-primary) hover:text-(--dark)">
                        <Icon.Close />
                    </button>
                </div>
            ))}
        </aside>
    );
}
