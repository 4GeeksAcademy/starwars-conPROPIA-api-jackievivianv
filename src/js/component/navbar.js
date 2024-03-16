import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const [state, setState] = useState({


 });



	const { store, actions } = useContext(Context);

 	console.log(store.favoritesDatos)


	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="https://visualpharm.com/assets/195/Star%20Wars-595b40b85ba036ed117de471.svg" className="card-img-top mx-3" alt="..." style={{width: "30%"}}/>
                </Link>
                <div className="ml-auto">
                    <div className="btn-group" role="group">
                        <Link to="/login">
                            <button type="button" className="btn btn-secondary">Login</button>
                        </Link>
                        <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle mx-3 mr-5" data-bs-toggle="dropdown" aria-expanded="false">
                            Favoritos
                            <span className="bg-danger rounded-circle p-1 px-2 mx-1">{store.favorites.length > 0 ? store.favorites.length : 0}</span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                            {store.favorites.length > 0 ? store.favorites.map((item, index) => (
                                <li key={index} className="dropdown-item d-flex align-items-center justify-content-between">
                                    <Link to={`${item.type}/${item.idCharacter || item.idPlanet || item.idSpecie}`} className="text-reset text-decoration-none pe-2 mr-5">{item.info_people?.name}</Link>
                                    <i className="fa fa-solid fa-trash" onClick={() => actions.deleteFavorites(item.info_people?.name)}></i>
                                </li>
                            )): <li className="dropdown-item">Inicia sesión para ver tus favoritos.</li>}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
	);
};
