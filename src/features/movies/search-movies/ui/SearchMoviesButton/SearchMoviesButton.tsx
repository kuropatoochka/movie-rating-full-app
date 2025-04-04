import { Button } from "@/shared";
import { useNavigate } from "react-router-dom";

const SearchMoviesButton = ( { keyword } ) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/search?keyword=${keyword}`)
  }

  return (
    <Button type='search' text='Watch all' handleClick={handleClick}/>
  );
};

export default SearchMoviesButton;