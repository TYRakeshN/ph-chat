import "./assets/css/style.css";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Messages from "./components/Messages";
import mainLogo from "./assets/avatars/profile-default.png";
import { useEffect, useState } from "react";
function App() {
  const [isLogged, setIsLogged] = useState(true);

  useEffect(() => {
    console.log("islog" + isLogged);
    console.log("app" + localStorage.getItem("loginValue"));
    setIsLogged(localStorage.getItem("loginValue"));
    console.log(isLogged);
  }, []);

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top back-style">
        <div className="container">
          <Link className="navbar-brand" to={"/login"}>
            <img
              src={mainLogo}
              alt="Profile Pic"
              className="rounded-img header-img p-2"
            />
            PhChat
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            {isLogged ? (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link  navbar-brand" to={"/login"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  navbar-brand" to={"/registration"}>
                    Registration
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  navbar-brand" to={"/login"}>
                    Logout
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
              <Link className="nav-link  navbar-brand" to={"/login"}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  navbar-brand" to={"/registration"}>
                Registration
              </Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link  navbar-brand" to={"/login"}>
                Logout
              </Link>
            </li>
              </ul>
            )}
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path="/" component={Registration} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/messages" component={Messages} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
