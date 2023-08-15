import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import { GlobalStyled } from "./styles/globalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
  </React.StrictMode>
);
