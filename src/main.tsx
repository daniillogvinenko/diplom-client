import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/app/App";
import "@/shared/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./app/providers/storeProvider/ui/StoreProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <StoreProvider>
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </StoreProvider>
);
