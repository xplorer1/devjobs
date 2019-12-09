import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./components/aboutcomponent";
import {Home} from "./components/homecomponent";
import {SignUp} from "./components/signup";
import {Login} from "./components/login";
import JobListing from "./components/joblisting";
import Job from "./components/job";

import {CandidateProfile} from "./components/candidate/candidateprofile";

function App() {
    return (
        <Router>
            <Switch>
	    		<Route exact path='/' component={Home} />
	    		<Route path='/signup' component={SignUp} />
	    		<Route path='/login' component={Login} />
				<Route path='/about' component = {About} />
				<Route path='/joblisting' component = {JobListing} />
				<Route path='/job' component = {Job} />

				<Route path='/candidateprofile' component = {CandidateProfile} />
			</Switch>
        </Router>
    )
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
)