import { useContext } from "react";
import styles from "./itemsCard.module.css";
import closeMenuIcon from "/closeMenu.svg";
import blackShoppingCard from "/blackShoppingCard.svg";
import { themeContext } from "./ThemeContext";

function ItemsCard() {
  const { activeCard, setActiveCard, cartItems } = useContext(themeContext);

  return (
    <div className={activeCard ? styles.itemsCard : styles.active}>
      <img
        src={closeMenuIcon}
        onClick={() => setActiveCard(false)}
        className={styles.closeMenuIcon}
        alt=""
      />
      <p style={{ margin: "20px", fontWeight: "bold" }}>YOUR CART(0)</p>

      {cartItems.length > 0 ? (
        <div className={styles.full}>
          <div className={styles.item}>
            <div className={styles.productInfo}>
              <img
                src="https://ldwmhuavgjpuihqeenqk.supabase.co/storage/v1/object/public/anime/gon-x-killia-hoodie-black.png"
                alt=""
              />
              <div className={styles.titleQuantity}>
                <p className={styles.title}>Awesome Hoodie</p>
                <div className={styles.quantity}>
                  <p>-</p>
                  <p style={{ margin: "5px 15px" }}>2</p>
                  <p>+</p>
                </div>
              </div>
            </div>
            <div className={styles.price}>
              <img src={closeMenuIcon} className={styles.icon} alt="" />
              <p>$24.99</p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.productInfo}>
              <img
                src="https://ldwmhuavgjpuihqeenqk.supabase.co/storage/v1/object/public/anime/gon-x-killia-hoodie-black.png"
                alt=""
              />
              <div className={styles.titleQuantity}>
                <p className={styles.title}>Awesome Hoodie</p>
                <div className={styles.quantity}>
                  <p>-</p>
                  <p style={{ margin: "5px 15px" }}>2</p>
                  <p>+</p>
                </div>
              </div>
            </div>
            <div className={styles.price}>
              <img src={closeMenuIcon} className={styles.icon} alt="" />
              <p>$24.99</p>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.empty}>
          <img src={blackShoppingCard} alt="" />
          <p>You don`t have any items in your cart.</p>
          <button>CONTINUE SHOPPING</button>
        </div>
      )}
    </div>
  );
}

export default ItemsCard;
