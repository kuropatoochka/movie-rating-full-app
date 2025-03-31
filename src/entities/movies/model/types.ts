import React from "react";

type Genre = {
  genre: string;
};

type Country = {
  country: string;
};

export interface IMovies {
  kinopoiskId: number;
  posterUrl: string;
  nameOriginal: string;
  nameEn: string;
  nameRu: string;
  description: string;
  countries?: Country[],
  genres?: Genre[],
  ratingKinopoisk: number | null;
  year: number;
  type: string;
}

export interface MoviesApiResponse {
  items: MoviesCardType[];
  total: number;
  totalPages: number;
}

export interface ISearchMovies {
  filmId: number;
  nameEn: string;
  nameRu: string;
  type: string;
  year: number;
  description: string;
  countries?: Country[],
  genres?: Genre[],
  rating: string | null;
  posterUrl: string;
}

export interface SearchMoviesApiResponse {
  keyword: string;
  pagesCount: number;
  films: MoviesCardType[];
}

export type MoviesListProps = {
  movies: MoviesCardType[],
  type: 'search' | 'item' | 'full-item',
  buttonType: 'icon' | 'text',
  direction?: "row" | "column",
  buttonStyleType?: 'favorite' | 'watch' | 'search',
  skeletonType: 'search' | 'item'
}

export type MoviesCardType = {
  id: number,
  name: string,
  movieType?: string,
  year?: number,
  description?: string,
  countries?: Country[],
  genres?: Genre[],
  rating?: string | number | null,
  poster?: string,
  type?: 'search' | 'item' | 'full-item',
  isFavorite?: boolean,
  buttonSlot?: React.ReactNode,
}

export type MoviesStateType = {
  favorites: MoviesCardType[],
}