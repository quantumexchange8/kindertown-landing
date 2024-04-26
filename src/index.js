import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

/* import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import Modal from "react-modal";
Modal.setAppElement("#root");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/
