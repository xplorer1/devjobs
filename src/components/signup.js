import React from 'react';
import {Link} from "react-router-dom";

class SignUp extends React.Component {
	constructor() {
		super();

		this.state = {

		}
	}

	render() {
		return (
			<article>
			    <div className="wrapper">  
					<section className="signup-screen-sec">
						<div className="container">
							<div className="signup-screen">
								<Link to="/">DevJobs</Link>
								<form>
									<input type="text" className="form-control" placeholder="Your Name" /> 
									<input type="email" className="form-control" placeholder="Your Email" />
									<input type="password" className="form-control" placeholder="Password" />
									<button className="btn btn-login" type="submit" >Sign Up</button>
									<span>Have You Account? <a href="login.html"> Login</a></span>	
								</form>
							</div>
						</div>
					</section>
				</div>
			</article>
		)
	}
}

export default SignUp;