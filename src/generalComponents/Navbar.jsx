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

function Navbar() {
  const { activeSide, setActiveSide } = useContext(themeContext);

  return (
    <nav className={styles.nav}>
      {activeSide && <ActiveFilter />}
      <div className={styles.navArea}>
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
          <Link to={"/"}>Hoodies</Link>
          <Link to={"/"}>Sweatshirts</Link>
          <Link to={"/"}>T-Shirts</Link>
          <Link to={"/"}>Custom Design</Link>
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
