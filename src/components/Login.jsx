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
		  <div className="container">
		  <div className="col-xs-12">
			  <form onSubmit={this.handleSubmit} class="signup form-group">
				  <h1 className="form-msg">Sign In</h1>
	  
				  <div className="form-control">
					  <label for="Email" class="sr-only">Email</label>
					  <input type="email" class="input-phchat" name="email" placeholder="Email" />
				  </div>
				  <div className="form-control">
					  <input type="password" className="input-phchat" name="password" placeholder="Password" />
				  </div>
				  <button type="submit" name="signin" className="btn btn-phchat btn-primary" >Sign In</button>
			  </form>
		  </div>
	  </div>

	  </> );
	}
}
 

  
  export default Login;