import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import styles from './styles.module.css';
import { BookmarkFill } from "@gravity-ui/icons";
import { MoviesList } from "@/widgets/MoviesList";
import { SearchMoviesButton, SearchMoviesInput } from "@/features/movies/search-movies";
import { useGetMoviesByKeywordsQuery } from "@/entities/movies/api/moviesApi.ts";
import { RootState, useAppSelector } from "@/shared/store/store.ts";
import { ButtonIcon, Logo, Modal } from "@/shared";

const Header = () => {
  const navigate = useNavigate()

  const location = useLocation()
  const isModal = location.pathname !== "/search"

  const [ isSearchResultsVisible, setSearchResultsVisible ] = useState(false)

  const [ searchParams ] = useSearchParams()
  const keyword = searchParams.get('keyword') || ''

  useEffect(() => {
    setSearchResultsVisible(keyword.length > 0);
  }, [ keyword ]);

  const { data, isLoading } = useGetMoviesByKeywordsQuery(
    { keyword: keyword },
  )

  const favorites = useAppSelector(( state: RootState ) => state.movies.favorites);

  return (
    <header className={styles.header}>
      <Logo/>
      <div id='search-root' className={styles.search}>
        <SearchMoviesInput/>
        {isModal && isSearchResultsVisible &&
          <Modal
            id='search-root'
            isVisible={isSearchResultsVisible}
            setSearchResultsVisible={() => setSearchResultsVisible(false)}
          >
            <MoviesList
              movies={data || []}
              favorites={favorites}
              isLoading={isLoading}
              direction='column'
              skeletonType='search'
              cardType='search'
              buttonType='icon'
            />
            <SearchMoviesButton keyword={keyword}/>
          </Modal>
        }
      </div>
      <ButtonIcon
        defaultIcon=<BookmarkFill/>
        handleClick={() => navigate('/favorites')}
      />
    </header>
  );
};

export default Header;