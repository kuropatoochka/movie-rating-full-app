import styles from "./styles.module.css";
import withSkeleton from "@/shared/lib/utils/hocs/withSkeleton.tsx";
import { MoviesCardType, MoviesListProps } from "@/entities/movies/model/types.ts";
import { Button } from "@/shared";
import { FavoritesButton } from "@/features/movies/toggle-favorites";
import { MovieCard } from "@/entities/movies";

const MoviesList = ( { movies, favorites, cardType = 'item', buttonType, buttonStyleType, }: MoviesListProps ) => {
  const moviesWithFavorites: MoviesCardType[] = movies.map(movie => ({
    ...movie,
    isFavorite: favorites?.some(favorite => favorite.id === movie.id),
  }));

  return (
    <ul
      className={`${cardType === 'item' ? styles.items_list : styles.search_list} ${cardType === 'full-item' && styles.full__items_list}`}>
      {moviesWithFavorites.map(( movie ) =>
        <MovieCard
          key={movie.id}
          movie={movie}
          cardType={cardType}
          buttonSlot={
            <>
              {cardType === 'full-item' && <Button type='watch' text="Watch"/>}
              <FavoritesButton
                movie={movie}
                isFavorite={movie.isFavorite as boolean}
                buttonType={buttonType}
                buttonStyleType={buttonStyleType}
              />
            </>
          }
        />)}
    </ul>
  )
};

const MoviesListWithSkeleton = withSkeleton<MoviesListProps>(MoviesList, 20);

export default MoviesListWithSkeleton;