import Announce from "./generalComponents/Announce";
import Navbar from "./generalComponents/Navbar";
import Footer from "./generalComponents/Footer";
import ActiveFilter from "./generalComponents/ActiveFilter";
import styles from "./returnPolicy.module.css";
import { themeContext } from "./generalComponents/ThemeContext";
import { useContext, useEffect } from "react";

function ShippingInfo({ isFixed }) {
  const { activeSide, activeSearch, activeCard } = useContext(themeContext);
  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {(activeSide || activeCard || activeSearch) && <ActiveFilter />}
      <Announce />
      <Navbar isFixed={isFixed} />
      <div className={styles.workingarea}>
        <h1 style={{ textAlign: "center", margin: "30px" }}>
          Shipping & Delivery
        </h1>

        <div style={{ margin: "30px 0px" }}>
          <b>Within Morocco:</b>
          <p className={styles.pr}>
            Shipping and delivery within Morocco typically take 4 to 5 days.
            Once your order is processed and shipped, you can expect to receive
            it at your doorstep within this timeframe.
          </p>
        </div>
        <div style={{ margin: "30px 0px" }}>
          <b>International Shipping (France, Belgium, Spain, Italy):</b>
          <p className={styles.pr} style={{ margin: "20px 0px" }}>
            For our valued customers in France, Belgium, Spain, and Italy, we
            offer international shipping at a flat rate of 200 DH. Orders to
            these countries typically arrive within 10 to 15 days from the date
            of shipment.
          </p>

          <p className={styles.pr}>
            <b>
              Please note that delivery times may vary depending on factors such
              as customs processing and local postal services.
            </b>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ShippingInfo;
