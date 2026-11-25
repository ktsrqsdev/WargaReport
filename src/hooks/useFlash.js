import { useEffect, useState } from "react";

export default function useFlash(duration = 1500) {
    const [message, setMessage] = useState(null);

    useEffect(() => {
        if (!message) return;
        const timer = setTimeout(() => setMessage(null), duration);
        return () => clearTimeout(timer);
    }, [message, duration]);

    return [message, setMessage];
}
