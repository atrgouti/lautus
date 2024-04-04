import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThemeContext from "./generalComponents/ThemeContext";
import loadingCircle from "/icons8-loading-circle.gif";

const Home = lazy(() => import("./Home"));
const ViewCollection = lazy(() => import("./ViewCollection"));
const ProductDetails = lazy(() => import("./ProductDetails"));
const AddAnimeCategory = lazy(() => import("./AddAnimeCategory"));
const ReturnPolicy = lazy(() => import("./ReturnPolicy"));
const PrivacyPolicy = lazy(() => import("./PrivacyPolicy"));
const ContactUs = lazy(() => import("./ContactUs"));
const AboutUs = lazy(() => import("./AboutUs"));
const ShippingInfo = lazy(() => import("./ShippingInfo"));
const PaymentInfo = lazy(() => import("./PaymentInfo"));
const WishList = lazy(() => import("./WishList"));
const Login = lazy(() => import("./Login"));
const Dashboard = lazy(() => import("./Dashboard"));
const AddProduct = lazy(() => import("./AddProduct"));
const AddColor = lazy(() => import("./AddColor"));
const AnimeCategoriesShow = lazy(() => import("./AnimeCategoriesShow"));
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
            <Route
              path="/returnPolicy"
              element={<ReturnPolicy isFixed={isFixed} />}
            />
            <Route
              path="/privacyPolicy"
              element={<PrivacyPolicy isFixed={isFixed} />}
            />
            <Route
              path="/ContactUs"
              element={<ContactUs isFixed={isFixed} />}
            />
            <Route path="/AboutUs" element={<AboutUs isFixed={isFixed} />} />
            <Route
              path="/ShippingInfo"
              element={<ShippingInfo isFixed={isFixed} />}
            />
            <Route
              path="/PaymentInfo"
              element={<PaymentInfo isFixed={isFixed} />}
            />
            <Route path="/wishlist" element={<WishList isFixed={isFixed} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Dashboard/AddProduct" element={<AddProduct />} />
            <Route
              path="/Dashboard/AddAnimeCategory"
              element={<AddAnimeCategory />}
            />
            <Route path="/Dashboard/addcolor" element={<AddColor />} />
            <Route
              path="/Dashboard/AnimeCategoriesShow"
              element={<AnimeCategoriesShow />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ThemeContext>
    </BrowserRouter>
  );
}

export default App;
