import styles from './styles.module.css';
import { MoviesList } from "@/widgets/MoviesList";
import { useSearchParams } from "react-router-dom";
import { useGetMoviesByKeywordsQuery } from "@/entities/movies/api/moviesApi.ts";

const SearchPage = () => {
  const [ searchParams ] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const { data, isLoading } = useGetMoviesByKeywordsQuery(
    { keyword: keyword },
  );

  return (
    <main className={styles.main}>
      <h3>Search results</h3>

      {data?.films && data.films.length > 0 ?
        <MoviesList
          movies={data && data.films}
          isLoading={isLoading}
          type='full-item'
          buttonType='text'
          buttonStyleType='favorite'
        />
        : <p>Movies not found</p>}
    </main>
  );
};

export default SearchPage;