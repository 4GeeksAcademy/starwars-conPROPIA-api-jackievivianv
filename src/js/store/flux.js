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
			characters: [],
			charactersInfo: {},
			planets: [],
			planetsInfo: {},
			species: [],
			speciesInfo: {},
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
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
			getAllCharacters: () => {
				fetch("https://www.swapi.tech/api/people")
				.then(res => {
					console.log(res.status)
					//if (res.status === 200){
					//	getActions().getCharactersInfo();
					//}
					return res.json();
				})

				.then(data => setStore({ characters: data.results }))
				.catch(err => console.error(err))
			},
			getCharactersInfo: (characterId) => {
				fetch(`https://www.swapi.tech/api/people/${characterId}`)
				  .then(res => {
					console.log(res.status);
					return res.json();
				  })
				
				.then(data => setStore({ charactersInfo: data.result.properties }))
				  
				.catch(err => console.error(err));
			  
			
			},
			getAllPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
				.then(res => {
					console.log(res.status)
					return res.json();
				})

				.then(data => setStore({ planets: data.results }))
				.catch(err => console.error(err))
			},
			getPlanetsInfo: (planetId) => {
				fetch(`https://www.swapi.tech/api/planets/${planetId}`)
				  .then(res => {
					console.log(res.status);
					return res.json();
				  })
				
				.then(data => setStore({ planetsInfo: data.result.properties }))
				  
				.catch(err => console.error(err));
			  
			
			},
			getAllSpecies: () => {
				fetch("https://www.swapi.tech/api/species")
				.then(res => {
					console.log(res.status)
					return res.json();
				})

				.then(data => setStore({ species: data.results }))
				.catch(err => console.error(err))
			},
			getSpeciesInfo: (speciesId) => {
				fetch(`https://www.swapi.tech/api/species/${speciesId}`)
				  .then(res => {
					console.log(res.status);
					return res.json();
				  })
				.then(data => setStore({ speciesInfo: data.result.properties }))
				.catch(err => console.error(err));
	
			},
			addFavoritesCharacters: (characterName, characterId, characterType) => {
				let newArray = getStore().favorites.filter((item) => item.name == characterName)
				if (newArray.length === 0) {
					setStore({ favorites: [...getStore().favorites, {name: characterName, idCharacter: characterId, type: characterType}] })
					
				}
				
			},
			addFavoritesPlanets: (planetName, planetId, planetType) => {
				let newArray = getStore().favorites.filter((item) => item.name == planetName)
				if (newArray.length === 0) {
					setStore({ favorites: [...getStore().favorites, {name: planetName, idPlamet: planetId, type: planetType}] })
					console.log(getStore().favorites);
				}
			},
			addFavoritesSpecies: (speciesName, specieId, specieType) => {
				let newArray = getStore().favorites.filter((item) => item.name == speciesName)
				if (newArray.length === 0) {
					setStore({ favorites: [...getStore().favorites, {name: speciesName, idSpecie: specieId, type: specieType}] })
					console.log(getStore().favorites);
				}
			},
			deleteFavorites: (deletedFavorite) => {
					setStore({ favorites: getStore().favorites.filter((i, _) => i.name !== deletedFavorite) })
					console.log(getStore().favorites);
			},
			login: async (email, password) => {
				console.log(email, password);
				console.log("funciona")
				try {
                    let response = await fetch("https://sturdy-fiesta-x5v6x6xvgjp3vgxg-3000.app.github.dev/login",{
                        method: "POST",
                        headers: {
                            "Content-Type":"application/json"
                        },
                            body: JSON.stringify({
                            "email": email,
                            "password": password
                        })
                    })
                    let data = await response.json()
					if (response.status === 401) {
						return false;
					}
					localStorage.setItem("token", data.access_token)
                    console.log(data);
                        return true
                } catch(error) {
                    console.log(error);
                    return false
                }
            },
			getFavorites: async () => {
				let token = localStorage.getItem("token")
				try {
					let response = await fetch("https://sturdy-fiesta-x5v6x6xvgjp3vgxg-3000.app.github.dev/user/favorites",{
                        method: "GET",
                        headers: {
                            "Content-Type":"application/json",
							"Authorization": `Bearer ${token}`
                        }
					})

						let data = await response.json()
						console.log(data.favorites)
						setStore({ favorites: data.favorites });
				//		localStorage.setItem("token", data.access_token)
						return true
					} catch(error) {
						console.log(error);
						return false
					}

                
				}
			}
		
		}
	
};

export default getState;
