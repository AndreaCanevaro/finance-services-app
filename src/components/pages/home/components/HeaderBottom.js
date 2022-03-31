import React from "react";
import "./HeaderBottom.css";

const HeaderBottom = () => {
  return (
    <div className="header-bottom">
      <div className="header-bottom-title-container">
        <h4>Next Rebalance Date</h4>
        <h4>12 Months Return</h4>
        <h4>Positive Closed Trades</h4>
      </div>

      <br></br>
      <div className="header-bottom-data">
        <h3>15 April</h3>
        <h3>8.03%</h3>
        <h3>24</h3>
      </div>
    </div>
  );
};

export default HeaderBottom;
