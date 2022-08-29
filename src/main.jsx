import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createStore } from "redux";

function reducer() {
  return "state";
}

const store = createStore(reducer);

console.log(store.getState());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
