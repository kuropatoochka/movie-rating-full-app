import { useEffect } from "react";

export const useOutsideClick = ( targetRef, onOutsideClick, isActive = true ) => {
  useEffect(() => {
    if (!isActive) return;

    const handleDocumentClick = ( event ) => {
      if (!targetRef.current) return;
      
      if (!targetRef.current.contains(event.target)) {
        onOutsideClick();
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [ targetRef, onOutsideClick, isActive ]);
};