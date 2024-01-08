import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

import { CharactersCard } from "../component/CharactersCard.js";
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
	}, []);


	console.log(store.characters);

	return (
		<div className="container mt-5">
			<h1 className="text-danger mx-3">Characters</h1>
				<div className="container d-flex flex-row">
					<ul className="list-group d-flex flex-row">
						{store.characters.map(item => (
						<CharactersCard key={item.uid}
							id={item.uid}
							name={item.name}
							onInfo={(characterId) => {
								actions.getCharactersInfo(characterId);
								setState({ showCharacterInfo: true, characterId: item.uid, name: item.name });
							  }}
					
			
						/>
						))}
					</ul>
			
				</div>
				{/*</CharacterInfo
				show={state.showCharacterInfo}
				uid={state.characterId}
				name={state.name}
				onClose={() => setState({ showCharacterInfo: false })}
							/>*/}
		
		</div>
	);
 };
