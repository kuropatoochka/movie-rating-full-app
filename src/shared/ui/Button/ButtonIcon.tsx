import React from "react";
import styles from "./styles.module.css";
import { ButtonIconType } from "@/shared/interface/types.ts";

export const ButtonIcon: React.FC<ButtonIconType> = ( { alt, isActive, handleClick, activeIcon, defaultIcon } ) => {
  return (
    <img
      alt={alt}
      src={isActive ? activeIcon : defaultIcon}
      className={styles.buttonImage}
      onClick={handleClick}/>
  );
};