import styles from "./animeCategories.module.css";
import onePiece from "/One_Piece.jpg";
import naruto from "/naruto.jpg";
import hantur from "/hunter.jpg";
import attackOnTitans from "/attackOnTitans.jpg";
import { Link } from "react-router-dom";

function AnimeCategories() {
  // const animecollections = [{ bilal: "bilal" }];
  return (
    <div className={styles.animeCategories}>
      <h1>Anime Categories</h1>
      <div className={styles.collections}>
        <div className={styles.collection}>
          <Link to={"/collection/anime/onepiece"}>
            <img src={onePiece} style={{ width: "100%" }} alt="" />
            <h3 style={{ textAlign: "center" }}>One piece</h3>
          </Link>
        </div>
        <div className={styles.collection}>
          <Link to={"/collection/anime/attack_on_titans"}>
            <img src={attackOnTitans} style={{ width: "100%" }} alt="" />
            <h3 style={{ textAlign: "center" }}>Attack On Titan</h3>
          </Link>
        </div>
        <div className={styles.collection}>
          <Link to={"/collection/anime/naruto"}>
            <img src={naruto} style={{ width: "100%" }} alt="" />
            <h3 style={{ textAlign: "center" }}>Naruto</h3>
          </Link>
        </div>
        <div className={styles.collection}>
          <Link to={"/collection/anime/hunter-x-hunter"}>
            <img src={hantur} style={{ width: "100%" }} alt="" />
            <h3 style={{ textAlign: "center" }}>Hunter X Hunter</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AnimeCategories;
