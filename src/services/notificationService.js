import { STORAGE_KEYS } from "../constants/storageKeys";
import { load, save } from "../utils/storage";

export const getNotifications = () => load(STORAGE_KEYS.notifications, []);

export const addNotification = notification =>
    save(STORAGE_KEYS.notifications, [{ id: `ntf-${Date.now()}`, read: false, ...notification }, ...getNotifications()]);

export function markNotificationRead(id) {
    save(
        STORAGE_KEYS.notifications,
        getNotifications().map(n => (n.id === id ? { ...n, read: true } : n)),
    );
}

export function markAllNotificationsRead(email) {
    save(
        STORAGE_KEYS.notifications,
        getNotifications().map(n => (n.email === email ? { ...n, read: true } : n)),
    );
}
