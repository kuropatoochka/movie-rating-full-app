import { MoviesCardType } from "@/entities/movies/model/types.ts";
import { JSX } from "react";

export type SearchMoviesInputProps = {
  keywords: string,
  setKeywords: ( value: string ) => void,
}

export type SearchModalProps = {
  movies: MoviesCardType[],
  type: 'search' | 'item',
  isVisible: boolean,
  setSearchResultsVisible: () => void,
  buttonSlot: JSX.Element,
  isLoading: boolean,
}