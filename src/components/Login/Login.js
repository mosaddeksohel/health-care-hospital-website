import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../useFirebase/useAuth';
import './login.css'

const Login = () => {
    const { signInUsingGoogle, processLogin, handleEmailChange, handlePasswordChange, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }


    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit={processLogin}>
                    <input onBlur={handleEmailChange} className="mt-" type="email" placeholder="Your Email" />
                    <br />
                    <input onBlur={handlePasswordChange} className="mt-2" type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <p>{error}</p>
                    <br />
                    <input className="mt-2" type="submit" value="submit" />
                    <br />

                    <p>Are You new <Link to="/register">Register</Link></p>
                    <br />
                </form>
                <button onClick={handleGoogleLogIn}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;