import React, { useState } from 'react';
import styles from './styles.module.css';
import { categories } from "@/entities/category/constants/constants.ts";
import { useGetTopMoviesQuery } from "@/entities/movies/api/moviesApi.ts";
import { MovieList } from "@/entities/movies";
import { Categories } from "@/features/category";
import { useAppSelector } from "@/app/appStore.tsx";

const TopMovies = () => {
  const [ selectedCategory, setSelectedCategory ] = useState(categories[0].id)
  const { data } = useGetTopMoviesQuery({ type: selectedCategory });

  const favorites = useAppSelector(state => state.movies.favorites)

  console.log(favorites)

  return (
    <section className={styles.section}>
      <Categories
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <MovieList
        movies={data && data.items}
        type='item'
        variant="icon"
      />
    </section>
  );
};

export default TopMovies;