import React from "react";
import "../Navbar/Navbar.styles.css";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

export const Navbar = ({ history }) => {
  console.log(history);
  return (
    <Router>
      <div>
        <ul className="flex-navlist">
          <li onClick={() => history.push("/")}>Home</li>
          <li onClick={() => history.push("/search")}>Search</li>
          <li onClick={() => history.push("/trending")}>Trending</li>
          <li>
            <li onClick={() => history.push("/upcomming")}>Upcomming</li>
          </li>
          <li>Favorites</li>
        </ul>
      </div>
    </Router>
  );
};

export default withRouter(Navbar);
