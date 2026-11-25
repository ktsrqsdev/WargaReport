import { createContext, useContext, useState } from "react";


const ModalContext = createContext(null);

export function ModalProvider({ children }) {
    const [modal, setModal] = useState(null);
    const [next, setNext] = useState(null);

    function openModal(type, nextPath = null) {
        setModal(type);
        if (nextPath) setNext(nextPath);
    }

    function closeModal() {
        setModal(null);
        setNext(null);
    }

    return <ModalContext.Provider value={{ modal, next, openModal, closeModal }}>{children}</ModalContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useModal() {
    return useContext(ModalContext);
}   
