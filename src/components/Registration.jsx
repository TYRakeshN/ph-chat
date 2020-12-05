import React from 'react';
import '../assets/css/style.css';

function Registration() {
    return (
      <>
	  	
  <div className="container">
	<div className="col-xs-12">
		<form  className="signup form-group">
			<h1 className="form-msg">Sign Up</h1>

			<div className="form-control">
				<label htmlFor="username" className="sr-only">Username</label>
				<input type="text" className="input-phchat" name="username" placeholder="Username" />
			</div>
			<div className="form-control">
				<label htmlFor="Email" className="sr-only">Email</label>
				<input type="email" className="input-phchat" name="email" placeholder="Email" />
			</div>
			<div className="form-control">
				<input type="password" className="input-phchat" name="password" placeholder="Password" />
			</div>
			<button type="submit" name="signup" className="btn btn-phchat btn-primary">Sign Up</button>
		</form>

	
	</div>
</div>
  
      </>
    );
  }
  
  export default Registration;
  