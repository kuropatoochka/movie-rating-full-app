import { Button } from "@/shared/ui";
import { useNavigate } from "react-router-dom";

const SearchMoviesButton = ( { keyword } ) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/search?keyword=${keyword}`)
  }

  return (
    <Button text='Watch all' type='search' handleClick={handleClick}/>
  );
};

export default SearchMoviesButton;