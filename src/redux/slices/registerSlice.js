import { createSlice } from "@reduxjs/toolkit";
import adminSeed from "../../data/admin.json";

const registerSlice = createSlice({
    name: "users",
    initialState: { items: [adminSeed] },
    reducers: {
        // Tambah akun baru saat user mendaftar
        register(state, action) {
            state.items.push({ ...action.payload, role: "citizen" });
        },
        // Ubah data profil user yang sudah terdaftar (email, nama, foto, dsb)
        updateUser(state, action) {
            const { email, changes } = action.payload;
            const index = state.items.findIndex(user => user.email === email);
            if (index === -1) return;
            state.items[index] = { ...state.items[index], ...changes };
        },
    },
});

export const { register, updateUser } = registerSlice.actions;
export default registerSlice.reducer;

// ambil data user yang sedang login berdasarkan email di loginSlice
export const selectCurrentUser = state =>
    state.users.items.find(user => user.email === state.session.email) ?? null;
