import styles from './styles.module.css';
import { InputType } from "@/shared/interface/types.ts";

export const Input = ( { value, placeholder, onChange }: InputType ) => {
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