import React from "react";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Footer from "../general-components/Footer";

function Home() {
  return (
    <>
      <Banner />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
