import React from 'react';
import {Link, withRouter} from "react-router-dom";
import {Utilities} from "./home";

class NotFound extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <article>
                {/*<div className="Loader"></div>*/}
                <div className="wrapper"> 
        
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
                        </div>   
                    </nav>

                    <Utilities.Spacing />
                    <Utilities.Spacing />
                    <Utilities.Spacing />
                    <Utilities.Spacing />
                    <Utilities.Spacing /> 

                    <section className="mx-auto w-75">
                        <div className="w-100 text-center mt-5 mb-3 tradecolordk font-weight-bold">
                            Sorry, this page is not available.
                        </div>

                        <div className="text-center">
                            The link you followed may have been broken, or the page may have been removed. <Link to="/">Go back to DevJobs.</Link>
                        </div>
                    </section>

                    <footer className="footer light-footer notfoundfooter">
                        <div className="row copyright">
                            <div className="container">
                                <p>Copyright DevJobs &copy; {new Date().getFullYear()} All Rights Reserved </p>
                            </div>
                        </div>
                    </footer>
                </div>
            </article>
        )
    }

    componentWillMount() {
        console.log("Component will mount.")
    }
}

export default NotFound;