import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { load } from "google-fonts-loader";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

load({ Roboto: ["400"] });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
