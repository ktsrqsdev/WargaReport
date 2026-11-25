import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { ModalProvider } from "./context/ModalContext";
import { ToastProvider } from "./context/ToastContext";
import "./index.css";
import { persistor, store } from "./redux/store";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <ToastProvider>
                        <ModalProvider>
                            <App />
                        </ModalProvider>
                    </ToastProvider>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </StrictMode>,
);
