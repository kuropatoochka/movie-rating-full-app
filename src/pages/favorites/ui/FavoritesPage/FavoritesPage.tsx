import { useEffect } from 'react';
import styles from './styles.module.css'
import { RootState, useAppDispatch, useAppSelector } from "@/shared/store/store.ts";
import { getFavoriteMovies } from "@/entities/movies/model/moviesSlice.ts";
import { MoviesList } from "@/widgets/MoviesList";

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
        favorites={favorites}
        cardType='item'
        buttonType='icon'
      />
    </main>
  );
};

export default FavoritesPage;