import React from "react";
import ReactDOM from "react-dom/client";
import "./common.css";
import { App } from "./Components/App/App";
import { Provider } from "react-redux";
import { store } from "../src/store/index";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
