import { configureStore } from "@reduxjs/toolkit";
import competitionsReducer from "./competitionsSlice";

const store = configureStore({
  reducer: {
    competitions: competitionsReducer,
  },
});

export default store;
