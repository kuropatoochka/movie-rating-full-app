import { Button } from "@/shared";
import { useNavigate } from "react-router-dom";

const SearchMoviesButton = ( { keyword }: { keyword: string } ) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/search?keyword=${keyword}`)
  }

  return (
    <Button type='search' text='Watch all' handleClick={handleClick}/>
  );
};

export default SearchMoviesButton;