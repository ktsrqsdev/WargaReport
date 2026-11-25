export const findReport = (reports, id) => reports.find(r => r.id === id);

// Laporan milik user yang sedang login
export const getMyReports = (reports, user) => reports.filter(r => r.email === user.email);
