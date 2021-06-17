import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export function StarshipList() {
	const { store, actions } = useContext(Context);
	const { starship } = store;
	return (
		<div className="jumbotron">
			<button onClick={actions.loadSomeData}>View Ships</button>
			{
				<ul className="carousel">
					{starship.map((ship, i) => {
						return (
							<li key={i} className="carousel-item">
								{ship.name}
								<Link to={"/ships/" + ship.id + "/view"} className="btn btn-primary">
									Ver
								</Link>
							</li>
						);
					})}
				</ul>
			}
		</div>
	);
}

export default StarshipList;
