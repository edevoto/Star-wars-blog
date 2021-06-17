import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Home(props) {
	const [name, setName] = useState(null);

	return (
		<div className="container text-center bg-dark p-5 mx-auto my-5">
			<h1 className="text-warning m-5">What are you looking for young padawan?</h1>
			<Link to="/people" className="btn btn-warning btn-lg m-5">
				People
			</Link>
			<Link to="/planets" className="btn btn-warning btn-lg m-5">
				Planets
			</Link>
			<Link to="/vehicles" className="btn btn-warning btn-lg m-5">
				Vehicles
			</Link>
		</div>
	);
}
