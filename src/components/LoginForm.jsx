import React, { useState, useEffect } from 'react';
import tryLogin from './tryLogin.js';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        tryLogin(username, password)
        .then(token => {
            alert(JSON.stringify(token));
            if(token.access_token) {
                navigate("\dashboard");
            }
            else {
                setLoginError("That is an incorrect login");
            }
        });
    }

    return(
        <form onSubmit={handleSubmit}>
            <p> Username: </p>
            <input type="username" value={username} onChange={x => setUsername(x.target.value)}/>
            {
                false && <p>Username is invalid</p> // TODO: check username
            }
            <p> Password: </p>
            <input type="password" value={password} onChange={x => setPassword(x.target.value)}/>
            {(password.length < 8) && <p>Password is too short</p>}
            <p></p>
            <input type="submit" value="Login"/>
            {(loginError === "") || <p>{loginError}</p>}
        </form>
    );
}

export default LoginForm;