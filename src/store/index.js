import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import todoReducer from "../dao/reducer";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {},
    }),
  reducer: {
    todo: todoReducer,
  },
});

export default store;
