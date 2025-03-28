import React, { useEffect, useState } from 'react';
import { Search } from "@/features/search";
import { ModalMovies } from "@/features/movies/modal-movies";
import { useDebounce } from "@/shared/hooks/useDebounce.ts";
import { useGetMoviesByKeywordsQuery } from "@/entities/movies/api/moviesApi.ts";

const SearchMovies = () => {
  const [ keywords, setKeywords ] = useState('')
  const debouncedKeywords = useDebounce(keywords, 1500)
  const { data } = useGetMoviesByKeywordsQuery({ keyword: debouncedKeywords })

  const [ isSearchResultsVisible, setSearchResultsVisible ] = useState(false);

  useEffect(() => {
    setSearchResultsVisible(debouncedKeywords.length > 0);
  }, [ debouncedKeywords ]);

  return (
    <div id='search-root'>
      <Search keywords={keywords} setKeywords={setKeywords}/>
      {isSearchResultsVisible &&
        <ModalMovies
          movies={data && data.films}
          type='search'
          isVisible={isSearchResultsVisible}
          setSearchResultsVisible={() => setSearchResultsVisible(false)}
        />
      }
    </div>
  );
};

export default SearchMovies;