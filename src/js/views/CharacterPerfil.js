import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

import { CharactersCard } from "../component/CharactersCard.js";
import { CharacterInfo } from "../component/CharacterInfo.js";



export const CharacterPerfil = () => {
	const [state, setState] = useState({
		
	});


	const { store, actions } = useContext(Context);

	console.log(state);

	useEffect(() => {
	 actions.getCharactersInfo(state.characterId);
		//actions.getCharactersInfo();
		
		
		
	}, []);

	/*useEffect(() => {
		actions.getCharacterInfo();
		//actions.getCharactersInfo();
		handleCharacterInfo();
		
		
	}, []);

	function handleCharacterInfo(name, phone, address) {
		const characterData = {
			id: props.id,
			full_name: name || props.full_name,
			email: props.email,
			phone: phone || props.phone,
			address: address || props.address,
			agenda_slug: "jackievivianv"
		};

		console.log(updateData.id, updateData);
		actions.updateContact(updateData.id, updateData);
		console.log(props.phone);
	}

	//function handleCharacter(characterId){
	//	actions.getCharactersInfo(characterId);
	//}
	*/

	console.log(store.charactersInfo);

	return (
		<div className="container mt-5">
			<h1 className="text-danger mx-3">Character</h1>
			<div className="container d-flex flex-row">
			<ul className="list-group d-flex flex-row">
				{store.charactersInfo.map(item => (
				<CharacterInfo key={item.uid}
					id={item.uid}
					name={item.name}
					eye_color={item.eye_color}
					//onInfo={() => setState({ characterId: item.uid })} 
					
			
				/>
				))}
			</ul>
			</div>
		
		</div>
	);
 };
