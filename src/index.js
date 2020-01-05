import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Home} from "./components/home";
import JobListing from "./components/joblisting";
import Login from "./components/login";
import CandidateListing from "./components/candidatelisting";
import Job from "./components/job";
import {CandidateProfile} from "./components/candidate/candidateprofile";

function App() {
    return (
        <Router>
            <Switch>
	    		<Route exact path='/' component={Home} />
				<Route path='/joblisting' component = {JobListing} />
				<Route path='/login' component = {Login} />
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