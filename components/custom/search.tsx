import useInput from "hooks/use-input";
import React from "react";
import styles from "styles/custom/search.module.scss";
import SearchIcon from "public/icons/search.svg";

const SearchBar = () => {
  const [searchValue, onChangeSerachValue] = useInput("");

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        value={searchValue}
        onChange={onChangeSerachValue}
        placeholder="#해쉬태그로 검색해 보세요"
      />
      <button className={styles.button}>
        <SearchIcon fill="#00ac77" />
      </button>
    </div>
  );
};

export default SearchBar;
