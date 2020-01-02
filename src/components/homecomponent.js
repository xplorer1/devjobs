import React from 'react';
import {Link} from "react-router-dom";

class Home extends React.Component {

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
				
			    <div className="Loader"></div>

			    <div className="wrapper">
			        <nav className="navbar navbar-default navbar-fixed navbar-transparent white bootsnav">
			            <div className="container">

			                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
			                <i className="fa fa-bars"></i></button>
			                <div className="navbar-header">
			                    <Link className="navbar-brand text-white mt-4" to="/">
			                    	DevJobs
			                    </Link>			          
			                </div>

			                <div className="collapse navbar-collapse" id="navbar-menu">
			                    <ul style={{marginTop: "5px"}} className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
			                        <li className="">
			                        	<a href="" data-toggle="modal" data-target="#signup" className="signin">Sign In Now
			                        	</a>
			                        </li>

			                        <li>
			                        	<Link className="navbar-brand text-white mt-4" to="/companylisting">
					                    	Browse Companies
					                    </Link>
			                   		</li>
			                    </ul>
			                </div>
			            </div>
			        </nav>

			        <div className="clearfix"></div>
			        <div className="home-three-banner" style={{backgroundImage: "url('assets/img/bn3.jpg')"}}>
			            <div className="container">
			                <div className="simple-banner-caption">
			                    <div className="col-md-8 col-sm-10 banner-text">
			                        <h1>Best Place To Grow Your<span> Career </span></h1>
			                        <p>Aliquam Vestibulum Cursus Felis. In Iaculis Iaculis Sapien Ac Condimentum. Vestibulum Congue Posuere Lacus, Id Tincidunt Pellentesque Dui Non, Semper Orci. </p>
			                        <form className="bt-form">
			                            <div className="col-md-6 col-sm-6">
			                                <input type="text" className="form-control" placeholder="Skills, Designations" />
			                            </div>
			                            <div className="col-md-6 col-sm-6">
			                                <select id="choose-city" className="form-control">
			                                    <option>Choose City</option>
			                                    <option>Chandigarh</option>
			                                    <option>London</option>
			                                    <option>England</option>
			                                    <option>Pratapcity</option>
			                                    <option>Ukrain</option>
			                                    <option>Wilangana</option>
			                                </select>
			                            </div>
			                            <div className="col-md-6 col-sm-6">
			                                <input type="text" className="form-control" placeholder="Companies" />
			                            </div>
			                            <div className="col-md-6 col-sm-6">
			                                <input type="text" className="form-control" placeholder="Searc By location" />
			                            </div>
			                            <div className="col-md-4 col-sm-5">
			                                <button type="submit" className="btn btn-primary">Search Job</button>
			                            </div>
			                        </form>
			                    </div>
			                </div>
			            </div>
			        </div>

			        <div className="clearfix"></div>
			        <section>
			            <div className="container">
			                <div className="row">
			                    <div className="main-heading">
			                        <h2>Browse Jobs By <span>Category</span></h2>
			                    </div>
			                </div>

			                <div className="row">

			                    <div className="col-md-3 col-sm-6">
			                        <div className="category-box" data-aos="fade-up">
			                            <div className="category-desc">
			                                <div className="category-icon"><i className="icon-bargraph" aria-hidden="true"></i><i className="icon-bargraph abs-icon" aria-hidden="true"></i></div>
			                                <div className="category-detail category-desc-text">
			                                    <h4> <Link to="/joblisting">Remote Jobs</Link></h4>
			                                    <p>122 Jobs</p>
			                                </div>
			                            </div>
			                        </div>
			                    </div>

			                    <div className="col-md-3 col-sm-6">
			                        <div className="category-box" data-aos="fade-up">
			                            <div className="category-desc">
			                                <div className="category-icon"><i className="icon-tools-2" aria-hidden="true"></i><i className="icon-tools-2 abs-icon" aria-hidden="true"></i></div>
			                                <div className="category-detail category-desc-text">
			                                    <h4> <Link to="/joblisting">ReactJs Developer</Link></h4>
			                                    <p>155 Jobs</p>
			                                </div>
			                            </div>
			                        </div>
			                    </div>

			                    <div className="col-md-3 col-sm-6">
			                        <div className="category-box" data-aos="fade-up">
			                            <div className="category-desc">
			                                <div className="category-icon"><i className="icon-briefcase" aria-hidden="true"></i><i className="icon-briefcase abs-icon" aria-hidden="true"></i></div>
			                                <div className="category-detail category-desc-text">
			                                    <h4> <a href="browse-jobs-grid.html">Java Developer</a></h4>
			                                    <p>300 Jobs</p>
			                                </div>
			                            </div>
			                        </div>
			                    </div>

			                    <div className="col-md-3 col-sm-6">
			                        <div className="category-box" data-aos="fade-up">
			                            <div className="category-desc">
			                                <div className="category-icon"><i className="icon-briefcase" aria-hidden="true"></i><i className="icon-briefcase abs-icon" aria-hidden="true"></i></div>
			                                <div className="category-detail category-desc-text">
			                                    <h4> <Link to="/joblisting">Python Developer</Link></h4>
			                                    <p>300 Jobs</p>
			                                </div>
			                            </div>
			                        </div>
			                    </div>

			                    <div className="col-md-3 col-sm-6">
			                        <div className="category-box" data-aos="fade-up">
			                            <div className="category-desc">
			                                <div className="category-icon"><i className="icon-edit" aria-hidden="true"></i><i className="icon-edit abs-icon" aria-hidden="true"></i></div>
			                                <div className="category-detail category-desc-text">
			                                    <h4> <Link to="/joblisting">Angular Developer</Link></h4>
			                                    <p>80 Jobs</p>
			                                </div>
			                            </div>
			                        </div>
			                    </div>

			                    <div className="col-md-3 col-sm-6">
			                        <div className="category-box" data-aos="fade-up">
			                            <div className="category-desc">
			                                <div className="category-icon"><i className="icon-heart" aria-hidden="true"></i><i className="icon-heart abs-icon" aria-hidden="true"></i></div>
			                                <div className="category-detail category-desc-text">
			                                    <h4> <Link to="/joblisting">VueJs Developer</Link></h4>
			                                    <p>120 Jobs</p>
			                                </div>
			                            </div>
			                        </div>
			                    </div>

			                    <div className="col-md-3 col-sm-6">
			                        <div className="category-box" data-aos="fade-up">
			                            <div className="category-desc">
			                                <div className="category-icon"><i className="icon-wine" aria-hidden="true"></i><i className="icon-wine abs-icon" aria-hidden="true"></i></div>
			                                <div className="category-detail category-desc-text">
			                                    <h4> <Link to="/joblisting">UI/UX Designer</Link></h4>
			                                    <p>78 Jobs</p>
			                                </div>
			                            </div>
			                        </div>
			                    </div>

			                    <div className="col-md-3 col-sm-6">
			                        <div className="category-box" data-aos="fade-up">
			                            <div className="category-desc">
			                                <div className="category-icon"><i className="icon-map" aria-hidden="true"></i><i className="icon-map abs-icon" aria-hidden="true"></i></div>
			                                <div className="category-detail category-desc-text">
			                                    <h4> <Link to="/joblisting">See all Categories</Link></h4>
			                                    <p>90 Jobs</p>
			                                </div>
			                            </div>
			                        </div>
			                    </div>			      
			                </div>
			            </div>
			        </section>

			        <div className="clearfix"></div>
			        <section className="wp-process home-three">
			            <div className="container">
			                <div className="row">
			                    <div className="main-heading">
			                        <p>How We Work</p>
			                        <h2>Our Work <span>Process</span></h2></div>
			                </div>
			                <div className="col-md-4 col-sm-6">
			                    <div className="work-process">
			                        <div className="work-process-icon"><span className="icon-search"></span></div>
			                        <div className="work-process-caption">
			                            <h4>Search Job</h4>
			                            <p>Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac condimentum. Vestibulum congue posuere lacus</p>
			                        </div>
			                    </div>
			                    <div className="work-process">
			                        <div className="work-process-icon"><span className="icon-mobile"></span></div>
			                        <div className="work-process-caption">
			                            <h4>Find Job</h4>
			                            <p>Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac condimentum. Vestibulum congue posuere lacus</p>
			                        </div>
			                    </div>
			                    <div className="work-process">
			                        <div className="work-process-icon"><span className="icon-profile-male"></span></div>
			                        <div className="work-process-caption">
			                            <h4>Hire Employee</h4>
			                            <p>Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac condimentum. Vestibulum congue posuere lacus</p>
			                        </div>
			                    </div>
			                </div>
			                <div className="col-md-4 hidden-sm">
			                <img src="assets/img/wp-iphone.png" className="img-responsive" alt="" /></div>
			                <div className="col-md-4 col-sm-6">
			                    <div className="work-process">
			                        <div className="work-process-icon"><span className="icon-layers"></span></div>
			                        <div className="work-process-caption">
			                            <h4>Start Work</h4>
			                            <p>Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac condimentum. Vestibulum congue posuere lacus</p>
			                        </div>
			                    </div>
			                    <div className="work-process">
			                        <div className="work-process-icon"><span className="icon-wallet"></span></div>
			                        <div className="work-process-caption">
			                            <h4>Pay Money</h4>
			                            <p>Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac condimentum. Vestibulum congue posuere lacus</p>
			                        </div>
			                    </div>
			                    <div className="work-process">
			                        <div className="work-process-icon"><span className="icon-happy"></span></div>
			                        <div className="work-process-caption">
			                            <h4>Happy</h4>
			                            <p>Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac condimentum. Vestibulum congue posuere lacus</p>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </section>

			        <div className="clearfix"></div>
			        <section className="call-to-act">
			            <div className="container-fluid">
			                <div className="col-md-6 col-sm-6 no-padd bl-dark">
			                    <div className="call-to-act-caption">
			                        <h2>We Are Expert In Web design and development</h2>
			                        <h3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</h3><a href="#" className="btn bat-call-to-act">Hire Us</a></div>
			                </div>
			                <div className="col-md-6 col-sm-6 no-padd gr-dark">
			                    <div className="call-to-act-caption">
			                        <h2>We Are Expert In Web design and development</h2>
			                        <h3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</h3><a href="#" className="btn bat-call-to-act">Join Us</a></div>
			                </div>
			            </div>
			        </section>

					<footer className="footer light-footer">
			            <div className="row no-padding">
			                <div className="container">
			                    <div className="col-md-3 col-sm-12">
			                        <div className="footer-widget">
			                            <h3 className="widgettitle widget-title">About DevJobs</h3>
			                            <div className="textwidget">
			                                <p>286 Bornu Way
			                                    <br />Yaba, Lagos
			                                </p>				  
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
			                            <h3 className="widgettitle widget-title">Connect With Us</h3>
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
			                    <p>Copyright DevJobs © 2019. All Rights Reserved </p>
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

			                                    <div className="subscribe wow fadeInUp">
			                                        <form className="form-inline" method="post">
			                                            <div className="col-sm-12">
			                                                <div className="form-group">
			                                                    <input type="email" name="email" className="form-control" placeholder="Username" required="" />
			                                                    <input type="password" name="password" className="form-control" placeholder="Password" required="" />
			                                                    <div className="center">
			                                                        <button type="submit" id="login-btn" className="submit-btn"> Login </button>
			                                                    </div>
			                                                </div>
			                                            </div>
			                                        </form>
			                                    </div>
			                                </div>

			                                <div role="tabpanel" className="tab-pane fade" id="register">

			                                    <form className="form-inline" method="post">
			                                        <div className="col-sm-12">
			                                            <div className="form-group">
			                                                <input type="text" name="email" className="form-control" placeholder="Your Name" required="" />
			                                                <input type="email" name="email" className="form-control" placeholder="Your Email" required="" />
			                                                <input type="email" name="email" className="form-control" placeholder="Username" required="" />
			                                                <input type="password" name="password" className="form-control" placeholder="Password" required="" />
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

	componentDidMount() {
		setTimeout(function() {
			console.log("state: ", this.state)
			this.setState({showLoader: false})
			//this.state.showLoader=false;
		}.bind(this), 3000, this.state.showLoader);
	}
}

export {Home};