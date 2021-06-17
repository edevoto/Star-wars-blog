import React from "react";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";

export function PeopleList() {
	const { store, actions } = useContext(Context);
	const { loadSomeData } = store;
	const { people } = store;

	return (
		<ul className="carousel">
			{!!people &&
				people.results.map((p, i) => {
					return (
						<div key={i} className="card" style={{ width: "300px" }}>
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

export default PeopleList;
