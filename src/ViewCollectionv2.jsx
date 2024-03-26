import { useContext, useEffect, useState } from "react";
import styles from "./viewCollection.module.css";
import Announce from "./generalComponents/Announce";
import Navbar from "./generalComponents/Navbar";
import Footer from "./generalComponents/Footer";
import ActiveFilter from "./generalComponents/ActiveFilter";
import shirt from "./productImages/tupac2.jpg";
import loadIcon from "/loading.gif";
// import BlurHashImageComponent from "./generalComponents/BlurHashImageComponent";

import { themeContext } from "./generalComponents/ThemeContext";
import { Link, useParams } from "react-router-dom";

import { apiLautusProductsPagination } from "./api/apiLautusProductsPagination";

function ViewCollection({ isFixed }) {
  const { activeSide, activeSearch, activeCard } = useContext(themeContext);
  const [isLoading, setIsLOading] = useState(false);
  const [myData, setMyData] = useState([]);
  const { collectionName, animeName } = useParams();
  const [sortBy, setOrderBy] = useState("");

  useEffect(() => {
    async function getData() {
      let res = await apiLautusProductsPagination(
        collectionName,
        setIsLOading,
        animeName,
        sortBy
      );
      setMyData(res);
    }
    getData();
  }, [collectionName, sortBy, animeName]);

  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {(activeSide || activeCard || activeSearch) && <ActiveFilter />}
      <Announce />
      <Navbar isFixed={isFixed} />
      <div className={styles.adjust}>
        <h2>{collectionName}</h2>
        <select
          id="clothing"
          style={{
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
          value={sortBy}
          onChange={(e) => setOrderBy(e.target.value)}
        >
          <option value="initial">Sort by</option>
          <option value="title_ASC">A - Z</option>
          <option value="title_DESK">Z - A</option>
          <option value="price_ASC">Lowest price</option>
          <option value="price_DESC">Heighst Price</option>
          <option value="date_ASC">New to Old</option>
          <option value="date_DESC">Old to New</option>
        </select>
      </div>

      {isLoading ? (
        <div className={styles.loading}>
          <img src={loadIcon} alt="" />
        </div>
      ) : myData?.length > 0 ? (
        <div className={styles.allProducts}>
          {myData?.map((product) => (
            <Link
              key={product.product_id}
              to={`/product/${product.product_id}`}
            >
              <div className={styles.product} key={product.product_id}>
                <img src={product.image.productPhotos[0]} alt="" />

                <p className={styles.title}>{product.name}</p>
                <p style={{ textAlign: "center" }}>{product.price}.00 MAD</p>
                <button className={styles.buyitnow}>BUY IT NOW</button>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className={styles.loading}>
          <p>no avaliable items.</p>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default ViewCollection;
