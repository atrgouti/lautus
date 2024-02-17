import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ViewCollection from "./ViewCollection";
import ProductDetails from "./ProductDetails";

import NotFound from "./NotFound";

//importing use context
import ThemeContext from "./generalComponents/ThemeContext";
import { useEffect, useState } from "react";
function App() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // You can adjust the threshold value based on your design
      const threshold = 400;

      if (scrollY > threshold && !isFixed) {
        setIsFixed(true);
      } else if (scrollY <= threshold && isFixed) {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed]);

  return (
    <BrowserRouter>
      <ThemeContext>
        <Routes>
          <Route path="/" element={<Home isFixed={isFixed} />}></Route>
          <Route
            path="/collection/:collectionName"
            element={<ViewCollection isFixed={isFixed} />}
          ></Route>
          <Route
            path="/collection/:collectionName/:animeName"
            element={<ViewCollection isFixed={isFixed} />}
          ></Route>
          <Route
            path="/product/:id"
            element={<ProductDetails isFixed={isFixed} />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </ThemeContext>
    </BrowserRouter>
  );
}

export default App;
