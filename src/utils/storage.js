export const STORAGE_EVENT = "wr:storage";

const notify = () => window.dispatchEvent(new Event(STORAGE_EVENT));

export function load(key, fallback = null) {
    try {
        return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
        return fallback;
    }
}

export function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    notify();
}

export function remove(key) {
    localStorage.removeItem(key);
    notify();
}
