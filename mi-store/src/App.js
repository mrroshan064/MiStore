import React from "react";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Slider from "./components/Slider.js";
import data from "./data/data.json";
import Offer from "./components/Offer.js"

const App = () => {
  return (
    <BrowserRouter>
      <PreNavbar />
      <Navbar logo={data.logo} />
      <Slider start={data.banner.start} />
      <Offer/>
    </BrowserRouter>
  );
};

export default App;
