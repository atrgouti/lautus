import Announce from "./generalComponents/Announce";
import Navbar from "./generalComponents/Navbar";
import ActiveFilter from "./generalComponents/ActiveFilter";
import styles from "./ProductDetails.module.css";
import Footer from "./generalComponents/Footer";

import { themeContext } from "./generalComponents/ThemeContext";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import leftArrow from "/blackleftarrow.svg";
import rightArrow from "/blackrightarrow.svg";
import whatsappIcon from "/whatsappIcon.svg";
import heart from "/heartblack.svg";
import size from "/size.svg";
import check from "/check.svg";

//api
import { apiSelectProduct } from "./api/selectProduct";

// tostify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductDetails({ isFixed }) {
  const [chosedImg, setChosedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [chosedColor, setChosedColer] = useState("");
  const [chosedSize, setChosedSize] = useState("");

  const {
    activeSide,
    activeSearch,
    activeCard,
    cartItems,
    addItemToCart,
    setActiveCard,
  } = useContext(themeContext);
  const avaliableColors = ["black", "#FF0000", "#FFC0CB", "green", "orange"];
  const avaliableSizes = ["S", "M", "L", "XL", "XXL"];

  const { id } = useParams();
  const [productData, setProductData] = useState([]);

  useEffect(
    function () {
      async function getData() {
        const data = await apiSelectProduct(id);
        setProductData(data[0]);
      }
      getData();
    },
    [id]
  );

  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);

  function handleOrder(id, title, color, size, type, quantity) {
    if (color.length === 0)
      return toast.error("Please choose a color", {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

    if (size.length === 0)
      return toast.error("Please choose a Size", {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

    // let newObj = {
    //   id: id,
    //   title: title,
    //   color: color,
    //   size: size,
    //   type: type,
    //   quantity: quantity,
    // };
    // console.log(newObj);
    const message =
      `Hey, I want the following hoodie:\n\n` +
      `ID: ${id}\n` +
      `Name: ${title}\n` +
      `Color: ${color}\n` +
      `Size: ${size}\n` +
      `type: ${type}\n` +
      `type: ${quantity}\n` +
      `Thank you!`;

    const whatsappURL = `https://wa.me/0643357502?text=${encodeURIComponent(
      message
    )}`;

    window.location.href = whatsappURL;
  }

  const [selectedClothing, setSelectedClothing] = useState("hoodie");

  const handleClothingChange = (event) => {
    setSelectedClothing(event.target.value);
  };

  return (
    <div>
      {(activeSide || activeCard || activeSearch) && <ActiveFilter />}
      <Announce />
      <Navbar isFixed={isFixed} />
      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className={styles.workingArea}>
        <h3 style={{ paddingTop: "30px" }}>
          Home / Product / {productData?.name}
        </h3>
        <main className={styles.main}>
          <div className={styles.images}>
            <div className={styles.sub}>
              {/* <img
                src="https://ldwmhuavgjpuihqeenqk.supabase.co/storage/v1/object/public/anime/rickandmorty.jpg"
                alt=""
              /> */}
              {productData?.image?.productPhotos?.map((img, idx) => (
                <img onClick={() => setChosedImg(idx)} src={img}></img>
              ))}
            </div>
            <div className={styles.bg}>
              <img
                src={leftArrow}
                className={styles.leftArrow}
                alt=""
                onClick={() => {
                  if (chosedImg > 0) {
                    setChosedImg(0);
                  }
                }}
              />
              <img src={productData?.image?.productPhotos[chosedImg]} alt="" />
              <img
                src={rightArrow}
                className={styles.rightArrow}
                onClick={() => {
                  if (chosedImg < 1) {
                    setChosedImg(1);
                  }
                }}
                alt=""
              />
            </div>
          </div>
          <div className={styles.infos}>
            <h1 className={styles.title}>{productData?.name}</h1>
            <h1 className={styles.price}>
              {productData?.prices?.prices?.[selectedClothing]}.00 MAD
            </h1>
            <div className={styles.features}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={heart} alt="" />
                <p style={{ margin: "5px" }}>add to wish list</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "20px",
                }}
              >
                <img src={size} alt="" />
                <p style={{ margin: "5px" }}>Size Guide</p>
              </div>
            </div>
            <div className={styles.color}>
              <h3>Color :</h3>
              <div style={{ display: "flex", marginLeft: "20px" }}>
                {avaliableColors.map((color) => (
                  <div
                    style={{
                      height: "25px",
                      width: "25px",
                      backgroundColor: `${color}`,
                      borderRadius: "4px",
                      margin: "0px 5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                    onClick={() => setChosedColer(color)}
                  >
                    {chosedColor === color && (
                      <img
                        style={{ zIndex: "20", height: "20px", width: "20px" }}
                        src={check}
                        alt=""
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* select option  */}
            <div
              style={{
                fontFamily: "Arial, sans-serif",
                marginTop: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <h3 htmlFor="clothing" style={{ marginRight: "10px" }}>
                Select Clothing:
              </h3>
              <select
                id="clothing"
                value={selectedClothing}
                onChange={handleClothingChange}
                style={{
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  cursor: "pointer",
                }}
              >
                <option value="">Choose...</option>
                <option value="hoodie">Hoodies</option>
                <option value="sweetshirt">Sweatshirts</option>
                <option value="tshirt">T-shirts</option>
              </select>
            </div>
            <div className={styles.size}>
              <h3>Color :</h3>
              <div style={{ display: "flex", marginLeft: "20px" }}>
                {avaliableSizes.map((size) => (
                  <p
                    onClick={() => setChosedSize(size)}
                    style={{
                      border: `1px solid ${
                        chosedSize === size ? "black" : "rgb(228, 228, 228)"
                      }`,
                    }}
                  >
                    {size}
                  </p>
                ))}
              </div>
            </div>
            <div className={styles.quantity}>
              <h3>Quantity :</h3>
              <div
                style={{
                  display: "flex",
                  marginLeft: "20px",
                  border: "1px solid rgb(228, 228, 228)",
                }}
              >
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity((q) => q - 1);
                    }
                  }}
                >
                  -
                </p>

                <p style={{ fontWeight: "bold" }}>{quantity}</p>
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </p>
              </div>
            </div>

            <button
              className={styles.order}
              onClick={() =>
                handleOrder(
                  productData.product_id,
                  productData.name,
                  chosedColor,
                  chosedSize,
                  selectedClothing,
                  quantity
                )
              }
            >
              Order through whatsapp{" "}
              <img
                src={whatsappIcon}
                style={{ height: "30px", width: "30px" }}
                alt=""
              />
            </button>
            <button
              className={styles.addToCard}
              onClick={() => {
                if (chosedColor.length === 0) {
                  return toast.error("Please choose a color", {
                    position: "bottom-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  });
                }
                if (chosedSize.length === 0) {
                  return toast.error("Please choose a Size", {
                    position: "bottom-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  });
                }

                addItemToCart(
                  productData.product_id,
                  productData.name,
                  productData?.image?.productPhotos[0],
                  quantity,
                  productData.price * quantity,
                  productData.category,
                  productData.price
                );
                setActiveCard(true);
              }}
            >
              Add to card
            </button>
          </div>
        </main>
        <dir className={styles.description}>
          <h2 style={{ padding: "20px" }}>Description</h2>
          <div className={styles.desc}>
            <p>Composition:</p>
            <br />
            <p>- Material: 220 GSM 100% Cotton</p>
            <p>- Fabric Type: Washed</p>
            <p>- Print Quality: High-quality Embroidery</p>
            <p>- Construction: Double-needle Stitched Sleeve and Bottom</p>
          </div>
        </dir>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
