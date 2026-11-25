import { createSlice } from "@reduxjs/toolkit";
import { updateUser } from "./registerSlice";

// Menyimpan daftar kunci "email|idLaporan" untuk laporan yang sudah di-upvote
const upvotesSlice = createSlice({
    name: "upvotes",
    initialState: [],
    reducers: {
        toggleUpvote(state, action) {
            const index = state.indexOf(action.payload);
            if (index === -1) state.push(action.payload);
            else state.splice(index, 1);
        },
    },
    extraReducers: builder => {
        builder.addCase(updateUser, (state, action) => {
            const { email, changes } = action.payload;
            if (!changes.email || changes.email === email) return;
            const oldPrefix = `${email}|`;
            return state.map(key => (key.startsWith(oldPrefix) ? `${changes.email}|${key.slice(oldPrefix.length)}` : key));
        });
    },
});

export const { toggleUpvote } = upvotesSlice.actions;
export default upvotesSlice.reducer;
