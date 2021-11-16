import React from "react";
import "../Header/Header.styles.scss";
import CartoonKnight from "../../media/cartoonKnight.png";

const Header = () => (
  <div className="header-container">
    <h1 className="header">Movie Knight</h1>
    <div className="header__dots-flexed">
      <div className="dot" id="one"></div>
      <div className="dot" id="two"></div>
      <div className="dot" id="three"></div>
      <div className="dot" id="four"></div>
      <div className="dot" id="five"></div>
      <div className="dot" id="six"></div>
    </div>
  </div>
);

export default Header;
