import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import reducers from "./reducers/reducers";

const middlewares = [thunk, logger];
const store = createStore(
  combineReducers(reducers),
  applyMiddleware(...middlewares)
);

export default store;
