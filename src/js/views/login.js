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

    const [email, setUserEmail] = useState("");
    const [password, setPassword] = useState("")

	const { store, actions } = useContext(Context);
   
    const navigate = useNavigate();

    async function handleLogin(e){
        e.preventDefault()
        console.log(email, password);
        let logged = await actions.login(email, password);
        console.log(logged)
        if (logged) { //true
            navigate("/")
        }
    }
	

	return (
        <div>
		<form className="container d-block justify-content-around p-4" onSubmit={handleLogin}>
            <div className="form-group">
                <label for="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>setUserEmail(e.target.value)} /> 
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
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
