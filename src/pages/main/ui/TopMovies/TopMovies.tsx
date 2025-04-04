import { useState } from 'react';
import styles from './styles.module.css';
import { CategoryTabs } from "@/features/movies/change-movies-category";
import { categories } from "@/features/movies/change-movies-category/constants/constants.ts";
import { useGetTopMoviesQuery } from "@/entities/movies/api/moviesApi.ts";
import { RootState, useAppSelector } from "@/shared/store/store.ts";
import { MoviesList } from "@/widgets/MoviesList";


const TopMovies = () => {
  const [ selectedCategory, setSelectedCategory ] = useState(categories[0].id)
  const { data, isLoading } = useGetTopMoviesQuery({ type: selectedCategory });
  const favorites = useAppSelector(( state: RootState ) => state.movies.favorites);

  return (
    <section className={styles.section}>
      <CategoryTabs
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <MoviesList
        movies={data ?? []}
        favorites={favorites}
        isLoading={isLoading}
        skeletonType='item'
        direction='row'
        cardType='item'
        buttonType='icon'
      />
    </section>
  );
};

export default TopMovies;