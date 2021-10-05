import React from "react";
import ReactDOM from "react-dom";
import { Link, Route, BrowserRouter } from "react-router-dom";

// Components
import App from "./components/App/App";

import "./index.scss";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
