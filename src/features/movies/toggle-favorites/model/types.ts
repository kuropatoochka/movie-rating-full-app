import { MoviesCardType } from "@/entities/movies/model/types.ts";
import { ButtonStyleType, ButtonType } from "@/shared/interface/types.ts";

export type FavoriteButtonProps = {
  movie: MoviesCardType
  isFavorite: boolean,
  buttonType: ButtonType,
  buttonStyleType?: ButtonStyleType,
}