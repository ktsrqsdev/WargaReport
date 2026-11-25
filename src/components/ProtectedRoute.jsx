import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router";
import { useModal } from "../context/ModalContext";
import { selectCurrentUser } from "../redux/slices/registerSlice";


export default function ProtectedRoute() {
    const user = useSelector(selectCurrentUser);
    const { openModal } = useModal();
    const { pathname } = useLocation();

    useEffect(() => {
        if (!user) openModal("signin", pathname);
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return user ? <Outlet /> : <Navigate to="/" replace />;
}
