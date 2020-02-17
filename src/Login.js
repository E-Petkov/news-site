import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import fireApp from "./base.js";
import { AuthContext } from "./Auth.js";
import "./login.style.scss";
import {Link} from "react-router-dom";

const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await fireApp
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/admin");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/admin" />;
    }

    return (
        <div className="login">
            <h1>Log in</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Email:
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    Password:
                    <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Log in</button>
            </form>
            <div>
                <br/>
                <Link to={`/`}>
                    <button>Back</button>
                </Link>
            </div>
        </div>
    );
};

export default withRouter(Login);
