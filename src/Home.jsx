import style from "./home.module.css";
import Announce from "./generalComponents/Announce";
import Navbar from "./generalComponents/Navbar";
import AnimeCategories from "./homeComponents/AnimeCategories";
import cover from "/cove.jpg";
function Home() {
  return (
    <div className={style.home}>
      <Announce></Announce>
      <Navbar />
      <img
        src={cover}
        style={{
          width: window.outerWidth > 450 ? "100%" : "200%",
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
