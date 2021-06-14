import React from "react";
import "../Header/Header.styles.css";
import CartoonKnight from "../../media/cartoonKnight.png";

const Header = () => (
  <div className="header-container">
    <h1 className="header">Movie Knight</h1>
    <h4 id="caption">Your favorite movies on Movie Knight.</h4>
    <img id="knight" src={CartoonKnight} alt="knight icon" />
  </div>
);

export default Header;
