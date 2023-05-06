import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movie-slice";
import loginSlice from "./login-slice";
import loaderSlice from "./loader-slice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    movie: movieSlice.reducer,
    loader: loaderSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
