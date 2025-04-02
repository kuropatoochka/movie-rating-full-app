import React from 'react';
import styles from './styles.module.css';
import { ButtonProps } from "@/shared/interface/types.ts";

export const Button = ( { type, handleClick, text, isActive = false }: ButtonProps ) => {
  return (
    <button
      className={`${styles.button} ${type === 'favorite' ? styles.favoriteButton : type === 'watch' ? styles.watchButton : type === 'search' ? styles.searchButton : styles.defaultButton} ${isActive && styles.active}`}
      type='button'
      onClick={handleClick}
    >
      {text}
    </button>
  );
};