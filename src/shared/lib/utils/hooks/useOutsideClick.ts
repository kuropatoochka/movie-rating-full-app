import React, { useEffect } from "react";

export const useOutsideClick = (
  targetRef: React.RefObject<HTMLDivElement | null>,
  onOutsideClick: () => void,
  isActive: boolean = true
) => {
  useEffect(() => {
    if (!isActive) return;

    const handleDocumentClick = ( event: MouseEvent ) => {
      if (!targetRef.current) return;

      if (!targetRef.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [ targetRef, onOutsideClick, isActive ]);
};
