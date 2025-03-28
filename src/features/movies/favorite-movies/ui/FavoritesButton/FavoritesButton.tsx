import React from 'react';
import { Button } from "@/shared/ui";
import { favoritesIcons } from "@/shared/assets";
import styles from './styles.module.css';
import { FavoriteButtonPropsType } from "@/features/movies/favorite-movies/model/types.ts";
import { useAppDispatch } from "@/app/appStore.tsx";
import { addMovieToFavorites, removeMovieFromFavorites } from "@/entities/movies/model/moviesSlice.ts";

const FavoritesButton = ( {
                            id,
                            name,
                            movieType,
                            year,
                            poster,
                            description,
                            rating,
                            isFavorite,
                            variant
                          }: FavoriteButtonPropsType ) => {

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
      {variant === 'icon' ? (
        <img
          className={styles.buttonImage}
          src={isFavorite ? favoritesIcons.favoritesActive : favoritesIcons.favoritesDefault}
          alt='Favorite'
          onClick={handleClick}
        />
      ) : (
        <Button
          isActive={isFavorite}
          type='button'
          text={isFavorite ? 'In Favorites' : 'Favorite'}
          handleClick={handleClick}
        />
      )}
    </>
  );
};

export default FavoritesButton;