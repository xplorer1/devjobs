import React from 'react';
import {Link} from "react-router-dom";
import {Utilities} from "./home";
import queryString from "query-string";
import store from "store";
//import marked from "marked";

class Job extends React.Component {
    constructor() {
        super();

        this.state = {
            job: "",
            jobsubkeyword: "",
            jobsubemail: "",

            loginemail: "",
            loginpassword: "",

            signupemail: "",
            signuppassword: "",
            signupname: ""
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleJobSub = (e) => {
        e.preventDefault();

        if(!this.state.jobsubkeyword) {
            alert("Enter the keyword to receive alerts for.");
        }
        else if(!this.state.jobsubemail) {
            alert("Enter your email address.");
        }
        else {
            alert("This feature is coming soon.");
        }
    }

    handleLogin = (e) => {
        e.preventDefault();

        if(!this.state.loginemail) {
            alert("Email is required.");
        }
        else if(!this.state.loginpassword) {
            alert("Provide your password.");
        }
        else {
            alert("This feature is coming soon.");
        }
    }

    handleSignUp = (e) => {
        e.preventDefault();

        if(!this.state.signupname) {
            alert("Please enter your name.");
        }
        else if(!this.state.signupemail) {
            alert("Enter your email address.");
        }
        else if(!this.state.signuppassword) {
            alert("Provide your password.");
        }
        else {
            alert("This feature is coming soon.");
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
                                    <div className="freelance-image" style={{width: "100px", height: "100px", padding: "0"}}>
                                        {/*<a href="company-detail.html">*/}
                                            <img src={this.state.job.company_logo} className="img-responsive" alt=""  style={{width: "100px"}} />
                                        {/*</a>*/}
                                    </div>

                                    <div className="header-details">
                                        <h4>{this.state.job.company}</h4>
                                        <ul>
                                            <li>Posted on {new Date(this.state.job.created_at).toDateString()}.</li>
                                                
                                            <li><img className="flag" src="assets/img/gb.svg" alt="" />{this.state.job.location}</li>
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
                                        <h2 className="detail-title">Job Responsibilities</h2>
                                        <p dangerouslySetInnerHTML={{__html: this.state.job.description}} />
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
                                                    <input onChange={this.handleInput} value={this.state.jobsubkeyword} type="text" name="keyword" className="form-control" placeholder="Job Keyword / All" />
                                                    <input onChange={this.handleInput} value={this.state.jobsubemail} type="email" name="email" className="form-control" placeholder="Email Address" />
                                                    <button type="submit" className="btn btn-alrt" onClick={this.handleJobSub}>Add Alert</button>
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
                                        <h2 className="side-widget-title">Advertisment</h2>
                                        <div className="widget-text padd-0">
                                            <div className="ad-banner">
                                                <img src="http://via.placeholder.com/320x285" className="img-responsive" alt="" />
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
                                        <h4>{this.state.job.title}</h4>
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
                            <div className="modal-content" style={{paddingBottom: "0"}}>
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
                                                            <input onChange={this.handleInput} value={this.state.loginemail} type="email"  name="loginemail" className="form-control" placeholder="Username" required="" />
                                                            <input onChange={this.handleInput} value={this.state.password}  type="password" name="loginpassword" className="form-control"  placeholder="Password" required="" />
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
                                                        <input onChange={this.handleInput} value={this.state.signname} type="text" name="signupname" className="form-control" placeholder="Your Name" required="" />
                                                        <input onChange={this.handleInput} value={this.state.signupemail} type="email" name="signupemail" className="form-control" placeholder="Your Email" required="" />
                                                        <input onChange={this.handleInput} value={this.state.signuppassword} 
                                                        type="password" name="signuppassword" className="form-control"  
                                                        placeholder="Password" required="" />

                                                        <div >
                                                          <p>
                                                            <input type="radio" id="test1" name="radio-group" />
                                                            <label htmlFor="test1">Employer Account</label>
                                                          </p>
                                                          <p>
                                                            <input type="radio" id="test2" name="radio-group" />
                                                            <label htmlFor="test2">Employee Account</label>
                                                          </p>
                                        
                                                        </div>

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

    componentDidMount() {
        const value = queryString.parse(this.props.location.search);

        let targetjob = store.get("github").find((job) => {
            return job.id === value.id;
        });

        this.setState({
            job: targetjob
        });
    }
}

export default Job;