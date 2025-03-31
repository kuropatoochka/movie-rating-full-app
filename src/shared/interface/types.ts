import React from "react";

export type Params = {
  type: string,
  page: number,
  keyword: string
}

export type ParamsType = Partial<Params>;

export type SkeletonType = "search" | "item";
export type DirectionType = "row" | "column";

export type InputType = {
  placeholder: string,
  value: string,
  onChange: ( e: React.ChangeEvent<HTMLInputElement> ) => void,
}

export type ButtonType = {
  text: string,
  type?: 'favorite' | 'watch' | 'search',
  handleClick?: ( e?: React.MouseEvent ) => void,
  isActive?: boolean,
}

export type ButtonIconType = {
  alt: string,
  isActive?: boolean,
  activeIcon?: string,
  defaultIcon?: string,
  handleClick?: ( e?: React.MouseEvent | '' ) => void,
}

