import { useContext } from "react";
import styles from "./sidebar.module.css";
import { themeContext } from "./ThemeContext";
import closeMenuIcon from "/closeMenu.svg";

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
      <h1>hello</h1>
    </div>
  );
}

export default Sidebar;
