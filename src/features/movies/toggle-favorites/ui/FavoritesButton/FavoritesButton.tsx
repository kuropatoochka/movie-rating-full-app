import { useAppDispatch } from "@/app/appStore.tsx";
import { addMovieToFavorites, removeMovieFromFavorites } from "@/entities/movies/model/moviesSlice.ts";
import { Button, ButtonIcon } from "@/shared";
import { FavoriteButtonProps } from "../../model/types.ts";
import { Bookmark, BookmarkFill } from '@gravity-ui/icons';

const FavoritesButton = ( { movie, isFavorite, buttonType, buttonStyleType }: FavoriteButtonProps ) => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    if (!isFavorite) {
      dispatch(addMovieToFavorites(movie));
    } else {
      dispatch(removeMovieFromFavorites(movie.id));
    }
  }

  return (
    <>
      {buttonType === 'icon' ? (
        <ButtonIcon
          isActive={isFavorite}
          handleClick={handleClick}
          defaultIcon=<Bookmark/>
          activeIcon=<BookmarkFill/>
        />
      ) : (
        <Button
          isActive={isFavorite}
          text={isFavorite ? 'In Favorites' : 'Favorite'}
          handleClick={handleClick}
          type={buttonStyleType}
        />
      )}
    </>
  );
};

export default FavoritesButton;