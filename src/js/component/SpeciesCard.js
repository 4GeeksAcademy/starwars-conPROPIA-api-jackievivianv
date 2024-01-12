import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";



export const SpeciesCard = (props) => {
	const [state, setState] = useState({
		//initialize state here
	});

	const { store, actions } = useContext(Context);



	return (
		<div className="card mx-2 pl-0" style={{width: "18rem"}}>
			<img src={`https://starwars-visualguide.com/assets/img/species/${props.id}.jpg`}  className="card-img-top" alt="..."/>
		<div className="card-body">
		  <h5 className="card-title">{props.name}</h5>
		</div>
		<div className="card-body d-flex justify-content-between">

			<Link className="btn btn-primary" to={`/species/${props.id}`} >
						Learn More...
			</Link>
			<button className="btn btn-warning" onClick={() => actions.addFavoritesSpecies(props.name)}>♥</button>
		</div>
	  </div>
	);
};



/**
 * Define the data-types for
 * your component's properties
 **/

SpeciesCard.propTypes = {
	history: PropTypes.object,
	name: PropTypes.string,
	id: PropTypes.number
};
