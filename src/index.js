import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeContextProvider } from "./contexts/theme.context";
import {MemoryRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MemoryRouter>
     <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </MemoryRouter>
  </React.StrictMode>
);
