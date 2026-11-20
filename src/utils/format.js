export function getInitials(name = "") {
    return name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map(word => word[0])
        .join("")
        .toUpperCase();
}

export function formatDateTime(iso) {
    const date = new Date(iso);
    return {
        date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
        fullDate: date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        time: date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
    };
}

export function getRemainingSla(createdAt, hours = 48) {
    const remaining = Math.max(0, new Date(createdAt).getTime() + hours * 3600000 - Date.now());
    return `${Math.floor(remaining / 3600000)}h ${Math.floor((remaining % 3600000) / 60000)}m left`;
}
