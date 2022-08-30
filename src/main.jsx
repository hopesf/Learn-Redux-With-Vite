import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
//redux setup
import { compose, applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
//reducers
import { UserReducer } from "./Reducers/UserReducer";
import { ProductsReducer } from "./Reducers/ProductsReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  products: ProductsReducer,
});

const allEnhancers = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(
  rootReducer,
  {
    user: "Selim",
    products: [],
  },
  allEnhancers
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
