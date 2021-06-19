import React from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.components";
import Header from "./components/Header/Header.components";
import TrendingPage from "./Pages/Trending/Trending.page";
import SearchPage from "./Pages/Search/Search.page";
import UpcommingPage from "./Pages/Upcomming/Upcomming.page";
import HomePage from "./Pages/Home/Home.pages";
import SignInAndSignUpPage from "./Pages/SignInAndSignUp/SignInAndSignUpPage.components";
import { auth } from "./firebase/firebase.utils";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      if (this.state.currentUser) {
        this.props.history.push("/trending");
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar currentUser={this.state.currentUser} />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/trending" component={TrendingPage} />
          <Route path="/upcomming" component={UpcommingPage} />
          <Route exact path="/search" component={SearchPage} />
          <Route
            exact
            path="/signinandsignup"
            component={SignInAndSignUpPage}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
