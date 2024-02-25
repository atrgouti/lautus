import styles from "./wish.module.css";
import Announce from "./generalComponents/Announce";
import Navbar from "./generalComponents/Navbar";
import { useContext } from "react";
import ActiveFilter from "./generalComponents/ActiveFilter";

//importing
import { themeContext } from "./generalComponents/ThemeContext";
import { Link } from "react-router-dom";

function WishList({ isFixed }) {
  const {
    activeSide,
    activeSearch,
    activeCard,
    wishList,
    deleteProductWishList,
  } = useContext(themeContext);

  return (
    <>
      {(activeSide || activeCard || activeSearch) && <ActiveFilter />}

      <div className={styles.wishlist}>
        <Announce></Announce>
        <Navbar isFixed={isFixed} />
        <h1 className={styles.header}>Wishlist</h1>
        <div className={styles.infos}>
          <p>Product</p>
          <p>Price</p>
        </div>
        <div className={styles.allProducts}>
          {wishList?.map((item) => (
            <div className={styles.product} key={item.hash}>
              <div className={styles.title}>
                <img src={item.image} alt="" />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p>{item.title}</p>
                  <p className={styles.mobileThing}>{item.initialPrice}</p>
                  <p className={styles.mobileThing} style={{ color: "green" }}>
                    In Stock
                  </p>
                  <div style={{ display: "flex" }}>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/product/${item.id}`}
                    >
                      <button
                        className={styles.mobileThing}
                        style={{
                          backgroundColor: "orange  ",
                          color: "white",
                          border: "none",
                          padding: "10px",
                          marginLeft: "25px",
                          marginTop: "10px",
                        }}
                      >
                        VIEW PRODUCT
                      </button>
                    </Link>
                    <button
                      onClick={() => deleteProductWishList(item.id)}
                      className={styles.mobileThing}
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        border: "none",
                        padding: "10px",
                        marginLeft: "5px",
                        marginTop: "10px",
                      }}
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.price}>
                <p>{item.initialPrice} MAD</p>
                {/* <p>In Stock</p> */}
                <div className={styles.view}>
                  <Link to={`/product/${item.id}`}>
                    <button>VIEW PRODUCT</button>
                  </Link>
                  <button onClick={() => deleteProductWishList(item.id)}>
                    X
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WishList;
