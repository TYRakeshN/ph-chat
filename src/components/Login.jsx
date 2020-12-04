import React, { Component } from 'react';
import '../assets/css/style.css';


class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}

handleSubmit=(event)=>{

}
	render() { 
		return (  
			<>
			
		  <div class="container">
		  <div class="col-xs-12">
			  <form onSubmit={this.handleSubmit} class="signup form-group">
				  <h1 class="form-msg">Sign In</h1>
	  
				  <div class="form-control">
					  <label for="Email" class="sr-only">Email</label>
					  <input type="email" class="input-phchat" name="email" placeholder="Email" />
				  </div>
				  <div class="form-control">
					  <input type="password" class="input-phchat" name="password" placeholder="Password" />
				  </div>
				  <button type="submit" name="signin" class="btn btn-phchat btn-primary" >Sign In</button>
			  </form>
	  
			  <div class="already-have-account">
			 
			  </div>
		  </div>
	  </div>

	  </> );
	}
}
 

  
  export default Login;