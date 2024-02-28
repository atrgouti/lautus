import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";
import { themeContext } from "./ThemeContext";
import closeMenuIcon from "/closeMenu.svg";
import rightArrow from "/rightArrow.svg";

function Sidebar() {
  const { activeSide, setActiveSide } = useContext(themeContext);
  const [showSubAnime, setShowSubAnime] = useState(false);

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
              <Link
                to={"/collection/anime/onepiece"}
                onClick={() => setActiveSide(false)}
              >
                <li>One piece</li>
              </Link>
              <Link
                to={"/collection/anime/attack_on_titans"}
                onClick={() => setActiveSide(false)}
              >
                <li>Attack on titan</li>
              </Link>
              <Link
                to={"/collection/anime/hunter-x-hunter"}
                onClick={() => setActiveSide(false)}
              >
                <li>Hunter X Hunter</li>
              </Link>
              <Link
                to={"/collection/anime/jujusto-kaisen"}
                onClick={() => setActiveSide(false)}
              >
                <li>Jujusto Kaisen</li>
              </Link>
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
          <li>
            <Link to={"/"}>Custome Design</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
