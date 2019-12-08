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
			    <div className="jp_top_header_main_wrapper">
			        <div className="container-fluid">
			            <div className="row">
			                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
			                    <div className="jp_top_header_left_wrapper">
			                        <div className="jp_top_header_left_cont">
			                            <p><i className="fa fa-phone"></i> &nbsp;Phone &nbsp;+123456789</p>
			                            <p className=""><i className="fa fa-envelope"></i> &nbsp;Email :&nbsp;<a href="#">Email@example.com</a></p>
			                        </div>
			                    </div>
			                </div>
			                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
			                    <div className="jp_top_header_right_wrapper">
			                        <div className="jp_top_header_right_cont">
			                            <ul>
			                                <li><a href="register.html"><i className="fa fa-user"></i>&nbsp; SIGN UP</a></li>
			                                <li><a href="login.html"><i className="fa fa-sign-in"></i>&nbsp; LOGIN</a></li>
			                            </ul>
			                        </div>
			                        <div className="jp_top_header_right__social_cont">
			                            <ul>
			                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
			                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
			                                <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
			                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
			                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
			                                <li><a href="#"><i className="fa fa-vimeo"></i></a></li>
			                            </ul>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			    {/* Top Header Wrapper End */}
			    {/* Header Wrapper Start */}
			    <div className="jp_top_header_img_wrapper">
			        <div className="gc_main_menu_wrapper">
			            <div className="container-fluid">
			                <div className="row">
			                    <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 hidden-xs hidden-sm full_width">
			                        <div className="gc_header_wrapper">
			                            <div className="gc_logo">
			                                <a href="index.html"><img src="assets/images/header/logo2.png" alt="Logo" title="Job Pro" className="img-responsive" /></a>
			                            </div>
			                        </div>
			                    </div>			                    
			                </div>
			            </div>
			        </div>
			    </div>
			    {/* Header Wrapper End */}				
				
				{/* jp login wrapper start */}
				<div className="login_section">
					{/* login_form_wrapper */}
					<div className="login_form_wrapper">
						<div className="container">
							<div className="row">
								<div className="col-md-8 col-md-offset-2">
									{/* login_wrapper */}
									<h1>LOGIN TO YOUR ACCOUNT</h1>
									<div className="login_wrapper">
										<div className="row">
											<div className="col-lg-6 col-md-6 col-xs-12 col-sm-6">
												<a href="#" className="btn btn-primary"> <span>Login with Facebook</span> <i className="fa fa-facebook"></i> </a>
											</div>
											<div className="col-lg-6 col-md-6 col-xs-12 col-sm-6">
												<a href="#" className="btn btn-primary google-plus"> Login  with Google <i className="fa fa-google-plus"></i> </a>
											</div>
										</div>
										<h2>or</h2>
										<div className="formsix-pos">
											<div className="form-group i-email">
												<input type="email" className="form-control" required="" id="email2" placeholder="Username*" />
											</div>
										</div>
										<div className="formsix-e">
											<div className="form-group i-password">
												<input type="password" className="form-control" required="" id="password2" placeholder="Password *" />
											</div>
										</div>
										<div className="login_remember_box">
											<label className="control control--checkbox">Remember me
												<input type="checkbox" />
												<span className="control__indicator"></span>
											</label>
											<a href="#" className="forget_password">
												Forgot Password
											</a>
										</div>
										<div className="login_btn_wrapper">
											<a href="#" className="btn btn-primary login_btn"> Login </a>
										</div>
										<div className="login_message">
											<p>Don’t have an account ? <a href="#"> Register Now </a> </p>
										</div>
									</div>
									<p>In case you are using a public/shared computer we recommend that
			you logout to prevent any un-authorized access to your account</p>
									{/* /.login_wrapper*/}
								</div>
							</div>
						</div>
					</div>
					{/* /.login_form_wrapper*/}
				</div>
				{/* jp login wrapper end */}
				{/* jp Newsletter Wrapper Start */}
			    <div className="jp_main_footer_img_wrapper">
			        <div className="jp_newsletter_img_overlay_wrapper"></div>
			        <div className="jp_newsletter_wrapper">
			            <div className="container">
			                <div className="row">
			                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
			                        <div className="jp_newsletter_text">
			                            <img src="images/content/news_logo.png" className="img-responsive" alt="news_logo" />
			                        </div>
			                    </div>
			                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
			                        <div className="jp_newsletter_field">
			                            <i className="fa fa-envelope-o"></i><input type="text" placeholder="Enter Your Email" /><button type="submit">Submit</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			        {/* jp Newsletter Wrapper End */}
			        {/* jp footer Wrapper Start */}
			        <div className="jp_footer_main_wrapper">
			            <div className="container">
			                <div className="row">
			                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			                        <div className="jp_footer_logo_wrapper">
			                            <div className="jp_footer_logo">
			                                <a href="#"><img src="assets/images/content/resume_logo.png" alt="footer_logo"/></a>
			                            </div>
			                        </div>
			                    </div>
			            
			                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			                        <div className="jp_bottom_footer_Wrapper">
			                            <div className="row">
			                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
			                                    <div className="jp_bottom_footer_left_cont">
			                                        <p>© 2019-20 Job Pro. All Rights Reserved.</p>
			                                    </div>
			                                    <div className="jp_bottom_top_scrollbar_wrapper">
			                                        <a href="javascript:" id="return-to-top"><i className="fa fa-angle-up"></i></a>
			                                    </div>
			                                </div>
			                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
			                                    <div className="jp_bottom_footer_right_cont">
			                                        <ul>
			                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
			                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
			                                            <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
			                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
			                                            <li className="hidden-xs"><a href="#"><i className="fa fa-google-plus"></i></a></li>
			                                            <li className="hidden-xs"><a href="#"><i className="fa fa-vimeo"></i></a></li>
			                                        </ul>
			                                    </div>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</article>
		)
	}
}

export {Login};