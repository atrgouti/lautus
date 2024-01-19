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
        style={{ width: window.outerWidth > 450 ? "100%" : "200%" }}
        alt=""
      />
    </>
  );
}

export default Home;
