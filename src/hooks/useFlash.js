import { useCallback, useEffect, useRef, useState } from "react";

export default function useFlash(duration = 1500) {
    const [text, setText] = useState(null);
    const timer = useRef(null);

    const flash = useCallback(
        message => {
            if (timer.current) return;
            setText(message);
            timer.current = setTimeout(() => {
                setText(null);
                timer.current = null;
            }, duration);
        },
        [duration],
    );

    useEffect(() => () => clearTimeout(timer.current), []);

    return [text, flash];
}
