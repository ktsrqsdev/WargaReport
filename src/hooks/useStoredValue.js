import { useMemo, useRef, useSyncExternalStore } from "react";
import { STORAGE_EVENT } from "../utils/storage";

function subscribe(callback) {
    window.addEventListener(STORAGE_EVENT, callback);
    window.addEventListener("storage", callback);
    return () => {
        window.removeEventListener(STORAGE_EVENT, callback);
        window.removeEventListener("storage", callback);
    };
}

// Membaca localStorage secara reaktif: komponen ikut render ulang saat nilainya berubah.
export default function useStoredValue(key, fallback = null) {
    const fallbackRef = useRef(fallback);
    const raw = useSyncExternalStore(subscribe, () => localStorage.getItem(key));

    return useMemo(() => {
        try {
            return JSON.parse(raw) ?? fallbackRef.current;
        } catch {
            return fallbackRef.current;
        }
    }, [raw]);
}
