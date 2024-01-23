import styles from "./animeCategories.module.css";
import onePiece from "/One_Piece.jpg";
import naruto from "/naruto.jpg";
import hantur from "/hunter.jpg";
import attackOnTitans from "/attackOnTitans.jpg";

function AnimeCategories() {
  // const animecollections = [{ bilal: "bilal" }];
  return (
    <div className={styles.animeCategories}>
      <h1>Anime Categories</h1>
      <div className={styles.collections}>
        <div className={styles.collection}>
          <img src={onePiece} style={{ width: "100%" }} alt="" />
          <h3 style={{ textAlign: "center" }}>One piece</h3>
        </div>
        <div className={styles.collection}>
          <img src={attackOnTitans} style={{ width: "100%" }} alt="" />
          <h3 style={{ textAlign: "center" }}>Attack On Titan</h3>
        </div>
        <div className={styles.collection}>
          <img src={naruto} style={{ width: "100%" }} alt="" />
          <h3 style={{ textAlign: "center" }}>Naruto</h3>
        </div>
        <div className={styles.collection}>
          <img src={hantur} style={{ width: "100%" }} alt="" />
          <h3 style={{ textAlign: "center" }}>Hunter X Hunter</h3>
        </div>
      </div>
    </div>
  );
}

export default AnimeCategories;
