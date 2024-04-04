import Announce from "./generalComponents/Announce";
import Navbar from "./generalComponents/Navbar";
import Footer from "./generalComponents/Footer";
import ActiveFilter from "./generalComponents/ActiveFilter";
import styles from "./returnPolicy.module.css";
import { themeContext } from "./generalComponents/ThemeContext";
import { useContext, useEffect } from "react";

function PaymentInfo({ isFixed }) {
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
        <h1 style={{ textAlign: "center", margin: "30px" }}>How to pay</h1>

        <div style={{ margin: "30px 0px" }}>
          <b>Payment Information</b>
          <p className={styles.pr}>
            At Lautus, we offer convenient payment options to ensure a seamless
            shopping experience. Here's how you can pay for your orders:
          </p>
        </div>
        <div style={{ margin: "30px 0px" }}>
          <b>Within Morocco:</b>
          <p className={styles.pr} style={{ margin: "20px 0px" }}>
            For orders within Morocco, we accept payment by advance bank
            transfer or through CashPlus. A minimum payment of 50 DH is required
            via these methods. Once your payment is received, your order will be
            processed and shipped promptly.
          </p>
        </div>
        <div style={{ margin: "30px 0px" }}>
          <b>International Orders (France, Belgium, Spain, Italy):</b>
          <p className={styles.pr} style={{ margin: "20px 0px" }}>
            For international orders to France, Belgium, Spain, and Italy,
            payment must be made in full in advance. We accept advance bank
            transfers for international orders. Once your payment is confirmed,
            we'll proceed with processing and shipping your order to your
            designated address.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PaymentInfo;
