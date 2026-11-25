import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import AuthModal from "./AuthModal";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ToastContainer from "./ToastContainer";

export default function Layout() {
    const { pathname } = useLocation();

    // pindah halaman -> scroll kembali ke atas
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="min-h-screen bg-(--bg-primary) font-(family-name:--font-ps) text-(--dark) antialiased">
            <Navbar />
            <Outlet />
            <Footer />
            <AuthModal />
            <ToastContainer />
        </div>
    );
}
