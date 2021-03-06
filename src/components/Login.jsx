import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../assets/css/style.css";
import axios from "axios";
export default function Login() {
	var [eMail, setEmail] = useState("");
	var [userPassword, setPassword] = useState("");
	//var [error, setError] = useState(true);
	const history = useHistory();

	var handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("https://ty-chat-app.herokuapp.com/users/login", {
				email: eMail,
				password: userPassword,
			})
			.then((response) => {
				//setError(response.data.error);
				localStorage.setItem("token", response.data.token);
				if (localStorage.getItem('token')) {
					history.push({ pathname: "/dashboard" });
				} else {
					alert("Try Again!! "+ response.data.message);
				}
			});
	};
	return (
		<div className="container">
			<div className="col-xs-12">
				<form onSubmit={handleSubmit} className="signup form-group">
					<h1 className="form-msg">Sign In</h1>

					<div className="form-control">
						<label htmlFor="Email" className="sr-only">
							Email
            </label>
						<input
							type="email"
							className="input-phchat"
							name="email"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							placeholder="Email"
							required
						/>
					</div>
					<div className="form-control">
						<input
							type="password"
							className="input-phchat"
							name="password"
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							placeholder="Password"
							required
						/>
					</div>
					<button
						type="submit"
						name="signin"
						className="btn btn-phchat btn-primary"
					>
						Sign In
          </button>
				</form>
			</div>
		</div>
	);
}
