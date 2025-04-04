import React, { JSX } from "react";

export type SkeletonType = "search" | "item";
export type DirectionType = "row" | "column";

export type SkeletonProps = Partial<{
  skeletonType: SkeletonType,
  direction: DirectionType,
  count: number,
}>

export type InputType = {
  placeholder: string,
  value: string,
  onChange: ( e: React.ChangeEvent<HTMLInputElement> ) => void,
}

export type ButtonType = 'icon' | 'text'
export type ButtonStyleType = 'favorite' | 'watch' | 'search'

export type ButtonProps = {
  text: string,
  type?: ButtonStyleType,
  handleClick?: ( e: React.MouseEvent<HTMLButtonElement> ) => void,
  isActive?: boolean,
}

export type ButtonIconProps = {
  handleClick: () => void,
  isActive?: boolean,
  defaultIcon: JSX.Element,
  activeIcon?: JSX.Element,
}

export type ModalProps = {
  id: string,
  isVisible: boolean,
  setSearchResultsVisible: () => void,
  children: React.ReactNode,
}

