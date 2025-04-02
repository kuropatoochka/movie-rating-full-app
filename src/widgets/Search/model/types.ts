import { MoviesCardType } from "@/entities/movies/model/types.ts";
import { JSX } from "react";

export type SearchModalProps = {
  movies: MoviesCardType[],
  isVisible: boolean,
  setSearchResultsVisible: () => void,
  buttonSlot: JSX.Element,
}