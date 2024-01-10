import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";


export const SpeciesInfo = (props) => {
	const [state, setState] = useState({
		//initialize state here
		
	});


	const { store, actions } = useContext(Context);



	return (

		<div className="mb-3 mx-auto container d-flex justify-content-center col-lg-8 col-md-10 col-sm-12" style={{width: "50rem"}}>

		
			<img src="https://www.gammaracionero.es/wp-content/uploads/2016/09/placeholder-800x600.png" className="card-img-top p-3" alt="..."/>
		<div className="card-body justify-content-center ml-4 col-6 mx-3">
		  <h1 className="card-title text-danger">{props.name}</h1>
		  <p><strong>Classification:</strong>{props.classification}</p>
		  <p><strong>Designation:</strong> {props.designation}</p>
		  <p><strong>Average Height:</strong> {props.average_height}</p>
		  <p><strong>Average Lifespan:</strong> {props.average_lifespan}</p>
		  <p><strong>Skin Colors:</strong> {props.skin_colors}</p>
          <p><strong>Hair Colors:</strong> {props.hair_colors}</p>
          <p><strong>Eye Colors:</strong> {props.eye_colors}</p>
		  <p><strong>Language:</strong> {props.language}</p>

	
		</div>
	  </div>
	);
};


/**
 * Define the data-types for
 * your component's properties
 **/

SpeciesInfo.propTypes = {
	history: PropTypes.object,
	eye_colors: PropTypes.string,
	hair_colors: PropTypes.string,
	classifcation: PropTypes.string,
	name: PropTypes.string,
	id: PropTypes.number,
	average_height: PropTypes.number,
	skin_colors: PropTypes.string,
	average_lifespan: PropTypes.number,
    language: PropTypes.string
};

