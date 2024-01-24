import { useContext } from "react";
import styles from "./itemsCard.module.css";
import closeMenuIcon from "/closeMenu.svg";
import blackShoppingCard from "/blackShoppingCard.svg";
import { themeContext } from "./ThemeContext";

function ItemsCard() {
  const { activeCard, setActiveCard } = useContext(themeContext);

  return (
    <div className={activeCard ? styles.itemsCard : styles.active}>
      <img
        src={closeMenuIcon}
        onClick={() => setActiveCard(false)}
        className={styles.closeMenuIcon}
        alt=""
      />
      <p style={{ margin: "20px", fontWeight: "bold" }}>YOUR CART(0)</p>

      <div className={styles.empty}>
        <img src={blackShoppingCard} alt="" />
        <p>You don`t have any items in your cart.</p>
        <button>CONTINUE SHOPPING</button>
      </div>
    </div>
  );
}

export default ItemsCard;
