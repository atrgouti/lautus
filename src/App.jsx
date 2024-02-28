import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ViewCollection from "./ViewCollection";
import ProductDetails from "./ProductDetails";
import WishList from "./WishList";
import Login from "./Login";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";

// import tailwindcss from "./tailwind.css";

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
          <Route
            path="/wishlist"
            element={<WishList isFixed={isFixed} />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </ThemeContext>
    </BrowserRouter>
  );
}

export default App;
