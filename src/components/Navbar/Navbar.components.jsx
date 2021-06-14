import React from "react";
import "../Navbar/Navbar.styles.css";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

export const Navbar = ({ history, currentUser }) => {
  console.log(history);
  return (
    <Router>
      <div className="nav-container">
        <ul className="flex-navlist">
          <li onClick={() => history.push("/")}>
            <i className="fa fa-home"></i>
            Home
          </li>
          {currentUser ? (
            <ul className="signedIn-navbar">
              <li onClick={() => history.push("/search")}>
                <i className="fa fa-search"></i>
                Search
              </li>
              <li onClick={() => history.push("/trending")}>
                <i className="fa fa-line-chart"></i>
                Trending
              </li>
              <li onClick={() => history.push("/upcomming")}>
                <i className="fa fa-binoculars"></i>
                Upcomming
              </li>
              <li className="option" onClick={() => auth.signOut()}>
                SIGN OUT
              </li>
            </ul>
          ) : (
            <li
              className="signInSignUp"
              onClick={() => history.push("/SignInAndSignUp")}
            >
              SIGN IN / SIGN UP
            </li>
          )}
        </ul>
      </div>
    </Router>
  );
};

export default withRouter(Navbar);
