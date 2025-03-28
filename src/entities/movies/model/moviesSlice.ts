import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoviesCardType, MoviesStateType } from "@/entities/movies/model/types.ts";

const initialState: MoviesStateType = {
  favorites: []
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    getFavoriteMovies( state ) {
      state.favorites = JSON.parse(localStorage.movies);
    },
    addMovieToFavorites( state, action: PayloadAction<MoviesCardType> ) {
      if (!state.favorites.some(movie => movie.id === action.payload.id)) {
        state.favorites.push({ ...action.payload, isFavorite: true });
        localStorage.movies = JSON.stringify(state.favorites);
      }
    },
    removeMovieFromFavorites( state, action: PayloadAction<number> ) {
      state.favorites = state.favorites.filter(movie => movie.id !== action.payload);
      localStorage.movies = JSON.stringify(state.favorites);
    }
  }
})

export const {
  getFavoriteMovies,
  addMovieToFavorites,
  removeMovieFromFavorites
} = moviesSlice.actions

export default moviesSlice.reducer