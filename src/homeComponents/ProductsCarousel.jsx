import Carousel from "@itseasy21/react-elastic-carousel";
import styles from "./productCarousel.module.css";
import Product from "./Product";
import { Link } from "react-router-dom";

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
            },
            { width: 600, itemsToShow: 2, itemsToScroll: 1 },
            { width: 900, itemsToShow: 4, itemsToScroll: 1 },
          ]}
        >
          {data.length > 0 &&
            data.map((item) => (
              <Link key={item.product_id} to={`/product/${item.product_id}`}>
                <Product
                  key={item.product_id}
                  title={item.name}
                  image={item?.image?.productPhotos[0]}
                  bg={bg}
                />
              </Link>
            ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ProductsCarousel;
