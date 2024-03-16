import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { PlanetsInfo } from "../component/PlanetsInfo.js";


export const Planets = () => {


	const { store, actions } = useContext(Context);

	

	const params = useParams();


	useEffect(() => {
		actions.getPlanetsInfo(params.theid);
	}, []);


	return (
		<div className="jumbotron">
			

			<PlanetsInfo
				key={params.theid}
				name={store.planetsInfo.name}
				diameter={store.planetsInfo.diameter}
				rotation_period={store.planetsInfo.rotation_period}
				orbital_period={store.planetsInfo.orbital_period}
				gravity={store.planetsInfo.gravity}
				population={store.planetsInfo.population}
				climate={store.planetsInfo.climate}
				terrain={store.planetsInfo.terrain}
				surface_water={store.planetsInfo.surface_water}
				id={params.theid}

			/>

			<hr className="my-4" />
			<div className="text-center">
                <Link to="/" className="mx-3">
				<span className=" justify-content-center btn btn-primary btn-lg mb-5" href="#" role="button">
					Back home
				</span>
				</Link>
			</div>
		</div>
	);
};
