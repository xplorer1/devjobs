import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Home} from "./components/home";
import Login from "./components/login";
import SignUp from "./components/signup";
import Job from "./components/job";
import JobListing from "./components/joblisting";
import {CandidateProfile} from "./components/candidate/candidateprofile";

function App() {
    return (
        <Router>
            <Switch>
	    		<Route exact path='/' component={Home} />
	    		<Route path='/login' component = {Login} />
	    		<Route path='/signup' component = {SignUp} />
	    		<Route path='/job' component = {Job} />
				<Route path='/joblisting' component = {JobListing} />
				<Route path='/candidateprofile' component = {CandidateProfile} />
			</Switch>
        </Router>
    )
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
)