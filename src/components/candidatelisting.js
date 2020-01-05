import React from 'react';
import {Link} from "react-router-dom";
import {Utilities} from "./home"

class CandidateListing extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <article>
                {/*<div className="Loader"></div>*/}
                <div className="wrapper"> 

                    <Utilities.Nav />
                
                    <div className="wrapper">  
            
                        <div className="clearfix"></div>
                        <section className="inner-header-title" style={{backgroundImage: "url('assets/img/banner-10.jpg')"}}>
                            <div className="container">
                                <h1>Top Candidates</h1>
                            </div>
                        </section>

                        <div className="clearfix"></div>
                        <section className="member-card gray">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12">
                                        <div className="search-filter">
                                        
                                            <div className="col-md-4 col-sm-5">
                                                <div className="filter-form">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" placeholder="Search…" />
                                                        <span className="input-group-btn">
                                                            <button type="button" className="btn btn-default">Go</button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-md-8 col-sm-7">
                                                <div className="short-by pull-right">
                                                    Sort By
                                                    <div className="dropdown">
                                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Filter 
                                                    <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                                    <ul className="dropdown-menu">
                                                        <li><a href="#">Sort By Date</a></li>
                                                        <li><a href="#">Sort By Views</a></li>
                                                        <li><a href="#">Sort By Popular</a></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-md-4 col-sm-4">
                                        <div className="manage-cndt">
                                            <div className="cndt-status pending">Pending</div>
                                            <div className="cndt-caption">
                                                <div className="cndt-pic">
                                                    <img src="assets/img/client-1.jpg" className="img-responsive" alt="" />
                                                </div>
                                                <h4>Charles Hopman</h4>
                                                <span>Web designer</span>
                                                <p>Our analysis team at Megriosft use end to end innovation proces</p>
                                            </div>
                                            <a href="#" title="" className="cndt-profile-btn">View Profile</a>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-4 col-sm-4">
                                        <div className="manage-cndt">
                                            <div className="cndt-status available">Available</div>
                                            <div className="cndt-caption">
                                                <div className="cndt-pic">
                                                    <img src="assets/img/client-2.jpg" className="img-responsive" alt="" />
                                                </div>
                                                <h4>Ethan Marion</h4>
                                                <span>IOS designer</span>
                                                <p>Our analysis team at Megriosft use end to end innovation proces</p>
                                            </div>
                                            <a href="#" title="" className="cndt-profile-btn">View Profile</a>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-4 col-sm-4">
                                        <div className="manage-cndt">
                                            <div className="cndt-status pending">Pending</div>
                                            <div className="cndt-caption">
                                                <div className="cndt-pic">
                                                    <img src="assets/img/client-3.jpg" className="img-responsive" alt="" />
                                                </div>
                                                <h4>Zara Clow</h4>
                                                <span>UI/UX designer</span>
                                                <p>Our analysis team at Megriosft use end to end innovation proces</p>
                                            </div>
                                            <a href="#" title="" className="cndt-profile-btn">View Profile</a>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-4 col-sm-4">
                                        <div className="manage-cndt">
                                            <div className="cndt-status pending">Pending</div>
                                            <div className="cndt-caption">
                                                <div className="cndt-pic">
                                                    <img src="assets/img/client-4.jpg" className="img-responsive" alt="" />
                                                </div>
                                                <h4>Henry Crooks</h4>
                                                <span>PHP Developer</span>
                                                <p>Our analysis team at Megriosft use end to end innovation proces</p>
                                            </div>
                                            <a href="#" title="" className="cndt-profile-btn">View Profile</a>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-4 col-sm-4">
                                        <div className="manage-cndt">
                                            <div className="cndt-status available">Available</div>
                                            <div className="cndt-caption">
                                                <div className="cndt-pic">
                                                    <img src="assets/img/client-5.jpg" className="img-responsive" alt="" />
                                                </div>
                                                <h4>Joseph Macfarlan</h4>
                                                <span>App Developer</span>
                                                <p>Our analysis team at Megriosft use end to end innovation proces</p>
                                            </div>
                                            <a href="#" title="" className="cndt-profile-btn">View Profile</a>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-4 col-sm-4">
                                        <div className="manage-cndt">
                                            <div className="cndt-status pending">Pending</div>
                                            <div className="cndt-caption">
                                                <div className="cndt-pic">
                                                    <img src="assets/img/client-1.jpg" className="img-responsive" alt="" />
                                                </div>
                                                <h4>Zane Joyner</h4>
                                                <span>Html Expert</span>
                                                <p>Our analysis team at Megriosft use end to end innovation proces</p>
                                            </div>
                                            <a href="#" title="" className="cndt-profile-btn">View Profile</a>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-4 col-sm-4">
                                        <div className="manage-cndt">
                                            <div className="cndt-status pending">Pending</div>
                                            <div className="cndt-caption">
                                                <div className="cndt-pic">
                                                    <img src="assets/img/client-2.jpg" className="img-responsive" alt="" />
                                                </div>
                                                <h4>Anna Hoysted</h4>
                                                <span>UI/UX Designer</span>
                                                <p>Our analysis team at Megriosft use end to end innovation proces</p>
                                            </div>
                                            <a href="#" title="" className="cndt-profile-btn">View Profile</a>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-4 col-sm-4">
                                        <div className="manage-cndt">
                                            <div className="cndt-status available">Available</div>
                                            <div className="cndt-caption">
                                                <div className="cndt-pic">
                                                    <img src="assets/img/client-3.jpg" className="img-responsive" alt="" />
                                                </div>
                                                <h4>Spencer Birdseye</h4>
                                                <span>SEO Expert</span>
                                                <p>Our analysis team at Megriosft use end to end innovation proces</p>
                                            </div>
                                            <a href="#" title="" className="cndt-profile-btn">View Profile</a>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-4 col-sm-4">
                                        <div className="manage-cndt">
                                            <div className="cndt-status pending">Pending</div>
                                            <div className="cndt-caption">
                                                <div className="cndt-pic">
                                                    <img src="assets/img/client-1.jpg" className="img-responsive" alt="" />
                                                </div>
                                                <h4>Eden Macaulay</h4>
                                                <span>Web designer</span>
                                                <p>Our analysis team at Megriosft use end to end innovation proces</p>
                                            </div>
                                            <a href="#" title="" className="cndt-profile-btn">View Profile</a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <ul className="pagination">
                                        <li><a href="#">&laquo;</a></li>
                                        <li className="active"><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li> 
                                        <li><a href="#">4</a></li> 
                                        <li><a href="#"><i className="fa fa-ellipsis-h"></i></a></li> 
                                        <li><a href="#">&raquo;</a></li> 
                                    </ul>
                                </div>
                                
                            </div>
                        </section>

                    <Utilities.Footer />

                    <div className="clearfix"></div>
                    <div className="modal fade" id="signup" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel2" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="tab" role="tabpanel">
                                    
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li role="presentation" className="active"><a href="#" role="tab" data-toggle="tab">Sign In</a></li>
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
                </div>
            </article>
        )
    }
}

export default CandidateListing;