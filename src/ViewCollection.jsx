import { useContext } from "react";
import styles from "./viewCollection.module.css";
import Announce from "./generalComponents/Announce";
import Navbar from "./generalComponents/Navbar";
import Footer from "./generalComponents/Footer";
import ActiveFilter from "./generalComponents/ActiveFilter";
import shirt from "./productImages/tupac2.jpg";

import { themeContext } from "./generalComponents/ThemeContext";
function ViewCollection({ isFixed }) {
  const { activeSide, activeSearch, activeCard } = useContext(themeContext);

  return (
    <div>
      {(activeSide || activeCard || activeSearch) && <ActiveFilter />}
      <Announce />
      <Navbar isFixed={isFixed} />
      <div className={styles.adjust}>
        <h2>Anime Hoodies</h2>
        <select name="" id="">
          <option value="">Sort by</option>
        </select>
      </div>
      <div className={styles.allProducts}>
        <div className={styles.product}>
          <img src={shirt} alt="" />
          <p className={styles.title}>Tupac T-shirt</p>
        </div>
        <div className={styles.product}>
          <img src={shirt} alt="" />
          <p className={styles.title}>Tupac T-shirt</p>
        </div>
        <div className={styles.product}>
          <img src={shirt} alt="" />
          <p className={styles.title}>Tupac T-shirt</p>
        </div>
        <div className={styles.product}>
          <img src={shirt} alt="" />
          <p className={styles.title}>Tupac T-shirt</p>
        </div>
        <div className={styles.product}>
          <img src={shirt} alt="" />
          <p className={styles.title}>Tupac T-shirt</p>
        </div>
        <div className={styles.product}>
          <img src={shirt} alt="" />
          <p className={styles.title}>Tupac T-shirt</p>
        </div>
        <div className={styles.product}>
          <img src={shirt} alt="" />
          <p className={styles.title}>Tupac T-shirt</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ViewCollection;
