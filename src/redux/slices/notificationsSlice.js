import { createSlice } from "@reduxjs/toolkit";
import { updateUser } from "./registerSlice";

const notificationsSlice = createSlice({
    name: "notifications",
    initialState: { items: [] },
    reducers: {
        addNotification(state, action) {
            state.items.unshift({ id: `ntf-${Date.now()}`, read: false, ...action.payload });
        },
        markRead(state, action) {
            const item = state.items.find(n => n.id === action.payload);
            if (item) item.read = true;
        },
        markAllRead(state, action) {
            state.items.forEach(n => {
                if (n.email === action.payload) n.read = true;
            });
        },
    },
    extraReducers: builder => {
        builder.addCase(updateUser, (state, action) => {
            const { email, changes } = action.payload;
            if (!changes.email || changes.email === email) return;
            state.items = state.items.map(n => n.email === email ? { ...n, email: changes.email } : n);
        });
    },
});

export const { addNotification, markRead, markAllRead } = notificationsSlice.actions;
export default notificationsSlice.reducer;
