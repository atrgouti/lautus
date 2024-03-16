import Announce from "./generalComponents/Announce";
import Navbar from "./generalComponents/Navbar";
import Footer from "./generalComponents/Footer";
import ActiveFilter from "./generalComponents/ActiveFilter";
import styles from "./returnPolicy.module.css";
import { themeContext } from "./generalComponents/ThemeContext";
import { useContext, useEffect } from "react";

function ReturnPolicy({ isFixed }) {
  const { activeSide, activeSearch, activeCard } = useContext(themeContext);
  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {(activeSide || activeCard || activeSearch) && <ActiveFilter />}
      <Announce />
      <Navbar isFixed={isFixed} />
      <div className={styles.workingarea}>
        <h1 style={{ textAlign: "center", margin: "30px" }}>Return Policy</h1>

        <p className={styles.p}>
          As our products are personalized, we regret to inform you that we do
          not accept returns or exchanges. Each item is uniquely crafted
          according to your specifications, making it impossible for us to
          resell or reuse personalized items.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default ReturnPolicy;
