import React from "react";
import "../assets/css/style.css";
import logo from "../assets/avatars/profile-default.png";
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';
import {Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Registration from "./Registration";
import Login from "./Login";
import Dashboard from "./Dashboard";
function NavAction() {
  const history = useHistory();
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
     
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
     <Router>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Registration} />
            <Route path="/sign-in" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route path="/dashboard" component={Dashboard}/>
          </Switch>
        </div>
      </div>
    </Router>
   </nav>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto"></ul>
        <div className="form-inline my-2 my-lg-0">
          <form>
            <button
              type="submit"
              name="logout"
              className="btn btn-phchat-logout btn-sm style2"
              onClick={() => {
                history.push("/");
              }}
            >
              Logout
            </button>
          </form>
          <div className="account-box">
            <img
              src={logo}
              alt="Profile Pic"
              className="rounded-img header-img"
            />

            <form
              id="js-profilePicUploadForm"
              onSubmit=""
              encType="multipart/form-data"
            >
              <input
                type="file"
                name="avatar-file"
                className="profile-pic-upload"
                id="js-profilePicUpload"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavAction;
