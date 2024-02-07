import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

import { CharactersCard } from "../component/CharactersCard.js";
import { PlanetsCard } from "../component/PlanetsCard.js";
import { SpeciesCard } from "../component/SpeciesCard.js";



export const Home = () => {
	const [state, setState] = useState({
   		characterId: null,
    	name: null,
		eye_color: null,
		hair_color: null
	});


	const { store, actions } = useContext(Context);


	useEffect(() => {
		actions.getAllCharacters();
		actions.getAllPlanets();
		actions.getAllSpecies();
		actions.getProfile();
	}, []);




	return (
		<div>
			<div className="container-fluid mt-5">
				<h1 className="text-danger mx-3">Characters</h1>
					<div className="container-fluid d-flex flex-row">
						<ul className="d-flex flex-nowrap flex-row overflow-scroll gap-3 px-0 mx-2">
							{store.characters.map(item => (
							<li className="col-4 px-0 w-auto my-2" key={item.uid}>
							<CharactersCard 
								id={item.uid}
								name={item.name}
						/>
						</li>
						))}
					</ul>
				</div>
			</div>
			<div className="container-fluid mt-5">
				<h1 className="text-danger mx-3">Planets</h1>
					<div className="container-fluid d-flex flex-row">
						<ul className="d-flex flex-nowrap flex-row overflow-scroll gap-3 px-0 mx-2">
							{store.planets.map(item => (
							<li className="col-4 px-0 w-auto my-2" key={item.uid}>
								<PlanetsCard 
								id={item.uid}
								name={item.name}
								
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="container-fluid mt-5">
				<h1 className="text-danger mx-3">Species</h1>
					<div className="container-fluid d-flex flex-row">
						<ul className="d-flex flex-nowrap flex-row overflow-scroll gap-3 px-0 mx-2">
							{store.species.map(item => (
							<li className="col-4 px-0 w-auto my-2" key={item.uid}>	
								<SpeciesCard 
								id={item.uid}
								name={item.name}
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
 };
