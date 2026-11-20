import { useNavigate } from "react-router-dom";
import { STORAGE_KEYS } from "../constants/storageKeys";
import { toggleUpvote } from "../services/upvoteService";
import useAuth from "./useAuth";
import useModalLink from "./useModalLink";
import useStoredValue from "./useStoredValue";

export default function useUpvote(caseId, baseVotes = 0) {
    const { user } = useAuth();
    const navigate = useNavigate();
    const modalLink = useModalLink();
    const upvotes = useStoredValue(STORAGE_KEYS.upvotes, []);

    const key = user ? `${user.email}|${caseId}` : null;
    const voted = key !== null && upvotes.includes(key);

    function toggle() {
        if (!user) return navigate(modalLink("#signin"));
        toggleUpvote(key);
    }

    return { voted, count: baseVotes + (voted ? 1 : 0), toggle };
}
