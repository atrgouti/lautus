import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";
import { themeContext } from "./ThemeContext";
import closeMenuIcon from "/closeMenu.svg";
import rightArrow from "/rightArrow.svg";
import { apiLautusAnimeCate } from "../api/apiLautusAnimeCate";

function Sidebar() {
  const { activeSide, setActiveSide } = useContext(themeContext);
  const [showSubAnime, setShowSubAnime] = useState(false);
  const [animeCat, setAnimeCat] = useState([]);
  useEffect(() => {
    async function getDataCat() {
      let res = await apiLautusAnimeCate();
      setAnimeCat(res);
    }
    getDataCat();
  }, []);

  return (
    <div className={activeSide ? styles.sideBar : styles.active}>
      <img
        src={closeMenuIcon}
        onClick={() => setActiveSide(false)}
        className={styles.closeMenuIcon}
        alt=""
      />
      <div className={styles.links}>
        <ul>
          <li>
            <Link to={"/"} onClick={() => setActiveSide(false)}>
              Home
            </Link>
          </li>
          <li onClick={() => setShowSubAnime(!showSubAnime)}>
            <Link to={"/"}>Anime Collections</Link>
            <img
              src={rightArrow}
              alt=""
              style={{ transform: "rotate(90deg)" }}
            />
          </li>
          {showSubAnime && (
            <ul className={styles.subAnime}>
              {animeCat.map((an) => (
                <Link
                  to={`/collection/anime/${an.title}`}
                  onClick={() => setActiveSide(false)}
                >
                  <li>{an.title}</li>
                </Link>
              ))}
            </ul>
          )}
          <li>
            <Link
              to={"/collection/matchy-matchy"}
              onClick={() => setActiveSide(false)}
            >
              Matchy Matchy
            </Link>
          </li>
          <li>
            <Link
              to={"/collection/tv-show"}
              onClick={() => setActiveSide(false)}
            >
              TV Show Collection
            </Link>
          </li>
          <li>
            <Link
              to={"/collection/cartoon"}
              onClick={() => setActiveSide(false)}
            >
              Cartoon
            </Link>
          </li>
          <li>
            <Link
              to={"/collection/musical-bands"}
              onClick={() => setActiveSide(false)}
            >
              Musical Bands
            </Link>
          </li>
          <li>
            <Link to={"/collection/gym"} onClick={() => setActiveSide(false)}>
              GYM
            </Link>
          </li>
          {/* <li>
            <Link to={"/"}>Custome Design</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
