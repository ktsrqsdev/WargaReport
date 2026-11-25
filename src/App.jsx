import { Navigate, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
import AdminLayout from "./components/AdminLayout";
import AdminEscalationDeskPage from "./pages/AdminEscalationDeskPage";
import AdminSlaBenchmarkPage from "./pages/AdminSlaBenchmarkPage";
import AccountLayout from "./components/AccountLayout";
import AccountComplaintPage from "./pages/AccountComplaintPage";
import AccountNotificationPage from "./pages/AccountNotificationPage";
import AccountPrivacyPage from "./pages/AccountPrivacyPage";
import AccountProfilePage from "./pages/AccountProfilePage";
import AccountSecurityPage from "./pages/AccountSecurityPage";
import HelpPage from "./pages/HelpPage";
import HomePage from "./pages/HomePage";
import LiveFeedPage from "./pages/LiveFeedPage";
import NotificationPage from "./pages/NotificationPage";
import ReportDetailPage from "./pages/ReportDetailPage";
import ReportLocationPage from "./pages/ReportLocationPage";
import ReportProofPage from "./pages/ReportProofPage";
import ReportReceiptPage from "./pages/ReportReceiptPage";
import ReportReviewPage from "./pages/ReportReviewPage";
import ReportTopicPage from "./pages/ReportTopicPage";
import TrackPage from "./pages/TrackPage";

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                {/* halaman publik */}
                <Route path="/" element={<HomePage />} />
                <Route path="/live-feed" element={<LiveFeedPage />} />
                <Route path="/track" element={<TrackPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/reports/:id" element={<ReportDetailPage />} />

                {/* halaman khusus admin */}
                <Route element={<AdminRoute />}>
                    <Route element={<AdminLayout />}>
                        <Route path="/admin" element={<Navigate to="/admin/escalation" replace />} />
                        <Route path="/admin/escalation" element={<AdminEscalationDeskPage />} />
                        <Route path="/admin/sla" element={<AdminSlaBenchmarkPage />} />
                    </Route>
                </Route>

                {/* halaman yang wajib login */}
                <Route element={<ProtectedRoute />}>
                    <Route path="/report/topic" element={<ReportTopicPage />} />
                    <Route path="/report/location" element={<ReportLocationPage />} />
                    <Route path="/report/proof" element={<ReportProofPage />} />
                    <Route path="/report/review" element={<ReportReviewPage />} />
                    <Route path="/report/receipt" element={<ReportReceiptPage />} />
                    <Route path="/notifications" element={<NotificationPage />} />
                    <Route element={<AccountLayout />}>
                        <Route path="/account/complaints" element={<AccountComplaintPage />} />
                        <Route path="/account/profile" element={<AccountProfilePage />} />
                        <Route path="/account/notifications" element={<AccountNotificationPage />} />
                        <Route path="/account/privacy" element={<AccountPrivacyPage />} />
                        <Route path="/account/security" element={<AccountSecurityPage />} />
                    </Route>
                </Route>

                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    );
}
