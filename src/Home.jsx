import style from "./home.module.css";
import Announce from "./generalComponents/Announce";
import Navbar from "./generalComponents/Navbar";
import AnimeCategories from "./homeComponents/AnimeCategories";
import ProductsCarousel from "./homeComponents/ProductsCarousel";
import cover from "/bagi.jpg";
import Footer from "./generalComponents/Footer";
import ActiveFilter from "./generalComponents/ActiveFilter";
import { useEffect, useState, useContext } from "react";
import { apiLautusProducts } from "./api/apiLautusProducts";

//importing
import { themeContext } from "./generalComponents/ThemeContext";

function Home({ isFixed }) {
  const [loding, setIsLoading] = useState(false);
  const [mydata, setMyData] = useState([]);

  useEffect(() => {
    async function getData() {
      let res = await apiLautusProducts("anime", setIsLoading);
      setMyData(mydata);
      console.log(res);
    }
    getData();
  }, []);

  const { activeSide, activeSearch, activeCard } = useContext(themeContext);

  const [mosucalBrands, setMosucalBrands] = useState([
    {
      id: 1,
      image: "./src/productImages/tupac-white-tshirt.jpg",
      title: "Tupac White T-Shirt",
      price: 149,
    },
    {
      id: 2,
      image: "./src/productImages/tupac-white-tshirt.jpg",
      title: "Tupac Black T-Shirt",
      price: 149,
    },
    {
      id: 3,
      image: "./src/productImages/tupac-white-tshirt.jpg",
      title: "Tupac White T-Shirt",
      price: 149,
    },
    {
      id: 4,
      image: "./src/productImages/tupac-white-tshirt.jpg",
      title: "Tupac White T-Shirt",
      price: 149,
    },
    {
      id: 5,
      image: "./src/productImages/tupac-white-tshirt.jpg",
      title: "Tupac White T-Shirt",
      price: 149,
    },
    {
      id: 6,
      image: "./src/productImages/tupac-white-tshirt.jpg",
      title: "Tupac White T-Shirt",
      price: 149,
    },
  ]);

  const [CartoonCollection, setCartoonCollection] = useState([
    {
      id: 1,
      image: "./src/productImages/onepiece.jpg",
      title: "Darwin T-Shirt",
      price: 149,
    },
    {
      id: 2,
      image: "./src/productImages/darwin.jpg",
      title: "Tupac Black T-Shirt",
      price: 149,
    },
    {
      id: 3,
      image: "./src/productImages/darwin.jpg",
      title: "Darwin T-Shirt",
      price: 149,
    },
    {
      id: 4,
      image: "./src/productImages/darwin.jpg",
      title: "Darwin T-Shirt",
      price: 149,
    },
  ]);

  const [matchy, setMatchy] = useState([
    {
      id: 1,
      image: "./src/productImages/matchy.jpg",
      title: "Darwin T-Shirt",
      price: 149,
    },
    {
      id: 2,
      image: "./src/productImages/matchy2.jpg",
      title: "Tupac Black T-Shirt",
      price: 149,
    },
    {
      id: 3,
      image: "./src/productImages/matchy3.jpg",
      title: "Darwin T-Shirt",
      price: 149,
    },
    {
      id: 4,
      image: "./src/productImages/matchy4.jpg",
      title: "Darwin T-Shirt",
      price: 149,
    },
  ]);
  const [tvShow, setTvShow] = useState([
    {
      id: 1,
      image: "./src/productImages/friends.jpg",
      title: "Darwin T-Shirt",
      price: 149,
    },
    {
      id: 2,
      image: "./src/productImages/friends.jpg",
      title: "Tupac Black T-Shirt",
      price: 149,
    },
    {
      id: 3,
      image: "./src/productImages/friends.jpg",
      title: "Darwin T-Shirt",
      price: 149,
    },
    {
      id: 4,
      image: "./src/productImages/friends.jpg",
      title: "Darwin T-Shirt",
      price: 149,
    },
  ]);
  const [gym, setGym] = useState([
    {
      id: 1,
      image: "./src/productImages/gym.jpg",
      title: "Darwin T-Shirt",
      price: 149,
    },
    {
      id: 2,
      image: "./src/productImages/gym.jpg",
      title: "Tupac Black T-Shirt",
      price: 149,
    },
    {
      id: 3,
      image: "./src/productImages/gym.jpg",
      title: "Darwin T-Shirt",
      price: 149,
    },
    {
      id: 4,
      image: "./src/productImages/gym.jpg",
      title: "Darwin T-Shirt",
      price: 149,
    },
  ]);

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
        <AnimeCategories />
        <div style={{ backgroundColor: "black" }}>
          <ProductsCarousel
            header={"Musical Brand Collection"}
            data={mosucalBrands}
            bg={"black"}
          />
          <ProductsCarousel
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
          <ProductsCarousel data={gym} header={"GYM"} bg={"white"} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
