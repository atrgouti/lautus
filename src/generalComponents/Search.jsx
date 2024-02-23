import styles from "./Search.module.css";
import closeMenuIcon from "/closeMenu.svg";

import { themeContext } from "./ThemeContext";
import { useContext, useEffect, useState } from "react";
import { apiSearch } from "../api/searchApi";
import { Link } from "react-router-dom";

function Search() {
  const { activeSearch, setActiveSearch } = useContext(themeContext);
  const [inputValue, setInputValue] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(
    function () {
      if (inputValue.length > 1) {
        apiSearch(inputValue).then((data) => setSearchData(data));
      }
    },
    [inputValue]
  );

  return (
    <div className={activeSearch ? styles.active : styles.search}>
      <img
        src={closeMenuIcon}
        className={styles.closeMenu}
        onClick={() => {
          setActiveSearch(false);
          setInputValue("");
        }}
        alt=""
      />
      <div className={styles.area}>
        <h2>What are you looking for?</h2>
        <input
          placeholder="Search for products brands and more"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <div
          style={{ width: "100%", backgroundColor: "gray", height: "1px" }}
        ></div>
        {inputValue.length > 2 ? (
          <div className={styles.showProducts}>
            {searchData.map((item, index) => (
              <Link
                to={`/product/${item.product_id}`}
                onClick={() => setActiveSearch(false)}
              >
                <div className={styles.product} key={index}>
                  <img src={item?.image?.productPhotos[0]} alt="" />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                      flexDirection: "column",
                      margin: "10px",
                    }}
                  >
                    <p style={{ fontSize: "16px" }}>{item.name}</p>
                    <p style={{ color: "orangered", fontSize: "14px" }}>
                      {item?.prices?.prices?.hoodie} MAD
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className={styles.examples}>
            Popular Searches: Jeans Dress Top summer
          </p>
        )}
      </div>
    </div>
  );
}

export default Search;
