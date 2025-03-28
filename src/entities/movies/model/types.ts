import React from "react";

export interface IMovies {
  kinopoiskId: number;
  posterUrl: string;
  nameOriginal: string;
  nameEn: string;
  nameRu: string;
  description: string;
  ratingKinopoisk: number;
  year: number;
  type: string;
}

export interface MoviesApiResponse {
  items: IMovies[];
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
  rating: string;
  posterUrl: string;
}

export interface SearchMoviesApiResponse {
  keyword: string;
  pagesCount: number;
  films: ISearchMovies[]
}

export type MoviesListProps = {
  movies: MoviesCardType[];
  type: 'search' | 'item';
  variant: 'icon' | 'text';
}

export type MoviesCardType = {
  id: number,
  name: string,
  movieType?: string,
  year?: number,
  description?: string,
  rating?: string,
  poster?: string,
  type?: 'search' | 'item',
  isFavorite: boolean,
  buttonSlot?: React.ReactNode,
}

export type MoviesStateType = {
  favorites: MoviesCardType[],
}