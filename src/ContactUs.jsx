import Announce from "./generalComponents/Announce";
import Navbar from "./generalComponents/Navbar";
import Footer from "./generalComponents/Footer";
import ActiveFilter from "./generalComponents/ActiveFilter";
import styles from "./returnPolicy.module.css";
import { themeContext } from "./generalComponents/ThemeContext";
import { useContext, useEffect } from "react";

import whatsappIcon from "/whatsappContact.svg";

function ContactUS({ isFixed }) {
  const { activeSide, activeSearch, activeCard } = useContext(themeContext);
  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);

  function contactFonki() {
    const message = "";
    const whatsappURL = `https://wa.me/0665929360?text=${encodeURIComponent(
      message
    )}`;
    window.location.href = whatsappURL;
  }

  return (
    <div style={{ position: "relative" }}>
      {(activeSide || activeCard || activeSearch) && <ActiveFilter />}
      <Announce />
      <Navbar isFixed={isFixed} />
      <div className={styles.workingarea}>
        <h1 style={{ textAlign: "center", margin: "30px" }}>Contact Us</h1>

        <div style={{ margin: "30px 0px" }}>
          <b>*Contact Us*</b>
          <p className={styles.pr}>
            Thank you for your interest in Lautus! We're thrilled to hear from
            you and assist with any questions or inquiries you may have.
          </p>
        </div>
        <div style={{ margin: "30px 0px" }}>
          <b>*Phone and WhatsApp: *</b>
          <p className={styles.pr} style={{ margin: "20px 0px" }}>
            Feel free to reach out to us via phone or WhatsApp at{" "}
            <b>0665-929-360</b>. Our dedicated team is available to assist you
            during our business hours.
          </p>

          <b>*Email: *</b>
          <p className={styles.pr}>
            For inquiries or support via email, please send your message to
            lautusprint1@gmail.com
          </p>
        </div>
        <div style={{ margin: "30px 0px" }}>
          <b>*Social Media: *</b>
          <p className={styles.pr}>
            Connect with us on Instagram @lautus_print_shop for the latest
            updates, design inspirations, and customer features.
          </p>
          <p className={styles.pr}>
            We look forward to connecting with you and assisting you with all
            your custom print-on-demand needs!
          </p>
        </div>
      </div>
      <img
        onClick={() => contactFonki()}
        style={{
          position: "fixed",
          bottom: "15px",
          right: "15px",
          height: "70px",
          cursor: "pointer",
        }}
        src={whatsappIcon}
        alt=""
      />
      <Footer />
    </div>
  );
}

export default ContactUS;
