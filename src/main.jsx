import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { combineReducers, createStore } from "redux";

const userReducer = (state = "", action) => {
  return state;
};

const productsReducer = (state = [], action) => {
  return state;
};

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
});

const store = createStore(rootReducer);
console.log(store.getState());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
