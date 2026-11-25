import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

const ToastContext = createContext(null);

const DEFAULT_DURATION = 3000;

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);
    const timersRef = useRef(new Map());

    const dismissToast = useCallback(id => {
        const timer = timersRef.current.get(id);
        if (timer) {
            clearTimeout(timer);
            timersRef.current.delete(id);
        }
        setToasts(prev => prev.filter(toast => toast.id !== id));
    }, []);

    const showToast = useCallback((message, variant = "success", duration = DEFAULT_DURATION) => {
        const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
        setToasts(prev => [...prev.slice(-3), { id, message, variant }]);

        const timer = setTimeout(() => {
            timersRef.current.delete(id);
            setToasts(prev => prev.filter(toast => toast.id !== id));
        }, duration);

        timersRef.current.set(id, timer);
        return id;
    }, []);

    useEffect(() => {
        const timers = timersRef.current;
        return () => {
            timers.forEach(timer => clearTimeout(timer));
            timers.clear();
        };
    }, []);

    return (
        <ToastContext.Provider value={{ toasts, showToast, dismissToast }}>
            {children}
        </ToastContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useToast() {
    return useContext(ToastContext);
}
