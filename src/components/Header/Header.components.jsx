import React from "react";
import "../Header/Header.styles.css";
import { withRouter } from "react-router-dom";
import CartoonKnight from "../../media/cartoonKnight.png";

const Header = ({ history }) => (
  <div className="header-container">
    <h1 className="header" onClick={() => history.push("/")}>
      Movie Knight
    </h1>
    <h4 id="caption">Your favorite movies on Movie Knight.</h4>
    <img id="knight" src={CartoonKnight} alt="knight icon" />
  </div>
);

export default withRouter(Header);
