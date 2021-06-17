import React from "react";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";

export function Vehicles() {
	const { store, actions } = useContext(Context);
	const { loadSomeData } = store;
	const { vehicles } = store;

	return (
		<div className="jumbotron d-flex justify-content-center background-vehicles">
			<div
				id="carouselExampleSlidesOnly"
				className="carousel slide d-flex justify-content-center"
				data-ride="carousel">
				<div className="carousel-inner">
					{!!vehicles &&
						vehicles.results.map((p, i) => {
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
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}

export default Vehicles;
