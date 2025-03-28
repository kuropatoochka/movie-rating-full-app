import React from "react";

export type ButtonType = {
  text: string;
  isActive: boolean;
  type?: 'button' | 'submit',
  handleClick?: ( e?: React.MouseEvent ) => void,
}