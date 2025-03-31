import { MoviesCardType } from "@/entities/movies/model/types.ts";

export type FavoriteButtonProps = {
  movie: MoviesCardType
  isFavorite: boolean,
  buttonType: 'icon' | 'text',
  buttonStyleType?: 'favorite' | 'watch' | 'search',
}