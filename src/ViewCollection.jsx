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

import { apiLautusProducts } from "./api/apiLautusProducts";

function ViewCollection({ isFixed }) {
  const { activeSide, activeSearch, activeCard } = useContext(themeContext);
  const [isLoading, setIsLOading] = useState(false);
  const [myData, setMyData] = useState([]);
  const { collectionName, animeName } = useParams();

  console.log(animeName);
  useEffect(() => {
    async function getData() {
      let res = await apiLautusProducts(
        collectionName,
        setIsLOading,
        animeName
      );
      setMyData(res);
    }
    getData();
  }, [collectionName]);

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
        <select name="" id="">
          <option value="">Sort by</option>
          <option value="">Sort by</option>
          <option value="">Sort by</option>
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
