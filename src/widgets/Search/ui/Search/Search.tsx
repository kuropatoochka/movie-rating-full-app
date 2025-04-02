import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import styles from './styles.module.css';
import { SearchMoviesButton, SearchMoviesInput } from "@/features/movies/search-movies";
import { useGetMoviesByKeywordsQuery } from "@/entities/movies/api/moviesApi.ts";
import { useDebounce } from "@/shared/lib/utils/hooks/useDebounce.ts";
import SearchModal from "../SearchModal/SearchModal.tsx";

const Search = () => {
  const location = useLocation();
  const isModal = location.pathname !== "/search";

  const [ searchParams, setSearchParams ] = useSearchParams();

  const [ keywords, setKeywords ] = useState(searchParams.get('keyword') || '')
  const debouncedKeywords = useDebounce(keywords, 1000)

  const [ isSearchResultsVisible, setSearchResultsVisible ] = useState(false)

  const { data } = useGetMoviesByKeywordsQuery(
    { keyword: debouncedKeywords }
  )

  useEffect(() => {
    setSearchResultsVisible(debouncedKeywords.length > 0);
    setSearchParams({ keyword: debouncedKeywords });
  }, [ debouncedKeywords ]);

  return (
    <div id='search-root' className={styles.search}>
      <SearchMoviesInput
        keywords={keywords}
        setKeywords={setKeywords}
      />
      {isModal && isSearchResultsVisible &&
        <SearchModal
          movies={data ?? []}
          isVisible={isSearchResultsVisible}
          setSearchResultsVisible={() => setSearchResultsVisible(false)}
          buttonSlot={<SearchMoviesButton keyword={debouncedKeywords}/>}
        />
      }
    </div>
  );
};

export default Search;