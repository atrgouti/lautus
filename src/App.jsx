import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThemeContext from "./generalComponents/ThemeContext";
import loadingCircle from "/icons8-loading-circle.gif";

const Home = lazy(() => import("./Home"));
const ViewCollection = lazy(() => import("./ViewCollection"));
const ProductDetails = lazy(() => import("./ProductDetails"));
const WishList = lazy(() => import("./WishList"));
const Login = lazy(() => import("./Login"));
const Dashboard = lazy(() => import("./Dashboard"));
const NotFound = lazy(() => import("./NotFound"));

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
        <Suspense
          fallback={
            <div
              style={{
                height: "100vh",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={loadingCircle} alt="" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home isFixed={isFixed} />} />
            <Route
              path="/collection/:collectionName"
              element={<ViewCollection isFixed={isFixed} />}
            />
            <Route
              path="/collection/:collectionName/:animeName"
              element={<ViewCollection isFixed={isFixed} />}
            />
            <Route
              path="/product/:id"
              element={<ProductDetails isFixed={isFixed} />}
            />
            <Route path="/wishlist" element={<WishList isFixed={isFixed} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ThemeContext>
    </BrowserRouter>
  );
}

export default App;
