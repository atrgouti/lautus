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
            <Link to={"/"}>Home</Link>
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
              <li>One piece</li>
              <li>Dragon Ball</li>
              <li>Hunter X Hunter</li>
              <li>Death Note</li>
            </ul>
          )}
          <li>
            <Link to={"/"}>Matchy Matchy</Link>
          </li>
          <li>
            <Link to={"/"}>TV Show Collection</Link>
          </li>
          <li>
            <Link to={"/"}>Musical Bands</Link>
          </li>
          <li>
            <Link to={"/"}>GYM</Link>
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
