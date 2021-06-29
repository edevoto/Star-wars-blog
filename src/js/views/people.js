import React from "react";
import { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export function PeopleList() {
	const { store, actions } = useContext(Context);
	const { loadSomeData } = store;
	const { addFavorite } = store;
	const { people } = store;

	return (
		<div className="jumbotron d-flex justify-content-center background-people">
			<div
				id="carouselExampleSlidesOnly"
				className="carousel slide d-flex justify-content-center"
				data-ride="carousel">
				<div className="carousel-inner">
					{!!people &&
						people.results.map((p, i) => {
							return (
								<div
									key={i}
									className="card cardBg carousel-item active m-5"
									style={{ width: "250px", height: "350px" }}>
									<img src="https://picsum.photos/200/200" className="card-img-top" />
									<div className="card-body">
										<h5 className="card-title">{p.name}</h5>
										<hr />
										<p className="card-text d-flex justify-content-end" style={{ fontSize: "8px" }}>
											id: {p.uid}
										</p>
										<button className="btn btn-warning text-dark">Add to favorite</button>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}

export default PeopleList;
