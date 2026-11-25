import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import adminReducer from "./slices/adminSlice";
import notificationsReducer from "./slices/notificationsSlice";
import reportsReducer from "./slices/reportsSlice";
import sessionReducer from "./slices/loginSlice";
import upvotesReducer from "./slices/upvotesSlice";
import usersReducer from "./slices/registerSlice";

const rootReducer = combineReducers({
    session: sessionReducer,
    users: usersReducer,
    reports: reportsReducer,
    notifications: notificationsReducer,
    upvotes: upvotesReducer,
    admin: adminReducer,
});

const storage = {
    getItem: (key) => Promise.resolve(localStorage.getItem(key)),
    setItem: (key, value) => {
        localStorage.setItem(key, value);
        return Promise.resolve(value);
    },
    removeItem: (key) => {
        localStorage.removeItem(key);
        return Promise.resolve();
    },
};

const persistedReducer = persistReducer({ key: "wargareport", storage }, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] },
    }),
});

export const persistor = persistStore(store);
