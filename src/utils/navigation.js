export function getPostLoginPath(location) {
    const next = new URLSearchParams(location.search).get("next");
    if (next && /^\/[\w\-/]*$/.test(next)) return next;
    return location.pathname;
}
