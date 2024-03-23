import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./router";
import { Providers } from "./providers";
import { store } from "./store/store";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Providers router={router} store={store} />
    </React.StrictMode>
);
