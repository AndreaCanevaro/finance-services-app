import React from "react";
import Navbar from "./components/pages/general-components/Navbar";
import Home from "./components/pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InvestmentPortfolios from "./components/pages/investment-portfolio/InvestmentPortfolios";
import MoreServices from "./components/pages/more-services/MoreServices";
import SignUp from "./components/pages/sign-up/SignUp";
import Banner from "./components/pages/home/components/Banner";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={<Home />} />
          <Route
            path="/investmentportfolios"
            component={<InvestmentPortfolios />}
          />
          <Route path="/moreservices" component={<MoreServices />} />
          <Route path="/sign-up" component={<SignUp />} />
        </Routes>
        <Home />
      </Router>
    </>
  );
}

export default App;
