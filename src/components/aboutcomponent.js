import React from 'react';
import {Link} from "react-router-dom";

class About extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<article>
			    {/* Top Header Wrapper End */}
			    {/* Header Wrapper Start */}
			    <div className="jp_top_header_img_wrapper">
			        <div className="gc_main_menu_wrapper">
			            <div className="container-fluid">
			                <div className="row">
			                    <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 hidden-xs hidden-sm full_width">
			                        <div className="gc_header_wrapper">
			                            <div className="gc_logo">
			                                <Link to="/">
			                                	<img src="assets/images/header/logo2.png" alt="Logo" title="Job Pro" className="img-responsive" />
			                                </Link>
			                            </div>
			                        </div>
			                    </div>
			                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 full_width">
			                        <div className="header-area hidden-menu-bar stick" id="sticker">
			                            {/* mobile menu area start */}
			                            <header className="mobail_menu">
			                                <div className="container-fluid">
			                                    <div className="row">
			                                        <div className="col-xs-6 col-sm-6">
			                                            <div className="gc_logo">
			                                                <Link to="/">
			                                                	<img src="assets/images/header/logo2.png" alt="Logo" title="Grace Church" />
			                                                </Link>
			                                            </div>
			                                        </div>
			                                        <div className="col-xs-6 col-sm-6">
			                                            <div className="cd-dropdown-wrapper">
			                                                <a className="house_toggle" href="#0">
																<svg xmlns="http://www.w3.org/2000/svg" 
																xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" 
																id="Capa_1" x="0px" y="0px" 
																viewBox="0 0 31.177 31.177" style={{enableBackground: "new 0 0 31.177 31.177"}} 
																xmlSpace="preserve" width="25px" height="25px"><g><g>
																<path className="menubar" d="M30.23,1.775H0.946c-0.489,0-0.887-0.398-0.887-0.888S0.457,0,0.946,0H30.23    
																c0.49,0,0.888,0.398,0.888,0.888S30.72,1.775,30.23,1.775z" fill="#000000"/></g><g><path className="menubar" 
																d="M30.23,9.126H12.069c-0.49,0-0.888-0.398-0.888-0.888c0-0.49,0.398-0.888,0.888-0.888H30.23    
																c0.49,0,0.888,0.397,0.888,0.888C31.118,8.729,30.72,9.126,30.23,9.126z" fill="#000000"/></g><g>
																<path className="menubar" d="M30.23,16.477H0.946c-0.489,0-0.887-0.398-0.887-0.888c0-0.49,0.398-0.888,0.887-0.888H30.23    
																c0.49,0,0.888,0.397,0.888,0.888C31.118,16.079,30.72,16.477,30.23,16.477z" fill="#000000"/></g><g>
																<path className="menubar" d="M30.23,23.826H12.069c-0.49,0-0.888-0.396-0.888-0.887c0-0.49,0.398-0.888,0.888-0.888H30.23    
																c0.49,0,0.888,0.397,0.888,0.888C31.118,23.43,30.72,23.826,30.23,23.826z" fill="#000000"/></g><g>
																<path className="menubar" d="M30.23,31.177H0.946c-0.489,0-0.887-0.396-0.887-0.887c0-0.49,0.398-0.888,0.887-0.888H30.23    
																c0.49,0,0.888,0.398,0.888,0.888C31.118,30.78,30.72,31.177,30.23,31.177z" fill="#000000"/></g></g></svg>
																</a>
			                                                <nav className="cd-dropdown">
			                                                    <h2><a href="#">Job<span>Pro</span></a></h2>
			                                                    <a href="#0" className="cd-close">Close</a>
			                                                    <ul className="cd-dropdown-content">
			                                                        <li>
			                                                            <form className="cd-search">
			                                                                <input type="search" placeholder="Search..." />
			                                                            </form>
			                                                        </li>
			                                                        <li className="has-children">
			                                                            <a href="#">Home</a>

			                                                            <ul className="cd-secondary-dropdown is-hidden">
			                                                                <li className="go-back"><a href="#0">Menu</a></li>
			                                                                <li><a href="index.html">Home1</a></li>
																			<li><a href="index_II.html">Home2</a></li>
																			<li><a href="index_map.html">Home3</a></li>
																			<li><a href="index_iv.html">Home4</a></li>
																			<li><a href="index_v.html">Home5</a></li>
																			<li><a href="index_vi.html">Home6</a></li>
			                                                                {/* .has-children */}

			                                                            </ul>
			                                                            {/* .cd-secondary-dropdown */}
			                                                        </li>
			                                                        {/* .has-children */}


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
			                    {/* mobile menu area end */}

			                </div>
			            </div>
			        </div>
			    </div>
    
			    {/* jp Tittle Wrapper End */}
				{/* aboutus_section start*/}
			    <div className="aboutus_section">
			        <div className="container">
			            <div className="row">
			                <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
			                    <div className="about_text_wrapper">
			                        <div className="section_heading section_2_heading">
			                            <h2>how we <span>do it ?</span></h2>
			                        </div>
			                        <p>Proin gravida nibh vel velit auctor aliquet. aks Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem.consequat ipsum, nec sagittis sem nibh id elit.Donec vestibulum justo a diam ultricies. pel lentesque. Quisque mattis diam vel.</p>
			                        <p>Lorem Ipsum has been the industry's standard dummy text ever sincer they 1500s, when an unknown printer took and galley of type and scrambled. nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
			                        <ul>
			                            <li><i className="fa fa-check-square" aria-hidden="true"></i><a href="#">We sell all over the world.</a>
			                            </li>
			                            <li><i className="fa fa-check-square" aria-hidden="true"></i><a href="#">Satisfaction or money refund guaranteed.</a>
			                            </li>
			                            <li><i className="fa fa-check-square" aria-hidden="true"></i><a href="#">Lifetime updates & support.</a>
			                                    </li>
			                        </ul>
			                    </div>
			                </div>
			                <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
			                    <div className="about_image_wrapper">
			                        <img className="img-responsive" src="assets/images/content/register_bg.jpg" alt="about-img" />
			                    </div>
			                </div>
			                <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
			                    <div className="about_text_wrapper abt_2_para">
			                        <div className="section_heading section_2_heading">
			                            <h2>why we<span> do it ?</span></h2>
			                        </div>
			                        <p>Proin gravida nibh vel velit auctor aliquet. aks Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem.consequat ipsum,rmentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit sum, nec sagittis sem.consequat ipsum,rmentum nunc. Etiam pharetra, mauris egestas quam, ut aliquam massa nisl quis neque. Suspendissenec sagittis sem.conse nec sagittis sem nibh id elit.Donec vesquat ipsum, nec sa tibulum justo a diam ultricies. pel lentesque. Quisque mattis diam vel.</p>
			                        <p>Lorem Ipsum has been the industry's standard dummy text ever sincer they 1500s, when an unknown printer took and galley onsequat ipsum, orbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad a diam ultricie of type and scrambled. nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>

				{/* jp best deal Wrapper Start */}
			    <div className="jp_best_deal_main_wrapper">
			        <div className="container">
			            <div className="row">
			                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			                    <div className="jp_best_deal_heading_wrapper">
			                        <div className="jp_best_deal_heading">
			                            <h4>Offering the best Deals</h4>
			                        </div>
			                    </div>
			                </div>
			                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
			                    <div className="jp_best_deal_main_cont_wrapper">
			                        <div className="jp_best_deal_icon_sec">
			                            <i className="flaticon-magnifying-glass"></i>
			                        </div>
			                        <div className="jp_best_deal_cont_sec">
			                            <h4><a href="#">Search a Jobs</a></h4>
			                            <p>Proin gravida nibh Aenean sollicitudin...</p>
			                        </div>
			                    </div>
			                </div>
			                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
			                    <div className="jp_best_deal_main_cont_wrapper">
			                        <div className="jp_best_deal_icon_sec">
			                            <i className="flaticon-users"></i>
			                        </div>
			                        <div className="jp_best_deal_cont_sec">
			                            <h4><a href="#">Apply a Job</a></h4>
			                            <p>Proin gravida nibh Aenean sollicitudin...</p>
			                        </div>
			                    </div>
			                </div>
			                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
			                    <div className="jp_best_deal_main_cont_wrapper jp_best_deal_main_cont_wrapper2">
			                        <div className="jp_best_deal_icon_sec">
			                            <i className="flaticon-shield"></i>
			                        </div>
			                        <div className="jp_best_deal_cont_sec">
			                            <h4><a href="#">Job Security</a></h4>
			                            <p>Proin gravida nibh Aenean sollicitudin...</p>
			                        </div>
			                    </div>
			                </div>
			                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
			                    <div className="jp_best_deal_main_cont_wrapper jp_best_deal_main_cont_wrapper2">
			                        <div className="jp_best_deal_icon_sec">
			                            <i className="flaticon-notification"></i>
			                        </div>
			                        <div className="jp_best_deal_cont_sec">
			                            <h4><a href="#">Job Notifications</a></h4>
			                            <p>Proin gravida nibh Aenean sollicitudin...</p>
			                        </div>
			                    </div>
			                </div>
			                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
			                    <div className="jp_best_deal_main_cont_wrapper jp_best_deal_main_cont_wrapper2">
			                        <div className="jp_best_deal_icon_sec">
			                            <i className="flaticon-wallet"></i>
			                        </div>
			                        <div className="jp_best_deal_cont_sec">
			                            <h4><a href="#">Essay Pay Money</a></h4>
			                            <p>Proin gravida nibh Aenean sollicitudin...</p>
			                        </div>
			                    </div>
			                </div>
			                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
			                    <div className="jp_best_deal_main_cont_wrapper jp_best_deal_main_cont_wrapper2">
			                        <div className="jp_best_deal_icon_sec">
			                            <i className="flaticon-people"></i>
			                        </div>
			                        <div className="jp_best_deal_cont_sec">
			                            <h4><a href="#">Happy Support</a></h4>
			                            <p>Proin gravida nibh Aenean sollicitudin...</p>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>

			    {/* jp best deal Wrapper End */}
			    {/* jp career Wrapper Start */}
			    <div className="jp_career_main_wrapper">
			        <div className="container">
			            <div className="row">
			                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			                    <div className="jp_hiring_slider_main_wrapper">
			                        <div className="jp_career_slider_heading_wrapper">
			                            <h2>Career advice</h2>
			                        </div>
			                        <div className="jp_career_slider_wrapper">
			                            <div className="owl-carousel owl-theme">
			                                <div className="item jp_recent_main">
			                                    <div className="jp_career_main_box_wrapper">
			                                        <div className="jp_career_img_wrapper">
			                                            <img src="assets/images/content/car_img1.jpg" alt="career_img" />
			                                        </div>
			                                        <div className="jp_career_cont_wrapper">
			                                            <p><i className="fa fa-calendar"></i>&nbsp;&nbsp; <a href="#">20 OCT, 2017</a></p>
			                                            <h3><a href="#">Hey Seeker, It’s Time</a></h3>
			                                            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.</p>
			                                        </div>
			                                    </div>
			                                    <div className="jp_career_slider_bottom_cont">
			                                        <ul>
			                                            <li><img src="assets/images/content/blog_small_img.jpg" alt="small_img" className="img-circle" />&nbsp;&nbsp; <a href="#">Jhon Doe</a></li>
			                                        </ul>
			                                        <p><a href="#"><i className="fa fa-comments"></i></a></p>
			                                    </div>
			                                </div>
			                                <div className="item jp_recent_main">
			                                    <div className="jp_career_main_box_wrapper">
			                                        <div className="jp_career_img_wrapper">
			                                            <img src="assets/images/content/car_img2.jpg" alt="career_img" />
			                                        </div>
			                                        <div className="jp_career_cont_wrapper">
			                                            <p><i className="fa fa-calendar"></i>&nbsp;&nbsp; <a href="#">20 OCT, 2017</a></p>
			                                            <h3><a href="#">Hey Seeker, It’s Time</a></h3>
			                                            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.</p>
			                                        </div>
			                                    </div>
			                                    <div className="jp_career_slider_bottom_cont">
			                                        <ul>
			                                            <li><img src="assets/images/content/blog_small_img.jpg" alt="small_img" className="img-circle" />&nbsp;&nbsp; <a href="#">Jhon Doe</a></li>
			                                        </ul>
			                                        <p><a href="#"><i className="fa fa-comments"></i></a></p>
			                                    </div>
			                                </div>
			                                <div className="item jp_recent_main">
			                                    <div className="jp_career_main_box_wrapper">
			                                        <div className="jp_career_img_wrapper">
			                                            <img src="assets/images/content/car_img3.jpg" alt="career_img" />
			                                        </div>
			                                        <div className="jp_career_cont_wrapper">
			                                            <p><i className="fa fa-calendar"></i>&nbsp;&nbsp; <a href="#">20 OCT, 2017</a></p>
			                                            <h3><a href="#">Hey Seeker, It’s Time</a></h3>
			                                            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.</p>
			                                        </div>
			                                    </div>
			                                    <div className="jp_career_slider_bottom_cont">
			                                        <ul>
			                                            <li><img src="assets/images/content/blog_small_img.jpg" alt="small_img" className="img-circle" />&nbsp;&nbsp; <a href="#">Jhon Doe</a></li>
			                                        </ul>
			                                        <p><a href="#"><i className="fa fa-comments"></i></a></p>
			                                    </div>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>

			    {/* jp career Wrapper End */}
			    {/* jp counter Wrapper Start */}
			    <div className="jp_counter_main_wrapper">
			        <div className="gc_counter_cont_wrapper">
			            <div className="count-description">
			                <span className="timer">2540</span><i className="fa fa-plus"></i>
			                <h5 className="con1">Jobs Available</h5>
			            </div>
			        </div>
			        <div className="gc_counter_cont_wrapper2">
			            <div className="count-description">
			                <span className="timer">7325</span><i className="fa fa-plus"></i>
			                <h5 className="con2">Members</h5>
			            </div>
			        </div>
			        <div className="gc_counter_cont_wrapper3">
			            <div className="count-description">
			                <span className="timer">1924</span><i className="fa fa-plus"></i>
			                <h5 className="con3">Resumes</h5>
			            </div>
			        </div>
			        <div className="gc_counter_cont_wrapper4">
			            <div className="count-description">
			                <span className="timer">4275</span><i className="fa fa-plus"></i>
			                <h5 className="con4">Company</h5>
			            </div>
			        </div>
			    </div>

			    {/* jp counter Wrapper End */}
			    {/* aboutus_section end */}
			    <div className="aboutus_page_2_section">
			        <div className="container">
			            <div className="row">
			                <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
			                    <div className="aboutus_text_section abt_txt_page_2">
			                        <h2>Who We <span>Are</span></h2>
			                        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. iat nulla pariatur. Excepteur sint occaecat cupidatat non proluptate velit esse cillum dolore euur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			                        <div className="row">
			                            <div className="col-md-6">
			                                <ul>
			                                    <li><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>&nbsp;&nbsp;Audit &amp; Assurance</li>
			                                    <li><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>&nbsp;&nbsp;Business Services</li>
			                                    <li><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>&nbsp;&nbsp;IT Control Solutions</li>
			                                </ul>
			                            </div>
			                            <div className="col-md-6">
			                                <ul>
			                                    <li><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>&nbsp;&nbsp;Audit &amp; Assurance</li>
			                                    <li><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>&nbsp;&nbsp;Business Services</li>
			                                    <li><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>&nbsp;&nbsp;IT Control Solutions</li>
			                                </ul>
			                            </div>
			                        </div>

			                    </div>
			                </div>

			                <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
			                    <div className="accordion_wrapper abt_page_2_wrapper">
			                        <div className="panel-group" id="accordion_threeLeft">
			                            <div className="panel panel-default">
			                                <div className="panel-heading desktop">
			                                    <h4 className="panel-title">
			                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion_threeLeft" href="#collapseTwentyLeftone" aria-expanded="true">
			                                  Our Visions and Missions
			                              </a>
			                                    </h4>
			                                </div>
			                                <div id="collapseTwentyLeftone" className="panel-collapse collapse" aria-expanded="true" role="tablist">
			                                    <div className="panel-body">
			                                        Praesent in nisl egestas mauris aliquam luctus. Ut auctor faucibus orci, nec semper purus ultrices idorbi nec lorem risus orbi vitae felis gravida Pellentesque id eros quis massa convallis feugiat eu quis urna.
			                                    </div>
			                                </div>
			                            </div>
			                            {/* /.panel-default */}
			                            <div className="panel panel-default">
			                                <div className="panel-heading horn">
			                                    <h4 className="panel-title">
			                                        <a data-toggle="collapse" data-parent="#accordion_threeLeft" href="#collapseTwentyLeftTwo" aria-expanded="false">
			                                 Our Corporate Responsibility
			                              </a>
			                                    </h4>
			                                </div>
			                                <div id="collapseTwentyLeftTwo" className="panel-collapse collapse in" aria-expanded="false" role="tablist">
			                                    <div className="panel-body">
			                                        Praesent in nisl egestas mauris aliquam luctus. Ut auctor faucibus orci, nec semper purus ultrices idorbi nec lorem risus orbi vitae felis gravida Pellentesque id eros quis massa convallis feugiat eu quis urna.
			                                    </div>
			                                </div>
			                            </div>
			                            {/* /.panel-default */}
			                            <div className="panel panel-default">
			                                <div className="panel-heading bell">
			                                    <h4 className="panel-title">
			                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion_threeLeft" href="#collapseTwentyLeftThree" aria-expanded="false">
			                                Visual Page Builder
			                              </a>
			                                    </h4>
			                                </div>
			                                <div id="collapseTwentyLeftThree" className="panel-collapse collapse" aria-expanded="false" role="tablist">
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
			                {/*end of /.col-sm-6*/}
			            </div>
			        </div>
			    </div>

			    {/*end of /.col-sm-6*/}
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

export default About;