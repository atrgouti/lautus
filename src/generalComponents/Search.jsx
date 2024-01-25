import styles from "./Search.module.css";
import closeMenuIcon from "/closeMenu.svg";

import { themeContext } from "./ThemeContext";
import { useContext } from "react";

function Search() {
  const { activeSearch, setActiveSearch } = useContext(themeContext);
  return (
    <div className={activeSearch ? styles.active : styles.search}>
      <img
        src={closeMenuIcon}
        className={styles.closeMenu}
        onClick={() => setActiveSearch(false)}
        alt=""
      />
      <div className={styles.area}>
        <h2>What are you looking for?</h2>
        <input placeholder="Search for products brands and more" type="text" />
        <div
          style={{ width: "100%", backgroundColor: "gray", height: "1px" }}
        ></div>
        <p className={styles.examples}>
          Popular Searches: Jeans Dress Top summer
        </p>
      </div>
    </div>
  );
}

export default Search;
