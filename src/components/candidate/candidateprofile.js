import React from 'react';
import {Link} from "react-router-dom";

class CandidateProfile extends React.Component {
	constructor() {
		super();

		this.state = {

		}
	}

	render() {
		return (
			<article>
			    
			    <div className="jp_top_header_img_wrapper">
			        <div className="gc_main_menu_wrapper">
			            <div className="container-fluid">
			                <div className="row">
			                    <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 hidden-xs hidden-sm full_width">
			                        <div className="gc_header_wrapper">
			                            <div className="gc_logo">
			                                <Link to="/" >
			                                	<img src="assets/images/header/logo2.png" alt="Logo" title="Job Pro" className="img-responsive" />
			                                </Link>
			                            </div>
			                        </div>
			                    </div>
			                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 full_width">
			                        <div className="header-area hidden-menu-bar stick" id="sticker">
			                            
			                            {/* mainmenu end */}
			                            {/* mobile menu area start */}
			                            <header className="mobail_menu">
			                                <div className="container-fluid">
			                                    <div className="row">
			                                        <div className="col-xs-6 col-sm-6">
			                                            <div className="gc_logo">
			                                                <Link to="/" ><img src="images/header/logo2.png" alt="Logo" title="Grace Church" /></Link>
			                                            </div>
			                                        </div>
			                                        <div className="col-xs-6 col-sm-6">
			                                            <div className="cd-dropdown-wrapper">
			                                                <a className="house_toggle" href="#0">
																<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
																version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 31.177 31.177" 
																style={{enablebackground: "new 0 0 31.177 31.177"}} 
																xmlSpace="preserve" width="25px" height="25px"><g><g>
																<path className="menubar" d="M30.23,1.775H0.946c-0.489,0-0.887-0.398-0.887-0.888S0.457,0,0.946,0H30.23    c0.49,0,0.888,0.398,0.888,0.888S30.72,1.775,30.23,1.775z" fill="#000000"/></g><g><path className="menubar" d="M30.23,9.126H12.069c-0.49,0-0.888-0.398-0.888-0.888c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,8.729,30.72,9.126,30.23,9.126z" fill="#000000"/></g><g><path className="menubar" d="M30.23,16.477H0.946c-0.489,0-0.887-0.398-0.887-0.888c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,16.079,30.72,16.477,30.23,16.477z" fill="#000000"/></g><g><path className="menubar" d="M30.23,23.826H12.069c-0.49,0-0.888-0.396-0.888-0.887c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,23.43,30.72,23.826,30.23,23.826z" fill="#000000"/></g><g><path className="menubar" d="M30.23,31.177H0.946c-0.489,0-0.887-0.396-0.887-0.887c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.398,0.888,0.888C31.118,30.78,30.72,31.177,30.23,31.177z" fill="#000000"/></g></g></svg>
																</a>
			                                                <nav className="cd-dropdown">
			                                                    <h2><Link to="/">Job<span>Pro</span></Link></h2>
			                                                    <a href="#0" className="cd-close">Close</a>
			                                                    <ul className="cd-dropdown-content">
			                                                        <li>
			                                                            <form className="cd-search">
			                                                                <input type="search" placeholder="Search..." />
			                                                            </form>
			                                                        </li>

			                                                        <li className="has-children">
			                                                            <a href="#">Listing</a>

			                                                            <ul className="cd-secondary-dropdown is-hidden">
			                                                                <li className="go-back"><a href="#0">Menu</a></li>
			                                                                <li>
			                                                                    <a href="listing_left.html">listing-Left</a>
			                                                                </li>
			                                                                {/* .has-children */}

			                                                                <li>
			                                                                    <a href="listing_right.html">listing-Right</a>
			                                                                </li>
			                                                                {/* .has-children */}

			                                                                <li>
			                                                                    <a href="listing_single.html">listing-Single</a>
			                                                                </li>
			                                                                {/* .has-children */}

			                                                            </ul>
			                                                            {/* .cd-secondary-dropdown */}
			                                                        </li>
			                                                        {/* .has-children */}
			                                                        <li className="has-children">
			                                                            <a href="#">candidates</a>

			                                                            <ul className="cd-secondary-dropdown is-hidden">
			                                                                <li className="go-back"><a href="#0">Menu</a></li>
																			<li><a href="company_listing.html">Company-Listing</a></li>
																			<li><a href="company_listing_single.html">Company-Single</a></li>
																			<li><a href="candidate_listing.html">candidate-Listing</a></li>
																			<li><a href="candidate_profile.html">candidate-Profile</a></li>
			                                                                {/* .has-children */}

			                                                            </ul>
			                                                            {/* .cd-secondary-dropdown */}
			                                                        </li>
																	<li className="has-children">
			                                                            <a href="#">Pages</a>

			                                                            <ul className="cd-secondary-dropdown is-hidden">
			                                                                <li className="go-back"><a href="#0">Menu</a></li>
			                                                                <li><a href="about.html">About-Us</a></li>
																			<li><a href="404_error.html">404</a></li>
																			<li><a href="add_postin.html">Add-Posting</a></li>
																			<li><a href="login.html">Login</a></li>
																			<li><a href="register.html">Register</a></li>
																			<li><a href="pricing.html">Pricing</a></li>
			                                                                {/* .has-children */}

			                                                            </ul>
			                                                            {/* .cd-secondary-dropdown */}
			                                                        </li>
			                                                        {/* .has-children */}
			                                                        <li className="has-children">
			                                                            <a href="#">Blog</a>

			                                                            <ul className="cd-secondary-dropdown is-hidden">
			                                                                <li className="go-back"><a href="#0">Menu</a></li>
			                                                                <li>
			                                                                    <a href="blog_left.html">Blog-Left</a>
			                                                                </li>
			                                                                {/* .has-children */}

			                                                                <li>
			                                                                    <a href="blog_right.html">Blog-Right</a>
			                                                                </li>
			                                                                {/* .has-children */}

			                                                                <li>
			                                                                    <a href="blog_single_left.html">Blog-Single-Left</a>
			                                                                </li>
			                                                                {/* .has-children */}

			                                                                <li>
			                                                                    <a href="blog_single_right.html">Blog-Single-Left</a>
			                                                                </li>
			                                                                {/* .has-children */}

			                                                            </ul>
			                                                            {/* .cd-secondary-dropdown */}
			                                                        </li>
			                                                        {/* .has-children */}
			                                                        <li>
			                                                            <a href="contact.html">Contact</a>
			                                                        </li>
																	<li>
			                                                            <a href="register.html">Sign Up</a>
			                                                        </li>
																	<li>
			                                                            <a href="login.html">Login</a>
			                                                        </li>

			                                                    </ul>
			                                                    {/* .cd-dropdown-content */}



			                                                </nav>
			                                                {/* .cd-dropdown */}

			                                            </div>
			                                        </div>
			                                    </div>
			                                </div>
			                                {/* .cd-dropdown-wrapper */}
			                            </header>
			                        </div>
			                    </div>
			                    
			                </div>
			            </div>
			        </div>
			    </div>
			    
				<div className="jp_cp_profile_main_wrapper">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
								<div className="jp_cp_left_side_wrapper">
									<div className="jp_cp_left_pro_wallpaper">
										<img src="assets/images/content/cp1.png" alt="profile_img" />
										<h2>Farhan Shaikh</h2>
										<p>UI/UX Designer in Dewas</p>
										<ul>
											<li><a href="#"><i className="fa fa-facebook"></i></a></li>
											<li><a href="#"><i className="fa fa-twitter"></i></a></li>
											<li><a href="#"><i className="fa fa-youtube-play"></i></a></li>
										</ul>
									</div>
									<div className="jp_cp_rd_wrapper">
										<ul>
											<li><a href="#"><i className="fa fa-download"></i> &nbsp;Download Resume</a></li>
											<li><a href="#"><i className="fa fa-phone"></i> &nbsp;Contact candidate</a></li>
										</ul>
									</div>
								</div>
			                    <div className="jp_add_resume_wrapper jp_job_location_wrapper jp_cp_left_ad_res">
			                        <div className="jp_add_resume_img_overlay"></div>
			                        <div className="jp_add_resume_cont">
			                            <img src="assets/images/content/resume_logo.png" alt="logo" />
			                            <h4>Get Best Matched Jobs On your Email. Add Resume NOW!</h4>
			                            <ul>
			                                <li><a href="#"><i className="fa fa-plus-circle"></i> &nbsp;ADD RESUME</a></li>
			                            </ul>
			                        </div>
			                    </div>
							</div>
							<div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
								<div className="jp_cp_right_side_wrapper">
									<div className="jp_cp_right_side_inner_wrapper">
										<h2>PERSONAL DETAILS</h2>
										<table>
			                                <tbody>
			                                    <tr>
			                                        <td className="td-w25">Full Name</td>
			                                        <td className="td-w10">:</td>
			                                        <td className="td-w65">Farhan Shaikh</td>
			                                    </tr>
			                                    <tr>
			                                        <td className="td-w25">Address</td>
			                                        <td className="td-w10">:</td>
			                                        <td className="td-w65">Street 110-B Kalani Bag, Dewas, M.P. INDIA</td>
			                                    </tr>
			                                    <tr>
			                                        <td className="td-w25">Zip Code</td>
			                                        <td className="td-w10">:</td>
			                                        <td className="td-w65">12345</td>
			                                    </tr>
			                                    <tr>
			                                        <td className="td-w25">Phone</td>
			                                        <td className="td-w10">:</td>
			                                        <td className="td-w65">+0 123456789 , +0 123456789</td>
			                                    </tr>
			                                    <tr>
			                                        <td className="td-w25">Email</td>
			                                        <td className="td-w10">:</td>
			                                        <td className="td-w65">support@example.com</td>
			                                    </tr>
			                                    <tr>
			                                        <td className="td-w25">Website</td>
			                                        <td className="td-w10">:</td>
			                                        <td className="td-w65">http://example.com</td>
			                                    </tr>

			                                </tbody>
			                            </table>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
										<div className="jp_cp_accor_heading_wrapper">
											<h2>Education</h2>
											<p>Proin gravida nibh vel velit quet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulpuate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt.</p>
										</div>
									</div>
									<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
										<div className="accordion_wrapper abt_page_2_wrapper">
											<div className="panel-group" id="accordion_threeLeft">

												{/* /.panel-default */}
												<div className="panel panel-default">
													<div className="panel-heading bell">
														<h4 className="panel-title">
															<a className="collapsed" data-toggle="collapse" data-parent="#accordion_threeLeft" href="#collapseTwentyLeftThree" aria-expanded="false">
													DIPLOMA IN COMPUTER 
												  </a>
														</h4>
													</div>
													<div id="collapseTwentyLeftThree" className="panel-collapse collapse" aria-expanded="false" role="tablist">
														<div className="panel-body">
															Praesent in nisl egestas mauris aliquam luctus. Ut auctor faucibus orci, nec semper purus ultrices idorbi nec lorem risus orbi vitae felis gravida Pellentesque id eros quis massa convallis feugiat eu quis urna.
														</div>
													</div>
												</div>
												<div className="panel panel-default">
													<div className="panel-heading bell">
														<h4 className="panel-title">
															<a className="collapsed" data-toggle="collapse" data-parent="#accordion_threeLeft" href="#collapseTwentyLeftThree2" aria-expanded="false">
													HIGHER SECONDRY EDUCATION 
												  </a>
														</h4>
													</div>
													<div id="collapseTwentyLeftThree2" className="panel-collapse collapse" aria-expanded="false" role="tablist">
														<div className="panel-body">
															Praesent in nisl egestas mauris aliquam luctus. Ut auctor faucibus orci, nec semper purus ultrices idorbi nec lorem risus orbi vitae felis gravida Pellentesque id eros quis massa convallis feugiat eu quis urna.
														</div>
													</div>
												</div>
												<div className="panel panel-default">
													<div className="panel-heading bell">
														<h4 className="panel-title">
															<a className="collapsed" data-toggle="collapse" data-parent="#accordion_threeLeft" href="#collapseTwentyLeftThree3" aria-expanded="false">
													HIGH SCHOOL DEGREE
												  </a>
														</h4>
													</div>
													<div id="collapseTwentyLeftThree3" className="panel-collapse collapse" aria-expanded="false" role="tablist">
														<div className="panel-body">
															Praesent in nisl egestas mauris aliquam luctus. Ut auctor faucibus orci, nec semper purus ultrices idorbi nec lorem risus orbi vitae felis gravida Pellentesque id eros quis massa convallis feugiat eu quis urna.
														</div>
													</div>
												</div>
												{/* /.panel-default */}
											</div>
											{/*end of /.panel-group*/}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			    
			    {/* jp downlord Wrapper End */}
				{/* jp Newsletter Wrapper Start */}
			    <div className="jp_main_footer_img_wrapper">
			        <div className="jp_newsletter_img_overlay_wrapper"></div>
			        <div className="jp_newsletter_wrapper">
			            <div className="container">
			                <div className="row">
			                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
			                        <div className="jp_newsletter_text">
			                            <img src="assets/images/content/news_logo.png" className="img-responsive" alt="news_logo" />
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

export {CandidateProfile};