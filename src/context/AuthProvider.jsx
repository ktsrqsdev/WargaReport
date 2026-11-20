import { useMemo } from "react";
import { STORAGE_KEYS } from "../constants/storageKeys";
import useStoredValue from "../hooks/useStoredValue";
import { createUser, endSession, findUserByCredentials, startSession, updateProfile, updateUser } from "../services/userService";
import { authContext } from "../context/authContext.js";

export function AuthProvider({ children }) {
    const users = useStoredValue(STORAGE_KEYS.users, []);
    const sessionEmail = useStoredValue(STORAGE_KEYS.session, null);

    const user = useMemo(() => users.find(u => u.email === sessionEmail) ?? null, [users, sessionEmail]);

    const value = useMemo(
        () => ({
            user,
            login(email, password) {
                const found = findUserByCredentials(email, password);
                if (!found) return false;
                startSession(found.email);
                return true;
            },
            register(data) {
                createUser(data);
                startSession(data.email);
            },
            logout: endSession,
            updateProfile: changes => updateProfile(user.email, changes),
            updateUser: changes => updateUser(user.email, changes),
        }),
        [user],
    );

    return <authContext.Provider value={value}>{children}</authContext.Provider>;
}