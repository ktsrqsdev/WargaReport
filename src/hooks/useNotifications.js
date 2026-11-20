import { useMemo } from "react";
import { STORAGE_KEYS } from "../constants/storageKeys";
import { markAllNotificationsRead, markNotificationRead } from "../services/notificationService";
import useAuth from "./useAuth";
import useStoredValue from "./useStoredValue";

export default function useNotifications() {
    const { user } = useAuth();
    const all = useStoredValue(STORAGE_KEYS.notifications, []);

    const notifications = useMemo(() => (user ? all.filter(n => n.email === user.email) : []), [all, user]);
    const hasUnread = notifications.some(n => !n.read);

    return {
        notifications,
        hasUnread,
        markRead: markNotificationRead,
        markAllRead: () => user && markAllNotificationsRead(user.email),
    };
}
