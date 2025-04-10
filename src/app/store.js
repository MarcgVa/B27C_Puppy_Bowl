import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(api.middleware),
});
