import React,{useState } from 'react'
import { useHistory } from 'react-router-dom';
import '../assets/css/style.css';
import axios from 'axios';

export default function Login() { 
	var [eMail, setEmail] = useState("");
	var [userPassword, setPassword] = useState("");

	var [error,setError]=useState(true);
	var [errorMessage,setErrorMessage]=useState("");
	const [token,setToken]=useState("");
	const history = useHistory(); 

	
	  var handleSubmit = e=>{
		e.preventDefault();
		console.log("login");
		axios.post('https://ty-chat-app.herokuapp.com/users/login', 
		{
		  email: eMail,
		  password: userPassword
		}
				  ).then((response) => {
		setError(response.data.error);
		setErrorMessage(response.data.message);
		setToken(response.data.token);
		console.log(token);
		console.log(response.data);
		console.log(errorMessage);
		//console.log(response.data.user.name);
		setInterval(2000);
		if(error){
		history.push({pathname:"/dashboard"})
		localStorage.setItem('token', response.data.token);
		}
		
		else{
			alert("invalid credentials");
		}
	  });
	  }
	return (
		 <div className="container">
	<div className="col-xs-12">
		<form onSubmit={handleSubmit} className="signup form-group">
			<h1 className="form-msg">Sign In</h1>
					
			<div className="form-control">
				<label htmlFor="Email" className="sr-only">Email</label>
				<input type="email" className="input-phchat" name="email"  onChange={
                  e => { setEmail(e.target.value) }
                }  placeholder="Email" required/>
			</div>
			<div className="form-control">
				<input type="password" className="input-phchat" name="password"  onChange={
                  e => { setPassword(e.target.value) }
                }  placeholder="Password" required/>
			</div>
			<button type="submit" name="signin" className="btn btn-phchat btn-primary" >Sign In</button>
		</form>
	</div>
</div>)
}
