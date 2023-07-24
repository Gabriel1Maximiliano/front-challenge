/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter.tsx";
import { UIProvider } from "./metrics/context/ui/UIProvider.tsx";

import { Provider } from "react-redux";
import { store } from "./store/store.ts";
//import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <UIProvider>
          <AppRouter />
        </UIProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
