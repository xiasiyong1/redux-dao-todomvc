import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise";
import todoReducer from "../dao/reducer";

const store = configureStore({
  middleware: [thunk, promiseMiddleware],
  reducer: {
    todo: todoReducer,
  },
});

export default store;
