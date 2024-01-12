import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const [state, setState] = useState({


 });



	const { store, actions } = useContext(Context);



	return (
		<nav className="navbar navbar-light bg-light d-flex justify-content-between mb-3 col-lg-12 col-md-12 col-sm-12">
			<Link className="w-25" to="/">
			<img src="https://visualpharm.com/assets/195/Star%20Wars-595b40b85ba036ed117de471.svg" className="card-img-top mx-3" alt="..."/>
			</Link>
			<div className="ml-auto">
			
				<div className="btn-group" role="group">
    				<button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle mx-3" data-bs-toggle="dropdown" aria-expanded="false">
     					 Favoritos
    				</button>
    				<ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
					{store.favorites.length > 0 && store.favorites.map((item, index) => (
					<div className="d-flex flex-row dropdown-item align-items-center justify-content-between">
      					<li key={index} ><Link className="align-self-start text-reset text-decoration-none pe-3">{item}</Link>
							<i className="fa fa-solid fa-trash" onClick={() => actions.deleteFavorites(item)}></i>
						</li>
					</div>
					  ))}
    				</ul>
  				</div>
				
			</div>
		</nav>
	);
};
