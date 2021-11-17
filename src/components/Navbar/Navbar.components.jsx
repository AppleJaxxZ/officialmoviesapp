import React from "react";
import "../Navbar/Navbar.styles.scss";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

export const Navbar = ({ history, currentUser }) => {
  console.log(history);
  return (
    <Router>
      <div className="nav-container">
        <ul className="flex-navlist">
          {currentUser ? (
            <ul className="signedIn-navbar">
              <li onClick={() => history.push("/search")}>Search</li>
              <li onClick={() => history.push("/trending")}>Trending</li>
              <li onClick={() => history.push("/upcomming")}>Upcomming</li>
              <li>TV Shows</li>
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
