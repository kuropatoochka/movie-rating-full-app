import React from 'react';
import { ButtonType } from "@/shared/types/ButtonType.ts";
import styles from './styles.module.css';

export const Button: React.FC<ButtonType> = ( { isActive, type, handleClick, text } ) => {
  return (
    <button
      className={styles.button}
      type={type}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};