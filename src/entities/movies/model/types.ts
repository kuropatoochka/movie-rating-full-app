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
  ratingKinopoisk: number;
  year: number;
  type: string;
}

export interface ISearchMovies {
  filmId: number;
  nameEn: string;
  nameRu: string;
  type: string;
  year: number;
  description: string;
  countries: Country[],
  genres: Genre[],
  rating: string;
  posterUrl: string;
}

export type MoviesCardType = {
  id: number,
  name: string,
  movieType?: string,
  year?: number,
  description?: string,
  countries?: Country[],
  genres?: Genre[],
  rating?: string | number,
  poster?: string,
  type?: 'search' | 'item' | 'full-item',
  isFavorite?: boolean,
  buttonSlot?: React.ReactNode,
}

export type MoviesListProps = {
  movies: MoviesCardType[],
  type: 'search' | 'item' | 'full-item',
  buttonType: 'icon' | 'text',
  direction?: "row" | "column",
  buttonStyleType?: 'favorite' | 'watch' | 'search',
  skeletonType?: 'search' | 'item',
  isLoading: boolean
}

export type MoviesStateType = {
  favorites: MoviesCardType[],
}