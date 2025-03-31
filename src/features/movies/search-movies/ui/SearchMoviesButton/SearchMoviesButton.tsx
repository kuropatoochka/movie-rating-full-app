import React from 'react';
import { Button } from "@/shared/ui";
import { useNavigate } from "react-router-dom";

const SearchMoviesButton = ( { keyword }: string ) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/search?keyword=${keyword}`)
  }

  return (
    <Button text='Watch all' type='search' handleClick={handleClick}/>
  );
};

export default SearchMoviesButton;