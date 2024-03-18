import style from "./home.module.css";
import Announce from "./generalComponents/Announce";
import Navbar from "./generalComponents/Navbar";
import AnimeCategories from "./homeComponents/AnimeCategories";
import ProductsCarousel from "./homeComponents/ProductsCarousel";
import cover from "/bgNew.jpg";
import Footer from "./generalComponents/Footer";
import ActiveFilter from "./generalComponents/ActiveFilter";
import { useEffect, useState, useContext } from "react";
import { apiLautusProducts } from "./api/apiLautusProducts";
import { apiLautusAnimeCate } from "./api/apiLautusAnimeCate";

//importing
import { themeContext } from "./generalComponents/ThemeContext";

function Home({ isFixed }) {
  const [loding, setIsLoading] = useState(false);
  const [musicalBands, setMusicalBands] = useState([]);
  const [cartoon, setCartoon] = useState([]);
  const [matchy, setMatchy] = useState([]);
  const [tvShow, setTvShow] = useState([]);
  const [gym, setGym] = useState([]);
  const [animeCate, setAnimeCate] = useState([]);
  useEffect(() => {
    async function getData() {
      let res = await apiLautusProducts("none", setIsLoading);
      setMusicalBands(res.filter((d) => d.category === "musical-bands"));
      setCartoon(res.filter((d) => d.category === "cartoon"));
      setMatchy(res.filter((d) => d.category === "matchy-matchy"));
      setTvShow(res.filter((d) => d.category === "tv-show"));
      setGym(res.filter((d) => d.category === "gym"));
    }
    getData();
  }, []);

  // fetch anime categories
  useEffect(() => {
    async function getCate() {
      let res = await apiLautusAnimeCate();
      setAnimeCate(res);
    }
    getCate();
  }, []);

  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);
  const { activeSide, activeSearch, activeCard } = useContext(themeContext);

  const animecatiz = [
    { id: 1, anime: "onepiece", img: "/attackCompersed.jpg" },
    { id: 1, anime: "onepiece", img: "/attackOnTitans.jpg" },
    { id: 1, anime: "onepiece", img: "/compressOnePiece.webp" },
    { id: 1, anime: "onepiece", img: "/narutoCompres.jpg" },
    { id: 1, anime: "onepiece", img: "/compressOnePiece.webp" },
  ];

  return (
    <>
      {(activeSide || activeCard || activeSearch) && <ActiveFilter />}
      <div className={style.home}>
        <Announce></Announce>
        <Navbar isFixed={isFixed} />
        <img
          src={cover}
          style={{
            width: "100%",
            margin: "0px",
            padding: "0px",
          }}
          alt=""
        />
        <AnimeCategories
          header={"Anime Categories"}
          data={animeCate}
          bg={"black"}
        />
        <div style={{ backgroundColor: "black" }}>
          {musicalBands && (
            <ProductsCarousel
              header={"Musical Brand Collection"}
              data={musicalBands}
              bg={"black"}
            />
          )}

          <ProductsCarousel
            header={"Cartoon Collections"}
            data={cartoon}
            bg={"black"}
          />
        </div>
        {/* <ProductsCarousel
            data={CartoonCollection}
            header={"Cartoon Collections"}
            bg={"black"}
          />
        </div>
        <div style={{ backgroundColor: "white" }}>
          <ProductsCarousel
            header={"Matchy Collection"}
            data={matchy}
            bg={"white"}
          />
          <ProductsCarousel data={tvShow} header={"TV Shows"} bg={"white"} />
          <ProductsCarousel data={gym} header={"GYM"} bg={"white"} /> */}
        <div>
          <ProductsCarousel
            header={"Matchy Collection"}
            data={matchy}
            bg={"white"}
          />
          <ProductsCarousel data={tvShow} header={"TV Shows"} bg={"white"} />
          <ProductsCarousel data={gym} header={"GYM"} bg={"white"} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
