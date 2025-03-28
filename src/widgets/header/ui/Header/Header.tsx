import React from 'react';
import styles from './styles.module.css';
import { Logo } from "@/shared/ui";
import { SearchMovies } from "@/widgets/movies/search";

const Header = () => {

  return (
    <header className={styles.header}>
      <Logo/>
      <SearchMovies/>
    </header>
  );
};

export default Header;