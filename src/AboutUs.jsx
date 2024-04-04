import Announce from "./generalComponents/Announce";
import Navbar from "./generalComponents/Navbar";
import Footer from "./generalComponents/Footer";
import ActiveFilter from "./generalComponents/ActiveFilter";
import styles from "./returnPolicy.module.css";
import { themeContext } from "./generalComponents/ThemeContext";
import { useContext, useEffect } from "react";

function AboutUs({ isFixed }) {
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
        <h1 style={{ textAlign: "center", margin: "30px" }}>About Us</h1>

        <div style={{ margin: "30px 0px" }}>
          <b>*About Lautus*</b>
          <p className={styles.pr}>
            Thank you for your interest in Lautus! We're thrilled to hear from
            you and assist with any questions or inquiries you may have.Welcome
            to Lautus, where we believe in empowering you to express your
            uniqueness through custom print-on-demand products. Since our
            establishment in 2020, Lautus has been committed to providing
            top-quality printing services on a diverse range of premium items.
          </p>
        </div>
        <div style={{ margin: "30px 0px" }}>
          <b>*Express Your Uniqueness*</b>
          <p className={styles.pr} style={{ margin: "20px 0px" }}>
            At Lautus, we understand that your style is as unique as you are.
            That's why our mission is to help you express your individuality
            through our wide selection of customizable products. Whether it's a
            bold statement on a t-shirt, a favorite design on a hoodie, or a
            personalized mug for your morning coffee, we're here to bring your
            creative vision to life.
          </p>

          <b>*Diverse Range of Products*</b>
          <p className={styles.pr}>
            From t-shirts to hoodies, sweats to mugs, caps to tote bags, gilets
            to polos, Lautus offers a diverse array of high-quality products for
            you to personalize. No matter your style or preference, we have
            something for everyone.
          </p>
        </div>
        <div style={{ margin: "30px 0px" }}>
          <b>*Quality Craftsmanship*</b>
          <p className={styles.pr}>
            Behind every Lautus product is a commitment to quality
            craftsmanship. We carefully select the finest garments and materials
            to ensure that your designs are printed with vibrant colors and
            sharp details that stand the test of time.
          </p>
        </div>
        <div style={{ margin: "30px 0px" }}>
          <b>*Join the Lautus Community*</b>
          <p className={styles.pr}>
            Join the Lautus community and discover a world of endless
            possibilities for self-expression. Whether you're an artist, an
            entrepreneur, or simply someone who loves to showcase their unique
            style, we invite you to unleash your creativity with Lautus.
          </p>
          <p className={styles.pr}>
            Thank you for choosing Lautus as your trusted partner in custom
            print-on-demand. Let's embark on this creative journey together and
            express your uniqueness, one personalized product at a time.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;
