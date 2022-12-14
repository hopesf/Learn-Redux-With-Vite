import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//redux setup
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

const initialState = {
  count: 1,
  values: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        count: state.count + action.payload,
        values: [...state.values, action.payload],
      };
    case "SUBTRACT":
      return {
        ...state,
        count: state.count - action.payload,
        values: [...state.values, action.payload],
      };
    default:
      return state;
  }
};
const middleware = applyMiddleware(logger);
const store = createStore(reducer, middleware);

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
