import React from 'react';
import styles from "./styles.module.css";
import { searchIcon } from "@/shared/assets";
import { Input } from "@/shared/ui";

interface Props {
  keywords: string;
  setKeywords: ( value: string ) => void;
}

const Search = ( { keywords, setKeywords }: Props ) => {
  return (
    <label className={styles.search}>
      <Input
        placeholder='Search...'
        value={keywords}
        onChange={( e ) => setKeywords(e.target.value)}
      />
      <img
        className={styles.search__icon}
        src={searchIcon}
        alt="search"
      />
    </label>
  );
};

export default Search;