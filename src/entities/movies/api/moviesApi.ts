import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ParamsType } from "@/shared/interface/types.ts";
import { IMovies, ISearchMovies, MoviesApiResponse, SearchMoviesApiResponse } from "@/entities/movies";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: ( headers ) => {
      headers.set('X-API-KEY', API_KEY);
      headers.set('Content-Type', 'application/json');
      return headers;
    }
  }),
  endpoints: ( builder ) => ({
    getTopMovies: builder.query<MoviesApiResponse, ParamsType>({
      query: ( params ) => {
        const {
          type = 'TOP_POPULAR_MOVIES',
          page = 1,
        } = params || {}
        return {
          url: '/v2.2/films/collections?',
          params: {
            type,
            page,
          },
        }
      },
      transformResponse: ( response: MoviesApiResponse ) => {
        return {
          ...response,
          items: response.items.map(( movie: IMovies ) => {
            return {
              id: movie.kinopoiskId,
              name: movie.nameOriginal || movie.nameEn || movie.nameRu,
              poster: movie.posterUrl || null,
              rating: movie.ratingKinopoisk,
              movieType: movie.type,
              year: movie.year,
              description: movie.description,
              countries: movie.countries,
              genres: movie.genres,
            };
          }),
        };
      }
    }),
    getMoviesByKeywords: builder.query<SearchMoviesApiResponse, ParamsType>({
      query: ( params ) => {
        const { keyword = '', page = 1 } = params || {}
        return {
          url: '/v2.1/films/search-by-keyword',
          params: {
            keyword,
            page
          }
        }
      },
      transformResponse: ( response: SearchMoviesApiResponse ) => {
        return {
          ...response,
          films: response.films.map(( movie: ISearchMovies ) => {
            return {
              id: movie.filmId,
              name: movie.nameEn || movie.nameRu,
              poster: movie.posterUrl || null,
              rating: movie.rating,
              movieType: movie.type,
              year: movie.year,
              description: movie.description,
              countries: movie.countries,
              genres: movie.genres,
            };
          }),
        };
      }
    })
  }),
});

export const { useGetTopMoviesQuery, useGetMoviesByKeywordsQuery } = moviesApi;