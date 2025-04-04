import { useEffect } from 'react';
import styles from './styles.module.css';
import { useAppDispatch } from "@/shared/store/store.ts";
import { getFavoriteMovies } from "@/entities/movies/model/moviesSlice.ts";
import TopMovies from "../TopMovies/TopMovies.tsx";

const MainPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!localStorage.movies) {
      localStorage.movies = JSON.stringify([]);
    }
    dispatch(getFavoriteMovies());
  }, []);

  return (
    <main className={styles.main}>
      <TopMovies/>
    </main>
  );
};

export default MainPage;