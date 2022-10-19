import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import { HashRouter } from "react-router-dom";
import RouteSwitch from "./RouteSwitch";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <RouteSwitch />
    </HashRouter>
  </React.StrictMode>
);
