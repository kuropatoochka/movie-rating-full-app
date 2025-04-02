import styles from './styles.module.css';
import { useSearchParams } from "react-router-dom";
import { useGetMoviesByKeywordsQuery } from "@/entities/movies/api/moviesApi.ts";
import { MovieCard, MoviesList } from "@/entities/movies";
import { FavoritesButton } from "@/features/movies/toggle-favorites";
import { Button } from "@/shared";
import { RootState, useAppDispatch, useAppSelector } from "@/app/appStore.tsx";
import { useEffect } from "react";
import { getFavoriteMovies } from "@/entities/movies/model/moviesSlice.ts";
import { MoviesCardType } from "@/entities/movies/model/types.ts";

const SearchPage = () => {
  const [ searchParams ] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const { data } = useGetMoviesByKeywordsQuery(
    { keyword: keyword },
  );

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
      <h3>Search results</h3>

      {data && data.length > 0 ?
        <MoviesList
          movies={data}
          favorites={favorites}
          cardType='full-item'
          renderMovies={( movie: MoviesCardType ) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              cardType='full-item'
              buttonSlot={
                <>
                  <Button type='watch' text="Watch"/>
                  <FavoritesButton
                    movie={movie}
                    isFavorite={movie.isFavorite as boolean}
                    buttonType='text'
                    buttonStyleType='favorite'
                  />
                </>

              }
            />
          )}
        />
        : <p>Movies not found</p>}
    </main>
  );
};

export default SearchPage;