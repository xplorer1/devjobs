import React from 'react';
import {Link} from "react-router-dom";

const Utilities = {
	Footer: function () {
		return (
			<footer className="footer light-footer">
	            <div className="row copyright">
	                <div className="container">
	                    <p>Copyright DevJobs &copy; {new Date().getFullYear()} All Rights Reserved </p>
	                </div>
	            </div>
	        </footer>
		)
	},

	Nav: function() {
		return (
			<nav className="navbar navbar-default navbar-fixed navbar-white white bootsnav">

                <div className="container">            
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i className="fa fa-bars"></i>
                    </button>
                    
                    <div className="navbar-header">
                        <Link className="text-white navbar-brand" to="/">
                            DevJobs
                        </Link>
                    </div>
                        
                    <div className="collapse navbar-collapse" id="navbar-menu">
          
                        <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp" style={{marginTop: "5px"}}>
                            {/*<li><Link to="/companylisting"><i className="fa fa-pencil" aria-hidden="true"></i>Browse Companies</Link></li>*/}
                            {/*<li><Link to="/candidatelisting"><i className="fa fa-pencil" aria-hidden="true"></i>Browse Candidates</Link></li>*/}
                            <li className="left-br">
                                <a data-toggle="modal" data-target="#signup" className="signin">Post a Job</a>
                            </li>
                        </ul>
                    </div>
                </div>   
            </nav>
		)
	},

	Spacing: function() {
		return (<div>&nbsp;</div>)
	}
}

class Home extends React.Component {

	constructor() {
		super();
		this.state = {showLoader: true};
	}

	render() {
		return (
			<article>
				
			    {/*<div className="Loader"></div>*/}

			    <div className="wrapper">

			    	<nav className="navbar navbar-default navbar-fixed navbar-transparent white bootsnav">

		                <div className="container">            
		                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
		                        <i className="fa fa-bars"></i>
		                    </button>
		                    
		                    <div className="navbar-header" style={{marginTop: "1rem"}}>
		                        <Link className="text-white navbar-brand" to="/">
		                            DevJobs
		                        </Link>
		                    </div>
		                        
		                    <div className="collapse navbar-collapse" id="navbar-menu">
		                        <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
		                            {/*<li><Link to="/companylisting"><i className="fa fa-pencil" aria-hidden="true"></i>Browse Companies</Link></li>*/}
		                            {/*<li><Link to="/candidatelisting"><i className="fa fa-pencil" aria-hidden="true"></i>Browse Candidates</Link></li>*/}
		                            <li className="left-br">
		                                <a href="#" data-toggle="modal" data-target="#signup" className="signin">Post a Job</a>
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
			                        <p>
			                        	One million success stories.
			                        	<br />Start yours today.
			                        </p>
			                        <form className="bt-form">

			                            <div className="col-md-6 col-sm-6">
			                                <input type="text" className="form-control" placeholder="Skills, Designations" />
			                            </div>

			                            <div className="col-md-6 col-sm-6">
			                                <select id="choose-city" className="form-control">
			                                    <option disabled>Choose City</option>
			                                    <option>Lagos</option>
			                                    <option>Ibadan</option>
			                                    <option>Abuja</option>
			                                    <option>London</option>
			                                    <option>New York</option>
			                                    <option>Michigan</option>
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

			                    <Link className="col-md-3 col-sm-6" to="/joblisting/?jobtype=remote">
			                        <div className="category-box" data-aos="fade-up">
			                            <div className="category-desc">
			                                <div className="category-icon">
				                                <img src="assets/img/icons/remote.png" alt="Remote Jobs" className="w25" />
			                                </div>

			                                <div className="category-detail category-desc-text">
			                                    <h4> <span >Remote Jobs</span></h4>
			                                    {/*<p>122 Jobs</p>*/}
			                                </div>
			                            </div>
			                        </div>
			                    </Link>

			                    <Link className="col-md-3 col-sm-6" to="/joblisting">
			                        <div className="category-box" data-aos="fade-up">
			                            <div className="category-desc">
			                                <div className="category-icon">
			                                	<img src="assets/img/icons/reactjs.png" alt="ReactJs Jobs" className="w25" />
			                                </div>
			                                <div className="category-detail category-desc-text">
			                                    <h4> <span>ReactJs Developer</span></h4>
			                                    {/*<p>155 Jobs</p>*/}
			                                </div>
			                            </div>
			                        </div>
			                    </Link>

			                    <Link className="col-md-3 col-sm-6" to="/joblisting">
			                        <div className="category-box" data-aos="fade-up">
			                            <div className="category-desc">
			                                <div className="category-icon">
			                                	<img src="assets/img/icons/jv.jpg" alt="Java Jobs" className="w25" />
			                                </div>
			                                <div className="category-detail category-desc-text">
			                                    <h4> <span>Java Developer</span></h4>
			                                    {/*<p>300 Jobs</p>*/}
			                                </div>
			                            </div>
			                        </div>
			                    </Link>

			                    <Link className="col-md-3 col-sm-6" to="/joblisting">
			                        <div className="category-box" data-aos="fade-up">
			                            <div className="category-desc">
			                                <div className="category-icon">
			                                	<img src="assets/img/icons/python.jpg" alt="Python Jobs" className="w25" />
			                                </div>
			                                <div className="category-detail category-desc-text">
			                                    <h4> <span>Python Developer</span></h4>
			                                    {/*<p>300 Jobs</p>*/}
			                                </div>
			                            </div>
			                        </div>
			                    </Link>

			                    <Link className="col-md-3 col-sm-6" to="/joblisting">
			                        <div className="category-box" data-aos="fade-up">
			                            <div className="category-desc">
			                                <div className="category-icon">
			                                	<img src="assets/img/icons/angularjs.png" alt="Angular Jobs" className="w25" />
			                                </div>
			                                <div className="category-detail category-desc-text">
			                                    <h4> <span>Angular Developer</span></h4>
			                                    {/*<p>80 Jobs</p>*/}
			                                </div>
			                            </div>
			                        </div>
			                    </Link>

			                    <Link className="col-md-3 col-sm-6" to="/joblisting">
			                        <div className="category-box" data-aos="fade-up">
			                            <div className="category-desc">
			                                <div className="category-icon">
			                                	<img src="assets/img/icons/vuejs.png" alt="Remote Jobs" className="w25" />
			                                </div>
			                                <div className="category-detail category-desc-text">
			                                    <h4> <span>VueJs Developer</span></h4>
			                                    {/*<p>120 Jobs</p>*/}
			                                </div>
			                            </div>
			                        </div>
			                    </Link>

			                    <Link className="col-md-3 col-sm-6" to="/joblisting">
			                        <div className="category-box" data-aos="fade-up">
			                            <div className="category-desc">
			                                <div className="category-icon">
			                                	<img src="assets/img/icons/ui.png" alt="UI/UX Jobs" className="w25" />
			                                </div>
			                                <div className="category-detail category-desc-text">
			                                    <h4> <span>UI/UX Designer</span></h4>
			                                    {/*<p>78 Jobs</p>*/}
			                                </div>
			                            </div>
			                        </div>
			                    </Link>

			                    <Link className="col-md-3 col-sm-6" to="/joblisting">
			                        <div className="category-box" data-aos="fade-up">
			                            <div className="category-desc">
			                                <div className="category-icon">
			                                	<img src="assets/img/icons/seo-expert.png" alt="UI/UX Jobs" className="w25" />
			                                </div>
			                                <div className="category-detail category-desc-text">
			                                    <h4> <span>SEO Expert</span></h4>
			                                    {/*<p>78 Jobs</p>*/}
			                                </div>
			                            </div>
			                        </div>
			                    </Link>

			                    <Link className="col-md-3 col-sm-6" to="/joblisting">
			                        <div className="category-box" data-aos="fade-up">
			                            <div className="category-desc">
			                                <div className="category-icon">
			                                	<img src="assets/img/icons/product-manager.png" alt="UI/UX Jobs" className="w25" />
			                                </div>
			                                <div className="category-detail category-desc-text">
			                                    <h4> <span>Product Manager</span></h4>
			                                    {/*<p>78 Jobs</p>*/}
			                                </div>
			                            </div>
			                        </div>
			                    </Link>

			                    <Link className="col-md-3 col-sm-6" to="/joblisting">
			                        <div className="category-box" data-aos="fade-up">
			                            <div className="category-desc">
			                                <div className="category-icon">
			                               		<img src="assets/img/icons/all.png" alt="All Jobs" className="w25" />
			                               	</div>
			                                <div className="category-detail category-desc-text">
			                                    <h4> <span>All Jobs</span></h4>
			                                    {/*<p>900 Jobs</p>*/}
			                                </div>
			                            </div>
			                        </div>
			                    </Link>			      
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
			                            <h4>Search Jobs</h4>
			                            <p>Use our advanced search engine and search for jobs with selected key words and filters.</p>
			                        </div>
			                    </div>
			                    <div className="work-process">
			                        <div className="work-process-icon"><span className="icon-mobile"></span></div>
			                        <div className="work-process-caption">
			                            <h4>Find Job</h4>
			                            <p>You need a fulltime work or just some freelancing or a contract, DevJobs has it all.</p>
			                        </div>
			                    </div>
			                    <div className="work-process">
			                        <div className="work-process-icon"><span className="icon-profile-male"></span></div>
			                        <div className="work-process-caption">
			                            <h4>Hire Employee</h4>
			                            <p>You need some professional to take care of a tech solution for your business, browse through our exotic collection of talented experts and take your pick.</p>
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
			                            <p>Accept hire invitation from a company or get accepted to work in a company, and get started!</p>
			                        </div>
			                    </div>
			                    <div className="work-process">
			                        <div className="work-process-icon"><span className="icon-wallet"></span></div>
			                        <div className="work-process-caption">
			                            <h4>Pay Money</h4>
			                            <p>Receive payment from our advanced and secure payment platform. You get what was promised.</p>
			                        </div>
			                    </div>
			                    {/*<div className="work-process">
			                        <div className="work-process-icon"><span className="icon-happy"></span></div>
			                        <div className="work-process-caption">
			                            <h4>Happy</h4>
			                            <p>Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac condimentum. Vestibulum congue posuere lacus</p>
			                        </div>
			                    </div>*/}
			                </div>
			            </div>
			        </section>

			        <div className="clearfix"></div>			        

					<Utilities.Footer />

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
			//this.setState({showLoader: false})
			//this.state.showLoader=false;
		}.bind(this), 3000, this.state.showLoader);
	}
}

export {Home, Utilities};