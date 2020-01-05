import React from 'react';
import {Link} from "react-router-dom";

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	handleSubmit = (e) => {
		e.preventDefault();

		this.props.history.push('/candidateprofile');
	}

	render() {
		return (
			<article>
			    <div className="wrapper">  
					<section className="login-screen-sec">
						<div className="container">
							<div className="login-screen">
								<div style={{textAlign: "center", padding: "3rem"}}><Link to="/" style={{fontSize: "23pt"}}>DevJobs</Link></div>
								<form>
									<input type="text" className="form-control" placeholder="Email Address" style={{borderRadius: "0"}} />
									<input type="password" className="form-control" placeholder="Password" style={{borderRadius: "0"}} />
									<button className="btn btn-login" type="submit" onClick={this.handleSubmit}>Login</button>
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