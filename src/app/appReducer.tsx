import { combineReducers } from "@reduxjs/toolkit";
import { moviesApi } from "@/entities/movies/api/moviesApi.ts";
import moviesReducer from "@/entities/movies/model/moviesSlice.ts";

export const rootReducer = combineReducers({
  movies: moviesReducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
});