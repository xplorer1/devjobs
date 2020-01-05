import React from 'react';
import {Link} from "react-router-dom";
import {Utilities} from "./home";

class CompanyListing extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <article>
                {/*<div className="Loader"></div>*/}
                <div className="wrapper"> 

                    <Utilities.Nav />
                
                    <div className="clearfix"></div>
                    
                    <section className="inner-header-title" style={{backgroundImage: "url('assets/img/banner-10.jpg')"}}>
                        <div className="container">
                            <h1>Browse Companies</h1>
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
            </article>
        )
    }
}

export default CompanyListing;