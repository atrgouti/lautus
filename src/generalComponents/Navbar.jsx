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
import ItemsCard from "./ItemsCard";
import Search from "./Search";

function Navbar({ isFixed }) {
  const { setActiveSide, setActiveCard, setActiveSearch, cartItems } =
    useContext(themeContext);

  const total = cartItems.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);
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
          <img
            src={searchIcon}
            alt=""
            className={styles.mobileSearchIcon}
            onClick={() => setActiveSearch(true)}
          />
        </div>
        <ul className={styles.ul}>
          <Link to={"/"}>Home</Link>
          <Link to={"/collection/anime"}>Anime</Link>
          <Link to={"/collection/musical-bands"}>Musical Bands</Link>
          <Link to={"/collection/cartoon"}>Cartoon</Link>
          <Link to={"/collection/matchy-matchy"}>Matchy Matchy</Link>
          <Link to={"/collection/tv-show"}>TV Show</Link>
          <Link to={"/collection/gym"}>GYM</Link>
        </ul>
        <div className={styles.logo}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={styles.searchCart}>
          <img
            src={searchIcon}
            alt=""
            className={styles.laptopSearchIcon}
            onClick={() => setActiveSearch(true)}
          />
          <img src={Heart} alt="" />
          <div
            className={styles.shoppingcart}
            onClick={() => setActiveCard(true)}
          >
            <img src={shoppingCart} alt="" />
            <div
              style={{
                height: "100%",
                width: "1px",
                backgroundColor: "white",
                margin: "0px 4px",
              }}
            ></div>
            <p style={{ padding: "10px" }}>{total} MAD</p>
          </div>
          <img
            onClick={() => setActiveCard(true)}
            src={shoppingCart}
            className={styles.mobileShoppingCard}
            alt=""
          />
        </div>
      </div>
      <Sidebar />
      <ItemsCard />
      <Search />
    </nav>
  );
}

export default Navbar;
