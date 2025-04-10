import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/puppyBowlApi";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(api.middleware),
});
