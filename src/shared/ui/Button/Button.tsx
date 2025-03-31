import React from 'react';
import styles from './styles.module.css';
import { ButtonType } from "@/shared/interface/types.ts";

export const Button: React.FC<ButtonType> = ( { type = 'default', handleClick, text, isActive = false } ) => {
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