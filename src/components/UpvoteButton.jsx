import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/slices/registerSlice";
import { toggleUpvote } from "../redux/slices/upvotesSlice";
import { useModal } from "../context/ModalContext";
import { Icon } from "./Icons";

const BASE =
    "cursor-pointer inline-flex items-center gap-1.5 rounded-full border border-(--bd-primary) px-3 py-1 font-(family-name:--font-pm) text-[11px]";

export default function UpvoteButton({ caseId, baseVotes, label = "" }) {
    const dispatch = useDispatch();
    const user = useSelector(selectCurrentUser);
    const upvotes = useSelector(state => state.upvotes);
    const { openModal } = useModal();

    const key = user ? `${user.email}|${caseId}` : null;
    const voted = key !== null && upvotes.includes(key);
    const count = baseVotes + (voted ? 1 : 0);

    function handleClick() {
        if (!user) return openModal("signin");
        dispatch(toggleUpvote(key));
    }

    return (
        <button type="button" onClick={handleClick} className={`${BASE} ${voted ? "bg-(--light-green)" : "bg-(--bg-secondary)"}`}>
            <Icon.ThumbsUp />
            {label ? `${label} (${count})` : count}
        </button>
    );
}
