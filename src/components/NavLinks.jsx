import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import '../assets/css/style.css';
const NavLinks = () => {
    const [isPreview, setIsPreview] = localStorage.getItem('loginValue');
    
    if (isPreview) {
        return (
        <div>
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
                <Link className="nav-link  navbar-brand" to={"/login"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  navbar-brand" to={"/registration"}>Registration</Link>
              </li>
              </ul>
              </div>
        );
    }else{
        return (
            <div>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                    <Link className="nav-link  navbar-brand" to={"/"}>LogOut</Link>
                  </li>
                  </ul>
                  </div>
            );
    }
};
export default NavLinks;
