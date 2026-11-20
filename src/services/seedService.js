import { DEMO_ACCOUNT, DEMO_NOTIFICATIONS } from "../constants/demo";
import { STORAGE_KEYS } from "../constants/storageKeys";
import { load, save } from "../utils/storage";

export function seedDemoData() {
    if (!load(STORAGE_KEYS.users)) save(STORAGE_KEYS.users, [DEMO_ACCOUNT]);
    if (!load(STORAGE_KEYS.notifications)) save(STORAGE_KEYS.notifications, DEMO_NOTIFICATIONS);
}
