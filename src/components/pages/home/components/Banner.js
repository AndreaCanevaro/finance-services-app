import React from "react";
import Table from "./Table";
import Navbar from "../../general-components/Navbar";

import "./Banner.css";

const Banner = () => {
  return (
    <div className="container">
      <div className="header">
        <header style={{ overflowX: "auto" }} className="hea">
          <br></br>
          <h2 className="welcome">Welcome to Rivkin ASX Growth Portfolio</h2>
          <br></br>
          <p className="headerp">
            ASX Growth is a 14-stock portfolio that combines systematic
            technical and fundamental analysis for a concentrated portfolio of
            ASX200 stocks. It combines two of our popular ASX portfolios; ASX
            Value and ASX Momentum, giving you the benefit of both strategies.
          </p>
          <br></br>

          <div className="banner-titles">
            <div className="banner-titles-portfolio">
              <h3 className="header-portfolio">Portfolio</h3>
            </div>
            <div className="banner-titles-others">
              <h3 className="header-others">Latest Updates</h3>
              <h3 className="header-others">About</h3>
              <h3 className="header-others">Performance</h3>
              <h3 className="header-others">Closed Trades</h3>
            </div>
          </div>
          <p className="headerp">
            15th March: following our systematic criteria, the below table show
            the top seven ASX Momentum and ASX Value stocks based on their
            respective portfolio criteria. For the month of March, six stocks in
            total need to be replaced from the portfolio, three from Momentum,
            and three from Value.
          </p>
          <Table />
          <br></br>
        </header>
      </div>
    </div>
  );
};

export default Banner;
