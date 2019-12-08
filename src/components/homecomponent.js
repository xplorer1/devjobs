import React from 'react';
import {Link} from "react-router-dom";

class StatikComponent extends React.Component {

	constructor() {
		super();
		this.state = {showLoader: true};

		this.handleBlur = this.handleBlur.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
		this.handleInput = this.handleInput.bind(this);
		
	}

	handleBlur(e) {
		console.log("window: ", e)
	}

	handleFocus() {
		console.log("Yo man! I handle focus in this clutter of a site.")
	}

	handleInput() {
		console.log("Yo nigga! I handle all input in this clutter of a site.")
	}

	render() {
		return (
			<article>
				{/*{/* preloader Start -->*/}
				{this.state.showLoader === true &&
			    <div id="preloader" >
			        <div id="status">
			        	<img src="assets/images/header/loadinganimation.gif" id="preloader_image" alt="loader" />
			        </div>
			    </div>}
			    {/*<!-- Top Scroll End -->
			    <!-- Header Wrapper Start -->*/}
			    <div className="jp_top_header_img_wrapper">
			        <div className="jp_slide_img_overlay"></div>
			        <div className="gc_main_menu_wrapper">
			            <div className="container-fluid">
			                <div className="row">
			                    <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 hidden-xs hidden-sm full_width">
			                        <div className="gc_header_wrapper">
			                            <div className="gc_logo">
			                                <a href="index.html">
			                                	<img src="assets/images/header/logo.png" alt="Logo" title="Job Pro" className="img-responsive" />
			                                </a>
			                            </div>
			                        </div>
			                    </div>
			                    <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12 center_responsive">
			                        <div className="header-area hidden-menu-bar stick" id="sticker">
			                            {/*<!-- mainmenu start -->*/}
			                            <div className="mainmenu">
			                                <div className="gc_right_menu">
			                                    <ul>
			                                        <li id="search_button">
			                                            <svg xmlns="http://www.w3.org/2000/svg" 
			                                            xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_3" x="0px" y="0px" 
			                                            viewBox="0 0 451 451" style={{enableBackground: "new 0 0 451 451"}} xmlSpace="preserve"><g><path id="search" 
			                                            d="M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3   
			                                            s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4   
			                                            C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3   
			                                            s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z" fill="#23c0e9"/></g></svg>
			                                        </li>
			                                        <li>
			                                            <div id="search_open" className="gc_search_box">
			                                                <input type="text" placeholder="Search here" />
			                                                <button><i className="fa fa-search" aria-hidden="true"></i></button>
			                                            </div>
			                                        </li>
			                                    </ul>
			                                </div>

			                                 <ul className="float_left">
			                                    <li className="has-mega gc_main_navigation"><a  className="gc_main_navigation">  Home&nbsp;<i className="fa fa-angle-down"></i></a>
			                                        {/*<!-- mega menu start -->*/}
			                                        <ul>
			                                            <li className="parent"><a href="index.html">Home1</a></li>
			                                            <li className="parent"><a href="index_II.html">Home2</a></li>
			                                            <li className="parent"><a href="index_map.html">Home3</a></li>
			                                            <li className="parent"><a href="index_iv.html">Home4</a></li>
			                                            <li className="parent"><a href="index_v.html">Home5</a></li>
			                                            <li className="parent"><a href="index_vi.html">Home6</a></li>
			                                        </ul>
			                                    </li>
			                                    <li className="has-mega gc_main_navigation"><a  className="gc_main_navigation">  Job&nbsp;<i className="fa fa-angle-down"></i></a>
			                                        {/*<!-- mega menu start -->*/}
			                                        <ul>
			                                            <li className="parent"><a href="listing_left.html">Listing-Left</a></li>
			                                            <li className="parent"><a href="listing_right.html">Listing-Right</a></li>
			                                            <li className="parent"><a href="listing_single.html">Listing-Single</a></li>

			                                        </ul>
			                                    </li>
			                                    <li className="parent gc_main_navigation"><a  className="gc_main_navigation">candidates &nbsp;<i className="fa fa-angle-down"></i></a>
			                                        {/*<!-- sub menu start -->*/}
			                                        <ul>
			                                           
			                                            <li className="parent"><a href="company_listing.html">Company-Listing</a></li>
			                                            <li className="parent"><a href="company_listing_single.html">Company-Single</a></li>
			                                            <li className="parent"><a href="candidate_listing.html">candidate-Listing</a></li>
			                                            <li className="parent"><a href="candidate_profile.html">candidate-Profile</a></li>
			                                           
			                                               
			                                        </ul>
			                                        {/*<!-- sub menu end -->*/}
			                                    </li>
												<li className="has-mega gc_main_navigation"><a  className="gc_main_navigation">  Pages&nbsp;<i className="fa fa-angle-down"></i></a>
			                                        {/*<!-- mega menu start -->*/}
			                                        <ul>
			                                            <li className="parent"><a href="about.html">About-Us</a></li>
			                                            <li className="parent"><a href="404_error.html">404</a></li>
			                                            <li className="parent"><a href="add_postin.html">Add-Posting</a></li>
														<li className="parent"><a href="login.html">Login</a></li>
			                                            <li className="parent"><a href="register.html">Register</a></li>
			                                            <li className="parent"><a href="pricing.html">Pricing</a></li>
			                                        </ul>
			                                    </li>
			                                    <li className="has-mega gc_main_navigation"><a  className="gc_main_navigation">  Blog&nbsp;<i className="fa fa-angle-down"></i></a>
			                                        {/*<!-- mega menu start -->*/}
			                                        <ul>
			                                            <li className="parent"><a href="blog_left.html">Blog-Left</a></li>
			                                            <li className="parent"><a href="blog_right.html">Blog-Right</a></li>
			                                            <li className="parent"><a href="blog_single_left.html">Blog-Single-Left</a></li>
			                                            <li className="parent"><a href="blog_single_right.html">Blog-Single-Right</a></li>

			                                        </ul>
			                                    </li>
			                                    <li className="gc_main_navigation parent"><a href="contact.html" className="gc_main_navigation">Contact</a></li>
			                                </ul>
			                            </div>
			                            {/*<!-- mainmenu end -->
			                            <!-- mobile menu area start -->*/}
			                            <header className="mobail_menu">
			                                <div className="container-fluid">
			                                    <div className="row">
			                                        <div className="col-xs-6 col-sm-6">
			                                            <div className="gc_logo">
			                                                <a href="index.html"><img src="assets/images/header/logo.png" alt="Logo" title="Grace Church" /></a>
			                                            </div>
			                                        </div>
			                                        <div className="col-xs-6 col-sm-6">
			                                            <div className="cd-dropdown-wrapper">
			                                                <a className="house_toggle" href="#0">
																<svg xmlns="http://www.w3.org/2000/svg" 
																xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" 
																viewBox="0 0 31.177 31.177" style={{enableBackground: "new 0 0 31.177 31.177"}} xmlSpace="preserve" 
																width="25px" height="25px"><g><g><path className="menubar" 
																d="M30.23,1.775H0.946c-0.489,0-0.887-0.398-0.887-0.888S0.457,0,0.946,0H30.23    
																c0.49,0,0.888,0.398,0.888,0.888S30.72,1.775,30.23,1.775z" fill="#ffffff"/> </g>
																<g><path className="menubar" d="M30.23,9.126H12.069c-0.49,0-0.888-0.398-0.888-0.888c0-0.49,0.398-0.888,0.888-0.888H30.23    
																c0.49,0,0.888,0.397,0.888,0.888C31.118,8.729,30.72,9.126,30.23,9.126z" fill="#ffffff"/></g><g><path className="menubar" 
																d="M30.23,16.477H0.946c-0.489,0-0.887-0.398-0.887-0.888c0-0.49,0.398-0.888,0.887-0.888H30.23    
																c0.49,0,0.888,0.397,0.888,0.888C31.118,16.079,30.72,16.477,30.23,16.477z" fill="#ffffff"/></g>
																<g><path className="menubar" d="M30.23,23.826H12.069c-0.49,0-0.888-0.396-0.888-0.887c0-0.49,0.398-0.888,0.888-0.888H30.23    
																c0.49,0,0.888,0.397,0.888,0.888C31.118,23.43,30.72,23.826,30.23,23.826z" fill="#ffffff"/></g><g>
																<path className="menubar" d="M30.23,31.177H0.946c-0.489,0-0.887-0.396-0.887-0.887c0-0.49,0.398-0.888,0.887-0.888H30.23    
																c0.49,0,0.888,0.398,0.888,0.888C31.118,30.78,30.72,31.177,30.23,31.177z" fill="#ffffff"/></g></g>
																</svg>
																</a>
			                                                <nav className="cd-dropdown">
			                                                    <h2><a >Job<span>Pro</span></a></h2>
			                                                    <a href="#0" className="cd-close">Close</a>
			                                                    <ul className="cd-dropdown-content">
			                                                        <li>
			                                                            <form className="cd-search">
			                                                                <input type="search" placeholder="Search..." />
			                                                            </form>
			                                                        </li>
			                                                        <li className="has-children">
			                                                            <a >Home</a>

			                                                            <ul className="cd-secondary-dropdown is-hidden">
			                                                                <li className="go-back"><a href="#0">Menu</a></li>
			                                                                <li><a href="index.html">Home1</a></li>
																			<li><a href="index_II.html">Home2</a></li>
																			<li><a href="index_map.html">Home3</a></li>
																			<li><a href="index_iv.html">Home4</a></li>
																			<li><a href="index_v.html">Home5</a></li>
																			<li><a href="index_vi.html">Home6</a></li>
			                                                                {/*<!-- .has-children -->*/}

			                                                            </ul>
			                                                            {/*<!-- .cd-secondary-dropdown -->*/}
			                                                        </li>
			                                                        {/*<!-- .has-children -->*/}


			                                                        <li className="has-children">
			                                                            <a >Listing</a>

			                                                            <ul className="cd-secondary-dropdown is-hidden">
			                                                                <li className="go-back"><a href="#0">Menu</a></li>
			                                                                <li>
			                                                                    <a href="listing_left.html">listing-Left</a>
			                                                                </li>
			                                                                {/*<!-- .has-children -->*/}

			                                                                <li>
			                                                                    <a href="listing_right.html">listing-Right</a>
			                                                                </li>
			                                                                {/*<!-- .has-children -->*/}

			                                                                <li>
			                                                                    <a href="listing_single.html">listing-Single</a>
			                                                                </li>
			                                                                {/*<!-- .has-children -->*/}

			                                                            </ul>
			                                                            {/*<!-- .cd-secondary-dropdown -->*/}
			                                                        </li>
			                                                        {/*<!-- .has-children -->*/}
			                                                        <li className="has-children">
			                                                            <a >candidates</a>

			                                                            <ul className="cd-secondary-dropdown is-hidden">
			                                                                <li className="go-back"><a href="#0">Menu</a></li>
																			<li><a href="company_listing.html">Company-Listing</a></li>
																			<li><a href="company_listing_single.html">Company-Single</a></li>
																			<li><a href="candidate_listing.html">candidate-Listing</a></li>
																			<li><a href="candidate_profile.html">candidate-Profile</a></li>
			                                                                {/*<!-- .has-children -->*/}

			                                                            </ul>
			                                                            {/*<!-- .cd-secondary-dropdown -->*/}
			                                                        </li>
																	<li className="has-children">
			                                                            <a >Pages</a>

			                                                            <ul className="cd-secondary-dropdown is-hidden">
			                                                                <li className="go-back"><a href="#0">Menu</a></li>
			                                                                <li><a href="about.html">About-Us</a></li>
																			<li><a href="404_error.html">404</a></li>
																			<li><a href="add_postin.html">Add-Posting</a></li>
																			<li><a href="login.html">Login</a></li>
																			<li><a href="register.html">Register</a></li>
																			<li><a href="pricing.html">Pricing</a></li>
			                                                                {/*<!-- .has-children -->*/}

			                                                            </ul>
			                                                            {/*<!-- .cd-secondary-dropdown -->*/}
			                                                        </li>
			                                                        {/*<!-- .has-children -->*/}
			                                                        <li className="has-children">
			                                                            <a >Blog</a>

			                                                            <ul className="cd-secondary-dropdown is-hidden">
			                                                                <li className="go-back"><a href="#0">Menu</a></li>
			                                                                <li>
			                                                                    <a href="blog_left.html">Blog-Left</a>
			                                                                </li>
			                                                                {/*<!-- .has-children -->*/}

			                                                                <li>
			                                                                    <a href="blog_right.html">Blog-Right</a>
			                                                                </li>
			                                                                {/*<!-- .has-children -->*/}

			                                                                <li>
			                                                                    <a href="blog_single_left.html">Blog-Single-Left</a>
			                                                                </li>
			                                                                {/*<!-- .has-children -->*/}

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
			                    <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 hidden-sm hidden-xs">
			                        <div className="jp_navi_right_btn_wrapper">
			                            <ul>
			                                <li><a href="register.html"><i className="fa fa-user"></i>&nbsp; SIGN UP</a></li>
			                                <li><a href="login.html"><i className="fa fa-sign-in"></i>&nbsp; LOGIN</a></li>
			                            </ul>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			        <div className="jp_banner_heading_cont_wrapper">
			            <div className="container">
			                <div className="row">
			                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			                        <div className="jp_job_heading_wrapper">
			                            <div className="jp_job_heading">
			                                <h1><span>3,000+</span> Browse Jobs</h1>
			                                <p>Find Jobs, Employment & Career Opportunities</p>
			                            </div>
			                        </div>
			                    </div>
			                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			                        <div className="jp_header_form_wrapper">
			                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
			                                <input type="text" placeholder="Keyword e.g. (Job Title, Description, Tags)" />
			                            </div>
			                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
			                                <div className="jp_form_location_wrapper">
			                                    <i className="fa fa-dot-circle-o first_icon"></i><select>
											<option>Select Location</option>
											<option>Select Location</option>
											<option>Select Location</option>
											<option>Select Location</option>
											<option>Select Location</option>
										</select><i className="fa fa-angle-down second_icon"></i>
			                                </div>
			                            </div>
			                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
			                                <div className="jp_form_exper_wrapper">
			                                    <i className="fa fa-dot-circle-o first_icon"></i><select>
											<option>Experience</option>
											<option>Experience</option>
											<option>Experience</option>
											<option>Experience</option>
											<option>Experience</option>
										</select><i className="fa fa-angle-down second_icon"></i>
			                                </div>
			                            </div>
			                            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
			                                <div className="jp_form_btn_wrapper">
			                                    <ul>
			                                        <li><a ><i className="fa fa-search"></i> Search</a></li>
			                                    </ul>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			                        <div className="jp_banner_main_jobs_wrapper">
			                            <div className="jp_banner_main_jobs">
			                                <ul>
			                                    <li><i className="fa fa-tags"></i> Trending Keywords :</li>
			                                    <li><a >ui designer,</a></li>
			                                    <li><a >developer,</a></li>
			                                    <li><a >senior</a></li>
			                                    <li><a >it company,</a></li>
			                                    <li><a >design,</a></li>
			                                    <li><a >call center</a></li>
			                                </ul>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			        <div className="jp_banner_jobs_categories_wrapper">
			            <div className="container">
			                <div className="jp_top_jobs_category_wrapper jp_job_cate_left_border jp_job_cate_left_border_bottom">
			                    <div className="jp_top_jobs_category">
			                        <i className="fa fa-code"></i>
			                        <h3><a >Developer</a></h3>
			                        <p>(240 jobs)</p>
			                    </div>
			                </div>
			                <div className="jp_top_jobs_category_wrapper jp_job_cate_left_border_bottom">
			                    <div className="jp_top_jobs_category">
			                        <i className="fa fa-laptop"></i>
			                        <h3><a >Technology</a></h3>
			                        <p>(504 jobs)</p>
			                    </div>
			                </div>
			                <div className="jp_top_jobs_category_wrapper jp_job_cate_left_border_bottom">
			                    <div className="jp_top_jobs_category">
			                        <i className="fa fa-bar-chart"></i>
			                        <h3><a >Accounting</a></h3>
			                        <p>(2250 jobs)</p>
			                    </div>
			                </div>
			                <div className="jp_top_jobs_category_wrapper jp_job_cate_left_border_res">
			                    <div className="jp_top_jobs_category">
			                        <i className="fa fa-medkit"></i>
			                        <h3><a >Medical</a></h3>
			                        <p>(202 jobs)</p>
			                    </div>
			                </div>
			                <div className="jp_top_jobs_category_wrapper">
			                    <div className="jp_top_jobs_category">
			                        <i className="fa fa-university"></i>
			                        <h3><a >Government</a></h3>
			                        <p>(1457 jobs)</p>
			                    </div>
			                </div>
			                <div className="jp_top_jobs_category_wrapper">
			                    <div className="jp_top_jobs_category">
			                        <i className="fa fa-th-large"></i>
			                        <h3><a >All Jobs</a></h3>
			                        <p>(2000+ jobs)</p>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			    {/* Header Wrapper End */}
			    {/* jp tittle slider Wrapper Start */}
			    <div className="jp_tittle_slider_main_wrapper" style={{float:"left", width: "100%", marginTop:"30px"}}>
			        <div className="container">
			            <div className="jp_tittle_name_wrapper">
			                <div className="jp_tittle_name">
			                    <h3>Trending</h3>
			                    <h4>Jobs</h4>
			                </div>
			            </div>
			            <div className="jp_tittle_slider_wrapper">
			                <div className="jp_tittle_slider_content_wrapper">
			                    <div className="owl-carousel owl-theme">
			                        <div className="item">
			                            <div className="jp_tittle_slides_one">
			                                <div className="jp_tittle_side_img_wrapper">
			                                    <img src="assets/images/content/tittle_img1.png" alt="tittle_img" />
			                                </div>
			                                <div className="jp_tittle_side_cont_wrapper">
			                                    <h4>Graphic Designer (UI / UX)</h4>
			                                    <p>Webstrot Pvt. Ltd.</p>
			                                </div>
			                            </div>
			                            <div className="jp_tittle_slides_one jp_tittle_slides_two">
			                                <div className="jp_tittle_side_img_wrapper">
			                                    <img src="assets/images/content/tittle_img2.png" alt="tittle_img" />
			                                </div>
			                                <div className="jp_tittle_side_cont_wrapper">
			                                    <h4>Graphic Designer (UI / UX)</h4>
			                                    <p>Webstrot Pvt. Ltd.</p>
			                                </div>
			                            </div>
			                            <div className="jp_tittle_slides_one jp_tittle_slides_third">
			                                <div className="jp_tittle_side_img_wrapper">
			                                    <img src="assets/images/content/tittle_img3.png" alt="tittle_img" />
			                                </div>
			                                <div className="jp_tittle_side_cont_wrapper">
			                                    <h4>Graphic Designer (UI / UX)</h4>
			                                    <p>Webstrot Pvt. Ltd.</p>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			    {/* jp tittle slider Wrapper End */}
			    {/* jp first sidebar Wrapper Start */}
			    <div className="jp_first_sidebar_main_wrapper">
			        <div className="container">
			            <div className="row">
			                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
			                    <div className="row">
			                    
			                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			                            <div className="cc_featured_product_main_wrapper">
			                                <div className="jp_hiring_heading_wrapper jp_job_post_heading_wrapper">
			                                    <h2>Recent Jobs</h2>
			                                </div>
			                                <ul className="nav nav-tabs" role="tablist">
			                                    <li role="presentation" className="active"><a href="#best" aria-controls="best" role="tab" data-toggle="tab">Featured</a></li>
			                                    <li role="presentation"><a href="#hot" aria-controls="hot" role="tab" data-toggle="tab">Remotely</a></li>
			                                    <li role="presentation"><a href="#trand" aria-controls="trand" role="tab" data-toggle="tab">Part Time</a></li>
			                                    <li role="presentation"><a href="#best" aria-controls="best" role="tab" data-toggle="tab">Full Time </a></li>
			                                </ul>
			                            </div>
			                            <div className="tab-content">
			                                <div role="tabpanel" className="tab-pane fade in active" id="best">
			                                    <div className="ss_featured_products">
			                                        <div className="owl-carousel owl-theme">
			                                            <div className="item" data-hash="zero">
			                                                <div className="jp_job_post_main_wrapper_cont">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img1.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img2.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img3.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img4.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img5.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                            </div>
			                                            <div className="item" data-hash="one">
			                                                <div className="jp_job_post_main_wrapper_cont">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img1.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img2.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img3.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img4.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img5.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                            </div>
			                                            <div className="item" data-hash="two">
			                                                <div className="jp_job_post_main_wrapper_cont">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img1.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img2.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img3.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img4.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img5.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                            </div>

			                                        </div>
			                                    </div>
			                                    {/*<div className="video_nav_img_wrapper">
			                                        <div className="video_nav_img">
			                                            <ul>
			                                                <li><a className="button secondary url owl_nav" href="#zero">1</a></li>
			                                                <li><a className="button secondary url owl_nav" href="#one">2</a></li>
			                                                <li><a className="button secondary url owl_nav active" href="#two">3</a></li>
			                                            </ul>
			                                        </div>
			                                    </div>*/}
			                                </div>
			                                <div role="tabpanel" className="tab-pane fade" id="hot">
			                                    <div className="ss_featured_products">
			                                        <div className="owl-carousel owl-theme">
			                                            <div className="item" data-hash="zero">
			                                                <div className="jp_job_post_main_wrapper_cont">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img1.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img2.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img3.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img4.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img5.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                            </div>
			                                            <div className="item" data-hash="one">
			                                                <div className="jp_job_post_main_wrapper_cont">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img1.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img2.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img3.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img4.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img5.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                            </div>
			                                            <div className="item" data-hash="two">
			                                                <div className="jp_job_post_main_wrapper_cont">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img1.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img2.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img3.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img4.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img5.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                            </div>
			                                        </div>
			                                    </div>
			                                    {/*<div className="video_nav_img_wrapper">
			                                        <div className="video_nav_img">
			                                            <ul>
			                                                <li><a className="button secondary url owl_nav" href="#zero">1</a></li>
			                                                <li><a className="button secondary url owl_nav" href="#one">2</a></li>
			                                                <li><a className="button secondary url owl_nav active" href="#two">3</a></li>
			                                            </ul>
			                                        </div>
			                                    </div>*/}
			                                </div>
			                                <div role="tabpanel" className="tab-pane fade" id="trand">
			                                    <div className="ss_featured_products">
			                                        <div className="owl-carousel owl-theme">
			                                            <div className="item" data-hash="zero">
			                                                <div className="jp_job_post_main_wrapper_cont">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img1.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img2.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img3.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img4.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img5.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                            </div>
			                                            <div className="item" data-hash="one">
			                                                <div className="jp_job_post_main_wrapper_cont">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img1.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img2.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img3.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img4.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img5.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                            </div>
			                                            <div className="item" data-hash="two">
			                                                <div className="jp_job_post_main_wrapper_cont">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img1.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img2.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img3.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img4.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
			                                                    <div className="jp_job_post_main_wrapper">
			                                                        <div className="row">
			                                                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			                                                                <div className="jp_job_post_side_img">
			                                                                    <img src="assets/images/content/job_post_img5.jpg" alt="post_img" />
			                                                                </div>
			                                                                <div className="jp_job_post_right_cont">
			                                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                                    <p>Webstrot Technology Pvt. Ltd.</p>
			                                                                    <ul>
			                                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			                                                                <div className="jp_job_post_right_btn_wrapper">
			                                                                    <ul>
			                                                                        <li><a ><i className="fa fa-heart-o"></i></a></li>
			                                                                        <li><a >Part Time</a></li>
			                                                                        <li><a >Apply</a></li>
			                                                                    </ul>
			                                                                </div>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                    <div className="jp_job_post_keyword_wrapper">
			                                                        <ul>
			                                                            <li><i className="fa fa-tags"></i>Keywords :</li>
			                                                            <li><a >ui designer,</a></li>
			                                                            <li><a >developer,</a></li>
			                                                            <li><a >senior</a></li>
			                                                            <li><a >it company,</a></li>
			                                                            <li><a >design,</a></li>
			                                                            <li><a >call center</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                            </div>
			                                        </div>
			                                    </div>
			                                    {/*<div className="video_nav_img_wrapper">
			                                        <div className="video_nav_img">
			                                            <ul>
			                                                <li><a className="button secondary url owl_nav" href="#zero">1</a></li>
			                                                <li><a className="button secondary url owl_nav" href="#one">2</a></li>
			                                                <li><a className="button secondary url owl_nav active" href="#two">3</a></li>
			                                            </ul>
			                                        </div>
			                                    </div>*/}
			                                </div>
			                            </div>
			                        </div>
			                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			                            <div className="jp_register_section_main_wrapper">
			                                <div className="jp_regis_left_side_box_wrapper">
			                                    <div className="jp_regis_left_side_box">
			                                        <img src="assets/images/content/regis_icon.png" alt="icon" />
			                                        <h4>I’m an EMPLOYER</h4>
			                                        <p>Signed in companies are able to post new<br /> job offers, searching for candidate...</p>
			                                        <ul>
			                                            <li><a ><i className="fa fa-plus-circle"></i> &nbsp;REGISTER AS COMPANY</a></li>
			                                        </ul>
			                                    </div>
			                                </div>
			                                <div className="jp_regis_right_side_box_wrapper">
			                                    <div className="jp_regis_right_img_overlay"></div>
			                                    <div className="jp_regis_right_side_box">
			                                        <img src="assets/images/content/regis_icon2.png" alt="icon" />
			                                        <h4>I’m an candidate</h4>
			                                        <p>Signed in companies are able to post new<br /> job offers, searching for candidate...</p>
			                                        <ul>
			                                            <li><a ><i className="fa fa-plus-circle"></i> &nbsp;REGISTER AS COMPANY</a></li>
			                                        </ul>
			                                    </div>
			                                    <div className="jp_regis_center_tag_wrapper">
			                                        <p>OR</p>
			                                    </div>
			                                </div>

			                            </div>
			                        </div>
			                    </div>
			                </div>
			                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
			                    <div className="jp_first_right_sidebar_main_wrapper">
			                        <div className="row">
			                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			                                <div className="jp_add_resume_wrapper">
			                                    <div className="jp_add_resume_img_overlay"></div>
			                                    <div className="jp_add_resume_cont">
			                                        <img src="assets/images/content/resume_logo.png" alt="logo" />
			                                        <h4>Get Best Matched Jobs On your Email. Add Resume NOW!</h4>
			                                        <ul>
			                                            <li><a ><i className="fa fa-plus-circle"></i> &nbsp;ADD RESUME</a></li>
			                                        </ul>
			                                    </div>
			                                </div>
			                            </div>
			                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			                                <div className="jp_spotlight_main_wrapper">
			                                    <div className="spotlight_header_wrapper">
			                                        <h4>Job Spotlight</h4>
			                                    </div>
			                                    <div className="jp_spotlight_slider_wrapper">
			                                        <div className="owl-carousel owl-theme">
			                                            <div className="item">
			                                                <div className="jp_spotlight_slider_img_Wrapper">
			                                                    <img src="assets/images/content/spotlight_img.jpg" alt="spotlight_img" />
			                                                </div>
			                                                <div className="jp_spotlight_slider_cont_Wrapper">
			                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                    <p>Webstrot Technology Ltd.</p>
			                                                    <ul>
			                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                    </ul>
			                                                </div>
			                                                <div className="jp_spotlight_slider_btn_wrapper">
			                                                    <div className="jp_spotlight_slider_btn">
			                                                        <ul>
			                                                            <li><a ><i className="fa fa-plus-circle"></i> &nbsp;ADD RESUME</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                            </div>
			                                            <div className="item">
			                                                <div className="jp_spotlight_slider_img_Wrapper">
			                                                    <img src="assets/images/content/spotlight_img.jpg" alt="spotlight_img" />
			                                                </div>
			                                                <div className="jp_spotlight_slider_cont_Wrapper">
			                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                    <p>Webstrot Technology Ltd.</p>
			                                                    <ul>
			                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                    </ul>
			                                                </div>
			                                                <div className="jp_spotlight_slider_btn_wrapper">
			                                                    <div className="jp_spotlight_slider_btn">
			                                                        <ul>
			                                                            <li><a ><i className="fa fa-plus-circle"></i> &nbsp;ADD RESUME</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                            </div>
			                                            <div className="item">
			                                                <div className="jp_spotlight_slider_img_Wrapper">
			                                                    <img src="assets/images/content/spotlight_img.jpg" alt="spotlight_img" />
			                                                </div>
			                                                <div className="jp_spotlight_slider_cont_Wrapper">
			                                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
			                                                    <p>Webstrot Technology Ltd.</p>
			                                                    <ul>
			                                                        <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
			                                                        <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
			                                                    </ul>
			                                                </div>
			                                                <div className="jp_spotlight_slider_btn_wrapper">
			                                                    <div className="jp_spotlight_slider_btn">
			                                                        <ul>
			                                                            <li><a ><i className="fa fa-plus-circle"></i> &nbsp;ADD RESUME</a></li>
			                                                        </ul>
			                                                    </div>
			                                                </div>
			                                            </div>
			                                        </div>
			                                    </div>
			                                </div>
			                            </div>
			                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			                                <div className="jp_rightside_job_categories_wrapper">
			                                    <div className="jp_rightside_job_categories_heading">
			                                        <h4>Jobs by Category</h4>
			                                    </div>
			                                    <div className="jp_rightside_job_categories_content">
			                                        <ul>
			                                            <li><i className="fa fa-caret-right"></i> <a >Graphic Designer <span>(214)</span></a></li>
			                                            <li><i className="fa fa-caret-right"></i> <a >Engineering Jobs <span>(514)</span></a></li>
			                                            <li><i className="fa fa-caret-right"></i> <a >Mainframe Jobs <span>(554)</span></a></li>
			                                            <li><i className="fa fa-caret-right"></i> <a >Legal Jobs <span>(457)</span></a></li>
			                                            <li><i className="fa fa-caret-right"></i> <a >IT Jobs <span>(1254)</span></a></li>
			                                            <li><i className="fa fa-caret-right"></i> <a >R&D Jobs <span>(554)</span></a></li>
			                                            <li><i className="fa fa-caret-right"></i> <a >Government Jobs <span>(350)</span></a></li>
			                                            <li><i className="fa fa-caret-right"></i> <a >PSU Jobs <span>(221)</span></a></li>
			                                            <li><i className="fa fa-plus-circle"></i> <a >View All Categories</a></li>
			                                        </ul>
			                                    </div>
			                                </div>
			                            </div>
			                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			                                <div className="jp_rightside_career_wrapper">
			                                    <div className="jp_rightside_career_heading">
			                                        <h4>Career Advice</h4>
			                                    </div>
			                                    <div className="jp_rightside_career_main_content">
			                                        <div className="jp_rightside_career_content_wrapper">
			                                            <div className="jp_rightside_career_img">
			                                                <img src="assets/images/content/career_img1.jpg" alt="career_img" />
			                                            </div>
			                                            <div className="jp_rightside_career_img_cont">
			                                                <h4>Job Seekeks OCT - 2017</h4>
			                                                <p><i className="fa fa-calendar-o"></i> &nbsp;20 OCT, 2017</p>
			                                            </div>
			                                        </div>
			                                        <div className="jp_rightside_career_content_wrapper">
			                                            <div className="jp_rightside_career_img">
			                                                <img src="assets/images/content/career_img2.jpg" alt="career_img" />
			                                            </div>
			                                            <div className="jp_rightside_career_img_cont">
			                                                <h4>Job Seekeks OCT - 2017</h4>
			                                                <p><i className="fa fa-calendar-o"></i> &nbsp;20 OCT, 2017</p>
			                                            </div>
			                                        </div>
			                                        <div className="jp_rightside_career_content_wrapper">
			                                            <div className="jp_rightside_career_img">
			                                                <img src="assets/images/content/career_img3.jpg" alt="career_img" />
			                                            </div>
			                                            <div className="jp_rightside_career_img_cont">
			                                                <h4>Job Seekeks OCT - 2017</h4>
			                                                <p><i className="fa fa-calendar-o"></i> &nbsp;20 OCT, 2017</p>
			                                            </div>
			                                        </div>
			                                        <div className="jp_rightside_career_btn">
			                                            <a ><i className="fa fa-plus-circle"></i> View All</a>
			                                        </div>
			                                    </div>
			                                </div>
			                            </div>
			                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			                                <div className="jp_rightside_job_categories_wrapper">
			                                    <div className="jp_rightside_job_categories_heading">
			                                        <h4>Jobs by Category</h4>
			                                    </div>
			                                    <div className="jp_rightside_job_categories_content">
			                                        <ul>
			                                            <li><i className="fa fa-caret-right"></i> <a >Graphic Designer <span>(214)</span></a></li>
			                                            <li><i className="fa fa-caret-right"></i> <a >Engineering Jobs <span>(514)</span></a></li>
			                                            <li><i className="fa fa-caret-right"></i> <a >Mainframe Jobs <span>(554)</span></a></li>
			                                            <li><i className="fa fa-caret-right"></i> <a >Legal Jobs <span>(457)</span></a></li>
			                                            <li><i className="fa fa-caret-right"></i> <a >IT Jobs <span>(1254)</span></a></li>
			                                            <li><i className="fa fa-plus-circle"></i> <a >View All Categories</a></li>
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
			    {/* jp first sidebar Wrapper End */}
			    {/* jp counter Wrapper Start */}
			    <div className="jp_counter_main_wrapper">
			        <div className="container">
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
			    </div>
			    {/* jp counter Wrapper End */}
			    {/* jp Best deals Wrapper Start */}
			    <div className="jp_best_deals_main_wrapper">
			        <div className="container">
			            <div className="row">
			                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
			                    <div className="jp_best_deal_slider_main_wrapper">
			                        <div className="jp_best_deal_heading_wrapper">
			                            <h2>Offering the best Deals</h2>
			                        </div>
			                        <div className="jp_best_deal_slider_wrapper">
			                            <div className="owl-carousel owl-theme">
			                                <div className="item">
			                                    <div className="row">
			                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
			                                            <div className="jp_best_deal_main_cont_wrapper">
			                                                <div className="jp_best_deal_icon_sec">
			                                                    <i className="flaticon-magnifying-glass"></i>
			                                                </div>
			                                                <div className="jp_best_deal_cont_sec">
			                                                    <h4><a >Search a Jobs</a></h4>
			                                                    <p>Proin gravida nibh vel velit auctr akshay Aenean sollicitudin...</p>
			                                                </div>
			                                            </div>
			                                        </div>
			                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
			                                            <div className="jp_best_deal_main_cont_wrapper jp_best_deal_main_cont_wrapper1">
			                                                <div className="jp_best_deal_icon_sec">
			                                                    <i className="flaticon-users"></i>
			                                                </div>
			                                                <div className="jp_best_deal_cont_sec">
			                                                    <h4><a >Apply a Good Job</a></h4>
			                                                    <p>Proin gravida nibh vel velit auctr akshay Aenean sollicitudin...</p>
			                                                </div>
			                                            </div>
			                                        </div>
			                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
			                                            <div className="jp_best_deal_main_cont_wrapper jp_best_deal_main_cont_wrapper2">
			                                                <div className="jp_best_deal_icon_sec">
			                                                    <i className="flaticon-shield"></i>
			                                                </div>
			                                                <div className="jp_best_deal_cont_sec">
			                                                    <h4><a >Job Security</a></h4>
			                                                    <p>Proin gravida nibh vel velit auctr akshay Aenean sollicitudin...</p>
			                                                </div>
			                                            </div>
			                                        </div>
			                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
			                                            <div className="jp_best_deal_main_cont_wrapper jp_best_deal_main_cont_wrapper2">
			                                                <div className="jp_best_deal_icon_sec">
			                                                    <i className="flaticon-notification"></i>
			                                                </div>
			                                                <div className="jp_best_deal_cont_sec">
			                                                    <h4><a >Job Notifications</a></h4>
			                                                    <p>Proin gravida nibh vel velit auctr akshay Aenean sollicitudin...</p>
			                                                </div>
			                                            </div>
			                                        </div>
			                                    </div>
			                                </div>
			                                <div className="item">
			                                    <div className="row">
			                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
			                                            <div className="jp_best_deal_main_cont_wrapper">
			                                                <div className="jp_best_deal_icon_sec">
			                                                    <i className="flaticon-magnifying-glass"></i>
			                                                </div>
			                                                <div className="jp_best_deal_cont_sec">
			                                                    <h4><a >Search a Jobs</a></h4>
			                                                    <p>Proin gravida nibh vel velit auctr akshay Aenean sollicitudin...</p>
			                                                </div>
			                                            </div>
			                                        </div>
			                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
			                                            <div className="jp_best_deal_main_cont_wrapper jp_best_deal_main_cont_wrapper1">
			                                                <div className="jp_best_deal_icon_sec">
			                                                    <i className="flaticon-users"></i>
			                                                </div>
			                                                <div className="jp_best_deal_cont_sec">
			                                                    <h4><a >Apply a Good Job</a></h4>
			                                                    <p>Proin gravida nibh vel velit auctr akshay Aenean sollicitudin...</p>
			                                                </div>
			                                            </div>
			                                        </div>
			                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
			                                            <div className="jp_best_deal_main_cont_wrapper jp_best_deal_main_cont_wrapper2">
			                                                <div className="jp_best_deal_icon_sec">
			                                                    <i className="flaticon-shield"></i>
			                                                </div>
			                                                <div className="jp_best_deal_cont_sec">
			                                                    <h4><a >Job Security</a></h4>
			                                                    <p>Proin gravida nibh vel velit auctr akshay Aenean sollicitudin...</p>
			                                                </div>
			                                            </div>
			                                        </div>
			                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
			                                            <div className="jp_best_deal_main_cont_wrapper jp_best_deal_main_cont_wrapper2">
			                                                <div className="jp_best_deal_icon_sec">
			                                                    <i className="flaticon-notification"></i>
			                                                </div>
			                                                <div className="jp_best_deal_cont_sec">
			                                                    <h4><a >Job Notifications</a></h4>
			                                                    <p>Proin gravida nibh vel velit auctr akshay Aenean sollicitudin...</p>
			                                                </div>
			                                            </div>
			                                        </div>
			                                    </div>
			                                </div>
			                                <div className="item">
			                                    <div className="row">
			                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
			                                            <div className="jp_best_deal_main_cont_wrapper">
			                                                <div className="jp_best_deal_icon_sec">
			                                                    <i className="flaticon-magnifying-glass"></i>
			                                                </div>
			                                                <div className="jp_best_deal_cont_sec">
			                                                    <h4><a >Search a Jobs</a></h4>
			                                                    <p>Proin gravida nibh vel velit auctr akshay Aenean sollicitudin...</p>
			                                                </div>
			                                            </div>
			                                        </div>
			                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
			                                            <div className="jp_best_deal_main_cont_wrapper jp_best_deal_main_cont_wrapper1">
			                                                <div className="jp_best_deal_icon_sec">
			                                                    <i className="flaticon-users"></i>
			                                                </div>
			                                                <div className="jp_best_deal_cont_sec">
			                                                    <h4><a >Apply a Good Job</a></h4>
			                                                    <p>Proin gravida nibh vel velit auctr akshay Aenean sollicitudin...</p>
			                                                </div>
			                                            </div>
			                                        </div>
			                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
			                                            <div className="jp_best_deal_main_cont_wrapper jp_best_deal_main_cont_wrapper2">
			                                                <div className="jp_best_deal_icon_sec">
			                                                    <i className="flaticon-shield"></i>
			                                                </div>
			                                                <div className="jp_best_deal_cont_sec">
			                                                    <h4><a >Job Security</a></h4>
			                                                    <p>Proin gravida nibh vel velit auctr akshay Aenean sollicitudin...</p>
			                                                </div>
			                                            </div>
			                                        </div>
			                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
			                                            <div className="jp_best_deal_main_cont_wrapper jp_best_deal_main_cont_wrapper2">
			                                                <div className="jp_best_deal_icon_sec">
			                                                    <i className="flaticon-notification"></i>
			                                                </div>
			                                                <div className="jp_best_deal_cont_sec">
			                                                    <h4><a >Job Notifications</a></h4>
			                                                    <p>Proin gravida nibh vel velit auctr akshay Aenean sollicitudin...</p>
			                                                </div>
			                                            </div>
			                                        </div>
			                                    </div>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
			                    <div className="jp_rightside_career_wrapper jp_best_deal_right_sec_wrapper">
			                        <div className="jp_rightside_career_heading">
			                            <h4>Recent Resumes</h4>
			                        </div>
			                        <div className="jp_rightside_career_main_content">
			                            <div className="jp_rightside_career_content_wrapper jp_best_deal_right_content">
			                                <div className="jp_rightside_career_img">
			                                    <img src="assets/images/content/client_img1.jpg" alt="career_img" />
			                                </div>
			                                <div className="jp_rightside_career_img_cont">
			                                    <h4>Akshay Handge</h4>
			                                    <p><i className="fa fa-folder-open-o"></i> &nbsp;Developer</p>
			                                </div>
			                            </div>
			                            <div className="jp_rightside_career_content_wrapper jp_best_deal_right_content">
			                                <div className="jp_rightside_career_img">
			                                    <img src="assets/images/content/client_img2.jpg" alt="career_img" />
			                                </div>
			                                <div className="jp_rightside_career_img_cont">
			                                    <h4>Akshay Handge</h4>
			                                    <p><i className="fa fa-folder-open-o"></i> &nbsp;UI Designer</p>
			                                </div>
			                            </div>
			                            <div className="jp_rightside_career_content_wrapper jp_best_deal_right_content">
			                                <div className="jp_rightside_career_img">
			                                    <img src="assets/images/content/client_img3.jpg" alt="career_img" />
			                                </div>
			                                <div className="jp_rightside_career_img_cont">
			                                    <h4>Jacklen Fandores</h4>
			                                    <p><i className="fa fa-folder-open-o"></i> &nbsp;Web Designer</p>
			                                </div>
			                            </div>
			                            <div className="jp_rightside_career_btn">
			                                <a ><i className="fa fa-plus-circle"></i> View All</a>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			    {/* jp Best deals Wrapper End */}
			    {/* jp Client Wrapper Start 
			    <div className="jp_client_slider_main_wrapper">
			        <div className="container">
			            <div className="row">
			                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			                    <div className="jp_first_client_slider_wrapper">
			                        <div className="jp_first_client_slider_img_overlay"></div>
			                        <div className="jp_client_heading_wrapper">
			                            <h2>What Clients Say?</h2>
			                        </div>
			                        <div className="jp_client_slider_wrapper">
			                            <div className="owl-carousel owl-theme">
			                                <div className="item">
			                                    <div className="jp_client_slide_show_wrapper">
			                                        <div className="jp_client_slider_img_wrapper">
			                                            <img src="assets/images/content/client_slider_img.jpg" alt="client_img" />
			                                        </div>
			                                        <div className="jp_client_slider_cont_wrapper">
			                                            <p>“Sollicitudin, lorem quis bibendum en auctor, aks consequat ipsum, nec a sagittis sem nibh id elit. Duis sed odo nibh vulputate Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin”</p>
			                                            <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i><span>~ Jeniffer Doe &nbsp;<b>(Ui Designer)</b></span>
			                                        </div>
			                                    </div>
			                                </div>
			                                <div className="item">
			                                    <div className="jp_client_slide_show_wrapper">
			                                        <div className="jp_client_slider_img_wrapper">
			                                            <img src="assets/images/content/client_slider_img.jpg" alt="client_img" />
			                                        </div>
			                                        <div className="jp_client_slider_cont_wrapper">
			                                            <p>“Sollicitudin, lorem quis bibendum en auctor, aks consequat ipsum, nec a sagittis sem nibh id elit. Duis sed odo nibh vulputate Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin”</p>
			                                            <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i><span>~ Jeniffer Doe &nbsp;<b>(Ui Designer)</b></span>
			                                        </div>
			                                    </div>
			                                </div>
			                                <div className="item">
			                                    <div className="jp_client_slide_show_wrapper">
			                                        <div className="jp_client_slider_img_wrapper">
			                                            <img src="assets/images/content/client_slider_img.jpg" alt="client_img" />
			                                        </div>
			                                        <div className="jp_client_slider_cont_wrapper">
			                                            <p>“Sollicitudin, lorem quis bibendum en auctor, aks consequat ipsum, nec a sagittis sem nibh id elit. Duis sed odo nibh vulputate Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin”</p>
			                                            <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i><span>~ Jeniffer Doe &nbsp;<b>(Ui Designer)</b></span>
			                                        </div>
			                                    </div>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div> */}
			    {/* jp Client Wrapper End */}
			    {/* jp pricing Wrapper Start */}
			    <div className="jp_pricing_main_wrapper">
			        <div className="container">
			            <div className="row">
			                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
			                    <div className="pricing_box1_wrapper pricing_border_box1_wrapper">
			                        <div className="box1_heading_wrapper">
			                            <h4>Basic Plan</h4>
			                        </div>
			                        <div className="price_box1_wrapper">
			                            <div className="price_box1">
			                                <h1>$<span>29</span></h1>
			                            </div>
			                        </div>
			                        <div className="pricing_cont_wrapper">
			                            <div className="pricing_cont">
			                                <ul>
			                                    <li><i className="fa fa-plus-circle"></i> &nbsp;&nbsp;5 Jobs Posting</li>
			                                    <li><i className="fa fa-plus-circle"></i> &nbsp;&nbsp;2 Featured jobs</li>
			                                    <li><i className="fa fa-plus-circle"></i> &nbsp;&nbsp;1 Renew Jobs</li>
			                                    <li><i className="fa fa-plus-circle"></i> &nbsp;&nbsp;10 Days Duration</li>
			                                    <li><i className="fa fa-plus-circle"></i> &nbsp;&nbsp;Email Alert</li>
			                                </ul>
			                            </div>
			                        </div>
			                        <div className="pricing_btn_wrapper">
			                            <div className="pricing_btn1">
			                                <ul>
			                                    <li><a ><i className="fa fa-plus-circle"></i> Get Started</a></li>
			                                </ul>
			                            </div>
			                        </div>
			                        <div className="jp_pricing_label_wrapper">
			                            <i className="fa fa-star"></i>
			                        </div>
			                    </div>
			                </div>
			                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
			                    <div className="pricing_box1_wrapper pricing_border_box2_wrapper">
			                        <div className="box1_heading_wrapper box2_heading_wrapper">
			                            <h4>Premium Plan</h4>
			                        </div>
			                        <div className="price_box1_wrapper">
			                            <div className="price_box2">
			                                <h1>$<span>49</span></h1>
			                            </div>
			                        </div>
			                        <div className="pricing_cont_wrapper">
			                            <div className="pricing_cont">
			                                <ul>
			                                    <li><i className="fa fa-plus-circle"></i> &nbsp;&nbsp;5 Jobs Posting</li>
			                                    <li><i className="fa fa-plus-circle"></i> &nbsp;&nbsp;2 Featured jobs</li>
			                                    <li><i className="fa fa-plus-circle"></i> &nbsp;&nbsp;1 Renew Jobs</li>
			                                    <li><i className="fa fa-plus-circle"></i> &nbsp;&nbsp;10 Days Duration</li>
			                                    <li><i className="fa fa-plus-circle"></i> &nbsp;&nbsp;Email Alert</li>
			                                </ul>
			                            </div>
			                        </div>
			                        <div className="pricing_btn_wrapper">
			                            <div className="pricing_btn2">
			                                <ul>
			                                    <li><a ><i className="fa fa-plus-circle"></i> Get Started</a></li>
			                                </ul>
			                            </div>
			                        </div>
			                        <div className="jp_pricing_label_wrapper">
			                            <i className="fa fa-star"></i>
			                        </div>
			                    </div>
			                </div>
			                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
			                    <div className="pricing_box1_wrapper pricing_border_box3_wrapper">
			                        <div className="box1_heading_wrapper box3_heading_wrapper">
			                            <h4>Advanced Plan</h4>
			                        </div>
			                        <div className="price_box1_wrapper">
			                            <div className="price_box3">
			                                <h1>$<span>79</span></h1>
			                            </div>
			                        </div>
			                        <div className="pricing_cont_wrapper">
			                            <div className="pricing_cont">
			                                <ul>
			                                    <li><i className="fa fa-plus-circle"></i> &nbsp;&nbsp;5 Jobs Posting</li>
			                                    <li><i className="fa fa-plus-circle"></i> &nbsp;&nbsp;2 Featured jobs</li>
			                                    <li><i className="fa fa-plus-circle"></i> &nbsp;&nbsp;1 Renew Jobs</li>
			                                    <li><i className="fa fa-plus-circle"></i> &nbsp;&nbsp;10 Days Duration</li>
			                                    <li><i className="fa fa-plus-circle"></i> &nbsp;&nbsp;Email Alert</li>
			                                </ul>
			                            </div>
			                        </div>
			                        <div className="pricing_btn_wrapper">
			                            <div className="pricing_btn3">
			                                <ul>
			                                    <li><a ><i className="fa fa-plus-circle"></i> Get Started</a></li>
			                                </ul>
			                            </div>
			                        </div>
			                        <div className="jp_pricing_label_wrapper">
			                            <i className="fa fa-star"></i>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			    {/* jp pricing Wrapper End */}
			    {/* jp downlord Wrapper Start */}
			    <div className="jp_downlord_main_wrapper">
			        <div className="jp_downlord_img_overlay"></div>
			        <div className="container">
			            <div className="row">
			                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 hidden-sm hidden-xs">
			                    <div className="jp_down_mob_img_wrapper">
			                        <img src="assets/images/content/mobail.png" alt="mobail_img" />
			                    </div>
			                </div>
			                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
			                    <div className="ss_download_wrapper_details">
			                        <h1><span>Download</span><br/>Job Portal App Now!</h1>
			                        <p>Fast, Simple & Delightful. All it takes is 30 seconds to Download.</p>
			                        <a  className="ss_appstore"><span><i className="fa fa-apple" aria-hidden="true"></i></span> App Store</a>
			                        <a  className="ss_playstore"><span><i className="fa fa-android" aria-hidden="true"></i></span> Play Store</a>
			                    </div>
			                </div>
			                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 visible-sm visible-xs">
			                    <div className="jp_down_mob_img_wrapper">
			                        <img src="assets/images/content/mobail.png" className="img-responsive" alt="mobail_img" />
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
			                            <i className="fa fa-envelope-o"></i>
			                            <input type="text" placeholder="Enter Your Email" /><button type="submit">Submit</button>
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
			                                <a >
			                                	<img src="assets/images/content/resume_logo.png" alt="footer_logo" />
			                                </a>
			                            </div>
			                        </div>
			                    </div>
			                    <div className="jp_footer_three_sec_main_wrapper">
			                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
			                            <div className="jp_footer_first_cont_wrapper">
			                                <div className="jp_footer_first_cont">
			                                    <h2>Who We Are</h2>
			                                    <p>This is Photoshop's version of Lom Ipsum. 
			                                    Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, 
			                                    lorem quis bibendum.<br /> <br/> 
			                                    Proin akshay handge vel velit auctor aliquet. Aenean sollicitudin,</p>
			                                    <ul>
			                                        <li><i className="fa fa-plus-circle"></i> <a >READ MORE</a></li>
			                                    </ul>
			                                </div>
			                            </div>
			                        </div>
			                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
			                            <div className="jp_footer_candidate_wrapper jp_footer_candidate_wrapper2">
			                                <div className="jp_footer_candidate">
			                                    <h2>For candidate</h2>
			                                    <ul>
			                                        <li><a ><i className="fa fa-caret-right" aria-hidden="true"></i> Add a Resume</a></li>
			                                        <li><a ><i className="fa fa-caret-right" aria-hidden="true"></i> candidate Dashboard</a></li>
			                                        <li><a ><i className="fa fa-caret-right" aria-hidden="true"></i> Past Applications</a></li>
			                                        <li><a ><i className="fa fa-caret-right" aria-hidden="true"></i> Job Alerts</a></li>
			                                        <li><a ><i className="fa fa-caret-right" aria-hidden="true"></i> Bookmarks</a></li>
			                                        <li><a ><i className="fa fa-caret-right" aria-hidden="true"></i> My Account</a></li>
			                                        <li><a ><i className="fa fa-caret-right" aria-hidden="true"></i> Your Jobs</a></li>
			                                    </ul>
			                                </div>
			                            </div>
			                        </div>
			                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
			                            <div className="jp_footer_candidate_wrapper jp_footer_candidate_wrapper3">
			                                <div className="jp_footer_candidate">
			                                    <h2>For Employers</h2>
			                                    <ul>
			                                        <li><a ><i className="fa fa-caret-right" aria-hidden="true"></i> Browse candidates</a></li>
			                                        <li><a ><i className="fa fa-caret-right" aria-hidden="true"></i> Employer Dashboard</a></li>
			                                        <li><a ><i className="fa fa-caret-right" aria-hidden="true"></i> Add Job</a></li>
			                                        <li><a ><i className="fa fa-caret-right" aria-hidden="true"></i> Job Page</a></li>
			                                        <li><a ><i className="fa fa-caret-right" aria-hidden="true"></i> Job Packages</a></li>
			                                        <li><a ><i className="fa fa-caret-right" aria-hidden="true"></i> Work Process</a></li>
			                                        <li><a ><i className="fa fa-caret-right" aria-hidden="true"></i> My Account</a></li>
			                                    </ul>
			                                </div>
			                            </div>
			                        </div>
			                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
			                            <div className="jp_footer_candidate_wrapper jp_footer_candidate_wrapper4">
			                                <div className="jp_footer_candidate">
			                                    <h2>Information</h2>
			                                    <ul>
			                                        <li><a ><i className="fa fa-caret-right" aria-hidden="true"></i> About Us</a></li>
			                                        <li><a ><i className="fa fa-caret-right" aria-hidden="true"></i> Terms & Conditions</a></li>
			                                        <li><a ><i className="fa fa-caret-right" aria-hidden="true"></i> Privacy Policy</a></li>
			                                        <li><a ><i className="fa fa-caret-right" aria-hidden="true"></i> Careers with Us</a></li>
			                                        <li><a ><i className="fa fa-caret-right" aria-hidden="true"></i> Sitemap</a></li>
			                                        <li><a ><i className="fa fa-caret-right" aria-hidden="true"></i> Contact Us</a></li>
			                                        <li><a ><i className="fa fa-caret-right" aria-hidden="true"></i> FAQs</a></li>
			                                    </ul>
			                                </div>
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
			                                            <li><a ><i className="fa fa-facebook"></i></a></li>
			                                            <li><a ><i className="fa fa-twitter"></i></a></li>
			                                            <li><a ><i className="fa fa-pinterest-p"></i></a></li>
			                                            <li><a ><i className="fa fa-linkedin"></i></a></li>
			                                            <li className="hidden-xs"><a ><i className="fa fa-google-plus"></i></a></li>
			                                            <li className="hidden-xs"><a ><i className="fa fa-vimeo"></i></a></li>
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

	componentDidMount() {
		console.log("befoe state: ", this.state)

		setTimeout(function() {
			console.log("state: ", this.state)
			this.setState({showLoader: false})
			//this.state.showLoader=false;
		}.bind(this), 3000, this.state.showLoader);

		console.log("after state: ", this.state)
	}
}

class Home extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
			<StatikComponent />
		)
	}
}

export {Home, StatikComponent};