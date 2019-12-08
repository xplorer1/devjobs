import React from 'react';
import {Link} from "react-router-dom";

class SignUp extends React.Component {
	constructor() {
		super();

		this.state = {

		}
	}

	render() {
		return (
			<article>
			    {/* Top Header Wrapper End */}
			    {/* Header Wrapper Start */}
			    <div className="jp_top_header_img_wrapper">
			        <div className="gc_main_menu_wrapper">
			            <div className="container-fluid">
			                <div className="row">
			                    <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 hidden-xs hidden-sm full_width">
			                        <div className="gc_header_wrapper">
			                            <div className="gc_logo">
			                                <a href="index.html"><img src="assets/images/header/logo2.png" alt="Logo" title="Job Pro" className="img-responsive" /></a>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			    {/* Header Wrapper End */}

			    {/* jp register wrapper start */}
			    <div className="register_section">
			        {/* register_form_wrapper */}
			        <div className="register_tab_wrapper">
			            <div className="container">
			                <div className="row">
			                    <div className="col-md-10 col-md-offset-1">
			                        <div role="tabpanel">

			                            {/* Nav tabs */}
			                            <ul id="tabOne" className="nav register-tabs">
			                                <li className="active"><a href="#contentOne-1" data-toggle="tab">personal account <br /> <span>i am looking for a job</span></a>
			                                </li>
			                                <li><a href="#contentOne-2" data-toggle="tab">company account <br /> <span>We are hiring Employees</span></a>
			                                </li>
			                            </ul>

			                            {/* Tab panes */}
			                            <div className="tab-content">
			                                <div className="tab-pane fade in active register_left_form" id="contentOne-1">
												
			                                    <div className="jp_regiter_top_heading">
			                                        <p>Fields with * are mandatory </p>
			                                    </div>
			                                    <div className="row">
			                                        {/*Form Group*/}
			                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
			                                            <input type="text" name="field-name" value="" placeholder="Username*" />
			                                        </div>

			                                        {/*Form Group*/}
			                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">

			                                            <input type="text" name="field-name" value="" placeholder="Email*" />
			                                        </div>
			                                        {/*Form Group*/}
			                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">

			                                            <input type="password" name="field-name" value="" placeholder=" password*" />
			                                        </div>
			                                        {/*Form Group*/}
			                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
			                                            <input type="password" name="field-name" value="" placeholder="re-enter password*" />
			                                        </div>
			                                        {/*Form Group*/}
			                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">

			                                            <input type="text" name="field-name" value="" placeholder="current location" />

			                                        </div>
			                                        {/*Form Group*/}
			                                        <div className="form-group col-md-6 col-sm-6 col-xs-12 custom_input">
			                                            <input type="file" name="resume" />
			                                            <p>DOC, DOCX, RTF, PDF - 300KB MAX PREFERRED CV FORMAT - DOCX FILE</p>
			                                        </div>
			                                        {/*Form Group*/}
			                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">

			                                            <input type="text" name="field-name" value="" placeholder="phone" />
			                                        </div>

			                                        <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
			                                            <div className="check-box text-center">
			                                                <input type="checkbox" name="shipping-option" id="account-option_1" /> &ensp;
			                                                <label for="account-option_1">I agreed to the <a href="#" className="check_box_anchr">Terms and Conditions</a> governing the use of jobportal</label>
			                                            </div>
			                                        </div>
			                                    </div>

			                                    <div className="login_btn_wrapper register_btn_wrapper login_wrapper ">
			                                        <a href="#" className="btn btn-primary login_btn"> register </a>
			                                    </div>
			                                    <div className="login_message">
			                                        <p>Already a member? <Link to="/login" className=""><i className="fa fa-sign-in"></i>&nbsp;Login Here</Link>
			                                        </p>
			                                    </div>
			                                </div>

			                                <div className="tab-pane fade register_left_form" id="contentOne-2">

			                                    <div className="jp_regiter_top_heading">
			                                        <p>Fields with * are mandetory </p>
			                                    </div>
			                                    <div className="row clearfix">
			                                        {/*Form Group*/}
			                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
			                                            <input type="text" name="field-name" value="" placeholder="Username*" />
			                                        </div>
			                                        {/*Form Group*/}
			                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
			                                            <input type="text" name="field-name" value="" placeholder="Email*" />
			                                        </div>
			                                        {/*Form Group*/}
			                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">

			                                            <input type="password" name="field-name" value="" placeholder="password*" />
			                                        </div>
			                                        {/*Form Group*/}
			                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">

			                                            <input type="password" name="field-name" value="" placeholder="re-enter password*" />
			                                        </div>

			                                        {/*Form Group*/}
			                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">

			                                            <input type="text" name="field-name" value="" placeholder="phone" />
			                                        </div>

			                                        {/*Form Group*/}
			                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">

			                                            <input type="text" name="field-name" value="" placeholder="company name" />

			                                        </div>

			                                        {/*Form Group*/}
			                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">

			                                            <input type="text" name="field-name" value="" placeholder="website" />

			                                        </div>
			                                        {/*Form Group*/}
			                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">

			                                            <input type="text" name="field-name" value="" placeholder="address line" />
			                                        </div>

			                                        <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
			                                            <div className="check-box text-center">
			                                                <input type="checkbox" name="shipping-option" id="account-option_2" /> &ensp;
			                                                <label for="account-option_2">I agreed to the <a href="#" className="check_box_anchr">Terms and Conditions</a> governing the use of jobportal</label>
			                                            </div>
			                                        </div>
			                                    </div>

			                                    <div className="login_btn_wrapper register_btn_wrapper login_wrapper ">
			                                        <a href="#" className="btn btn-primary login_btn"> register </a>
			                                    </div>
			                                    <div className="login_message">
			                                        <p>Already a member? <a href="#"> Login Here </a> </p>
			                                    </div>

			                                </div>

			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			    {/* jp register wrapper end */}

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
			                            <i className="fa fa-envelope-o"></i>
			                            <input type="text" placeholder="Enter Your Email" />
			                            <button type="submit">Submit</button>
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
			                                <a href="#"><img src="assets/images/content/resume_logo.png" alt="footer_logo" /></a>
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

export {SignUp};