import styles from "./styles.module.css";
import { MoviesCardType, MoviesListProps } from "../../model/types.ts";
import withSkeleton from "@/shared/lib/utils/hocs/withSkeleton.tsx";

const MoviesList = ( { movies, favorites, cardType = 'item', renderMovies }: MoviesListProps ) => {

  const moviesWithFavorites: MoviesCardType[] = movies.map(movie => ({
    ...movie,
    isFavorite: favorites?.some(favorite => favorite.id === movie.id),
  }));

  return (
    <ul
      className={`${cardType === 'item' ? styles.items_list : styles.search_list} ${cardType === 'full-item' && styles.full__items_list}`}
    >
      {moviesWithFavorites.map(( movie ) => renderMovies(movie))}
    </ul>
  );
};

const MoviesListWithSkeleton = withSkeleton<MoviesListProps>(MoviesList, 20);

export default MoviesListWithSkeleton;