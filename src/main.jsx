import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { combineReducers, createStore } from "redux";

const userReducer = (state = "", action) => {
  if (action.type === "changeUserName") {
    return action.payload.newStateValue;
  }
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

const action = {
  type: "changeUserName",
  payload: {
    newStateValue: "ahmet",
  },
};

const action2 = {
  type: "changeUserName",
  payload: {
    newStateValue: "mehmet",
  },
};

store.subscribe(() => {
  console.log("state güncellendi");
  console.log(store.getState());
});

store.dispatch(action);
store.dispatch(action2);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
