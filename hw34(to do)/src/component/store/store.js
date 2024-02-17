import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import todoReducer from "../reducer/reducer";

const store = createStore(todoReducer, applyMiddleware(thunk));

export default store;
