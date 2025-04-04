import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { ButtonIcon, Input } from "@/shared";
import { Magnifier, Xmark } from '@gravity-ui/icons';
import { useDebounce } from "@/shared/lib/utils/hooks/useDebounce.ts";

const SearchMoviesInput = () => {
  const [ , setSearchParams ] = useSearchParams();
  const [ keywords, setKeywords ] = useState('')

  const debouncedKeywords = useDebounce(keywords, 1000)

  useEffect(() => {
    setSearchParams({ keyword: debouncedKeywords });
  }, [ debouncedKeywords ]);

  return (
    <label className={styles.search__form}>
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