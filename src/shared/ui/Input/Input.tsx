import React from 'react';
import styles from './styles.module.css';
import { InputType } from "@/shared/types/InputTypes.ts";

export const Input: React.FC<InputType> = ( { value, placeholder, onChange } ) => {
  return (
    <input
      className={styles.input}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;