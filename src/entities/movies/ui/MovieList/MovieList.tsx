import React from 'react';
import styles from "./styles.module.css";
import { MoviesCardType, MoviesListProps } from "@/entities/movies/model/types.ts";
import { FavoritesButton } from "@/features/movies/favorite-movies";
import { MovieCard } from "@/entities/movies";
import { RootState, useAppSelector } from "@/app/appStore.tsx";


const MovieList = ( { movies, type = 'item', variant }: MoviesListProps ) => {

  const favorites = useAppSelector(( state: RootState ) => state.movies.favorites);

  return (
    <ul className={`${type === 'item' ? styles.items_list : styles.search_list}`}>
      {movies?.map(( { id, name, movieType, year, poster, description, rating }: MoviesCardType ) => {
        const isFavorite = favorites.some(( movie ) => movie.id === id);
        return (
          <MovieCard
            key={id}
            name={name}
            movieType={movieType}
            year={year}
            poster={poster}
            description={description}
            rating={rating}
            type={type}
            buttonSlot={
              <FavoritesButton
                key={id}
                id={id}
                name={name}
                movieType={movieType}
                year={year}
                poster={poster}
                description={description}
                rating={rating}
                isFavorite={isFavorite}
                variant={variant}
              />
            }
          />
        )
      })}
    </ul>
  );
};

export default MovieList;