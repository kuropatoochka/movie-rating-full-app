import React, { useEffect } from 'react';
import styles from './styles.module.css'
import { RootState, useAppDispatch, useAppSelector } from "@/app/appStore.tsx";
import { FavoritesButton } from "@/features/movies/toggle-favorites";
import { getFavoriteMovies } from "@/entities/movies/model/moviesSlice.ts";
import { MovieCard, MoviesList } from "@/entities/movies";


const FavoritesPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!localStorage.movies) {
      localStorage.movies = JSON.stringify([]);
    }
    dispatch(getFavoriteMovies());
  }, []);

  const favorites = useAppSelector(( state: RootState ) => state.movies.favorites);

  return (
    <main className={styles.main}>
      <h3>Favorites movies</h3>
      <MoviesList
        movies={favorites}
        cardType='item'
        isLoading={false}
        renderMovies={( movie ) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            cardType='item'
            buttonSlot={
              <FavoritesButton
                movie={movie}
                isFavorite={true}
                buttonType='icon'
              />
            }
          />
        )}
      />
    </main>
  );
};

export default FavoritesPage;