import styles from "./styles.module.css";
import { ButtonIcon, Input } from "@/shared/ui";
import { searchIcon } from "@/shared/assets";
import { SearchMoviesInputProps } from "../../model/types.ts";

const SearchMoviesInput = ( { keywords, setKeywords }: SearchMoviesInputProps ) => {
  return (
    <label className={styles.search}>
      <Input
        placeholder='Search...'
        value={keywords}
        onChange={( e ) => setKeywords(e.target.value)}
      />
      <ButtonIcon
        alt='search'
        isActive={!!keywords}
        defaultIcon={searchIcon.searchDefault}
        activeIcon={searchIcon.searchActive}
        handleClick={() => setKeywords('')}
      />
    </label>
  );
};

export default SearchMoviesInput;