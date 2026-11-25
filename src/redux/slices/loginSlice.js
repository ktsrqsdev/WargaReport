import { createSlice } from "@reduxjs/toolkit";
import { updateUser } from "./registerSlice";

// Menyimpan email user yang sedang login.
const loginSlice = createSlice({
    name: "session",
    initialState: { email: null },
    reducers: {
        // Simpan email saat user berhasil masuk
        login(state, action) { state.email = action.payload; },
        // Kosongkan email saat user logout
        logout(state) { state.email = null; },
    },
    extraReducers: builder => {
        // Kalau user ganti email di halaman profil, update juga di sini
        builder.addCase(updateUser, (state, action) => {
            const { email, changes } = action.payload;
            if (state.email === email && changes.email && changes.email !== email) {
                state.email = changes.email;
            }
        });
    },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
