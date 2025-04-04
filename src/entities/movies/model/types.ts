import React from "react";
import { ButtonStyleType, ButtonType, DirectionType, SkeletonType } from "@/shared/interface/types.ts";

export type Params = Partial<{
  type: string,
  page: number,
  keyword: string
}>

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
  countries: Country[],
  genres: Genre[],
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

export type cardType = 'search' | 'item' | 'full-item'

export type MoviesCardType = {
  id: number,
  name: string,
  movieType?: string,
  year: number,
  description?: string,
  countries?: Country[],
  genres?: Genre[],
  rating: string | number,
  poster: string | null,
  isFavorite?: boolean,
}

export type MovieCardProps = {
  movie: MoviesCardType,
  cardType: cardType,
  buttonSlot: React.ReactNode,
}

export type MoviesListProps = {
  movies: MoviesCardType[],
  favorites?: MoviesCardType[],
  isLoading: boolean,
  cardType: cardType,
  skeletonType?: SkeletonType,
  direction?: DirectionType,
  buttonType: ButtonType,
  buttonStyleType?: ButtonStyleType,
}

export type MoviesStateType = {
  favorites: MoviesCardType[],
}