import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./components/aboutcomponent";
import {Home} from "./components/homecomponent";
import {SignUp} from "./components/signup";
import {Login} from "./components/login";

function App() {
    return (
        <Router>
            <Switch>
	    		<Route exact path='/' component={Home} />
	    		<Route path='/signup' component={SignUp} />
	    		<Route path='/login' component={Login} />
				<Route path='/about' component = {About} />
			</Switch>
        </Router>
    )
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
)