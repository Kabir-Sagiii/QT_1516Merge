import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import myReducer from "../reducer/myReducer";
let myStore = legacy_createStore(myReducer, applyMiddleware(logger));

export default myStore;
