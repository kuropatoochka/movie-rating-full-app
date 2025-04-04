import { useEffect } from "react";
import styles from './styles.module.css';
import { useSearchParams } from "react-router-dom";
import { useGetMoviesByKeywordsQuery } from "@/entities/movies/api/moviesApi.ts";

import { getFavoriteMovies } from "@/entities/movies/model/moviesSlice.ts";
import { RootState, useAppDispatch, useAppSelector } from "@/shared/store/store.ts";
import { MoviesList } from "@/widgets/MoviesList";

const SearchPage = () => {
  const [ searchParams ] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!localStorage.movies) {
      localStorage.movies = JSON.stringify([]);
    }
    dispatch(getFavoriteMovies());
  }, []);

  const favorites = useAppSelector(( state: RootState ) => state.movies.favorites);

  const { data, isLoading } = useGetMoviesByKeywordsQuery(
    { keyword: keyword },
    { keepUnusedDataFor: 0 }
  );
  console.log(isLoading)
  return (
    <main className={styles.main}>
      <h3>Search results</h3>
      <MoviesList
        movies={data}
        favorites={favorites}
        isLoading={isLoading}
        direction='column'
        cardType='full-item'
        buttonType='text'
        buttonStyleType='favorite'
      />
      {!!data && <p>Movies not found</p>}
    </main>
  );
};

export default SearchPage;