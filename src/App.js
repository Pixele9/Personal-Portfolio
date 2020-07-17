import React from "react";
import "./Assets/css/output.css";

import Navbar from "./Components/Navbar";

import HomePage from "./Screens/HomePage";
import AboutPage from "./Screens/AboutMe";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<div className="flex flex-col md:flex-row main-bg">
			<Router>
				<Navbar />
				<div className="main-content h-screen">
					<Switch>
						<Route exact path="/" component={ HomePage }/>
						<Route path="/about" component={ AboutPage }/>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
