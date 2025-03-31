import React from 'react';
import { useAppDispatch } from "@/app/appStore.tsx";
import { addMovieToFavorites, removeMovieFromFavorites } from "@/entities/movies/model/moviesSlice.ts";
import { Button, ButtonIcon } from "@/shared/ui";
import { favoritesIcons } from "@/shared/assets";
import { FavoriteButtonProps } from "../../model/types.ts";
import { MoviesCardType } from "@/entities/movies/model/types.ts";

const FavoritesButton = ( { movie, isFavorite, buttonType, buttonStyleType }: FavoriteButtonProps ) => {
  const { id, name, movieType, year, poster, description, rating }: MoviesCardType = movie

  const dispatch = useAppDispatch()

  const handleClick = () => {
    if (!isFavorite) {
      dispatch(addMovieToFavorites({ id, name, movieType, year, poster, description, rating, isFavorite }));
    } else {
      dispatch(removeMovieFromFavorites(id));
    }
  }

  return (
    <>
      {buttonType === 'icon' ? (
        <ButtonIcon
          alt='favorites'
          isActive={isFavorite}
          activeIcon={favoritesIcons.favoritesActive}
          defaultIcon={favoritesIcons.favoritesDefault}
          handleClick={handleClick}
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