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
import { apiLautusProducts } from "./api/apiLautusProducts";

function ViewCollection({ isFixed }) {
  const { activeSide, activeSearch, activeCard } = useContext(themeContext);
  const [isLoading, setIsLOading] = useState(false);
  const [myData, setMyData] = useState([]);
  const { collectionName, animeName } = useParams();
  const [sortBy, setOrderBy] = useState("");
  const [offset, setOffSet] = useState(0);
  const [notNicessery, setNotNicessery] = useState(false);
  const [dataLength, setDataLength] = useState(0);

  console.log(dataLength);

  useEffect(() => {
    if (offset === 0) {
      async function getData() {
        let res = await apiLautusProductsPagination(
          collectionName,
          setIsLOading,
          animeName,
          sortBy,
          offset
        );
        setMyData(res);
      }
      getData();
    }
  }, [collectionName, sortBy, animeName]);

  useEffect(() => {
    if (offset > 0) {
      async function getData() {
        try {
          const newData = await apiLautusProductsPagination(
            collectionName,
            setNotNicessery,
            animeName,
            sortBy,
            offset,
            5
          );

          setMyData((prevData) => [...prevData, ...newData]); // Append only new items to myData
        } catch (error) {
          console.error(error);
        }
      }

      getData();
    }
  }, [collectionName, sortBy, animeName, offset]); // Include offset as a dependency

  // get the length
  useEffect(() => {
    async function getData() {
      let res = await apiLautusProducts(
        collectionName,
        setIsLOading,
        animeName,
        sortBy
      );
      setDataLength(res.length);
    }
    getData();
  }, [collectionName, sortBy, animeName]);

  const handleShowMore = () => {
    setOffSet((prevOffset) => prevOffset + 5); // Increment offset by 10
  };

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
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {dataLength > myData.length && (
          <button
            onClick={() => handleShowMore()}
            style={{
              padding: "12px 40px",
              backgroundColor: "black",
              color: "whitesmoke",
              textAlign: "center",
              margin: "20px 0px",
              cursor: "pointer",
              border: "none",
              fontWeight: "bold",
              letterSpacing: "2px",
              // borderRadius: "10px",
            }}
          >
            SHOW MORE
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ViewCollection;
