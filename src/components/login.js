import React from 'react';
import {Link} from "react-router-dom";

class Login extends React.Component {
	constructor() {
		super();

		this.state = {

		}
	}

	render() {
		return (
			<article>
			    <div className="wrapper">  
					<section className="login-screen-sec">
						<div className="container">
							<div className="login-screen">
								<Link to="/">DevJobs</Link>
								<form>
									<input type="text" className="form-control" placeholder="Email Address" />
									<input type="password" className="form-control" placeholder="Password" />
									<button className="btn btn-login" type="submit">Login</button>
									<span>You Have No Account? <Link to="/signup"> Create An Account</Link></span>
									<span><Link to="/forgotpassword"> Forget Password</Link></span>
								</form>
							</div>
						</div>
					</section>
				</div>
			</article>
		)
	}
}

export default Login;