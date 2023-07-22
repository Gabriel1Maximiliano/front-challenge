import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter.tsx";
import { UIProvider } from "./metrics/context/ui/UIProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UIProvider>
        <AppRouter />
      </UIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
