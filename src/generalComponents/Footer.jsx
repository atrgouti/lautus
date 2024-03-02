import { Link } from "react-router-dom";

import Logo from "/logo2.png";
import phone from "/phone.svg";
import truck from "/truck.svg";
import cash from "/cash.svg";
import instagram from "/instagram.svg";
import tiktok from "/tiktok.svg";

import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      {/* <img
        src={Logo}
        alt=""
        style={{ width: "70px", height: "80px", marginTop: "30px" }}
      /> */}
      <div className={styles.services}>
        <div className={styles.service}>
          <img src={phone} alt="" />
          <p>24/7 Customer Service</p>
        </div>
        {/* <div className={styles.service}>
          <img src={cash} alt="" />
          <p>Cash On delivery</p>
        </div> */}
        <div className={styles.service}>
          <img src={truck} alt="" />
          <p>4 - 5 days Shipping</p>
        </div>
      </div>
      <div className={styles.logo}>
        <img src={Logo} alt="" />
      </div>
      <div className={styles.line}></div>
      <div className={styles.infos}>
        <div className={styles.inf}>
          <p className={styles.title}>Terms and conditions</p>
          <ul>
            <Link>Return Policy</Link>
            <Link>Privacy Policy</Link>
          </ul>
        </div>
        <div className={styles.inf}>
          <p className={styles.title}>Contact-us</p>
          <ul>
            <Link>Contact Us</Link>
          </ul>
        </div>
        <div className={styles.inf}>
          <p className={styles.title}>About The Store</p>
          <ul>
            <Link>About Us</Link>
            <Link>How to pay</Link>
            <Link>Shipping & Delivery</Link>
          </ul>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.social}>
        <a
          href="https://www.instagram.com/lautus_print_shop/?hl=ar"
          target="_blank"
        >
          <img src={instagram} alt="" />
        </a>
        <a href="https://www.tiktok.com/@lautus_print_shop">
          <img src={tiktok} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
