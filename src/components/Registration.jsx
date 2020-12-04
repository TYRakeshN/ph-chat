import React from 'react';
import '../assets/css/style.css';

function Registration() {
    return (
      <>
	  	
  <div class="container">
	<div class="col-xs-12">
		<form action="" method="POST" class="signup form-group">
			<h1 class="form-msg">Sign Up</h1>

			<div class="form-control">
				<label for="username" class="sr-only">Username</label>
				<input type="text" class="input-phchat" name="username" placeholder="Username" />
			</div>
			<div class="form-control">
				<label for="Email" class="sr-only">Email</label>
				<input type="email" class="input-phchat" name="email" placeholder="Email" />
			</div>
			<div class="form-control">
				<input type="password" class="input-phchat" name="password" placeholder="Password" />
			</div>
			<button type="submit" name="signup" class="btn btn-phchat btn-primary">Sign Up</button>
		</form>

		<div class="already-have-account">
			
		</div>
	</div>
</div>
  
      </>
    );
  }
  
  export default Registration;
  