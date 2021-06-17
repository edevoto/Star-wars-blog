import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark">
			<div className="nav-item">
				<Link to="/">
					<span className="btn btn-warning">Home</span>
				</Link>
			</div>
			<div className="nav-item">
				<Link to="/">
					<span className="navbar-brand text-warning fw-bolder fs-1">
						Star
						<br />
						Wars
					</span>
				</Link>
			</div>
			<div className="nav-item">
				<Link to="/favorite">
					<button className="btn btn-warning">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
