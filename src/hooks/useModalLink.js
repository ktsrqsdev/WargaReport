import { useLocation } from "react-router-dom";

export default function useModalLink() {
    const { pathname, search } = useLocation();
    return hash => ({ pathname, search, hash });
}
