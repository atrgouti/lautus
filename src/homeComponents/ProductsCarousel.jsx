import Carousel from "@itseasy21/react-elastic-carousel";
import styles from "./productCarousel.module.css";
import Product from "./Product";

function ProductsCarousel({ header, data, bg }) {
  return (
    <div className={styles.productCarousel} style={{ backgroundColor: bg }}>
      <h1
        style={{
          color: bg === "black" ? "white" : "black",
          textAlign: "center",
          paddingTop: "40px",
          marginBottom: "40px",
        }}
      >
        {header}
      </h1>
      <div className={styles.categoriesArea}>
        <Carousel
          itemsToShow={4}
          pagination={false}
          showArrows={true}
          breakPoints={[
            {
              width: 1,
              itemsToShow: 1,
              itemsToScroll: 1,
            }, // Screens less than 600px
            { width: 600, itemsToShow: 2, itemsToScroll: 1 }, //Screens between 600px and 900px
            { width: 900, itemsToShow: 4, itemsToScroll: 1 }, // Screens wider than 900px
          ]}
        >
          {data.map((item) => (
            <Product
              key={item.id}
              title={item.title}
              image={item.image}
              bg={bg}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ProductsCarousel;
