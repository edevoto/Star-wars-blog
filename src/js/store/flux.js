const getState = ({ getStore, getActions, setStore }) => {
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
			person: null,
			people: null,
			planets: null,
			vehicles: null,
			favorites: null
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
			loadCharacterData: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(response => response.json())
					.then(data => {
						fetch(data)
							.then(response => response.json())
							.then(data => {
								setStore({
									person: data
								});
								console.log(data);
							});
					});
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

			addFavorite: favorite => {
				getStore();

				setStore({
					favorites: [favorite]
				});
				console.log(favorite);
			}
		}
	};
};

export default getState;
