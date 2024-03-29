import Carousel from "@itseasy21/react-elastic-carousel";
import styles from "./productCarousel.module.css";
import Product from "./Product";
import { Link } from "react-router-dom";

function AnimeCategories({ header, data, bg }) {
  // const animecollections = [{ bilal: "bilal" }];
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
          enableMouseSwipe={false}
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
              <Link key={item.id} to={`/collection/anime/${item.title}`}>
                <div style={{ margin: "0 30px" }}>
                  <Product
                    show={false}
                    key={item.id}
                    title={item.title}
                    image={item.img}
                    bg={bg}
                  />
                </div>
              </Link>
            ))}
        </Carousel>
      </div>
    </div>
  );
}

export default AnimeCategories;
