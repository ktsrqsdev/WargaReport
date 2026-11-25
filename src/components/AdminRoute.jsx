import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/slices/registerSlice";

export default function AdminRoute() {
    const user = useSelector(selectCurrentUser);
    if (!user) return <Navigate to="/" replace />;
    return user.role === "admin" ? <Outlet /> : <Navigate to="/" replace />;
}
