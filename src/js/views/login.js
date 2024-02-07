import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";



export const Login = () => {
	const [state, setState] = useState({
		//initialize state here
	});

	const { store, actions } = useContext(Context);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    function handleLogin(e){
        e.preventDefault()
        console.log(username, password);
        let logged = actions.login(username, password);
        if (logged) { //true
            navigate("/home")
        }
    }
	

	return (
        <div>
		<form className="container d-block justify-content-around p-4" onSubmit={handleLogin}>
            <div className="form-group">
                <label for="exampleInputEmail1">Username</label>
                    <input type="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" onChange={(e)=>setUsername(e.target.value)} /> 
                    <small id="emailHelp" className="form-text text-muted">We'll never share your username with anyone else.</small>
                </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
            </div>
        <div className="mt-2">
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        <div className="mt-2">
        <p>If you don't have an account you can register <Link> here.</Link></p>
        
        </div>
    </form>
    </div>
	);
};



/**
 * Define the data-types for
 * your component's properties
 **/
