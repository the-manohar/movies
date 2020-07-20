import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../Images/reactMovie_logo.png";

const Header = () => (
  <div className="rmdb-header">
    <div className="rmdb-header-content">
      <Link to="/">
        {/* <img
          className="rmdb-logo"
          src="./images/reactMovie_logo.png"
          alt="rmdb-logo"
        /> */}
        <img className="rmdb-logo" src={Logo} alt="logo" />
      </Link>
      {/* <img className="rmdb-tmdb-logo" src="/images/tmdb_logo.png" alt="tmdb-logo" /> */}
      <h3 className="rmdb-tmdb-logo">Manohar Sirvi</h3>
    </div>
  </div>
);

export default Header;
