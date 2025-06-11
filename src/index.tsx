import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { LocaleProvider } from "./components/context/LocaleContext";

const container = document.getElementById("root");

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <LocaleProvider>
          <App />
        </LocaleProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}
