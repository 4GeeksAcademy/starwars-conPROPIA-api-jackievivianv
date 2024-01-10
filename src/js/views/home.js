import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

import { CharactersCard } from "../component/CharactersCard.js";
import { PlanetsCard } from "../component/PlanetsCard.js";
import { CharacterInfo } from "../component/CharacterInfo.js";



export const Home = () => {
	const [state, setState] = useState({
   		characterId: null,
    	name: null,
		eye_color: null,
		hair_color: null
	});


	const { store, actions } = useContext(Context);
	console.log(state.characterId);

	

	console.log(state);

	useEffect(() => {
		actions.getAllCharacters();
		actions.getAllPlanets();
	}, []);


	console.log(store.characters);

	return (
		<div className="col-lg-12 col-md-12 col-sm-12">
			<div className="container-fluid mt-5">
				<h1 className="text-danger mx-3">Characters</h1>
					<div className="container-fluid d-flex flex-row">
						<ul className="list-group d-flex flex-row">
							{store.characters.map(item => (
							<CharactersCard key={item.uid}
								id={item.uid}
								name={item.name}
						/>
						))}
					</ul>
				</div>
			</div>
			<div className="container-fluid mt-5">
				<h1 className="text-danger mx-3">Planets</h1>
					<div className="container-fluid d-flex flex-row">
						<ul className="list-group d-flex flex-row">
							{store.planets.map(item => (
							<PlanetsCard key={item.uid}
								id={item.uid}
								name={item.name}
						/>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
 };
