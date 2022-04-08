import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

import Home from "../home//Home";
import InvestmentPortfolios from "../investment-portfolio/InvestmentPortfolios";
import MoreServices from "../more-services/MoreServices";
import SignUp from "../sign-up/SignUp";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 660) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div class="topnav" id="myTopnav">
          <Link
            to="/"
            exact
            component={<Home />}
            className="navbar-items-logo"
            onClick={closeMobileMenu}
          >
            <img src="/images/logo-w.png" alt="logo" height={80} width={200} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/home" exact component={<Home />} className="nav-links">
                Rivkin
                <br></br>
                Report
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/investmentportfolios"
                component={<InvestmentPortfolios />}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Investment
                <br></br>
                Portfolios
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/moreservices"
                component={<MoreServices />}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                More
                <br></br>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/search"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Search
              </Link>
            </li>
            <li>
              <Link
                to="/sign-up"
                component={<SignUp />}
                className="nav-links-sign"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
