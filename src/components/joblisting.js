import React from 'react';
import {Link} from "react-router-dom";
import {Utilities} from "./home";
import store from "store";

function Loader() {
    return (
        <div className="Loader"></div>
    )
}

class JobListing extends React.Component {
    constructor() {
        super();

        this.state = {
            github: [],
            stackoverflow: [],
            ajaxloading: false,
            fromstackoverflow: false,
            showLoader: false
        }
    }

    render() {
        return (
            <article>
                {this.state.showLoader === true && <Loader />}
                <div className="wrapper">  
        
                    <Utilities.Nav />
            
                    <div className="clearfix"></div>
                    <section className="inner-header-title" style={{backgroundImage: "url('assets/img/banner-10.jpg')"}}>
                        <div className="container">
                            <h1>Browse Jobs</h1>
                        </div>
                    </section>

                    <div className="clearfix"></div>
            
                    <section>
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
                                                <option value="">Job Type</option>
                                                <option value="1">ReactJs Developer</option>
                                                <option value="2">NodeJs Developer</option>
                                                <option value="3">Anguar Developer</option>
                                                <option value="4">Java Developer</option>
                                                <option value="5">Python Developer</option>
                                                <option value="6">Quality Assurance</option>
                                                <option value="7">VueJs Developer</option>
                                                <option value="7">C# Developer</option>
                                                <option value="7">Project Manager</option>
                                                <option value="7">UI/UX Designer</option>
                                            </select>

                                        </div>
                                        <div className="col-md-2 col-sm-2">
                                            <button type="submit" className="btn btn-primary full-width">Filter</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {
                                this.state.github.map((result) => {
                                    return (
                                        <div className="item-click"  key={result.id}>
                                            <article>
                                                <div className="brows-job-list">
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="item-fl-box">
                                                            <div className="brows-job-company-img">
                                                                <Link to={"/job/?id="+result.id}><img src={result.company_logo} className="img-responsive" alt="" /></Link>
                                                            </div>
                                                            <div className="brows-job-position">
                                                                <h3><Link to={"/job/?id="+result.id}>{result.title}</Link></h3>
                                                                <p>
                                                                    <span>{result.company}</span>
                                                                {/*<span className="brows-job-sallery"><i className="fa fa-money"></i>$750 - 800</span>*/}
                                                                    <span className="job-type cl-success bg-trans-success">{result.type}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-4">
                                                        <div className="brows-job-location">
                                                            <p><i className="fa fa-map-marker"></i>{result.location}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2 col-sm-2">
                                                        <div className="brows-job-link">
                                                            <Link to={"/job/?id="+result.id} className="btn btn-default">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                            </article>
                                        </div>
                                    )
                                })
                            }
                            
                            {/*<div className="row">
                                <ul className="pagination">
                                    <li><a href="#"><i className="ti-arrow-left"></i></a></li>
                                    <li className="active"><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li> 
                                    <li><a href="#">4</a></li> 
                                    <li><a href="#"><i className="fa fa-ellipsis-h"></i></a></li> 
                                    <li><a href="#"><i className="ti-arrow-right"></i></a></li> 
                                </ul>
                            </div>  */}
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

    componentDidMount() {
        this.setState({showLoader: true});

        const dbName = "StackOverFlowJobs";

        let request = indexedDB.open(dbName, 1);

        request.onerror = function(event) {
            console.log("er: ", event);
          // Handle errors.
        };

        request.onsuccess = function(event) {
            let stackdb = event.target.result;

            let transaction = stackdb.transaction(["jobs"]);
            let objectStore = transaction.objectStore("jobs");
            let request = objectStore.getAll();

            request.onerror = function(event) {
                console.log("Error reading from db: ", event.target);
            };
            request.onsuccess = function(event) {
                if(event.target.result) {

                    this.setState({
                        stackoverflow: event.target.result,
                        fromstackoverflow: true,
                        showLoader: false
                    });
                }
                
                //console.log("Stack data " + JSON.stringify(event.target.result));
            }.bind(this);
        }.bind(this);

        if(store.get("github")) {
            this.setState({
                github: store.get("github"),
                showLoader: false
            });
        }

        else {
            fetch("https://calm-spire-67840.herokuapp.com/" + "https://jobs.github.com/positions.json")
                .then((response) => {
                    return response.json();
                    this.setState({showLoader: false})
                })
                .then((response) => {

                    this.setState({
                        github: response,
                        showLoader: false
                    });

                    store.set("github", response);
                })
                .catch((error) => {
                    this.setState({showLoader: false})

                    console.log("error: ", error);
                })
        }
    }
}

export default JobListing;