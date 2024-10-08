import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import firstReducer from "../reducers/firstReducer";
import logger from "redux-logger";
import bReducer from "../reducers/BReducer";

const cb = combineReducers({ bReducer, firstReducer });

var store = legacy_createStore(cb, applyMiddleware(logger));

export default store;
