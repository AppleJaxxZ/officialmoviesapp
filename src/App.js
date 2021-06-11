import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.components";
import Header from "./components/Header/Header.components";
import TrendingPage from "./Pages/Trending/Trending.page";
import SearchPage from "./Pages/Search/Search.page";
import UpcommingPage from "./Pages/Upcomming/Upcomming.page";
import HomePage from "./Pages/Home/Home.pages";
import SignInAndSignUpPage from "./Pages/SignInAndSignUp/SignInAndSignUpPage.components";
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/trending" component={TrendingPage} />
        <Route path="/upcomming" component={UpcommingPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/signinandsignup" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
