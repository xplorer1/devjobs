import React from 'react';
import {Link} from "react-router-dom";
import {Utilities} from "./home";

class Job extends React.Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <article>
                <div className="wrapper">  
            
                    <Utilities.Nav />

                    <div className="clearfix"></div>
                    <section className="inner-header-page">
                        <div className="container">
                            
                            <div className="col-md-8">
                                <div className="left-side-container">
                                    <div className="freelance-image">
                                        <a href="company-detail.html">
                                            <img src="assets/img/com-2.jpg" className="img-responsive" alt="" />
                                        </a>
                                    </div>

                                    <div className="header-details">
                                        <h4>Google</h4>
                                        <ul>
                                            <li><a href="http://themezhub.com/"><i className="fa fa-user"></i> 7 Vacancies</a></li>
                                                <li>
                                                    <div className="star-rating" data-rating="4.2">
                                                        <span className="fa fa-star fill"></span>
                                                        <span className="fa fa-star fill"></span>
                                                        <span className="fa fa-star fill"></span>
                                                        <span className="fa fa-star fill"></span>
                                                        <span className="fa fa-star-half fill"></span>
                                                    </div>
                                                </li>
                                            <li>
                                                <img className="flag" src="assets/img/gb.svg" alt="" />Lagos</li>
                                            <li><div className="verified-action">Verified</div></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </section>
                    
                    <div className="clearfix"></div>
                    <section className="full-detail-description full-detail" style={{paddingTop: "6rem"}}>
                        <div className="container">
                            <div className="col-md-8 col-sm-12">
                                <div className="full-card">
                                
                                    <div className="row row-bottom mrg-0">
                                        <h2 className="detail-title">Job Detail</h2>
                                        <ul className="job-detail-des">
                                            <li><span>Salary:</span>N150,000 - N200,000</li>
                                            <li><span>Industry:</span>IT-Software / Software Services</li>
                                            <li><span>Role Category:</span>Programming & Design</li>
                                            <li><span>Role:</span>Frontend Developer (ReactJs)</li>
                                            <li><span>Job Type:</span>Full Time</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="row row-bottom mrg-0">
                                        <h2 className="detail-title">Location</h2>
                                        <ul className="job-detail-des">
                                            <li><span>Address:</span>142, Adeola Odeku, Victoria Island</li>
                                            <li><span>City:</span>Lagos</li>
                                            <li><span>State:</span>Lagos</li>
                                            <li><span>Country:</span>Nigeria</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="row row-bottom mrg-0">
                                        <h2 className="detail-title">Job Responsibilities</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                    
                                    <div className="row row-bottom mrg-0">
                                        <h2 className="detail-title">Skill Requirement</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <ul className="detail-list">
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>

                                            <a href="#" data-toggle="modal" data-target="#apply-job" className="btn btn-success">Apply For This Job</a>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-12">
                                <div className="sidebar right-sidebar">
                                    <div className="side-widget">
                                        <h2 className="side-widget-title">Receive Job Alerts?</h2>
                                        <div className="job-alert">
                                            <div className="widget-text">

                                                <form>
                                                    <input type="text" name="keyword" className="form-control" placeholder="Job Keyword" />
                                                    <input type="email" name="email" className="form-control" placeholder="Email Address" />
                                                    <button type="submit" className="btn btn-alrt">Add Alert</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="side-widget">
                                        <h2 className="side-widget-title">Advertisment</h2>
                                        <div className="widget-text padd-0">
                                            <div className="ad-banner">
                                                <img src="http://via.placeholder.com/320x285" className="img-responsive" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="side-widget">
                                        <h2 className="side-widget-title">Job Overview</h2>
                                        <div className="widget-text padd-0">
                                            <div className="ur-detail-wrap">
                                                <div className="ur-detail-wrap-body padd-top-20">
                                                    <ul className="ove-detail-list">
                                                    
                                                        <li>
                                                            <i className="ti-wallet"></i>
                                                            <h5>Offerd Salary</h5>
                                                            <span>N150,000 - N200,000</span>
                                                        </li>
                                                        
                                                        {/*<li>
                                                            <i className="ti-user"></i>
                                                            <h5>Gender</h5>
                                                            <span>Male</span>
                                                        </li>*/}
                                                        
                                                        {/*<li>
                                                            <i className="ti-ink-pen"></i>
                                                            <h5>Career Level</h5>
                                                            <span>Excutive</span>
                                                        </li>*/}
                                                        
                                                        <li>
                                                            <i className="ti-home"></i>
                                                            <h5>Industry</h5>
                                                            <span>Software</span>
                                                        </li>
                                                        
                                                        <li>
                                                            <i className="ti-shield"></i>
                                                            <h5>Experience</h5>
                                                            <span>2+ Years</span>
                                                        </li>
                                                        
                                                        <li>
                                                            <i className="ti-book"></i>
                                                            <h5>Qualification</h5>
                                                            <span>M.Sc.</span>
                                                        </li>
                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="padd-top-20">
                        <div className="container">
                        
                            <div className="row mrg-0">
                                <div className="col-md-12 col-sm-12">
                                    <h3>Related Jobs</h3>
                                </div>
                            </div>
                            <div className="row mrg-0">
                            
                                <div className="col-md-4 col-sm-6">
                                    <div className="grid-view brows-job-list">
                                        <div className="brows-job-company-img">
                                            <img src="assets/img/com-3.jpg" className="img-responsive" alt="" />
                                        </div>
                                        <div className="brows-job-position">
                                            <h3><a href="job-detail.html">Web Developer</a></h3>
                                            <p><span>Google</span></p>
                                        </div>
                                        <div className="job-position">
                                            <span className="job-num">5 Position</span>
                                        </div>
                                        <div className="brows-job-type">
                                            <span className="full-time">Full Time</span>
                                        </div>
                                        <ul className="grid-view-caption">
                                            <li>
                                                <div className="brows-job-location">
                                                    <p><i className="fa fa-map-marker"></i>QBL Park, C40</p>
                                                </div>
                                            </li>
                                            <li>
                                                <p><span className="brows-job-sallery"><i className="fa fa-money"></i>N110K - 200K</span></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="col-md-4 col-sm-6">
                                    <div className="grid-view brows-job-list">
                                        <div className="brows-job-company-img">
                                            <img src="assets/img/com-2.jpg" className="img-responsive" alt="" />
                                        </div>
                                        <div className="brows-job-position">
                                            <h3><a href="job-detail.html">Web Developer</a></h3>
                                            <p><span>Google</span></p>
                                        </div>
                                        <div className="job-position">
                                            <span className="job-num">5 Position</span>
                                        </div>
                                        <div className="brows-job-type">
                                            <span className="part-time">Part Time</span>
                                        </div>
                                        <ul className="grid-view-caption">
                                            <li>
                                                <div className="brows-job-location">
                                                    <p><i className="fa fa-map-marker"></i>QBL Park, C40</p>
                                                </div>
                                            </li>
                                            <li>
                                                <p><span className="brows-job-sallery"><i className="fa fa-money"></i>N110K - 200K</span></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="col-md-4 col-sm-6">
                                    <div className="grid-view brows-job-list">
                                        <div className="brows-job-company-img">
                                            <img src="assets/img/com-1.jpg" className="img-responsive" alt="" />
                                        </div>
                                        <div className="brows-job-position">
                                            <h3><a href="job-detail.html">Web Developer</a></h3>
                                            <p><span>Google</span></p>
                                        </div>
                                        <div className="job-position">
                                            <span className="job-num">5 Position</span>
                                        </div>
                                        <div className="brows-job-type">
                                            <span className="freelanc">Freelancer</span>
                                        </div>
                                        <ul className="grid-view-caption">
                                            <li>
                                                <div className="brows-job-location">
                                                    <p><i className="fa fa-map-marker"></i>QBL Park, C40</p>
                                                </div>
                                            </li>
                                            <li>
                                                <p><span className="brows-job-sallery"><i className="fa fa-money"></i>N110K - 200K</span></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
            
                    <Utilities.Footer />

                    <div className="clearfix"></div>   
                    <div className="modal fade" id="apply-job" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel2" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="apply-job-box">
                                        <img src="assets/img/com-1.jpg" className="img-responsive" alt="" />
                                        <h4>ReactJs Developer</h4>
                                        <p>Google Pvt.</p>
                                    </div>
                                    <div className="apply-job-form">
                                        <form className="form-inline" method="post">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <input type="text"  name="name" className="form-control" placeholder="Your Name" required="" />
                                                    <input type="email"  name="email" className="form-control" placeholder="Your Email" required="" />
                                                    <textarea className="form-control" placeholder="About You / Paste your cover leter."></textarea>
                                                    <div className="fileUpload">
                                                        <span>Upload CV</span>
                                                        <input type="file" className="upload" />
                                                    </div>
                                                    <div className="center">
                                                    <button type="submit" id="subscribe" className="submit-btn"> Apply Now </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  

                    <div className="clearfix"></div>
                    <div className="modal fade" id="signup" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel2" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="tab" role="tabpanel">
                    
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li role="presentation" className="active"><a href="#login" role="tab" data-toggle="tab">Sign In</a></li>
                                        <li role="presentation"><a href="#register" role="tab" data-toggle="tab">Sign Up</a></li>
                                    </ul>
                            
                                    <div className="tab-content" id="myModalLabel2">
                                        <div role="tabpanel" className="tab-pane fade in active" id="login">
                                            <img src="assets/img/logo.png" className="img-responsive" alt="" />
                                            <div className="subscribe wow fadeInUp">
                                                <form className="form-inline" method="post">
                                                    <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <input type="email"  name="email" className="form-control" placeholder="Username" required="" />
                                                            <input type="password" name="password" className="form-control"  placeholder="Password" required="" />
                                                            <div className="center">
                                                            <button type="submit" id="login-btn" className="submit-btn" onClick={this.handleLogin}> Login </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        <div role="tabpanel" className="tab-pane fade" id="register">
                                        <img src="assets/img/logo.png" className="img-responsive" alt="" />
                                            <form className="form-inline" method="post">
                                                    <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <input type="text"  name="email" className="form-control" placeholder="Your Name" required="" />
                                                            <input type="email"  name="email" className="form-control" placeholder="Your Email" required="" />
                                                            <input type="email"  name="email" className="form-control" placeholder="Username" required="" />
                                                            <input type="password" name="password" className="form-control"  placeholder="Password" required="" />
                                                            <div className="center">
                                                            <button type="submit" id="subscribe" className="submit-btn" onClick={this.handleSignUp}> Create Account </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
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