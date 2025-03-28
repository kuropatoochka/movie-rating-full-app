import React from 'react';
import styles from './styles.module.css';
import TopMovies from "@/widgets/movies/top-movies/ui/TopMovies/TopMovies.tsx";

const MainPage = () => {
  return (
    <main className={styles.main}>
      <TopMovies/>
    </main>
  );
};

export default MainPage;