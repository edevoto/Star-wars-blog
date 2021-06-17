import React from "react";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";

export function Vehicles() {
	const { store, actions } = useContext(Context);
	const { loadSomeData } = store;
	const { vehicles } = store;

	return (
		<ul className="carousel">
			{!!vehicles &&
				vehicles.results.map((v, i) => {
					return (
						<div key={i} className="card">
							<img src="#" className="card-img-top" />
							<div className="card-body">
								<h5 className="card-title">{v.name}</h5>
								<p className="card-text">Dome text</p>
							</div>
						</div>
					);
				})}
		</ul>
	);
}

export default Vehicles;
