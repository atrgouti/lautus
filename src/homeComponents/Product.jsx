import tshirt from "../productImages/tupac-white-tshirt.jpg";
import styles from "./product.module.css";
function Product({ title, image, bg }) {
  return (
    <div
      className={styles.product}
      style={{
        color: bg === "black" ? "white" : "black",
        border: `1px solid ${bg === "black" ? "white" : "black"}`,
      }}
    >
      <img src={image} alt="" />
      <p>{title}</p>
      <p
        style={{
          paddingBottom: "15px",
          color: bg === "black" ? "white" : "black",
        }}
      >
        149 MAD
      </p>
      <button
        style={{
          backgroundColor: bg,
          border: `1px solid ${bg === "black" ? "white" : "black"}`,
          color: bg === "black" ? "white" : "black",
        }}
      >
        BUY IT NOW
      </button>
    </div>
  );
}

export default Product;
