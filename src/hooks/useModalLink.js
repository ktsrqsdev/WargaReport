import { useLocation } from "react-router-dom";

// Membuat link ke halaman yang sama dengan hash lain (#signin / #register / "").
export default function useModalLink() {
    const { pathname, search } = useLocation();
    return hash => ({ pathname, search, hash });
}
