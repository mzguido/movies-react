import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { moviesApi } from "../redux/api/movies";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
});
