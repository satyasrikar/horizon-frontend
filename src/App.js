import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Insurance from "./pages/Insurance";
import HomeNavbar from "./components/HomeNavbar";
import AboutUs from "./pages/AboutUs";
import LoginPage from "./pages/LoginPage";
import UserRegisterPage from "./pages/UserRegisterPage";
import PartnerPortal from "./pages/PartnerPortal";
import PartnerRegisterPage from "./pages/PartnerRegisterPage";
import PortalEntry from "./pages/PortalEntry";

function App() {
  return (
    <div className="App">
      <Router>
        <HomeNavbar />
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/insurance" component={Insurance}></Route>
        <Route exact path="/about" component={AboutUs}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/register" component={UserRegisterPage}></Route>
        <Route
          exact
          path="/partners/register"
          component={PartnerRegisterPage}
        ></Route>
        <Route
          exact
          path="/partners/portal/2"
          component={PartnerPortal}
        ></Route>
        <Route exact path="/partners/portal" component={PortalEntry}></Route>
      </Router>
    </div>
  );
}

export default App;
