import { MoviesCardType } from "@/entities/movies/model/types.ts";
import React from "react";

export type SearchMoviesInputProps = {
  keywords: string,
  setKeywords: ( value: string ) => void,
}

export type SearchModalProps = {
  movies: MoviesCardType[],
  type: 'search' | 'item',
  isVisible: boolean,
  setSearchResultsVisible: () => void,
  buttonSlot: React.ReactNode,
  isLoading: boolean,
}