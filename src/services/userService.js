import { DEMO_ACCOUNT } from "../constants/demo";
import { STORAGE_KEYS } from "../constants/storageKeys";
import { load, remove, save } from "../utils/storage";

export const getUsers = () => load(STORAGE_KEYS.users, []);

export const getSessionEmail = () => load(STORAGE_KEYS.session, null);

export const getCurrentUser = () => getUsers().find(user => user.email === getSessionEmail()) ?? null;

export const findUserByCredentials = (email, password) =>
    getUsers().find(user => user.email === email && user.password === password) ?? null;

export const isEmailTaken = (email, exceptEmail) =>
    getUsers().some(user => user.email === email && user.email !== exceptEmail);

export const isDemoAccount = user => Boolean(user.demo) || user.email === DEMO_ACCOUNT.email;

export const startSession = email => save(STORAGE_KEYS.session, email);

export const endSession = () => remove(STORAGE_KEYS.session);

export function createUser({ name, email, phone, nik, password }) {
    save(STORAGE_KEYS.users, [...getUsers(), { name, email, phone, nik, password }]);
}

export function updateUser(email, changes) {
    save(
        STORAGE_KEYS.users,
        getUsers().map(user => (user.email === email ? { ...user, ...changes } : user)),
    );
}

export function updateProfile(currentEmail, changes) {
    if (changes.email && changes.email !== currentEmail) {
        [STORAGE_KEYS.reports, STORAGE_KEYS.notifications].forEach(key => {
            save(
                key,
                load(key, []).map(item => (item.email === currentEmail ? { ...item, email: changes.email } : item)),
            );
        });
    }
    updateUser(currentEmail, changes);
    if (changes.email) startSession(changes.email);
}
