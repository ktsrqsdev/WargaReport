import { STORAGE_KEYS } from "../constants/storageKeys";
import { load, save } from "../utils/storage";

export function toggleUpvote(key) {
    const votes = load(STORAGE_KEYS.upvotes, []);
    save(STORAGE_KEYS.upvotes, votes.includes(key) ? votes.filter(k => k !== key) : [...votes, key]);
}
