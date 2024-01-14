import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { SpeciesInfo } from "../component/SpeciesInfo.js";


export const Species = () => {


	const { store, actions } = useContext(Context);



	const params = useParams();


	useEffect(() => {
		actions.getSpeciesInfo(params.theid);
	}, []);


	return (
		<div className="jumbotron">
			
			<SpeciesInfo
				key={params.theid}
				name={store.speciesInfo.name}
				eye_colors={store.speciesInfo.eye_colors}
				hair_colors={store.speciesInfo.hair_colors}
				classification={store.speciesInfo.classification}
				designation={store.speciesInfo.designation}
				skin_colors={store.speciesInfo.skin_colors}
				language={store.speciesInfo.language}
                average_height={store.speciesInfo.average_height}
				average_lifespan={store.speciesInfo.average_lifespan}
				id={params.theid}
			/>


			<hr className="my-4" />

			<Link to="/" className="mx-3">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

