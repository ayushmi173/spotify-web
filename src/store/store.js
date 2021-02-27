import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducers from "./reducers/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  Reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
