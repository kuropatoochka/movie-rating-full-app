import React, { useRef } from "react";
import { useOutsideClick } from "@/shared/lib/utils/hooks/useOutsideClick.ts";
import ReactDOM from "react-dom";
import styles from "./styles.module.css";
import { ModalProps } from "@/shared/interface/types.ts";

const Modal = ( { id, isVisible, setSearchResultsVisible, children }: ModalProps ) => {

  const listRef = useRef<HTMLDivElement | null>(null)

  useOutsideClick(listRef, setSearchResultsVisible, isVisible);

  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <div ref={listRef} className={styles.modal}>
      {children}
    </div> as React.ReactNode,
    document.getElementById(id) as HTMLElement
  );
};

export default Modal;