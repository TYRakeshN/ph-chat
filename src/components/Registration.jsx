import React, {  useState } from "react";
import { useHistory } from 'react-router-dom';
import "../assets/css/style.css";
import axios from "axios";

export default function Registration() {
  var [eMail, setEmail] = useState("");
  var [userPassword, setPassword] = useState("");
  var [userName, setUserName] = useState("");
  var [error,setError]=useState(true);
  //const [res,setRes]=useState();
  const history = useHistory(); 

  var handleSubmit = e=>{
	e.preventDefault();
	console.log("register");
	axios.post('https://ty-chat-app.herokuapp.com/users/register', 
	{
	  name:userName,
	  email: eMail,
	  password: userPassword
	}
			  ).then((response) => {
         // setRes(response.data);
	setError(response.data.error);
	console.log(response);
  console.log(response.data.error);
  setInterval(2000);
  if(!error){
  history.push("/login")
  }else{
    //console.log("res->"+res);
   // console.log("res message->"+res.message);
    alert("Try Again!!");
  }
  });

  }

  return (
    <div className="container">
      <div className="col-xs-12">
        <form onSubmit={handleSubmit} className="signup form-group">
          <h1 className="form-msg">Sign Up</h1>

          <div className="form-control">
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              type="text"
              className="input-phchat"
              name="username"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              placeholder="Username"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="Email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              className="input-phchat"
              name="email"
              placeholder="Email"
			  onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              className="input-phchat"
              name="password"
              placeholder="Password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
			  onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <button
            type="submit"
            name="signup"
            className="btn btn-phchat btn-primary"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
