import { useState } from 'react';
import styles from './styles.module.css';
import { MoviesList } from "@/widgets/MoviesList";
import { CategoryTabs } from "@/features/movies/change-movies-category";
import { categories } from "@/features/movies/change-movies-category/constants/constants.ts";
import { useGetTopMoviesQuery } from "@/entities/movies/api/moviesApi.ts";

const TopMovies = () => {
  const [ selectedCategory, setSelectedCategory ] = useState(categories[0].id)
  const { data, isLoading } = useGetTopMoviesQuery({ type: selectedCategory });

  return (
    <section className={styles.section}>
      <CategoryTabs
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <MoviesList
        movies={data && data}
        isLoading={isLoading}
        type='item'
        buttonType='icon'
        skeletonType='item'
        direction='row'
      />
    </section>
  );
};

export default TopMovies;