import style from "./home.module.css";
import Announce from "./generalComponents/Announce";
import Navbar from "./generalComponents/Navbar";
import AnimeCategories from "./homeComponents/AnimeCategories";
import cover from "/cove.jpg";
import { useEffect, useState } from "react";
function Home() {
  const [windowWidth, setWindowWidth] = useState(window.outerWidth);

  const handleResize = () => {
    setWindowWidth(window.outerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={style.home}>
      <Announce></Announce>
      <Navbar />
      <img
        src={cover}
        style={{
          width: windowWidth > 50 ? "100%" : "200%",
          margin: "0px",
          padding: "0px",
        }}
        alt=""
      />
      <AnimeCategories />
    </div>
  );
}

export default Home;
