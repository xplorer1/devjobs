import React from 'react';
import {Link} from "react-router-dom";
import {Utilities} from "../home";

class CandidateDetail extends React.Component {
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
			
					<section className="inner-header-title" style={{backgroundImage: "url('assets/img/banner-10.jpg')"}}>
						<div className="container">
							<h1>Candidate Detail</h1>
						</div>
					</section>

					<div className="clearfix"></div>
					<section className="detail-desc">
						<div className="container">
						
							<div className="ur-detail-wrap top-lay">
								
								<div className="ur-detail-box">
									
									<div className="ur-thumb">
										<img src="assets/img/can-2.png" className="img-responsive" alt="" />
									</div>
									<div className="ur-caption">
										<h4 className="ur-title">Daniel Diwards</h4>
										<p className="ur-location">
											<i className="ti-location-pin mrg-r-5"></i>232, New Sleewar, Canada
										</p>
										<span className="ur-designation">Web Designer</span>
										<div className="rateing">
											<i className="fa fa-star filled"></i>
											<i className="fa fa-star filled"></i>
											<i className="fa fa-star filled"></i>
											<i className="fa fa-star filled"></i>
											<i className="fa fa-star"></i>
										</div>
									</div>	
								</div>
								
								<div className="ur-detail-btn">
									<a href="#" className="btn btn-warning mrg-bot-10 full-width">
										<i className="ti-thumb-up mrg-r-5"></i>Shortlist
									</a>
									<br />
									<a href="#" className="btn btn-info full-width">
										<i className="ti-download mrg-r-5"></i>Download CV
									</a>
								</div>
								
							</div>
							
						</div>
					</section>
					
					<section className="full-detail-description full-detail">
						<div className="container">
							<div className="row">
								
								<div className="col-lg-8 col-md-8">
									
									<div className="row-bottom">
										<h2 className="detail-title">About Candidate</h2>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									</div>
									
									<div className="row-bottom">
										<h2 className="detail-title">Education</h2>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
										<ul className="trim-edu-list">
										
											<li>
												<div className="trim-edu">
													<h4 className="trim-edu-title">Virallia University<span className="title-est">2010 - 2012</span></h4>
													<strong>Masters In Fine Arts</strong>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
												</div>
											</li>
											
											<li>
												<div className="trim-edu">
													<h4 className="trim-edu-title">Virallia University<span className="title-est">2010 - 2012</span></h4>
													<strong>Masters In Fine Arts</strong>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
												</div>
											</li>
											
										</ul>
									</div>
									
									<div className="row-bottom">
										<h2 className="detail-title">Work & Experience</h2>
										<ul className="trim-edu-list">
										
											<li>
												<div className="trim-edu">
													<h4 className="trim-edu-title">Innvovation Tech<span className="title-est">2013 - 2014</span></h4>
													<strong>Web Designer</strong>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
												</div>
											</li>
											
											<li>
												<div className="trim-edu">
													<h4 className="trim-edu-title">Livar Studio<span className="title-est">2014 - 2016</span></h4>
													<strong>Graphic Designer</strong>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
												</div>
											</li>
											
										</ul>
									</div>
									
									<div className="row-bottom">
										<h2 className="detail-title">Skills</h2>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
										<div className="ext-mrg row third-progress">
											<div className="col-md-6 col-sm-6">
												<div className="panel-body">
													<h3 className="progressbar-title">Apps Development</h3>
													<div className="progress">
														<div className="progress-bar" style={{width: "90%", background: "#26a9e1"}}>
															<span className="progress-icon fa fa-plus" style={{borderColor: "#26a9e1", color: "#26a9e1"}}></span>
															<div className="progress-value">90%</div>
														</div>
													</div>
													
													<h3 className="progressbar-title">iPhone Development</h3>
													<div className="progress">
														<div className="progress-bar" style={{width: "80%", background: "#f6931e"}}>
															<span className="progress-icon fa fa-plus" style={{borderColor: "#f6931e", color: "#f6931e"}}></span>
															<div className="progress-value">80%</div>
														</div>
													</div>
													
													<h3 className="progressbar-title">Digital Marketing</h3>
													<div className="progress">
														<div className="progress-bar" style={{width: "65%", background: "#8bc43f"}}>
															<span className="progress-icon fa fa-plus" style={{borderColor: "#8bc43f", color: "#8bc43f"}}></span>
															<div className="progress-value">52%</div>
														</div>
													</div>
													
													<h3 className="progressbar-title">SEO/SMO</h3>
													<div className="progress">
														<div className="progress-bar" style={{width: "52%", background: "#d20001"}}>
															<span className="progress-icon fa fa-plus" style={{borderColor: "#d20001", color: "#d20001"}}></span>
															<div className="progress-value">52%</div>
														</div>
													</div>
													
												</div>
											</div>
											
											<div className="col-sm-6 col-sm-6">
												<div className="panel-body">
													<h3 className="progressbar-title">Apps Development</h3>
													<div className="progress">
														<div className="progress-bar" style={{width: "90%", background: "#26a9e1"}}>
															<span className="progress-icon fa fa-plus" style={{borderColor: "#26a9e1", color: "#26a9e1"}}></span>
															<div className="progress-value">90%</div>
														</div>
													</div>
													
													<h3 className="progressbar-title">iPhone Development</h3>
													<div className="progress">
														<div className="progress-bar" style={{width: "80%", background: "#f6931e"}}>
															<span className="progress-icon fa fa-plus" style={{borderColor: "#f6931e", color: "#f6931e"}}></span>
															<div className="progress-value">80%</div>
														</div>
													</div>
													
													<h3 className="progressbar-title">Digital Marketing</h3>
													<div className="progress">
														<div className="progress-bar" style={{width: "65%", background: "#8bc43f"}}>
															<span className="progress-icon fa fa-plus" style={{borderColor: "#8bc43f", color: "#8bc43f"}}></span>
															<div className="progress-value">52%</div>
														</div>
													</div>
													
													<h3 className="progressbar-title">SEO/SMO</h3>
													<div className="progress">
														<div className="progress-bar" style={{width: "52%", background: "#d20001"}}>
															<span className="progress-icon fa fa-plus" style={{borderColor: "#d20001", color: "#d20001"}}></span>
															<div className="progress-value">52%</div>
														</div>
													</div>
													
												</div>
											</div>
										</div>
									</div>
									
								</div>
								
								<div className="col-lg-4 col-md-4">
									<div className="full-sidebar-wrap">
										
										<div className="sidebar-widgets">
										
											<div className="ur-detail-wrap">
												<div className="ur-detail-wrap-header">
													<h4>Candidate Overview</h4>
												</div>
												<div className="ur-detail-wrap-body">
													<ul className="ove-detail-list">
													
														<li>
															<i className="ti-wallet"></i>
															<h5>Offerd Salary</h5>
															<span>£15,000 - £20,000</span>
														</li>
														
														<li>
															<i className="ti-user"></i>
															<h5>Gender</h5>
															<span>Male</span>
														</li>
														
														<li>
															<i className="ti-ink-pen"></i>
															<h5>Career Level</h5>
															<span>Excutive</span>
														</li>
														
														<li>
															<i className="ti-home"></i>
															<h5>Industry</h5>
															<span>Management</span>
														</li>
														
														<li>
															<i className="ti-shield"></i>
															<h5>Experience</h5>
															<span>5 Years</span>
														</li>
														
														<li>
															<i className="ti-book"></i>
															<h5>Qualification</h5>
															<span>Master Degree</span>
														</li>
														
													</ul>
												</div>
											</div>
											
										</div>
										
										<div className="sidebar-widgets">
										
											<div className="ur-detail-wrap">
												<div className="ur-detail-wrap-header">
													<h4>Get In Touch</h4>
												</div>
												<div className="ur-detail-wrap-body">
													<form action="#">
														<div className="form-group">
															<label>Name</label>
															<input type="email" className="form-control" />
														</div>
														<div className="form-group">
															<label>Email</label>
															<input type="email" className="form-control" />
														</div>
														<div className="form-group">
															<label>Message</label>
															<textarea className="form-control"></textarea>
														</div>
														<button type="submit" className="btn btn-primary">Submit</button>
													</form>
												</div>
											</div>	
										</div>
									
									</div>
								</div>
							
							</div>
						</div>
					</section>

				</div>

			</article>
		)
	}
}

export default CandidateDetail;