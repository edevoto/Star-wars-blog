import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/home";

import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import PeopleList from "./views/people";
import Vehicles from "./views/vehicles";
import PlanetsList from "./views/planets";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/people">
						<PeopleList />
					</Route>
					<Route exact path="/planets">
						<PlanetsList />
					</Route>
					<Route exact path="/vehicles">
						<Vehicles />
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
