import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
			<img src="https://visualpharm.com/assets/195/Star%20Wars-595b40b85ba036ed117de471.svg" className="card-img-top w-25 mx-3" alt="..."/>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
				<div className="btn-group" role="group">
    				<button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle mx-3" data-bs-toggle="dropdown" aria-expanded="false">
     					 Favoritos
    				</button>
    				<ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
      				<li><a className="dropdown-item" href="#">Dropdown link</a></li>
     			  	<li><a className="dropdown-item" href="#">Dropdown link</a></li>
    				</ul>
  				</div>
				</Link>
			</div>
		</nav>
	);
};
