import { ButtonIconProps } from "@/shared/interface/types.ts";
import styles from './styles.module.css';

export const ButtonIcon = ( { isActive = false, handleClick, activeIcon, defaultIcon }: ButtonIconProps ) => {
  return (
    <button className={styles.buttonIcon} onClick={handleClick}>
      {isActive ? activeIcon : defaultIcon}
    </button>
  );
};