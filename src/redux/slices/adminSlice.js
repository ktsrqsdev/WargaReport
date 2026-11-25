import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialData = {
    categories: [
        { id: 1, name: "Roads & Transit", citizenLabel: "Pothole / Sidewalk (Trotoar)", agency: "Dinas Bina Marga DKI Jakarta (Roads & Sidewalks)", sla: 48, icon: "Warning", citizenHint: "Potholes, broken sidewalk slabs, damaged drainage grates" },
        { id: 2, name: "Water & Sewage", citizenLabel: "Water Burst / Pipa Bocor", agency: "Perumda PAM JAYA (Clean Drinking Water)", sla: 24, icon: "Warning", citizenHint: "Leaking mains, water pressure loss, sewage backflow" },
        { id: 3, name: "Street Lighting", citizenLabel: "Dark Street / PJU Padam", agency: "Dinas Perhubungan DKI Jakarta (PJU & Traffic)", sla: 72, icon: "General", citizenHint: "Street lamp outages, flickering lights, broken poles" },
        { id: 4, name: "Sanitation & Waste", citizenLabel: "Trash Pile / Sampah Liar", agency: "Dinas Lingkungan Hidup DKI Jakarta (Waste & Rivers)", sla: 36, icon: "General", citizenHint: "Illegal dumping, overflowing bins, blocked drainage" },
        { id: 5, name: "Public Parks & Trees", citizenLabel: "Hazardous Tree / Rawan Tumbang", agency: "Dinas Pertamanan dan Hutan Kota DKI Jakarta", sla: 48, icon: "Warning", citizenHint: "Leaning trees, fallen branches, damaged park fixtures" },
        { id: 6, name: "Noise & Disturbance", citizenLabel: "Late-night Noise / Ketertiban", agency: "Satpol PP Provinsi DKI Jakarta (Public Order)", sla: 48, icon: "General", citizenHint: "Construction past 22:00, loud events, street disturbances" },
        { id: 7, name: "Building & Zoning", citizenLabel: "Unsafe Construction / Bangunan", agency: "Dinas Cipta Karya, Tata Ruang & Pertanahan (Citata)", sla: 72, icon: "General", citizenHint: "Permit violations, dangerous scaffolding, illegal extensions" },
    ],
    agencies: [
        { id: 1, name: "Dinas Bina Marga DKI Jakarta (Roads & Sidewalks)", phone: "+62 (21) 384-5120", email: "pengaduan@binamarga.jakarta.go.id", jurisdiction: "Jalan protokol, trotoar pejalan kaki, jembatan penyeberangan orang (JPO), dan grill saluran air", address: "Jl. Taman Jatibaru No. 1, Gambir, Jakarta Pusat 10150", avgResponse: 2.1, openCases: 142, status: "Active" },
        { id: 2, name: "Perumda PAM JAYA (Clean Drinking Water)", phone: "+62 (21) 570-4250", email: "layanan@pamjaya.co.id", jurisdiction: "Distribusi air minum, kebocoran pipa jaringan, kualitas air bersih", address: "Jl. Penjernihan II No. 1, Pejompongan, Jakarta Pusat 10210", avgResponse: 1.4, openCases: 64, status: "Active" },
        { id: 3, name: "Dinas Perhubungan DKI Jakarta (PJU & Traffic)", phone: "+62 (21) 350-1349", email: "dispatch@dishub.jakarta.go.id", jurisdiction: "Penerangan jalan umum (PJU), rambu lalu lintas, marka jalan, sinyal APILL", address: "Jl. Tambak No. 1, Pegangsaan, Jakarta Pusat 10320", avgResponse: 1.8, openCases: 95, status: "Active" },
        { id: 4, name: "Dinas Lingkungan Hidup DKI Jakarta (Waste & Rivers)", phone: "+62 (21) 809-2740", email: "satgas.kebersihan@lingkunganhidup.jakarta.go.id", jurisdiction: "Kebersihan kota, TPS liar, kebersihan sungai dan saluran air", address: "Jl. Mandala V No. 67, Cililitan, Jakarta Timur 13640", avgResponse: 1.6, openCases: 89, status: "Active" },
        { id: 5, name: "Dinas Pertamanan dan Hutan Kota DKI Jakarta", phone: "+62 (21) 532-8454", email: "forestry@pertamanan.jakarta.go.id", jurisdiction: "Ruang terbuka hijau (RTH), pohon tepi jalan, taman kota, RPTRA", address: "Jl. Langsat No. 1, Kebayoran Baru, Jakarta Selatan 12180", avgResponse: 2.8, openCases: 41, status: "Active" },
        { id: 6, name: "Satpol PP Provinsi DKI Jakarta (Public Order)", phone: "+62 (21) 382-2255", email: "pengaduan@satpolpp.jakarta.go.id", jurisdiction: "Ketertiban umum, ketentraman masyarakat, penegakan Perda", address: "Jl. Medan Merdeka Selatan No. 8-9, Gambir, Jakarta Pusat 10110", avgResponse: 2.3, openCases: 53, status: "Active" },
        { id: 7, name: "Dinas Cipta Karya, Tata Ruang & Pertanahan (Citata)", phone: "+62 (21) 382-2081", email: "pengaduan@citata.jakarta.go.id", jurisdiction: "IMB/PBG, pelanggaran bangunan, peruntukan lahan, bangunan liar", address: "Jl. Medan Merdeka Selatan No. 8-9, Gambir, Jakarta Pusat 10110", avgResponse: 2.6, openCases: 37, status: "Active" },
    ],

    escalation: [],

    slaBenchmarks: [
        { domain: "Roads & Transit", agency: "Dinas Bina Marga DKI Jakarta", target: 48, escalation: 12 },
        { domain: "Water & Sewage", agency: "Perumda PAM JAYA", target: 24, escalation: 6 },
        { domain: "Street Lighting", agency: "Dinas Perhubungan DKI Jakarta", target: 72, escalation: 18 },
        { domain: "Sanitation & Waste", agency: "Dinas Lingkungan Hidup DKI Jakarta", target: 36, escalation: 9 },
        { domain: "Public Parks & Trees", agency: "Dinas Pertamanan dan Hutan Kota DKI Jakarta", target: 48, escalation: 12 },
        { domain: "Noise & Disturbance", agency: "Satpol PP Provinsi DKI Jakarta", target: 48, escalation: 12 },
        { domain: "Building & Zoning", agency: "Dinas Cipta Karya, Tata Ruang & Pertanahan", target: 72, escalation: 18 },
    ],
};

export const fetchAdminData = createAsyncThunk("admin/fetchData", async (_, { getState }) => {
    await new Promise(resolve => setTimeout(resolve, 650));
    const current = getState().admin;
    return {
        categories: current.categories,
        agencies: current.agencies,
        escalation: current.escalation,
        slaBenchmarks: current.slaBenchmarks,
    };
});

const adminSlice = createSlice({
    name: "admin",
    initialState: { ...initialData, loading: false, error: null },
    reducers: {
        updateEscalation(state, action) {
            const exists = state.escalation.some(row => row.id === action.payload.id);
            state.escalation = exists
                ? state.escalation.map(row => row.id === action.payload.id ? { ...row, ...action.payload } : row)
                : [action.payload, ...state.escalation];
        },
    },
    extraReducers: builder => builder
        .addCase(fetchAdminData.pending, state => { state.loading = true; state.error = null; })
        .addCase(fetchAdminData.fulfilled, (state, action) => ({ ...state, ...action.payload, loading: false }))
        .addCase(fetchAdminData.rejected, (state, action) => { state.loading = false; state.error = action.error.message || "Gagal memuat admin data."; }),
});

export const { updateEscalation } = adminSlice.actions;
export default adminSlice.reducer;
