import Announce from "./generalComponents/Announce";
import Navbar from "./generalComponents/Navbar";
import Footer from "./generalComponents/Footer";
import ActiveFilter from "./generalComponents/ActiveFilter";
import styles from "./returnPolicy.module.css";

import { themeContext } from "./generalComponents/ThemeContext";
import { useContext, useEffect } from "react";

function PrivacyPolicy({ isFixed }) {
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
        <h1 style={{ textAlign: "center", margin: "30px" }}>Privacy Policy</h1>
        <p>
          <div style={{ margin: "30px 0px" }}>
            <b>*Privacy Policy*</b>
            <p className={styles.pr}>
              - By using our website, you hereby consent to our Privacy Policy
              and agree to its terms.
            </p>
          </div>
          <div style={{ margin: "30px 0px" }}>
            <b>*Information We Collect*</b>
            <p className={styles.pr}>
              When you visit our website or place an order, we may collect
              certain information about you, including:
            </p>
            <ul style={{ margin: "20px 30px" }}>
              <li style={{ margin: "5px" }}>
                Personal Information: Name, email address, shipping address, and
                payment information.
              </li>
              <li style={{ margin: "5px" }}>
                Order Information: Details about the products you purchase and
                the transactions you make.
              </li>
              <li style={{ margin: "5px" }}>
                Device Information: IP address, browser type, operating system,
                and other technical information about your device.
              </li>
            </ul>
            <b>*How We Use Your Information*</b>
            <p className={styles.pr}>
              We use the information we collect for various purposes, including:
            </p>
            <ul style={{ margin: "20px 30px" }}>
              <li style={{ margin: "5px" }}>
                Processing and fulfilling your orders.
              </li>
              <li style={{ margin: "5px" }}>
                Communicating with you about your orders and providing customer
                support.
              </li>
              <li style={{ margin: "5px" }}>
                Improving our products, services, and website.
              </li>
              <li style={{ margin: "5px" }}>
                Preventing fraud and ensuring the security of our website and
                transactions.
              </li>
              <li style={{ margin: "5px" }}>
                Complying with legal obligations.
              </li>
            </ul>
          </div>
          <div style={{ margin: "30px 0px" }}>
            <b>*Information Sharing*</b>
            <p className={styles.pr}>
              We may share your information with third-party service providers
              who assist us in operating our website, conducting our business,
              or servicing you. These third parties have access to your
              information only to perform specific tasks on our behalf and are
              obligated not to disclose or use it for any other purpose.
            </p>
          </div>
          <div style={{ margin: "30px 0px" }}>
            <b>*Data Retention*</b>
            <p className={styles.pr}>
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy unless a
              longer retention period is required or permitted by law.
            </p>
          </div>
          <div style={{ margin: "30px 0px", marginBottom: "50px" }}>
            <b>*Your Rights*</b>
            <p className={styles.pr}>
              You have the right to access, correct, or delete your personal
              information. You may also have the right to object to, restrict,
              or withdraw consent for the processing of your information. Please
              contact us if you wish to exercise these rights.
            </p>
          </div>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
