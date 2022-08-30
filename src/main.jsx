import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

//redux setup
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

//reducers
import UserReducer from "./Reducers/UserReducer";
import ProductsReducer from "./Reducers/ProductsReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  products: ProductsReducer,
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
