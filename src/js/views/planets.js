import React from "react";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";

export function PlanetsList() {
	const { store, actions } = useContext(Context);
	const { loadSomeData } = store;
	const { planets } = store;

	return (
		<ul className="carousel">
			{!!planets &&
				planets.results.map((p, i) => {
					return (
						<div key={i} className="card">
							<img src="#" className="card-img-top" />
							<div className="card-body">
								<h5 className="card-title">{p.name}</h5>
								<p className="card-text">Dome text</p>
							</div>
						</div>
					);
				})}
		</ul>
	);
}

export default PlanetsList;
