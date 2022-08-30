import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
//redux setup
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

//reducers
import { UserReducer } from "./Reducers/UserReducer";
import { ProductsReducer } from "./Reducers/ProductsReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  products: ProductsReducer,
});

const store = createStore(
  rootReducer,
  {
    user: "Selim",
    products: [],
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App count={4} />
    </Provider>
  </React.StrictMode>
);
