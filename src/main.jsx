import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { combineReducers, createStore } from "redux";

const userReducer = (state = "", action) => {
  switch (action.type) {
    case "updateUser":
      return action.payload;

    default:
      return state;
  }
};

const productsReducer = (state = [], action) => {
  return state;
};

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
});

const store = createStore(
  rootReducer,
  {
    user: "selim",
    products: [
      {
        name: "CZLondon",
        type: "Shoe",
      },
    ],
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const updateUserReducer = {
  type: "updateUser",
  payload: {
    user: "selim coder",
  },
};

store.dispatch(updateUserReducer);

console.log(store.getState());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
