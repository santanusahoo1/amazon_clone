import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase";

function Login() {
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (event) => {
        event.preventDefault(); // this stop refresh
        auth.signInWithEmailAndPassword(email, password)
            .then((_auth) => {
                history.push("/");
            })
            .catch(e => alert(e.message));
    };
    const register = (event) => {
        event.preventDefault(); // this stop refresh
        //logic...
        auth.createUserWithEmailAndPassword(email, password)
            .then((_auth) => {
                //create  a user login
                history.push("/");
            })
            .catch(e => alert(e.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png" alt="" />
            </Link>
            <div className="login_page">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="signInButton">Sign in</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className="createSignInButton">Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;
