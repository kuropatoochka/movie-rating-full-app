import { MovieList } from "@/entities/movies";
import React, { useRef } from "react";
import { useOutsideClick } from "@/shared/hooks/useOutsideClick.ts";
import ReactDOM from "react-dom";
import styles from './styles.module.css';
import { MoviesCardType } from "@/entities/movies/model/types.ts";

interface Props {
  movies: MoviesCardType[];
  type: 'search' | 'item';
  isVisible: boolean;
  setSearchResultsVisible: () => void;
}

const ModalMovies = ( { movies, type, isVisible, setSearchResultsVisible }: Props ) => {
  const listRef = useRef(null)

  useOutsideClick(listRef, setSearchResultsVisible, isVisible);

  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <div ref={listRef} className={styles.portal}>
      <MovieList
        movies={movies}
        type={type}
        variant="icon"
      />
    </div>,
    document.getElementById('search-root')
  );
};

export default ModalMovies