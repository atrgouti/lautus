import { useContext } from "react";
import styles from "./itemsCard.module.css";
import closeMenuIcon from "/closeMenu.svg";
import blackShoppingCard from "/blackShoppingCard.svg";
import { themeContext } from "./ThemeContext";
import whatsappIcon from "/whatsappIcon.svg";

function ItemsCard() {
  const {
    activeCard,
    setActiveCard,
    cartItems,
    handleDeleteMovies,
    increaseQuantity,
    decreaseQuntity,
  } = useContext(themeContext);
  console.log(cartItems);

  const total = cartItems.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);

  function handleOrderAllThroughWhatsapp() {
    const message =
      `Hey, I want the following items:\n\n` +
      cartItems
        .map((item) => {
          return (
            `ID: ${item.id}\n` +
            `Name: ${item.title}\n` +
            `Quantity: ${item.quantity}` +
            `Thank you!`
          );
        })
        .join("\n\n");

    const whatsappURL = `https://wa.me/0643357502?text=${encodeURIComponent(
      message
    )}`;

    window.location.href = whatsappURL;
  }

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
          {cartItems.map((item) => (
            <div className={styles.item} key={item.id}>
              <div className={styles.productInfo}>
                <img src={item.image} alt="" />
                <div className={styles.titleQuantity}>
                  <p className={styles.title}>{item.title}</p>
                  <div className={styles.quantity}>
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => decreaseQuntity(item.id)}
                    >
                      -
                    </p>
                    <p style={{ margin: "5px 15px" }}>{item.quantity}</p>
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.price}>
                <img
                  src={closeMenuIcon}
                  className={styles.icon}
                  alt=""
                  onClick={() => handleDeleteMovies(item.id)}
                />
                <p>{item.price} MAD</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <img src={blackShoppingCard} alt="" />
          <p>You don`t have any items in your cart.</p>
          <button>CONTINUE SHOPPING</button>
        </div>
      )}
      {cartItems.length > 0 && (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "bold",
              width: "90%",
              margin: "0px auto",
              marginTop: "30px",
            }}
          >
            <p>SUBTOTAL</p>
            <p>{total} MAD</p>
          </div>
          <div className={styles.buttonOrder}>
            <button onClick={() => handleOrderAllThroughWhatsapp()}>
              ORDER ALL THROUGH WHATSAPP
              <img src={whatsappIcon} alt="" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ItemsCard;
