import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../ducks/todo.duck";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  devTools: true,
});

export default store;
