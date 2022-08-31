import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//redux setup
import { createStore } from "redux";

const initialState = {
  count: 1,
  Users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "SUBTRACT":
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log("store değişti", store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 1,
});

store.dispatch({
  type: "ADD",
  payload: 11,
});

store.dispatch({
  type: "SUBTRACT",
  payload: -4,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
