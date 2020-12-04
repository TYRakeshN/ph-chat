import React from 'react';
import '../assets/css/style.css';
import logo from '../assets/avatars/profile-default.png';
import Search from './Search';
function NavBar() {

    return (
      <>
   <nav className   ="navbar navbar-expand-lg navbar-light bg-light fixed-top header-top style1 " >
  PH Chat | UserName
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto"></ul>
    <div className="form-inline my-2 my-lg-0">
    	<form onSubmit="">
    		<button type="submit" name="logout" className="btn btn-phchat-logout btn-sm style2" >Logout</button>
    	</form>
		<div className="account-box">
			
				<img src={logo} alt="Profile Pic" className="rounded-img header-img" />
    		
				<img  alt="" className="rounded-img header-img" />
    		
			<form  id="js-profilePicUploadForm" onSubmit="" encType="multipart/form-data">
    			<input type="file" name="avatar-file" className="profile-pic-upload" id="js-profilePicUpload" />
    		</form>
    	</div>
    </div>
  </div>
</nav>
<Search/>
      </>
    );
  }

export default NavBar;