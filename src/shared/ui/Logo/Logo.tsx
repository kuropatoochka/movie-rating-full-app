import React from 'react';
import styles from './styles.module.css';
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={'/'}>
      <h1 className={styles.logo}>KINOMONSTER</h1>
    </Link>
  );
};

export default Logo;