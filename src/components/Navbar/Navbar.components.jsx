import React from "react";
import "../Navbar/Navbar.styles.css";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

export const Navbar = ({ history }) => {
  console.log(history);
  return (
    <Router>
      <div className="nav-container">
        <ul className="flex-navlist">
          <li onClick={() => history.push("/")}>
            <i className="fa fa-home"></i>
            Home
          </li>
          <li onClick={() => history.push("/search")}>
            <i className="fa fa-search"></i>
            Search
          </li>
          <li onClick={() => history.push("/trending")}>
            <i className="fa fa-line-chart"></i>
            Trending
          </li>
          <li>
            <li onClick={() => history.push("/upcomming")}>
              <i className="fa fa-binoculars"></i>
              Upcomming
            </li>
          </li>
          <li>
            <i className="fa fa-star"></i>Favorites
            <i className="fa fa-star"></i>
          </li>
        </ul>
      </div>
    </Router>
  );
};

export default withRouter(Navbar);
