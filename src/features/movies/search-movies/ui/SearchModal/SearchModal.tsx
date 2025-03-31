import { useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.css";
import { useOutsideClick } from "@/shared/lib/utils/hooks/useOutsideClick.ts";
import { SearchModalProps } from "../../model/types.ts";
import { MoviesList } from "@/widgets/MoviesList";

const SearchModal = ( {
                        movies,
                        type,
                        isVisible,
                        setSearchResultsVisible,
                        buttonSlot,
                        isLoading
                      }: SearchModalProps ) => {
  const listRef = useRef(null)

  useOutsideClick(listRef, setSearchResultsVisible, isVisible);

  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <div ref={listRef} className={styles.portal}>
      {movies && movies.length > 0 ? <>
        <MoviesList
          movies={movies}
          isLoading={isLoading}
          type={type}
          buttonType='icon'
          buttonStyleType='favorite'
          skeletonType='search'
        />
        {buttonSlot && buttonSlot}
      </> : <p>Movies not found</p>}
    </div>,
    document.getElementById('search-root') as HTMLElement
  );
};

export default SearchModal;