import './App.css';
import './assets/css/style.css';
import Registration from './components/Registration';
import Login from './components/Login';
import {Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
     <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <img src={logo} alt="Profile Pic" className="rounded-img header-img" /> 
        <div className="container">
         
          <Link className="navbar-brand" to={"/sign-in"}>PhChat</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/registration"}>Registration</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Registration} />
            <Route path="/sign-in" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route path="/navbar" component={NavBar}/>
          </Switch>
        </div>
      </div>
    </div></Router>
    </div>
  );
}

export default App;
