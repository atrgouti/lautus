import { useEffect, useReducer } from "react";
import Announce from "./generalComponents/Announce";
import Navbar from "./generalComponents/Navbar";
import cover from "/cove.jpg";
function Home() {
  return (
    <>
      <Announce></Announce>
      <Navbar />
      <img
        src={cover}
        style={{ width: window.outerWidth > 400 ? "100%" : "150%" }}
        alt=""
      />
    </>
  );
}

export default Home;
