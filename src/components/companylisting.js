import React from 'react';
import {Link} from "react-router-dom";

class CompanyListing extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <article>
                <div className="Loader"></div>
        <div className="wrapper">  
            
            
            <nav className="navbar navbar-default navbar-fixed navbar-light white bootsnav">

                <div className="container">            
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i className="fa fa-bars"></i>
                    </button>
                    
                    <div className="navbar-header">
                        <a className="navbar-brand" href="index.html">
                            <img src="assets/img/logo.png" className="logo logo-scrolled" alt="" />
                        </a>
                    </div>

                    
                    <div className="collapse navbar-collapse" id="navbar-menu">
                        <ul className="nav navbar-nav navbar-left" data-in="fadeInDown" data-out="fadeOutUp">
                            <li className="active"><input type="text" className="form-control" placeholder="Find Freelancer" /></li>
                            <li className="dropdown megamenu-fw"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Brows</a>
                                <ul className="dropdown-menu megamenu-content" role="menu">
                                    <li>
                                        <div className="row">
                                            <div className="col-menu col-md-3">
                                                <h6 className="title">Main Pages</h6>
                                                <div className="content">
                                                    <ul className="menu-col">
                                                        <li><a href="index.html">Home Page 1</a></li>
                                                        <li><a href="index-2.html">Home Page 2</a></li>
                                                        <li><a href="index-3.html">Home Page 3</a></li>
                                                        <li><a href="index-4.html">Home Page 4</a></li>
                                                        <li><a href="index-5.html">Home Page 5</a></li>
                                                        <li><a href="freelancing.html">Freelancing</a></li>
                                                        <li><a href="signin-signup.html">Sign In / Sign Up</a></li>
                                                        <li><a href="search-job.html">Search Job</a></li>
                                                        <li><a href="accordion.html">Accordion</a></li>
                                                        <li><a href="tab.html">Tab Style</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-menu col-md-3">
                                                <h6 className="title">For Candidate</h6>
                                                <div className="content">
                                                    <ul className="menu-col">
                                                        <li><a href="browse-jobs.html">Browse Jobs</a></li>
                                                        <li><a href="browse-company.html">Browse Companies</a></li>
                                                        <li><a href="browse-jobs-grid.html">Job In Grid</a></li>
                                                        <li><a href="create-resume.html">Create Resume</a></li>
                                                        <li><a href="company-detail.html">Company Detail</a></li>
                                                        <li><a href="search-new.html">New Search Job</a></li>
                                                        <li><a href="advance-search.html">Advance Search Job</a></li>
                                                        <li><a href="advance-search-2.html">Advance Search Job 2</a></li>
                                                        <li><a href="job-detail.html">Job Detail</a></li>
                                                        <li><a href="new-job-detail.html">New Job Detail</a></li>
                                                                                                                
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-menu col-md-3">
                                                <h6 className="title">For Employer</h6>
                                                <div className="content">
                                                    <ul className="menu-col">
                                                        <li><a href="create-job.html">Create Job</a></li>
                                                        <li><a href="create-company.html">Create Company</a></li>
                                                        <li><a href="manage-company.html">Manage Company</a></li>
                                                        <li><a href="manage-candidate.html">Browse Candidate</a></li>
                                                        <li><a href="manage-employee.html">Manage Employee</a></li>
                                                        <li><a href="browse-resume.html">Browse Resume</a></li>
                                                        <li><a href="candidate-profile.html">Candidate Profile</a></li>
                                                        <li><a href="candidate-detail.html">New Candidate Detail</a></li>
                                                        <li><a href="employer-profile.html">Employer Profile</a></li>
                                                        <li><a href="manage-resume.html">Manage Resume</a></li>
                                                    </ul>
                                                </div>
                                            </div>    
                                            <div className="col-menu col-md-3">
                                                <h6 className="title">Extra Pages <span className="new-offer">New</span></h6>
                                                <div className="content">
                                                    <ul className="menu-col">
                                                        <li><a href="top-candidate-detail.html">Top Candidate detail</a></li>
                                                        <li><a href="job-apply-detail.html">New Apply Job</a></li>
                                                        <li><a href="payment-methode.html">Payment Methode</a></li>
                                                        <li><a href="new-login-signup.html">New LogIn / SignUp</a></li>
                                                        <li><a href="popular-jobs.html">Popular Jobs</a></li>
                                                        <li><a href="top-candidate.html">Top candidate</a></li>
                                                        <li><a href="top-candidate-2.html">Top candidate 2</a></li>
                                                        <li><a href="premium-candidate.html">Premium Candidate</a></li>
                                                        <li><a href="premium-candidate-detail.html">Premium Candidate Detail</a></li>
                                                        <li><a href="blog-detail.html">Blog detail</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="blog.html">Blog</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                            <li><a href="login.html"><i className="fa fa-pencil" aria-hidden="true"></i>SignIn</a></li>
                            <li><a href="pricing.html"><i className="fa fa-sign-in" aria-hidden="true"></i>Pricing</a></li>
                            <li className="left-br"><a href="javascript:void(0)"  data-toggle="modal" data-target="#signup" className="signin">Sign In Now</a></li>
                        </ul>
                    </div>
                </div>   
            </nav>
        
            <div className="clearfix"></div>
            
           
            <section className="inner-header-title" style={{backgroundImage: "url('assets/img/banner-10.jpg')"}}>
                <div className="container">
                    <h1>Browse Company</h1>
                </div>
            </section>
            <div className="clearfix"></div>
            
            <section className="browse-company">
                <div className="container">
                
                   
                    <div className="row extra-mrg">
                        <div className="wrap-search-filter">
                            <form>
                                <div className="col-md-4 col-sm-4">
                                    <input type="text" className="form-control" placeholder="Keyword: Name, Tag" />
                                </div>
                                <div className="col-md-3 col-sm-3">
                                    <input type="text" className="form-control" placeholder="Location: City, State, Zip" />
                                </div>
                                <div className="col-md-3 col-sm-3">
                                    <select className="form-control" id="j-category">
                                        <option value="">&nbsp;</option>
                                        <option value="1">Information Technology</option>
                                        <option value="2">Mechanical</option>
                                        <option value="3">Hardware</option>
                                        <option value="4">Hospitality & Tourism</option>
                                        <option value="5">Education & Training</option>
                                        <option value="6">Government & Public</option>
                                        <option value="7">Architecture</option>
                                    </select>

                                </div>
                                <div className="col-md-2 col-sm-2">
                                    <button type="submit" className="btn btn-primary full-width">Filter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    <div className="item-click">
                        <article>
                            <div className="brows-company">
                                <div className="col-md-6 col-sm-6">
                                    <div className="item-fl-box">
                                        <div className="brows-company-pic">
                                            <img src="assets/img/com-1.jpg" className="img-responsive" alt="" />
                                        </div>
                                        <div className="brows-company-name">
                                            <h4><a href="company-detail.html">AutoDesk</a></h4>
                                            <span className="brows-company-tagline">Software Company</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="brows-company-location">
                                        <p><i className="fa fa-map-marker"></i> FALBROOK NSW 2330</p>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-2">
                                    <div className="brows-company-position">
                                        <p>6 Opening</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    
                    
                    <div className="item-click">
                        <article>
                            <div className="brows-company">
                                <div className="col-md-6 col-sm-6">
                                    <div className="item-fl-box">
                                        <div className="brows-company-pic">
                                            <img src="assets/img/com-2.jpg" className="img-responsive" alt="" />
                                        </div>
                                        <div className="brows-company-name">
                                            <h4><a href="company-detail.html">Google</a></h4>
                                            <span className="brows-company-tagline">Software Company</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="brows-company-location">
                                        <p><i className="fa fa-map-marker"></i> Street #210, Make New London</p>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-2">
                                    <div className="brows-company-position">
                                        <p>6 Opening</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    
                    
                    <div className="item-click">
                        <article>
                            <div className="brows-company">
                                <div className="col-md-6 col-sm-6">
                                    <div className="item-fl-box">
                                        <div className="brows-company-pic">
                                            <img src="assets/img/com-3.jpg" className="img-responsive" alt="" />
                                        </div>
                                        <div className="brows-company-name">
                                            <h4><a href="company-detail.html">Honda</a></h4>
                                            <span className="brows-company-tagline">Motor Agency</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="brows-company-location">
                                        <p><i className="fa fa-map-marker"></i> BULLAROOK VIC 3352</p>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-2">
                                    <div className="brows-company-position">
                                        <p>6 Opening</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    
                    
                    <div className="item-click">
                        <article>
                            <div className="brows-company">
                                <div className="col-md-6 col-sm-6">
                                    <div className="item-fl-box">
                                        <div className="brows-company-pic">
                                            <img src="assets/img/com-4.jpg" className="img-responsive" alt="" />
                                        </div>
                                        <div className="brows-company-name">
                                            <h4><a href="company-detail.html">Honda</a></h4>
                                            <span className="brows-company-tagline">Motor Agency</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="brows-company-location">
                                        <p><i className="fa fa-map-marker"></i> Street #210, Make New London</p>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-2">
                                    <div className="brows-company-position">
                                        <p>6 Opening</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    
                    
                    <div className="item-click">
                        <article>
                            <div className="brows-company">
                                <div className="col-md-6 col-sm-6">
                                    <div className="item-fl-box">
                                        <div className="brows-company-pic">
                                            <img src="assets/img/com-5.jpg" className="img-responsive" alt="" />
                                        </div>
                                        <div className="brows-company-name">
                                            <h4><a href="company-detail.html">Skype</a></h4>
                                            <span className="brows-company-tagline">Software Company</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="brows-company-location">
                                        <p><i className="fa fa-map-marker"></i> NUNJIKOMPITA SA 5680</p>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-2">
                                    <div className="brows-company-position">
                                        <p>6 Opening</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    
                    
                    <div className="item-click">
                        <article>
                            <div className="brows-company">
                                <div className="col-md-6 col-sm-6">
                                    <div className="item-fl-box">
                                        <div className="brows-company-pic">
                                            <img src="assets/img/com-6.jpg" className="img-responsive" alt="" />
                                        </div>
                                        <div className="brows-company-name">
                                            <h4><a href="company-detail.html">Virtue</a></h4>
                                            <span className="brows-company-tagline">Software Company</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="brows-company-location">
                                        <p><i className="fa fa-map-marker"></i> JANNALI NSW 2226</p>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-2">
                                    <div className="brows-company-position">
                                        <p>6 Opening</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    
                    
                    <div className="item-click">
                        <article>
                            <div className="brows-company">
                                <div className="col-md-6 col-sm-6">
                                    <div className="item-fl-box">
                                        <div className="brows-company-pic">
                                            <img src="assets/img/com-1.jpg" className="img-responsive" alt="" />
                                        </div>
                                        <div className="brows-company-name">
                                            <h4><a href="company-detail.html">Twitter</a></h4>
                                            <span className="brows-company-tagline">Software Company</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="brows-company-location">
                                        <p><i className="fa fa-map-marker"></i> BOLIVIA NSW 2372</p>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-2">
                                    <div className="brows-company-position">
                                        <p>6 Opening</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    
                    
                    <div className="item-click">
                        <article>
                            <div className="brows-company">
                                <div className="col-md-6 col-sm-6">
                                    <div className="item-fl-box">
                                        <div className="brows-company-pic">
                                            <img src="assets/img/com-7.jpg" className="img-responsive" alt="" />
                                        </div>
                                        <div className="brows-company-name">
                                            <h4><a href="company-detail.html">Autodesk</a></h4>
                                            <span className="brows-company-tagline">Software Company</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="brows-company-location">
                                        <p><i className="fa fa-map-marker"></i> SUNDOWN QLD 4860</p>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-2">
                                    <div className="brows-company-position">
                                        <p>6 Opening</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    
                    
                    <div className="item-click">
                        <article>
                            <div className="brows-company">
                                <div className="col-md-6 col-sm-6">
                                    <div className="item-fl-box">
                                        <div className="brows-company-pic">
                                            <img src="assets/img/com-2.jpg" className="img-responsive" alt="" />
                                        </div>
                                        <div className="brows-company-name">
                                            <h4><a href="company-detail.html">Google</a></h4>
                                            <span className="brows-company-tagline">Software Company</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="brows-company-location">
                                        <p><i className="fa fa-map-marker"></i> Street #210, Make New London</p>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-2">
                                    <div className="brows-company-position">
                                        <p>6 Opening</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    
                    <div className="row">
                        <ul className="pagination">
                            <li><a href="#"><i className="ti-arrow-left"></i></a></li>
                            <li className="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li> 
                            <li><a href="#">4</a></li> 
                            <li><a href="#"><i className="fa fa-ellipsis-h"></i></a></li> 
                            <li><a href="#"><i className="ti-arrow-right"></i></a></li> 
                        </ul>
                    </div>
                    
                </div>
            </section>
            
            <footer className="footer">
                <div className="row lg-menu">
                    <div className="container">
                        <div className="col-md-4 col-sm-4">
                            <img src="assets/img/footer-logo.png" className="img-responsive" alt="" /> 
                        </div>
                        <div className="col-md-8 co-sm-8 pull-right">
                            <ul>
                                <li><a href="index.html" title="">Home</a></li>
                                <li><a href="blog.html" title="">Blog</a></li>
                                <li><a href="404.html" title="">404</a></li>
                                <li><a href="faq.html" title="">FAQ</a></li>
                                <li><a href="contact.html" title="">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row no-padding">
                    <div className="container">
                        <div className="col-md-3 col-sm-12">
                            <div className="footer-widget">
                            <h3 className="widgettitle widget-title">About Job Stock</h3>
                            <div className="textwidget">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                            <p>7860 North Park Place<br />
                            San Francisco, CA 94120</p>
                            <p><strong>Email:</strong> <a href="https://codeminifier.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="6734121717081513270406150202150302140c">[email&#160;protected]</a></p>
                            <p><strong>Call:</strong> <a href="tel:+15555555555">555-555-1234</a></p>
                            <ul className="footer-social">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                            </div>
                            </div>
                        </div>
                        
                        <div className="col-md-3 col-sm-4">
                            <div className="footer-widget">
                            <h3 className="widgettitle widget-title">All Navigation</h3>
                            <div className="textwidget">
                                <div className="textwidget">
                                <ul className="footer-navigation">
                                    <li><a href="manage-company.html" title="">Front-end Design</a></li>
                                    <li><a href="manage-company.html" title="">Android Developer</a></li>
                                    <li><a href="manage-company.html" title="">CMS Development</a></li>
                                    <li><a href="manage-company.html" title="">PHP Development</a></li>
                                    <li><a href="manage-company.html" title="">IOS Developer</a></li>
                                    <li><a href="manage-company.html" title="">Iphone Developer</a></li>
                                </ul>
                            </div>
                            </div>
                            </div>
                        </div>
                        
                        <div className="col-md-3 col-sm-4">
                            <div className="footer-widget">
                            <h3 className="widgettitle widget-title">All Categories</h3>
                            <div className="textwidget">
                                <ul className="footer-navigation">
                                    <li><a href="manage-company.html" title="">Front-end Design</a></li>
                                    <li><a href="manage-company.html" title="">Android Developer</a></li>
                                    <li><a href="manage-company.html" title="">CMS Development</a></li>
                                    <li><a href="manage-company.html" title="">PHP Development</a></li>
                                    <li><a href="manage-company.html" title="">IOS Developer</a></li>
                                    <li><a href="manage-company.html" title="">Iphone Developer</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                            
                        <div className="col-md-3 col-sm-4">
                            <div className="footer-widget">
                            <h3 className="widgettitle widget-title">Connect Us</h3>
                            <div className="textwidget">
                            <form className="footer-form">
                                <input type="text" className="form-control" placeholder="Your Name" /> 
                                <input type="text" className="form-control" placeholder="Email" />
                                <textarea className="form-control" placeholder="Message"></textarea>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row copyright">
                    <div className="container">
                        <p>Copyright Job Stock © 2019. All Rights Reserved </p>
                    </div>
                </div>
            </footer>
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
                                                    <button type="submit" id="login-btn" className="submit-btn"> Login </button>
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
                                                    <button type="submit" id="subscribe" className="submit-btn"> Create Account </button>
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

export default CompanyListing;