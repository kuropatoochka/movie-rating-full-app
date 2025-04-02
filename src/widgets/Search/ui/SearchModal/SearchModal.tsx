import { useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.css";
import { SearchModalProps } from "../../model/types.ts";
import { useOutsideClick } from "@/shared/lib/utils/hooks/useOutsideClick.ts";
import { MovieCard, MoviesList } from "@/entities/movies";
import { FavoritesButton } from "@/features/movies/toggle-favorites";
import { RootState, useAppSelector } from "@/app/appStore.tsx";


const SearchModal = ( { movies, isVisible, setSearchResultsVisible, buttonSlot }: SearchModalProps ) => {
  const favorites = useAppSelector(( state: RootState ) => state.movies.favorites);

  const listRef = useRef(null)

  useOutsideClick(listRef, setSearchResultsVisible, isVisible);

  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <div ref={listRef} className={styles.portal}>
      {movies.length > 0 ?
        <>
          <MoviesList
            movies={movies ?? []}
            favorites={favorites}
            cardType='search'
            renderMovies={( movie ) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                cardType='search'
                buttonSlot={
                  <FavoritesButton
                    movie={movie}
                    isFavorite={movie.isFavorite as boolean}
                    buttonType='icon'
                  />
                }
              />
            )}
          />
          {buttonSlot && buttonSlot}
        </>
        : <p>Movies not found</p>
      }
    </div>,
    document.getElementById('search-root')
  );
};

export default SearchModal;