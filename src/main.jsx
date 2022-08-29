import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createStore } from "redux";

function reducer(state, action) {
  if (action.type === "changeState") {
    return action.payload.newStateValue;
  }
  console.log(action);
  return "state";
}

const store = createStore(reducer);
console.log(store.getState());
const action = {
  type: "changeState",
  payload: {
    newStateValue: "my new state value",
  },
};

store.dispatch(action);
console.log(store.getState());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
