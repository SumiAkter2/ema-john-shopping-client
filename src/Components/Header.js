import React from "react";
import CustomLink from "./CustomLink";
import "./Css/Header.css";
const Header = () => {
  return (
    <div className="header-container">
      <h2>Ema john shopping</h2>
      <nav>
        <ul>
          <li>
            <CustomLink to="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink to="/Shop">shop</CustomLink>
          </li>
          <li>
            <CustomLink to="/order">Order</CustomLink>
          </li>
          <li>
            <CustomLink to="/review">Review</CustomLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
