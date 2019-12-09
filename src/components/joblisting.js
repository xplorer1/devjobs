import React from 'react';
import {Link} from "react-router-dom";

class JobListing extends React.Component {
    constructor() {
        super();
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
                                            <Link to="/">
                                                <img src="assets/images/header/logo2.png" alt="Logo" title="Job Pro" className="img-responsive" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 full_width">
                                    <div className="header-area hidden-menu-bar stick" id="sticker">
                                        {/* mainmenu start */}
                                        
                                        <header className="mobail_menu">
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-xs-6 col-sm-6">
                                                        <div className="gc_logo">
                                                            <Link to="/" >
                                                                <img src="assets/images/header/logo2.png" alt="Logo" title="Grace Church" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-6">
                                                        <div className="cd-dropdown-wrapper">
                                                            <a className="house_toggle" href="#0">
                                                                <svg xmlns="http://www.w3.org/2000/svg" 
                                                                xmlnsXlink="http://www.w3.org/1999/xlink" 
                                                                version="1.1" id="Capa_1" x="0px" y="0px" 
                                                                viewBox="0 0 31.177 31.177" style={{enableBackground: "new 0 0 31.177 31.177"}} 
                                                                xmlSpace="preserve" width="25px" height="25px"><g><g>
                                                                <path className="menubar" d="M30.23,1.775H0.946c-0.489,0-0.887-0.398-0.887-0.888S0.457,0,0.946,0H30.23    
                                                                c0.49,0,0.888,0.398,0.888,0.888S30.72,1.775,30.23,1.775z" fill="#000000"/></g><g><path className="menubar" d="M30.23,9.126H12.069c-0.49,0-0.888-0.398-0.888-0.888c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,8.729,30.72,9.126,30.23,9.126z" fill="#000000"/></g><g><path className="menubar" d="M30.23,16.477H0.946c-0.489,0-0.887-0.398-0.887-0.888c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,16.079,30.72,16.477,30.23,16.477z" fill="#000000"/></g><g><path className="menubar" d="M30.23,23.826H12.069c-0.49,0-0.888-0.396-0.888-0.887c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,23.43,30.72,23.826,30.23,23.826z" fill="#000000"/></g><g><path className="menubar" d="M30.23,31.177H0.946c-0.489,0-0.887-0.396-0.887-0.887c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.398,0.888,0.888C31.118,30.78,30.72,31.177,30.23,31.177z" fill="#000000"/></g></g></svg>
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
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header Wrapper End */}
                {/* Header Wrapper End */}
                {/*<div className="jp_bottom_footer_Wrapper_header_img_wrapper">
                    <div className="jp_slide_img_overlay"></div>
                    <div className="jp_banner_heading_cont_wrapper">
                        
                    </div>
                </div>*/}
                {/* Header W rapper End */}
                {/* jp listing sidebar Wrapper Start */}
                <div className="jp_listing_sidebar_main_wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="jp_listing_heading_wrapper">
                                    <h2>We found <span>357</span> Matches for you.</h2>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="jp_listing_tabs_wrapper">
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <div className="gc_causes_select_box_wrapper">
                                                    <div className="gc_causes_select_box">
                                                        <select>
                                                            <option>Sort Default</option>
                                                            <option>Sort Default</option>
                                                            <option>Sort Default</option>
                                                        </select><i className="fa fa-angle-down"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                                <div className="gc_causes_view_tabs_wrapper">
                                                    <div className="gc_causes_view_tabs">
                                                        <ul className="nav nav-pills">
                                                            <li className="active"><a data-toggle="pill" href="#grid"><i className="fa fa-th-large"></i></a></li>
                                                            <li><a data-toggle="pill" href="#list"><i className="fa fa-list"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                                <div className="gc_causes_search_box_wrapper gc_causes_search_box_wrapper2">
                                                    <div className="gc_causes_search_box">
                                                        <p>You're Watching &nbsp;<span>01 to 20</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="tab-content">
                                            <div id="grid" className="tab-pane fade in active">
                                                <div className="row">
                                                    <Link to="/job" className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                        <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                                                            <div className="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_side_img">
                                                                            <img src="assets/images/content/job_post_img1.jpg" alt="post_img" />
                                                                        </div>
                                                                        <div className="jp_job_post_right_cont jp_job_post_grid_right_cont">
                                                                            <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                                                            <p>Webstrot Technology Pvt. Ltd.</p>
                                                                            <ul>
                                                                                <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
                                                                                <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">
                                                                            <ul>
                                                                                <li><span><i className="fa fa-heart-o"></i></span></li>
                                                                                <li><span>Part Time</span></li>
                                                                                <li><span>Apply</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="jp_job_post_keyword_wrapper">
                                                                <ul>
                                                                    <li><i className="fa fa-tags"></i>Keywords :</li>
                                                                    <li><span>ui designer,</span></li>
                                                                    <li><span >developer,</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link to="/job" className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                        <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                                                            <div className="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_side_img">
                                                                            <img src="assets/images/content/job_post_img2.jpg" alt="post_img" />
                                                                        </div>
                                                                        <div className="jp_job_post_right_cont jp_job_post_grid_right_cont">
                                                                            <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                                                            <p>Webstrot Technology Pvt. Ltd.</p>
                                                                            <ul>
                                                                                <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
                                                                                <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">
                                                                            <ul>
                                                                                <li><span href="#"><i className="fa fa-heart-o"></i></span></li>
                                                                                <li><span>Part Time</span></li>
                                                                                <li><span>Apply</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="jp_job_post_keyword_wrapper">
                                                                <ul>
                                                                    <li><i className="fa fa-tags"></i>Keywords :</li>
                                                                    <li><span>ui designer,</span></li>
                                                                    <li><span >developer,</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link to="/job" className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                        <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                                                            <div className="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_side_img">
                                                                            <img src="assets/images/content/job_post_img3.jpg" alt="post_img" />
                                                                        </div>
                                                                        <div className="jp_job_post_right_cont jp_job_post_grid_right_cont">
                                                                            <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                                                            <p>Webstrot Technology Pvt. Ltd.</p>
                                                                            <ul>
                                                                                <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
                                                                                <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">
                                                                            <ul>
                                                                                <li><span><i className="fa fa-heart-o"></i></span></li>
                                                                                <li><span >Part Time</span></li>
                                                                                <li><span>Apply</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="jp_job_post_keyword_wrapper">
                                                                <ul>
                                                                    <li><i className="fa fa-tags"></i>Keywords :</li>
                                                                    <li><span>ui designer,</span></li>
                                                                    <li><span>developer,</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link to="/job" className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                        <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                                                            <div className="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_side_img">
                                                                            <img src="assets/images/content/job_post_img4.jpg" alt="post_img" />
                                                                        </div>
                                                                        <div className="jp_job_post_right_cont jp_job_post_grid_right_cont">
                                                                            <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                                                            <p>Webstrot Technology Pvt. Ltd.</p>
                                                                            <ul>
                                                                                <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
                                                                                <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">
                                                                            <ul>
                                                                                <li><span><i className="fa fa-heart-o"></i></span></li>
                                                                                <li><span>Part Time</span></li>
                                                                                <li><span>Apply</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="jp_job_post_keyword_wrapper">
                                                                <ul>
                                                                    <li><i className="fa fa-tags"></i>Keywords :</li>
                                                                    <li><span>ui designer,</span></li>
                                                                    <li><span>developer,</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link to="/job" className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                        <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                                                            <div className="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_side_img">
                                                                            <img src="assets/images/content/job_post_img5.jpg" alt="post_img" />
                                                                        </div>
                                                                        <div className="jp_job_post_right_cont jp_job_post_grid_right_cont">
                                                                            <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                                                            <p>Webstrot Technology Pvt. Ltd.</p>
                                                                            <ul>
                                                                                <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
                                                                                <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">
                                                                            <ul>
                                                                                <li><span><i className="fa fa-heart-o"></i></span></li>
                                                                                <li><span>Part Time</span></li>
                                                                                <li><span>Apply</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="jp_job_post_keyword_wrapper">
                                                                <ul>
                                                                    <li><i className="fa fa-tags"></i>Keywords :</li>
                                                                    <li><span>ui designer,</span></li>
                                                                    <li><span>developer,</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link to="/job" className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                        <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                                                            <div className="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_side_img">
                                                                            <img src="assets/images/content/job_post_img1.jpg" alt="post_img" />
                                                                        </div>
                                                                        <div className="jp_job_post_right_cont jp_job_post_grid_right_cont">
                                                                            <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                                                            <p>Webstrot Technology Pvt. Ltd.</p>
                                                                            <ul>
                                                                                <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
                                                                                <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">
                                                                            <ul>
                                                                                <li><span><i className="fa fa-heart-o"></i></span></li>
                                                                                <li><span>Part Time</span></li>
                                                                                <li><span>Apply</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="jp_job_post_keyword_wrapper">
                                                                <ul>
                                                                    <li><i className="fa fa-tags"></i>Keywords :</li>
                                                                    <li><span>ui designer,</span></li>
                                                                    <li><span>developer,</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link to="/job" className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                        <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                                                            <div className="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_side_img">
                                                                            <img src="assets/images/content/job_post_img2.jpg" alt="post_img" />
                                                                        </div>
                                                                        <div className="jp_job_post_right_cont jp_job_post_grid_right_cont">
                                                                            <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                                                            <p>Webstrot Technology Pvt. Ltd.</p>
                                                                            <ul>
                                                                                <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
                                                                                <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">
                                                                            <ul>
                                                                                <li><span><i className="fa fa-heart-o"></i></span></li>
                                                                                <li><span>Part Time</span></li>
                                                                                <li><span>Apply</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="jp_job_post_keyword_wrapper">
                                                                <ul>
                                                                    <li><i className="fa fa-tags"></i>Keywords :</li>
                                                                    <li><span>ui designer,</span></li>
                                                                    <li><span>developer,</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link to="/job" className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                        <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                                                            <div className="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_side_img">
                                                                            <img src="assets/images/content/job_post_img3.jpg" alt="post_img" />
                                                                        </div>
                                                                        <div className="jp_job_post_right_cont jp_job_post_grid_right_cont">
                                                                            <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                                                            <p>Webstrot Technology Pvt. Ltd.</p>
                                                                            <ul>
                                                                                <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
                                                                                <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">
                                                                            <ul>
                                                                                <li><span><i className="fa fa-heart-o"></i></span></li>
                                                                                <li><span>Part Time</span></li>
                                                                                <li><span>Apply</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="jp_job_post_keyword_wrapper">
                                                                <ul>
                                                                    <li><i className="fa fa-tags"></i>Keywords :</li>
                                                                    <li><span>ui designer,</span></li>
                                                                    <li><span>developer,</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link to="/job" className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                        <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                                                            <div className="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_side_img">
                                                                            <img src="assets/images/content/job_post_img4.jpg" alt="post_img" />
                                                                        </div>
                                                                        <div className="jp_job_post_right_cont jp_job_post_grid_right_cont">
                                                                            <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                                                            <p>Webstrot Technology Pvt. Ltd.</p>
                                                                            <ul>
                                                                                <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
                                                                                <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">
                                                                            <ul>
                                                                                <li><span><i className="fa fa-heart-o"></i></span></li>
                                                                                <li><span>Part Time</span></li>
                                                                                <li><span>Apply</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="jp_job_post_keyword_wrapper">
                                                                <ul>
                                                                    <li><i className="fa fa-tags"></i>Keywords :</li>
                                                                    <li><span>ui designer,</span></li>
                                                                    <li><span>developer,</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link to="/job" className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                        <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                                                            <div className="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_side_img">
                                                                            <img src="assets/images/content/job_post_img5.jpg" alt="post_img" />
                                                                        </div>
                                                                        <div className="jp_job_post_right_cont jp_job_post_grid_right_cont">
                                                                            <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                                                            <p>Webstrot Technology Pvt. Ltd.</p>
                                                                            <ul>
                                                                                <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
                                                                                <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">
                                                                            <ul>
                                                                                <li><span><i className="fa fa-heart-o"></i></span></li>
                                                                                <li><span>Part Time</span></li>
                                                                                <li><span>Apply</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="jp_job_post_keyword_wrapper">
                                                                <ul>
                                                                    <li><i className="fa fa-tags"></i>Keywords :</li>
                                                                    <li><span>ui designer,</span></li>
                                                                    <li><span>developer,</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link to="/job" className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                        <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                                                            <div className="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_side_img">
                                                                            <img src="assets/images/content/job_post_img5.jpg" alt="post_img" />
                                                                        </div>
                                                                        <div className="jp_job_post_right_cont jp_job_post_grid_right_cont">
                                                                            <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                                                            <p>Webstrot Technology Pvt. Ltd.</p>
                                                                            <ul>
                                                                                <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
                                                                                <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">
                                                                            <ul>
                                                                                <li><span><i className="fa fa-heart-o"></i></span></li>
                                                                                <li><span>Part Time</span></li>
                                                                                <li><span>Apply</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="jp_job_post_keyword_wrapper">
                                                                <ul>
                                                                    <li><i className="fa fa-tags"></i>Keywords :</li>
                                                                    <li><span>ui designer,</span></li>
                                                                    <li><span>developer,</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link to="/job" className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                        <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                                                            <div className="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_side_img">
                                                                            <img src="assets/images/content/job_post_img5.jpg" alt="post_img" />
                                                                        </div>
                                                                        <div className="jp_job_post_right_cont jp_job_post_grid_right_cont">
                                                                            <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                                                            <p>Webstrot Technology Pvt. Ltd.</p>
                                                                            <ul>
                                                                                <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
                                                                                <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">
                                                                            <ul>
                                                                                <li><span><i className="fa fa-heart-o"></i></span></li>
                                                                                <li><span>Part Time</span></li>
                                                                                <li><span>Apply</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="jp_job_post_keyword_wrapper">
                                                                <ul>
                                                                    <li><i className="fa fa-tags"></i>Keywords :</li>
                                                                    <li><span>ui designer,</span></li>
                                                                    <li><span>developer,</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link to="/job" className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                        <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                                                            <div className="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_side_img">
                                                                            <img src="assets/images/content/job_post_img5.jpg" alt="post_img" />
                                                                        </div>
                                                                        <div className="jp_job_post_right_cont jp_job_post_grid_right_cont">
                                                                            <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                                                            <p>Webstrot Technology Pvt. Ltd.</p>
                                                                            <ul>
                                                                                <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
                                                                                <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">
                                                                            <ul>
                                                                                <li><span><i className="fa fa-heart-o"></i></span></li>
                                                                                <li><span>Part Time</span></li>
                                                                                <li><span>Apply</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="jp_job_post_keyword_wrapper">
                                                                <ul>
                                                                    <li><i className="fa fa-tags"></i>Keywords :</li>
                                                                    <li><span>ui designer,</span></li>
                                                                    <li><span>developer,</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link to="/job" className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                        <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                                                            <div className="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_side_img">
                                                                            <img src="assets/images/content/job_post_img5.jpg" alt="post_img" />
                                                                        </div>
                                                                        <div className="jp_job_post_right_cont jp_job_post_grid_right_cont">
                                                                            <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                                                            <p>Webstrot Technology Pvt. Ltd.</p>
                                                                            <ul>
                                                                                <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
                                                                                <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">
                                                                            <ul>
                                                                                <li><span><i className="fa fa-heart-o"></i></span></li>
                                                                                <li><span>Part Time</span></li>
                                                                                <li><span>Apply</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="jp_job_post_keyword_wrapper">
                                                                <ul>
                                                                    <li><i className="fa fa-tags"></i>Keywords :</li>
                                                                    <li><span>ui designer,</span></li>
                                                                    <li><span>developer,</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link to="/job" className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                        <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                                                            <div className="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_side_img">
                                                                            <img src="assets/images/content/job_post_img5.jpg" alt="post_img" />
                                                                        </div>
                                                                        <div className="jp_job_post_right_cont jp_job_post_grid_right_cont">
                                                                            <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                                                            <p>Webstrot Technology Pvt. Ltd.</p>
                                                                            <ul>
                                                                                <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
                                                                                <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">
                                                                            <ul>
                                                                                <li><span><i className="fa fa-heart-o"></i></span></li>
                                                                                <li><span>Part Time</span></li>
                                                                                <li><span>Apply</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="jp_job_post_keyword_wrapper">
                                                                <ul>
                                                                    <li><i className="fa fa-tags"></i>Keywords :</li>
                                                                    <li><span>ui designer,</span></li>
                                                                    <li><span>developer,</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link to="/job" className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                        <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                                                            <div className="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_side_img">
                                                                            <img src="assets/images/content/job_post_img5.jpg" alt="post_img" />
                                                                        </div>
                                                                        <div className="jp_job_post_right_cont jp_job_post_grid_right_cont">
                                                                            <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                                                            <p>Webstrot Technology Pvt. Ltd.</p>
                                                                            <ul>
                                                                                <li><i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
                                                                                <li><i className="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                        <div className="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">
                                                                            <ul>
                                                                                <li><span><i className="fa fa-heart-o"></i></span></li>
                                                                                <li><span>Part Time</span></li>
                                                                                <li><span>Apply</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="jp_job_post_keyword_wrapper">
                                                                <ul>
                                                                    <li><i className="fa fa-tags"></i>Keywords :</li>
                                                                    <li><span>ui designer,</span></li>
                                                                    <li><span>developer,</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hidden-sm hidden-xs">
                                                        <div className="pager_wrapper gc_blog_pagination">
                                                            <ul className="pagination">
                                                                <li><a href="#">Priv.</a></li>
                                                                <li><a href="#">1</a></li>
                                                                <li><a href="#">2</a></li>
                                                                <li><a href="#">3</a></li>
                                                                <li className="hidden-xs"><a href="#">4</a></li>
                                                                <li><a href="#">Next</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="list" className="tab-pane fade">
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
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
                                                                                <li><a href="#"><i className="fa fa-heart-o"></i></a></li>
                                                                                <li><a href="#">Part Time</a></li>
                                                                                <li><a href="#">Apply</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="jp_job_post_keyword_wrapper">
                                                                <ul>
                                                                    <li><i className="fa fa-tags"></i>Keywords :</li>
                                                                    <li><a href="#">ui designer,</a></li>
                                                                    <li><a href="#">developer,</a></li>
                                                                    <li><a href="#">senior</a></li>
                                                                    <li><a href="#">it company,</a></li>
                                                                    <li><a href="#">design,</a></li>
                                                                    <li><a href="#">call center</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
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
                                                                                <li><a href="#"><i className="fa fa-heart-o"></i></a></li>
                                                                                <li><a href="#">Part Time</a></li>
                                                                                <li><a href="#">Apply</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="jp_job_post_keyword_wrapper">
                                                                <ul>
                                                                    <li><i className="fa fa-tags"></i>Keywords :</li>
                                                                    <li><a href="#">ui designer,</a></li>
                                                                    <li><a href="#">developer,</a></li>
                                                                    <li><a href="#">senior</a></li>
                                                                    <li><a href="#">it company,</a></li>
                                                                    <li><a href="#">design,</a></li>
                                                                    <li><a href="#">call center</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
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
                                                                                <li><a href="#"><i className="fa fa-heart-o"></i></a></li>
                                                                                <li><a href="#">Part Time</a></li>
                                                                                <li><a href="#">Apply</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="jp_job_post_keyword_wrapper">
                                                                <ul>
                                                                    <li><i className="fa fa-tags"></i>Keywords :</li>
                                                                    <li><a href="#">ui designer,</a></li>
                                                                    <li><a href="#">developer,</a></li>
                                                                    <li><a href="#">senior</a></li>
                                                                    <li><a href="#">it company,</a></li>
                                                                    <li><a href="#">design,</a></li>
                                                                    <li><a href="#">call center</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
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
                                                                                <li><a href="#"><i className="fa fa-heart-o"></i></a></li>
                                                                                <li><a href="#">Part Time</a></li>
                                                                                <li><a href="#">Apply</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="jp_job_post_keyword_wrapper">
                                                                <ul>
                                                                    <li><i className="fa fa-tags"></i>Keywords :</li>
                                                                    <li><a href="#">ui designer,</a></li>
                                                                    <li><a href="#">developer,</a></li>
                                                                    <li><a href="#">senior</a></li>
                                                                    <li><a href="#">it company,</a></li>
                                                                    <li><a href="#">design,</a></li>
                                                                    <li><a href="#">call center</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
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
                                                                                <li><a href="#"><i className="fa fa-heart-o"></i></a></li>
                                                                                <li><a href="#">Part Time</a></li>
                                                                                <li><a href="#">Apply</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="jp_job_post_keyword_wrapper">
                                                                <ul>
                                                                    <li><i className="fa fa-tags"></i>Keywords :</li>
                                                                    <li><a href="#">ui designer,</a></li>
                                                                    <li><a href="#">developer,</a></li>
                                                                    <li><a href="#">senior</a></li>
                                                                    <li><a href="#">it company,</a></li>
                                                                    <li><a href="#">design,</a></li>
                                                                    <li><a href="#">call center</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
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
                                                                                <li><a href="#"><i className="fa fa-heart-o"></i></a></li>
                                                                                <li><a href="#">Part Time</a></li>
                                                                                <li><a href="#">Apply</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="jp_job_post_keyword_wrapper">
                                                                <ul>
                                                                    <li><i className="fa fa-tags"></i>Keywords :</li>
                                                                    <li><a href="#">ui designer,</a></li>
                                                                    <li><a href="#">developer,</a></li>
                                                                    <li><a href="#">senior</a></li>
                                                                    <li><a href="#">it company,</a></li>
                                                                    <li><a href="#">design,</a></li>
                                                                    <li><a href="#">call center</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
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
                                                                                <li><a href="#"><i className="fa fa-heart-o"></i></a></li>
                                                                                <li><a href="#">Part Time</a></li>
                                                                                <li><a href="#">Apply</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="jp_job_post_keyword_wrapper">
                                                                <ul>
                                                                    <li><i className="fa fa-tags"></i>Keywords :</li>
                                                                    <li><a href="#">ui designer,</a></li>
                                                                    <li><a href="#">developer,</a></li>
                                                                    <li><a href="#">senior</a></li>
                                                                    <li><a href="#">it company,</a></li>
                                                                    <li><a href="#">design,</a></li>
                                                                    <li><a href="#">call center</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
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
                                                                                <li><a href="#"><i className="fa fa-heart-o"></i></a></li>
                                                                                <li><a href="#">Part Time</a></li>
                                                                                <li><a href="#">Apply</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="jp_job_post_keyword_wrapper">
                                                                <ul>
                                                                    <li><i className="fa fa-tags"></i>Keywords :</li>
                                                                    <li><a href="#">ui designer,</a></li>
                                                                    <li><a href="#">developer,</a></li>
                                                                    <li><a href="#">senior</a></li>
                                                                    <li><a href="#">it company,</a></li>
                                                                    <li><a href="#">design,</a></li>
                                                                    <li><a href="#">call center</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
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
                                                                                <li><a href="#"><i className="fa fa-heart-o"></i></a></li>
                                                                                <li><a href="#">Part Time</a></li>
                                                                                <li><a href="#">Apply</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="jp_job_post_keyword_wrapper">
                                                                <ul>
                                                                    <li><i className="fa fa-tags"></i>Keywords :</li>
                                                                    <li><a href="#">ui designer,</a></li>
                                                                    <li><a href="#">developer,</a></li>
                                                                    <li><a href="#">senior</a></li>
                                                                    <li><a href="#">it company,</a></li>
                                                                    <li><a href="#">design,</a></li>
                                                                    <li><a href="#">call center</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
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
                                                                                <li><a href="#"><i className="fa fa-heart-o"></i></a></li>
                                                                                <li><a href="#">Part Time</a></li>
                                                                                <li><a href="#">Apply</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="jp_job_post_keyword_wrapper">
                                                                <ul>
                                                                    <li><i className="fa fa-tags"></i>Keywords :</li>
                                                                    <li><a href="#">ui designer,</a></li>
                                                                    <li><a href="#">developer,</a></li>
                                                                    <li><a href="#">senior</a></li>
                                                                    <li><a href="#">it company,</a></li>
                                                                    <li><a href="#">design,</a></li>
                                                                    <li><a href="#">call center</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hidden-sm hidden-xs">
                                                        <div className="pager_wrapper gc_blog_pagination">
                                                            <ul className="pagination">
                                                                <li><a href="#">Priv.</a></li>
                                                                <li><a href="#">1</a></li>
                                                                <li><a href="#">2</a></li>
                                                                <li><a href="#">3</a></li>
                                                                <li className="hidden-xs"><a href="#">4</a></li>
                                                                <li><a href="#">Next</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="jp_rightside_job_categories_wrapper">
                                            <div className="jp_rightside_job_categories_heading">
                                                <h4>Jobs by Category</h4>
                                            </div>
                                            <div className="jp_rightside_job_categories_content">
                                                <div className="handyman_sec1_wrapper">
                                                    <div className="content">
                                                        <div className="box">
                                                            <p>
                                                                <input type="checkbox" id="c101" name="cb" />
                                                                <label htmlFor="c101">Graphic Designer <span>(214)</span></label>
                                                            </p>

                                                                <p>
                                                                    <input type="checkbox" id="c102" name="cb" />
                                                                    <label htmlFor="c102">Engineering Jobs <span>(514)</span></label>
                                                                </p>
                                                                <p>
                                                                    <input type="checkbox" id="c103" name="cb" />
                                                                    <label htmlFor="c103">Mainframe Jobs <span>(554)</span></label>
                                                                </p>
                                                                <p>
                                                                    <input type="checkbox" id="c104" name="cb" />
                                                                    <label htmlFor="c104">Legal Jobs <span>(457)</span></label>
                                                                </p>
                                                                <p>
                                                                    <input type="checkbox" id="c105" name="cb" />
                                                                    <label htmlFor="c105">IT Jobs <span>(1254)</span></label>
                                                                </p>
                                                                <p>
                                                                    <input type="checkbox" id="c106" name="cb" />
                                                                    <label htmlFor="c106">R&D Jobs <span>(554)</span></label>
                                                                </p>
                                                                <p>
                                                                    <input type="checkbox" id="c107" name="cb" />
                                                                    <label htmlFor="c107">Government Jobs <span>(350)</span></label>
                                                                </p>
                                                                <p>
                                                                    <input type="checkbox" id="c108" name="cb" />
                                                                    <label htmlFor="c108">PSU Jobs <span>(221)</span></label>
                                                                </p>
                                                        </div>
                                                    </div>
                                                    <ul>
                                                        <li><i className="fa fa-plus-circle"></i> <a href="#">SHOW MORE</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="jp_rightside_job_categories_wrapper jp_job_location_wrapper">
                                            <div className="jp_rightside_job_categories_heading">
                                                <h4>Jobs by Location</h4>
                                            </div>
                                            <div className="jp_rightside_job_categories_content">
                                                <div className="handyman_sec1_wrapper">
                                                    <div className="content">
                                                        <div className="box">
                                                            <p>
                                                                <input type="checkbox" id="c109" name="cb" />
                                                                <label for="c109">Jobs in Delhi  <span>(214)</span></label>
                                                            </p>

                                                                <p>
                                                                    <input type="checkbox" id="c110" name="cb" />
                                                                    <label for="c110">Jobs in Mumbai <span>(514)</span></label>
                                                                </p>
                                                                <p>
                                                                    <input type="checkbox" id="c111" name="cb" />
                                                                    <label for="c111">Jobs in Chennai <span>(554)</span></label>
                                                                </p>
                                                                <p>
                                                                    <input type="checkbox" id="c112" name="cb" />
                                                                    <label for="c112">Jobs in Gurgaon <span>(457)</span></label>
                                                                </p>
                                                                <p>
                                                                    <input type="checkbox" id="c113" name="cb" />
                                                                    <label for="c113">Jobs in Noida  <span>(1254)</span></label>
                                                                </p>
                                                                <p>
                                                                    <input type="checkbox" id="c114" name="cb" />
                                                                    <label for="c114">Jobs in Kolkata <span>(554)</span></label>
                                                                </p>
                                                                <p>
                                                                    <input type="checkbox" id="c115" name="cb" />
                                                                    <label for="c115">Jobs in Hyderabad <span>(350)</span></label>
                                                                </p>
                                                                <p>
                                                                    <input type="checkbox" id="c116" name="cb" />
                                                                    <label for="c116">Jobs in Pune <span>(221)</span></label>
                                                                </p>
                                                        </div>
                                                    </div>
                                                    <ul>
                                                        <li><i className="fa fa-plus-circle"></i> <a href="#">SHOW MORE</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="jp_rightside_job_categories_wrapper jp_job_location_wrapper">
                                            <div className="jp_rightside_job_categories_heading">
                                                <h4>Your Skill’s</h4>
                                            </div>
                                            <div className="jp_rightside_job_categories_content">
                                                <div className="handyman_sec1_wrapper">
                                                    <div className="content">
                                                        <div className="box">
                                                            <p>
                                                                <input type="checkbox" id="c117" name="cb" />
                                                                <label for="c117">Javascript  <span>(214)</span></label>
                                                            </p>

                                                                <p>
                                                                    <input type="checkbox" id="c118" name="cb" />
                                                                    <label for="c118">HTML5 <span>(514)</span></label>
                                                                </p>
                                                                <p>
                                                                    <input type="checkbox" id="c119" name="cb" />
                                                                    <label for="c119">CSS3 <span>(554)</span></label>
                                                                </p>
                                                                <p>
                                                                    <input type="checkbox" id="c120" name="cb" />
                                                                    <label for="c120">PHP  <span>(457)</span></label>
                                                                </p>
                                                                <p>
                                                                    <input type="checkbox" id="c121" name="cb" />
                                                                    <label for="c121">Sales   <span>(1254)</span></label>
                                                                </p>
                                                                <p>
                                                                    <input type="checkbox" id="c122" name="cb" />
                                                                    <label for="c122">Marketing  <span>(554)</span></label>
                                                                </p>
                                                                <p>
                                                                    <input type="checkbox" id="c123" name="cb" />
                                                                    <label for="c123">Social Media <span>(350)</span></label>
                                                                </p>
                                                                <p>
                                                                    <input type="checkbox" id="c124" name="cb" />
                                                                    <label for="c124">Web Design <span>(221)</span></label>
                                                                </p>
                                                        </div>
                                                    </div>
                                                    <ul>
                                                        <li><i className="fa fa-plus-circle"></i> <a href="#">SHOW MORE</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="jp_rightside_job_categories_wrapper jp_job_location_wrapper">
                                            <div className="jp_rightside_job_categories_heading">
                                                <h4>Salary</h4>
                                            </div>
                                            <div className="jp_rightside_job_categories_content">
                                                <div className="handyman_sec1_wrapper">
                                                    <div className="content">
                                                        <div className="box">
                                                            <p>
                                                                <input type="checkbox" id="c125" name="cb" />
                                                                <label for="c125">$1k - 2k  <span>(214)</span></label>
                                                            </p>

                                                                <p>
                                                                    <input type="checkbox" id="c126" name="cb" />
                                                                    <label for="c126">$3k - 5k <span>(514)</span></label>
                                                                </p>
                                                                <p>
                                                                    <input type="checkbox" id="c127" name="cb" />
                                                                    <label for="c127">$5k - 8k <span>(554)</span></label>
                                                                </p>
                                                                <p>
                                                                    <input type="checkbox" id="c128" name="cb" />
                                                                    <label for="c128">$5k - 10k  <span>(457)</span></label>
                                                                </p>
                                                                <p>
                                                                    <input type="checkbox" id="c129" name="cb" />
                                                                    <label for="c129">$10k - 20k   <span>(1254)</span></label>
                                                                </p>
                                                                <p>
                                                                    <input type="checkbox" id="c130" name="cb" />
                                                                    <label for="c130">$20k - 30k  <span>(554)</span></label>
                                                                </p>
                                                                <p>
                                                                    <input type="checkbox" id="c131" name="cb" />
                                                                    <label for="c131">$30k - 50k <span>(350)</span></label>
                                                                </p>
                                                                <p>
                                                                    <input type="checkbox" id="c132" name="cb" />
                                                                    <label for="c132">$50k - 80k <span>(221)</span></label>
                                                                </p>
                                                        </div>
                                                    </div>
                                                    <ul>
                                                        <li><i className="fa fa-plus-circle"></i> <a href="#">SHOW MORE</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="jp_rightside_job_categories_wrapper jp_job_location_wrapper">
                                            <div className="jp_rightside_job_categories_heading">
                                                <h4>Types</h4>
                                            </div>
                                            <div className="jp_rightside_job_categories_content">
                                                <div className="handyman_sec1_wrapper">
                                                    <div className="content">
                                                        <div className="box">
                                                            <p>
                                                                <input type="checkbox" id="c133" name="cb" />
                                                                <label for="c133">Types  <span>(214)</span></label>
                                                            </p>

                                                                <p>
                                                                    <input type="checkbox" id="c134" name="cb" />
                                                                    <label for="c134">Part-time <span>(514)</span></label>
                                                                </p>
                                                                <p>
                                                                    <input type="checkbox" id="c135" name="cb" />
                                                                    <label for="c135">Contract <span>(554)</span></label>
                                                                </p>
                                                                <p>
                                                                    <input type="checkbox" id="c136" name="cb" />
                                                                    <label for="c136">Remotely  <span>(457)</span></label>
                                                                </p>
                                                                <p>
                                                                    <input type="checkbox" id="c137" name="cb" />
                                                                    <label for="c137">Temporary   <span>(1254)</span></label>
                                                                </p>
                                                        </div>
                                                    </div>
                                                    <ul>
                                                        <li><i className="fa fa-plus-circle"></i> <a href="#">SHOW MORE</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="jp_add_resume_wrapper jp_job_location_wrapper">
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
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 visible-sm visible-xs">
                                        <div className="pager_wrapper gc_blog_pagination">
                                            <ul className="pagination">
                                                <li><a href="#">Priv.</a></li>
                                                <li><a href="#">1</a></li>
                                                <li><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li className="hidden-xs"><a href="#">4</a></li>
                                                <li><a href="#">Next</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
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
                                            <a href="#">
                                                <img src="assets/images/content/resume_logo.png" alt="footer_logo"/>
                                            </a>
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

export default JobListing;