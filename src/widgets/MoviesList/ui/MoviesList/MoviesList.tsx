import styles from "./styles.module.css";
import { MoviesCardType, MoviesListProps } from "@/entities/movies/model/types.ts";
import { MovieCard } from "@/entities/movies";
import withSkeleton from "@/shared/lib/utils/hocs/withSkeleton.tsx";
import { Button } from "@/shared/ui";
import { FavoritesButton } from "@/features/movies/toggle-favorites";
import { RootState, useAppSelector } from "@/app/appStore.tsx";

const MoviesList = ( { movies, type = 'item', buttonType, buttonStyleType }: MoviesListProps ) => {
  const favorites = useAppSelector(( state: RootState ) => state.movies.favorites);

  const moviesWithFavorites: MoviesCardType[] = movies.map(movie => ({
    ...movie,
    isFavorite: favorites.some(favorite => favorite.id === movie.id),
  }));

  return (
    <ul
      className={`${type === 'item' ? styles.items_list : styles.search_list} ${type === 'full-item' && styles.full__items_list}`}>
      {moviesWithFavorites?.map(movie => {
        return (
          <MovieCard
            key={movie.id}
            movie={movie}
            type={type}
            buttonSlot={
              <>
                {type === 'full-item' && <Button text='Watch' type='watch'/>}
                <FavoritesButton
                  key={movie.id}
                  movie={movie}
                  isFavorite={movie.isFavorite as boolean}
                  buttonType={buttonType}
                  buttonStyleType={buttonStyleType}
                />
              </>
            }
          />
        )
      })}
    </ul>
  );
};

const MoviesListWithSkeleton = withSkeleton<MoviesListProps>(MoviesList, 20);

export default MoviesListWithSkeleton;