const getState = ({ getStore, getActions, setStore, getFavorite }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: null,
			planets: null,
			vehicles: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadPeopleData: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(response => response.json())
					.then(data => {
						setStore({
							people: data
						});
					});

				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			loadPlanetsData: () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then(response => response.json())
					.then(data => {
						setStore({
							planets: data
						});
					});

				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			loadVehiclesData: () => {
				fetch("https://www.swapi.tech/api/vehicles/")
					.then(response => response.json())
					.then(data => {
						setStore({
							vehicles: data
						});
					});

				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			addFavorite: () => {
				//aqui a;ado la lista de favoritos...
				//Como?
				//Esa es la pregunta....
			}
		}
	};
};

export default getState;
