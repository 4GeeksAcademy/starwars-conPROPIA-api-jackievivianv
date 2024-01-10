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

	console.log(props.id);
	console.log(props.name);


	return (
		<div className="card mx-2 pl-0" style={{width: "18rem"}}>
			<img src="https://thorntons-investments.co.uk/wp-content/uploads/2017/08/400x200.png" className="card-img-top" alt="..."/>
		<div className="card-body">
		  <h5 className="card-title">{props.name}</h5>
		</div>
		<div className="card-body d-flex justify-content-between">

			<Link className="btn btn-primary" to={`/species/${props.id}`} >
						Learn More...
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

SpeciesCard.propTypes = {
	history: PropTypes.object,
	name: PropTypes.string,
	id: PropTypes.number
};
