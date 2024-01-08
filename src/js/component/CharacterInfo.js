import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";


export const CharacterInfo = (props) => {
	const [state, setState] = useState({
		//initialize state here
		
	});


	const { store, actions } = useContext(Context);

	//const [characterEye, setEyeColor] = useState(props.eye_color);


	//useEffect(() => {
	//	actions.getCharactersInfo(props.id);
	//}, []);
	

	return (

		<div className="card mb-3" style={{max_width: "38rem"}}>

		<div className="container d-flex justify-content-center">
			<img src="https://www.gammaracionero.es/wp-content/uploads/2016/09/placeholder-800x600.png" className="card-img-top p-0" alt="..."/>
		<div className="card-body justify-content-center ml-4 col-6">
		  <h1 className="card-title text-danger">{props.name}</h1>
		  <p><strong>Birth Year:</strong>{props.birth_year}</p>
		  <p><strong>Gender:</strong> {props.gender}</p>
		  <p><strong>Hair Color:</strong> {props.hair_color}</p>
		  <p><strong>Eye Color:</strong> {props.eye_color}</p>
		  <p><strong>Skin Color:</strong> {props.skin_color}</p>
		  <p><strong>Mass:</strong> {props.mass}</p>

		</div>
	
		</div>
	  </div>
	);
};


/**
 * Define the data-types for
 * your component's properties
 **/

CharacterInfo.propTypes = {
	history: PropTypes.object,
	eye_color: PropTypes.string,
	hair_color: PropTypes.string,
	gender: PropTypes.string,
	name: PropTypes.string,
	id: PropTypes.number,
	mass: PropTypes.number,
	skin_color: PropTypes.string,
	birth_year: PropTypes.string,
	created: PropTypes.number,
	edited: PropTypes.number,
	homeworld: PropTypes.string,
	url: PropTypes.string,
	onInfo: PropTypes.func
};

/**
 * Define the default values for
 * your component's properties
 **/

CharacterInfo.defaultProps = {
	show: false,
	onClose: null
};