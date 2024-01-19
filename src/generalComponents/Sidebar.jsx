import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";
import { themeContext } from "./ThemeContext";
import closeMenuIcon from "/closeMenu.svg";
import rightArrow from "/rightArrow.svg";

function Sidebar() {
  const { activeSide, setActiveSide } = useContext(themeContext);

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
            <img src={rightArrow} alt="" />
          </li>
          <div className={styles.line}></div>
          <li>
            <Link to={"/"}>Matchy Matchy</Link>
            <img src={rightArrow} alt="" />
          </li>
          <div className={styles.line}></div>
          <li>
            <Link to={"/"}>Anime Collections</Link>
            <img src={rightArrow} alt="" />
          </li>
          <div className={styles.line}></div>
          <li>
            <Link to={"/"}>Rick & Morty</Link>
            <img src={rightArrow} alt="" />
          </li>
          <div className={styles.line}></div>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
