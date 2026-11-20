
import { useMemo, useSyncExternalStore } from "react";
import { STORAGE_EVENT } from "../utils/storage";

function subscribe(callback) {
    window.addEventListener(STORAGE_EVENT, callback);
    window.addEventListener("storage", callback);

    return () => {
        window.removeEventListener(STORAGE_EVENT, callback);
        window.removeEventListener("storage", callback);
    };
}

export default function useStoredValue(key, fallback = null) {
    const raw = useSyncExternalStore(
        subscribe,
        () => localStorage.getItem(key)
    );

    return useMemo(() => {
        try {
            return JSON.parse(raw) ?? fallback;
        } catch {
            return fallback;
        }
    }, [raw, fallback]);
}
