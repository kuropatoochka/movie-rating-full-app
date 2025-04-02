import styles from "./styles.module.css";
import { ButtonIcon, Input } from "@/shared";
import { Magnifier, Xmark } from '@gravity-ui/icons';

type SearchMoviesInputProps = {
  keywords: string,
  setKeywords: ( value: string ) => void,
}

const SearchMoviesInput = ( { keywords, setKeywords }: SearchMoviesInputProps ) => {
  return (
    <label className={styles.search}>
      <Input
        placeholder='Search...'
        value={keywords}
        onChange={( e ) => setKeywords(e.target.value)}
      />
      <ButtonIcon
        isActive={!!keywords}
        defaultIcon=<Magnifier/>
        activeIcon=<Xmark/>
        handleClick={() => setKeywords('')}
      />
    </label>
  );
};

export default SearchMoviesInput;