import { Link } from "react-router-dom";
import Logo from "/logo2.png";
import searchIcon from "/search.svg";
import shoppingCart from "/shoppingCart.svg";
import Heart from "/heart.svg";
import BurgerIcon from "/burgerIcon.svg";
import styles from "./navbar.module.css";
import Sidebar from "./Sidebar";
import ActiveFilter from "./ActiveFilter";

//importing
import { themeContext } from "./ThemeContext";
import { useContext } from "react";

function Navbar({ isFixed }) {
  const { setActiveSide } = useContext(themeContext);

  return (
    <nav className={styles.nav}>
      {/* {activeSide && <ActiveFilter />} */}
      {isFixed && <div style={{ height: "100px", width: "100%" }}></div>}
      <div className={isFixed ? styles.fixedNav : styles.navArea}>
        <div className={styles.mobileOpenMenuSearch}>
          <img
            className={styles.openMenu}
            src={BurgerIcon}
            onClick={() => setActiveSide(true)}
            alt=""
          />
          <img src={searchIcon} alt="" className={styles.mobileSearchIcon} />
        </div>
        <ul className={styles.ul}>
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>Anime</Link>
          <Link to={"/"}>Musical Bands</Link>
          <Link to={"/"}>Cartoon</Link>
          <Link to={"/"}>Matchy Matchy</Link>
          <Link to={"/"}>TV Show</Link>
          <Link to={"/"}>GYM</Link>
          <Link to={"/"}>Contact Us</Link>
        </ul>
        <div className={styles.logo}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={styles.searchCart}>
          <img src={searchIcon} alt="" className={styles.laptopSearchIcon} />
          <img src={Heart} alt="" />
          <div className={styles.shoppingcart}>
            <img src={shoppingCart} alt="" />
            <div
              style={{
                height: "100%",
                width: "1px",
                backgroundColor: "white",
                margin: "0px 4px",
              }}
            ></div>
            <p style={{ padding: "10px" }}>0 MAD</p>
          </div>
          <img
            src={shoppingCart}
            className={styles.mobileShoppingCard}
            alt=""
          />
        </div>
      </div>
      <Sidebar />
    </nav>
  );
}

export default Navbar;
