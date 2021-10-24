import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../useFirebase/useFirebase';

const Login = () => {
    const { signInUsingGoogle } = useFirebase();
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input className="mt-" type="email" placeholder="Your Email" />
                    <br />
                    <input className="mt-2" type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input className="mt-2" type="submit" value="submit" />
                    <br />
                    <p>Are You new <Link to="/register">Register</Link></p>
                    <br />
                </form>
                <button onClick={signInUsingGoogle}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;