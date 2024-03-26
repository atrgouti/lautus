import Announce from "./generalComponents/Announce";
import Navbar from "./generalComponents/Navbar";
import ActiveFilter from "./generalComponents/ActiveFilter";
import SizeGuide from "./SizeGuide";
import styles from "./ProductDetails.module.css";
import Footer from "./generalComponents/Footer";

import { themeContext } from "./generalComponents/ThemeContext";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import leftArrow from "/blackleftarrow.svg";
import rightArrow from "/blackrightarrow.svg";
import whatsappIcon from "/whatsappIcon.svg";
import heart from "/heartblack.svg";
import fullHeart from "/fullHeart.svg";
import size from "/size.svg";
import check from "/check.svg";

//api
import { apiSelectProduct } from "./api/selectProduct";

// tostify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SelectWithSearch from "./SelectWithSearch";

function ProductDetails({ isFixed }) {
  const [chosedImg, setChosedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [chosedColor, setChosedColer] = useState("");
  const [chosedSize, setChosedSize] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const {
    activeSide,
    activeSearch,
    activeCard,
    cartItems,
    addItemToCart,
    setActiveCard,
    addItemsToWishList,
    wishList,
    sizeGuide,
    setSizeGuide,
  } = useContext(themeContext);
  const avaliableColors = [
    "black",
    "whitesmoke",
    "red",
    "pink",
    "green",
    "orange",
  ];
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

    if (selectedCity.length === 0)
      return toast.error("Please choose a city", {
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
      `Hey, I want the following item:\n\n` +
      `ID: ${id}\n` +
      `Name: ${title}\n` +
      `Color: ${color}\n` +
      `Size: ${size}\n` +
      `Type: ${type}\n` +
      `Quantity: ${quantity}\n` +
      `Price: ${productData?.prices?.prices?.[selectedClothing] * quantity}\n` +
      `City: ${selectedCity}\n` +
      `Shipping price: ${cities[selectedCity]}\n` +
      `Total price: ${
        productData?.prices?.prices?.[selectedClothing] * quantity +
        cities[selectedCity]
      }\n` +
      `Thank you!`;

    const whatsappURL = `https://wa.me/0665929360?text=${encodeURIComponent(
      message
    )}`;

    window.location.href = whatsappURL;
  }

  const [selectedClothing, setSelectedClothing] = useState("hoodie");

  const handleClothingChange = (event) => {
    setSelectedClothing(event.target.value);
  };

  //add shiping functionality
  // const cities = {
  //   rabat: 45,
  // };
  const cities = {
    Afourar: 39,
    Afra: 39,
    Agadir: 35,
    Agds: 45,
    Agouidir: 45,
    Agourai: 39,
    Aguelmous: 39,
    Ahfir: 45,
    "Ain Aicha": 45,
    "Ain Attig": 39,
    "Ain chkaf": 39,
    "Ain El Aouda": 39,
    "Aïn Erreggada": 45,
    "Ain Harrouda": 29,
    "Ain Leuh": 45,
    "Ain Mediouna": 45,
    "Ain Taoujdate": 45,
    "Aïn-Béni-Mathar": 45,
    "Ain-Cheggag": 45,
    "Ait Aiaaza": 45,
    "Ait Aissa Ou Brahim": 45,
    "Ait Amira": 39,
    "Ait hadi": 45,
    "Aït Ishaq": 39,
    "Aït Melloul": 35,
    "Ait ourir": 45,
    "Ait Sedrate Sahl Gharbia": 45,
    "Aït Tarzout": 45,
    "Ait-Kamara": 45,
    Ajdir: 45,
    Aklim: 45,
    Aknoul: 39,
    "Al Aaroui": 45,
    "Al Hoceima": 39,
    Alnif: 45,
    Anza: 39,
    Aoufous: 45,
    Aoulouz: 45,
    'Aourir "Région Agadir"': 39,
    Arfoud: 45,
    Assahrij: 45,
    Assilah: 39,
    "Ayt Ihya": 45,
    Azemmour: 39,
    Azilal: 45,
    'Azrou "Aït Melloul"': 45,
    'Azrou "Région de Fès-Meknès"': 39,
    BabBerred: 39,
    "Bab Taza": 45,
    "Bani Walid": 45,
    "Bassatine El Menzeh": 39,
    Bejaad: 39,
    Belfaa: 45,
    "Ben Ahmed": 39,
    "Ben Taieb": 45,
    Benguerir: 39,
    "Beni Ayat": 39,
    "Beni Chiker": 45,
    "Beni Drar": 45,
    "Beni Ensar": 39,
    "Beni Mellal": 35,
    "Beni Sidal Jbel": 45,
    Benslimane: 35,
    Berkane: 39,
    Berrechid: 35,
    Biougra: 39,
    "Bni Bouayach": 45,
    "Bni Hadifa": 45,
    "Bni yakhlef": 35,
    Bouaboud: 45,
    Bouârfa: 45,
    Bouarg: 39,
    Boudinar: 45,
    Boufakrane: 39,
    Boughriba: 45,
    Bouhouda: 45,
    Boujdour: 45,
    Boujniba: 39,
    Boukidaren: 45,
    Boulman: 45,
    "Boumalen dades": 45,
    Boumia: 45,
    Bounoir: 39,
    Boured: 45,
    Bouskoura: 29,
    Bouznika: 35,
    Bradia: 39,
    "Cabo Negro": 39,
    Casablanca: 20,
    Chefchaouen: 39,
    "Chellalat Mohammedia": 35,
    Chichaoua: 39,
    Chtouka: 39,
    Chwiter: 45,
    Dakhla: 45,
    "Dar Bouaza": 35,
    "Dar Essalam": 39,
    "Dar Ould Zidouh": 39,
    "Dar-El Kebdani": 45,
    "Dcheira El Jihadia": 39,
    Demnate: 45,
    Deroua: 29,
    "Douar Lahna": 39,
    Drarga: 39,
    Driouch: 45,
    Echemmaia: 39,
    "El Aarjate": 45,
    "El Aïoun Charqiya": 45,
    "El Borouj": 45,
    "El Gara": 39,
    "El Hajeb": 39,
    "El jadida": 35,
    "El Kebab": 45,
    "El Kelaa Des Sraghna": 39,
    "El Ksiba": 45,
    "El Mansouria": 35,
    "El-afak": 39,
    Errachidia: 45,
    Errahma: 29,
    "Er-Rich": 45,
    Essaouira: 35,
    Essemara: 45,
    farkhana: 45,
    Fes: 35,
    Figuig: 45,
    Fnideq: 39,
    "Foum Oudi": 39,
    "Fquih Ben Salah": 45,
    Ghafsai: 45,
    Ghazoua: 39,
    Goulmima: 45,
    Guelmim: 39,
    Guercif: 39,
    Gueznaia: 45,
    Guisser: 45,
    "Had Boumoussa": 39,
    "Had Soualem": 35,
    "Haj Kaddour": 39,
    Harhoura: 39,
    Hettan: 39,
    Ifran: 39,
    Ighoud: 45,
    "Ighrem Laâlam": 39,
    Imintanout: 45,
    "Imouzzer du Kandar": 45,
    Imzouren: 45,
    Inzegane: 35,
    Issaguen: 45,
    Jaadar: 39,
    "Jamaat Shaim": 45,
    Jebila: 39,
    Jerada: 45,
    "Kariat Arekmane": 45,
    "Kasba Tadla": 39,
    Kassita: 45,
    "Kelaat M'Gouna": 45,
    Kenitra: 35,
    Khandagour: 39,
    "Khemis Des Zemamra": 39,
    Khemisset: 39,
    Khenichet: 45,
    Khenifra: 39,
    Khouribga: 35,
    "Ksar El Kebir": 39,
    "Ksar Sghir": 45,
    Laaouamera: 45,
    Laarache: 39,
    Laattaouia: 39,
    Laayayta: 39,
    Laâyoune: 45,
    Lagfifat: 45,
    Lahbichat: 45,
    Leqliaa: 39,
    Loudaya: 39,
    Madagh: 39,
    Mariouari: 45,
    Marnissa: 45,
    Marrakech: 35,
    Martil: 39,
    Massa: 45,
    Mdiq: 39,
    "Mechra Bel Ksiri": 45,
    Mediouna: 29,
    Mehdia: 39,
    'Mejat "Région de Fès-Meknès"': 39,
    "Mejjat - Région de Marrakech": 45,
    Meknes: 35,
    "Mers El Kheir": 39,
    Merzouga: 45,
    Midar: 45,
    Midelt: 45,
    Missour: 45,
    Mnar: 45,
    Mohammedia: 29,
    "Moulay Abdellah": 39,
    "Moulay Bousselham": 45,
    "Moulay Idriss zerhouni": 39,
    "Moulay Yâcoub": 39,
    Mrirt: 39,
    Mzoudia: 45,
    Nador: 35,
    Nouacer: 29,
    Oualidia: 39,
    Ouaouizeght: 39,
    Ouarzazate: 39,
    Ouazzane: 45,
    "Oued Amlil": 39,
    "Oued law": 45,
    "Oued Zem": 39,
    Ouislane: 35,
    Oujda: 35,
    "Oulad Abbou": 45,
    "Oulad Ali": 39,
    "Oulad Ayad": 39,
    "Oulad Azzouz Dar 16": 35,
    "Oulad Berhil": 45,
    "Oulad M'barek": 39,
    "Oulad Said": 45,
    "Oulad Tayeb": 39,
    "Oulad Teima": 39,
    "Oulad Yaich": 39,
    "Oulad Youssef": 39,
    "Oulad Zmam": 39,
    "Ouled Dahhou": 45,
    "Ouled Hassoune": 45,
    "Ouled Moumna": 45,
    "Ouled Settout": 45,
    Oulmès: 45,
    Ourika: 45,
    "Outat El Haj": 45,
    Rabat: 35,
    'Ras El Ain "Région de Settat"': 45,
    "Ras El Ma - Cap de l'eau": 39,
    Rencon: 39,
    Rissani: 45,
    Safi: 35,
    Sahla: 39,
    Saidia: 39,
    Saiss: 39,
    "Sakia El hamra": 45,
    "Sala El Jadida": 39,
    Sale: 35,
    "Sebt El Guerdane": 45,
    "Sebt Gzoula": 39,
    "Sebt Oulad Nemma": 45,
    Sefrou: 45,
    Selouane: 39,
    Settat: 35,
    "Sid L'Mokhtar": 45,
    "Sidi Abdellah Ghiyat": 45,
    "Sidi Addi": 45,
    "Sidi Aïssa": 39,
    "Sidi Allal El Bahraoui": 45,
    "Sidi Allal Tazi": 45,
    "Sidi Bennour": 39,
    "Sidi Bibi": 45,
    "Sidi bou zid Chichaoua": 45,
    "Sidi Bouknadel": 39,
    "Sidi Bouzid": 39,
    "Sidi chiker": 45,
    "Sidi El Ayedi": 45,
    "Sidi Hajjaj": 45,
    "Sidi Hrazem": 39,
    "Sidi Hssain": 45,
    "Sidi Ifni": 45,
    "Sidi Jaber": 39,
    "Sidi Kacem": 45,
    'Sidi Moussa "Région de Marrakech"': 45,
    "Sidi rahal": 35,
    "Sidi Slimane": 45,
    "Sidi Yahya El Gharb": 45,
    Skhinate: 45,
    Skhirat: 39,
    Skoura: 45,
    Souihla: 45,
    "Souira Guedima": 39,
    "Souk El Arbaa Du Gharb": 45,
    "Souk Sebt": 39,
    Tafersit: 45,
    Taghazout: 45,
    Tagzirt: 39,
    Tahanaout: 39,
    Tahla: 45,
    Taliouine: 45,
    Tamansourt: 39,
    Tamaris: 29,
    Tamellalt: 39,
    Tameslouht: 45,
    Tamesna: 39,
    Tamraght: 45,
    Tamsamane: 45,
    Tanger: 35,
    "Tan-Tan": 45,
    Taounate: 39,
    Taourirt: 45,
    Tarast: 39,
    Targuist: 45,
    Taroudant: 39,
    Taza: 39,
    Taznakht: 45,
    "Telat Azlaf": 45,
    Temara: 35,
    Temsia: 39,
    Tendrara: 45,
    Tetouan: 39,
    Tiddas: 45,
    Tiflet: 39,
    Tighassaline: 39,
    Tikiwin: 35,
    Timoulilt: 39,
    Tinejdad: 45,
    Tinghir: 45,
    Tissa: 45,
    "Tit Melil": 29,
    "Tizi Ouasli": 45,
    Tiznit: 39,
    Tiztoutine: 45,
    "Tlat Bouguedra": 39,
    Touima: 45,
    Tssoultante: 39,
    Youssoufia: 39,
    zaer: 35,
    Zagoura: 45,
    Zaida: 45,
    Zaio: 45,
    "Zaouiat Cheikh": 39,
    Zeghanghane: 39,
  };

  const handleSelectCity = (city) => {
    setSelectedCity(city);
  };

  return (
    <div>
      {(activeSide || activeCard || activeSearch) && <ActiveFilter />}

      {sizeGuide && <SizeGuide setSizeGuide={setSizeGuide} />}
      {sizeGuide && <ActiveFilter />}
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
              {productData?.image?.productPhotos.length > 1 && (
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
              )}
              <img src={productData?.image?.productPhotos[chosedImg]} alt="" />
              {productData?.image?.productPhotos.length > 1 && (
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
              )}
            </div>
          </div>
          <div className={styles.infos}>
            <h1 className={styles.titlee}>{productData?.name}</h1>
            <h1 className={styles.price}>
              {productData?.prices?.prices?.[selectedClothing]}.00 MAD
            </h1>
            <div className={styles.features}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {/* <img src={heart} alt="" /> */}
                {wishList.some((t) => t.id === productData.product_id) ? (
                  <>
                    <img src={fullHeart} alt="" />
                    <p
                      style={{ margin: "5px", cursor: "pointer" }}
                      onClick={() =>
                        addItemsToWishList(
                          productData.product_id,
                          productData.name,
                          productData?.image?.productPhotos[chosedImg],
                          productData.price
                        )
                      }
                    >
                      Added to wishlist
                    </p>
                  </>
                ) : (
                  <>
                    <img src={heart} alt="" />
                    <p
                      style={{ margin: "5px", cursor: "pointer" }}
                      onClick={() =>
                        addItemsToWishList(
                          productData.product_id,
                          productData.name,
                          productData?.image?.productPhotos[chosedImg],
                          productData.price
                        )
                      }
                    >
                      Add to wish List
                    </p>
                  </>
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "20px",
                }}
              >
                <img src={size} alt="" />
                <p
                  style={{ margin: "5px", cursor: "pointer" }}
                  onClick={() => setSizeGuide(true)}
                >
                  Size Guidee
                </p>
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
                <option value="cap">Caps</option>
                <option value="buckets">Buckets</option>
                <option value="mug">Mugs</option>
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
            {/* shipping  */}
            <div style={{ margin: "20px 0px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h3>City:</h3>
                <SelectWithSearch cities={cities} onSelect={handleSelectCity} />
              </div>
              {selectedCity && (
                <p style={{ marginTop: "10px", fontWeight: "bold" }}>
                  Your shipping price to {selectedCity} is{" "}
                  <span style={{ color: "red" }}>
                    {cities[selectedCity]} MAD
                  </span>
                </p>
              )}
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

                if (selectedCity.length === 0)
                  return toast.error("Please choose a city", {
                    position: "bottom-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  });

                addItemToCart(
                  productData.product_id,
                  productData.name,
                  productData?.image?.productPhotos[0],
                  quantity,
                  productData?.prices?.prices?.[selectedClothing] * quantity,
                  productData.category,
                  productData.price,
                  selectedCity,
                  cities[selectedCity],
                  selectedClothing,
                  chosedColor
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
            <br />
            <p>
              <b>Material:</b> Made from{" "}
              {selectedClothing === "sweetshirt" ? "70%" : "100%"} Cotton,
              offering superior softness and breathability, ensuring all-day
              comfort in any season.
            </p>
            <p>
              <b>Printing Technology:</b> DTF printing technology, our designs
              are rendered with exceptional clarity, color vibrancy, and detail.
              DTF printing ensures long-lasting, fade-resistant prints that
              stand the test of time.
            </p>
          </div>
        </dir>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
