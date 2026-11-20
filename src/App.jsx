import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import LiveFeedPage from "./pages/LiveFeedPage";
import TrackPage from "./pages/TrackPage";
import HelpPage from "./pages/HelpPage";
import ReportTopicPage from "./pages/ReportTopicPage";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/live-feed" element={<LiveFeedPage />} />
            <Route path="/track" element={<TrackPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/report-topic" element={<ReportTopicPage />} />
            <Route path="/report-topic" element={<ReportTopicPage />} />
            <Route path="/report-topic" element={<ReportTopicPage />} />
            <Route path="/report-topic" element={<ReportTopicPage />} />
            <Route path="/report-topic" element={<ReportTopicPage />} />
            <Route path="/report-topic" element={<ReportTopicPage />} />
        </Routes>
    );
}
