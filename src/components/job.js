import React from 'react';
import {Link} from "react-router-dom";

class Job extends React.Component {
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
                                            <Link to="/">
                                                <img src="assets/images/header/logo2.png" alt="Logo" title="Job Pro" className="img-responsive" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 full_width">
                                    <div className="header-area hidden-menu-bar stick" id="sticker">
                                        
                                        <header className="mobail_menu">
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-xs-6 col-sm-6">
                                                        <div className="gc_logo">
                                                            <Link to="/">
                                                                <img src="images/header/logo2.png" alt="Logo" title="Grace Church" />
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
                                                                xmlSpace="preserve" width="25px" height="25px"><g><g><path className="menubar" 
                                                                d="M30.23,1.775H0.946c-0.489,0-0.887-0.398-0.887-0.888S0.457,0,0.946,0H30.23    
                                                                c0.49,0,0.888,0.398,0.888,0.888S30.72,1.775,30.23,1.775z" fill="#000000"/></g><g>
                                                                <path className="menubar" d="M30.23,9.126H12.069c-0.49,0-0.888-0.398-0.888-0.888c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,8.729,30.72,9.126,30.23,9.126z" fill="#000000"/></g><g><path className="menubar" d="M30.23,16.477H0.946c-0.489,0-0.887-0.398-0.887-0.888c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,16.079,30.72,16.477,30.23,16.477z" fill="#000000"/></g><g><path className="menubar" d="M30.23,23.826H12.069c-0.49,0-0.888-0.396-0.888-0.887c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,23.43,30.72,23.826,30.23,23.826z" fill="#000000"/></g><g><path className="menubar" d="M30.23,31.177H0.946c-0.489,0-0.887-0.396-0.887-0.887c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.398,0.888,0.888C31.118,30.78,30.72,31.177,30.23,31.177z" fill="#000000"/></g></g></svg>
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
    
                <div className="jp_listing_single_main_wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                <div className="jp_listing_left_sidebar_wrapper">
                                    <div className="jp_job_des">
                                        <h2>Job Description</h2>
                                        <p>Google is and always will be an engineering company. We hire people with a broad set of ical skills who are ready to tackle some of technology's greatest challenges and make an impact on millions, if not billions, of users.
                                            At Google, engineers not only revolutionize search, they routinely work on massive scalability and storage solutions, large-scale applications and rely new platforms for developers around the world. From AdWords to Chrome,
                                            Android to Ye, Social to Local, Google engineers are changing the world.</p>
                                        <ul>
                                            <li><i className="fa fa-globe"></i>&nbsp;&nbsp; <a href="#">www.example.com</a></li>
                                            <li><i className="fa fa-file-pdf-o"></i>&nbsp;&nbsp; <a href="#">Download Info</a></li>

                                        </ul>
                                    </div>
                                    <div className="jp_job_res">
                                        <h2>Responsibilities</h2>
                                        <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id
                                            dui posuere blandit.</p>
                                        <ul>
                                            <li><i className="fa fa-caret-right"></i>&nbsp;&nbsp; Build next-generation web applications with a focus on the client side.</li>
                                            <li><i className="fa fa-caret-right"></i>&nbsp;&nbsp; Redesign UI's, implement new UI's, and pick up Java as necessary.</li>
                                            <li><i className="fa fa-caret-right"></i>&nbsp;&nbsp; Explore and design dynamic and compelling consumer experiences.</li>
                                            <li><i className="fa fa-caret-right"></i>&nbsp;&nbsp; Design and build scalable framework for web applications.</li>
                                        </ul>
                                    </div>
                                    <div className="jp_job_res jp_job_qua">
                                        <h2>Minimum qualifications</h2>
                                        <ul>
                                            <li><i className="fa fa-caret-right"></i>&nbsp;&nbsp; BA/BS degree in a technical field or equivalent practical experience.</li>
                                            <li><i className="fa fa-caret-right"></i>&nbsp;&nbsp; 2 years of relevant work experience in software development.</li>
                                            <li><i className="fa fa-caret-right"></i>&nbsp;&nbsp; Programming experience in C, C++ or Java.</li>
                                            <li><i className="fa fa-caret-right"></i>&nbsp;&nbsp; Experience with AJAX, HTML and CSS.</li>
                                        </ul>
                                    </div>
                                    <div className="jp_job_apply">
                                        <h2>How To Apply</h2>
                                        <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac
                                            lectus.</p>
                                    </div>
                                    <div className="jp_job_map">
                                        <h2>Loacation</h2>
                                        <div id="map" style={{width:"100%", float:"left", height:"300px"}}></div>
                                    </div>
                                </div>
                                <div className="jp_listing_left_bottom_sidebar_wrapper">
                                    <div className="jp_listing_left_bottom_sidebar_social_wrapper">
                                        <ul className="hidden-xs">
                                            <li>SHARE :</li>
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                            <li className="hidden-xs"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                            <li className="hidden-xs"><a href="#"><i className="fa fa-vimeo"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="jp_listing_left_bottom_sidebar_key_wrapper">
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
                                <div className="jp_listing_related_heading_wrapper">
                                    <h2>Related Jobs</h2>
                                    <div className="jp_listing_related_slider_wrapper">
                                        <div className="owl-carousel owl-theme">
                                            <div className="item">
                                                <div className="row">
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
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="row">
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
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="row">
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="jp_rightside_job_categories_wrapper jp_rightside_listing_single_wrapper">
                                                <div className="jp_rightside_job_categories_heading">
                                                    <h4>Job Overview</h4>
                                                </div>
                                                <div className="jp_jop_overview_img_wrapper">
                                                    <div className="jp_jop_overview_img">
                                                        <img src="assets/images/content/job_post_img1.jpg" alt="post_img" />
                                                    </div>
                                                </div>
                                                <div className="jp_job_listing_single_post_right_cont">
                                                    <div className="jp_job_listing_single_post_right_cont_wrapper">
                                                        <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                                        <p>Webstrot Technology Pvt. Ltd.</p>
                                                    </div>
                                                </div>
                                                <div className="jp_job_post_right_overview_btn_wrapper">
                                                    <div className="jp_job_post_right_overview_btn">
                                                        <ul>
                                                            <li><a href="#"><i className="fa fa-heart-o"></i></a></li>
                                                            <li><a href="#">Part Time</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="jp_listing_overview_list_outside_main_wrapper">
                                                    <div className="jp_listing_overview_list_main_wrapper">
                                                        <div className="jp_listing_list_icon">
                                                            <i className="fa fa-calendar"></i>
                                                        </div>
                                                        <div className="jp_listing_list_icon_cont_wrapper">
                                                            <ul>
                                                                <li>Date Posted:</li>
                                                                <li>Octomber 02, 2017</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="jp_listing_overview_list_main_wrapper jp_listing_overview_list_main_wrapper2">
                                                        <div className="jp_listing_list_icon">
                                                            <i className="fa fa-map-marker"></i>
                                                        </div>
                                                        <div className="jp_listing_list_icon_cont_wrapper">
                                                            <ul>
                                                                <li>Location:</li>
                                                                <li>Los Angeles Califonia PO, 455001</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="jp_listing_overview_list_main_wrapper jp_listing_overview_list_main_wrapper2">
                                                        <div className="jp_listing_list_icon">
                                                            <i className="fa fa-info-circle"></i>
                                                        </div>
                                                        <div className="jp_listing_list_icon_cont_wrapper">
                                                            <ul>
                                                                <li>Job Title:</li>
                                                                <li>HTML Developer</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="jp_listing_overview_list_main_wrapper jp_listing_overview_list_main_wrapper2">
                                                        <div className="jp_listing_list_icon">
                                                            <i className="fa fa-clock-o"></i>
                                                        </div>
                                                        <div className="jp_listing_list_icon_cont_wrapper">
                                                            <ul>
                                                                <li>Hours:</li>
                                                                <li>40h / Week</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="jp_listing_overview_list_main_wrapper jp_listing_overview_list_main_wrapper2">
                                                        <div className="jp_listing_list_icon">
                                                            <i className="fa fa-money"></i>
                                                        </div>
                                                        <div className="jp_listing_list_icon_cont_wrapper">
                                                            <ul>
                                                                <li>Salary:</li>
                                                                <li>$12K - 15k P.A.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="jp_listing_overview_list_main_wrapper jp_listing_overview_list_main_wrapper2">
                                                        <div className="jp_listing_list_icon">
                                                            <i className="fa fa-th-large"></i>
                                                        </div>
                                                        <div className="jp_listing_list_icon_cont_wrapper">
                                                            <ul>
                                                                <li>Category:</li>
                                                                <li>Developer</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="jp_listing_overview_list_main_wrapper jp_listing_overview_list_main_wrapper2">
                                                        <div className="jp_listing_list_icon">
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                        <div className="jp_listing_list_icon_cont_wrapper">
                                                            <ul>
                                                                <li>Experience:</li>
                                                                <li>1+ Years Experience</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="jp_listing_right_bar_btn_wrapper">
                                                        <div className="jp_listing_right_bar_btn">
                                                            <ul>
                                                                <li><a href="#"><i className="fa fa-plus-circle"></i> &nbsp;Apply With Facebook</a></li>
                                                                <li><a href="#"><i className="fa fa-plus-circle"></i> &nbsp;Apply NOw!</a></li>
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
                </div>
    
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

export default Job;