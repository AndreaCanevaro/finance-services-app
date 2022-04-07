import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 680) {
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
    <div class="topnav" id="myTopnav">
      <Link to="/" className="navbar-items" onClick={closeMobileMenu}>
        <img src="/images/logo-w.png" alt="logo" height={80} width={200} />
      </Link>
      <Link to="/home" className="navbar-items">
        Rivkin
        <br></br>
        Report
      </Link>
      <Link
        to="/investmentportfolios"
        className="nav-items"
        onClick={closeMobileMenu}
      >
        Investment
        <br></br>
        Portfolios
      </Link>
      <Link to="/moreservices" className="nav-items" onClick={closeMobileMenu}>
        More
        <br></br>
        Services
      </Link>
      <Link to="/search" className="nav-items" onClick={closeMobileMenu}>
        Search
      </Link>
      <Link to="/sign-up" className="nav-items-sign" onClick={closeMobileMenu}>
        {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
      </Link>

      <a href="javascript:void(0);" className="icon" onclick={handleClick}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
}

export default Navbar;
