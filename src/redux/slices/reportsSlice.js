import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import seedReports from "../../data/reports.json";
import { updateUser } from "./registerSlice";

// Simulasi request API. Data laporan awal digabung dengan laporan yang sudah ada di state lokal.
export const fetchReports = createAsyncThunk("reports/fetchReports", async (_, { getState }) => {
    await new Promise(resolve => setTimeout(resolve, 600));
    const { items } = getState().reports;
    const missingSeeds = seedReports.filter(seed => !items.some(item => item.id === seed.id));
    return missingSeeds.length > 0 ? [...items, ...missingSeeds] : items;
});

const reportsSlice = createSlice({
    name: "reports",
    initialState: { items: [], draft: {}, loading: false, error: null, fetched: false },
    reducers: {
        addReport(state, action) { state.items.unshift(action.payload); },
        updateReportStatus(state, action) {
            const { id, ...changes } = action.payload;
            const index = state.items.findIndex(report => report.id === id);
            if (index === -1) return;
            state.items[index] = { ...state.items[index], ...changes };
        },
        setDraft(state, action) { state.draft = { ...state.draft, ...action.payload }; },
        clearDraft(state) { state.draft = {}; },
    },
    extraReducers: builder => {
        builder
            .addCase(updateUser, (state, action) => {
                const { email, changes } = action.payload;
                if (!changes.email || changes.email === email) return;
                state.items = state.items.map(report => report.email === email
                    ? { ...report, email: changes.email } : report);
            })
            .addCase(fetchReports.pending, state => { state.loading = true; state.error = null; })
            .addCase(fetchReports.fulfilled, (state, action) => {
                state.loading = false; state.fetched = true; state.items = action.payload;
            })
            .addCase(fetchReports.rejected, (state, action) => {
                state.loading = false; state.error = action.error.message || "Failed to load reports.";
            });
    },
});

export const { addReport, updateReportStatus, setDraft, clearDraft } = reportsSlice.actions;
export default reportsSlice.reducer;
