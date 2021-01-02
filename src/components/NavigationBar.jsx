import React from 'react';
import {Link } from 'react-router-dom';
import '../assets/css/style.css';
import {  useState } from "react";
import mainLogo from "../assets/avatars/profile-default.png";
export default function NavigationBar(props) {
  const [isLoggedIn, setLoggedIn] = useState(props.isLog);
  return (
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
      <ul className="navbar-nav ml-auto">
      {!isLoggedIn ? (
        <LoginRegister handleLogin={setLoggedIn} />
      ) : (
        <Logout handleLogin={setLoggedIn} />
      )}
    </ul>
    </div>
    </div>
  </nav>
  );
}
const LoginRegister = ({ handleLogin }) => {
  return (
    <React.Fragment>
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
            </React.Fragment>
  );
};
const Logout = ({ handleLogin }) => {
  return (
    <React.Fragment>
    <li className="nav-item">
    <Link className="nav-link  navbar-brand" to={"/login"} onClick={handleLogoutClick}>
      Logout
    </Link>
  </li>
  </React.Fragment>
  );
};
const handleLogoutClick = () => {
  console.log("logout click"+localStorage.getItem('token'));
  alert("You have been Logged out!!");
  window.localStorage.clear();
  console.log("logout click"+localStorage.getItem('token'));
  
}
