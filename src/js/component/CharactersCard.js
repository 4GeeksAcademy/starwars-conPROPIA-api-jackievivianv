import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";



export const CharactersCard = (props) => {
	const [state, setState] = useState({
		//initialize state here
	});

	const { store, actions } = useContext(Context);



	//const [characterEye, setEyeColor] = useState(props.eye_color);
	console.log(props.id);
	console.log(props.name);

	//useEffect(() => {() => props.onInfo()}, []);

	//function handleCharacterInfo(characterId) {
	//	console.log(characterId);
	// actions.getCharactersInfo(characterId);
	//}

	return (
		<div className="card mx-2 pl-0" style={{width: "18rem"}}>
			<img src="https://thorntons-investments.co.uk/wp-content/uploads/2017/08/400x200.png" className="card-img-top" alt="..."/>
		<div className="card-body">
		  <h5 className="card-title">{props.name}</h5>

		{/*  <span className="card-text">{props.eye_color}</span>*/}
		</div>
		<div className="card-body d-flex justify-content-between">
	{/*		<Link className="btn btn-success" to="/CharacterPerfil" onClick={() => handleCharacterInfo(props.uid)}>
						Learn More
	</Link>*/}
			<Link className="btn btn-success" to={`/single/${props.id}`} >
						Learn More
			</Link>
			
			<button className="btn btn-warning" >Go</button>
		</div>
	  </div>
	);
};



/**
 * Define the data-types for
 * your component's properties
 **/

CharactersCard.propTypes = {
	history: PropTypes.object,
	eye_color: PropTypes.string,
	hair_color: PropTypes.string,
	gender: PropTypes.string,
	name: PropTypes.string,
	id: PropTypes.number,
	onInfo: PropTypes.func
};

/**
 * Define the default values for
 * your component's properties
 **/

CharactersCard.defaultProps = {
	onCharacter: null
};