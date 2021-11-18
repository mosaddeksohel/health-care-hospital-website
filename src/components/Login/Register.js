/* import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../useFirebase/useAuth';
import './registration.css'

const Register = () => {
    const { handleRegistration, handleEmailChange, handlePasswordChange, error, setError, email, password } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handleSignUp = (e) => {
        e.preventDefault();
        handleRegistration(email, password)
            .then(result => {
                history.push(redirect_url);
                setError('');
            })
        setError('')
    }

    return (
        <div className="registration">
            <h2>Register an Account</h2>
            <form onSubmit={handleSignUp}>
                <input onBlur={handleEmailChange} className="mt-" type="email" placeholder="Your Email" />
                <br />
                <input onBlur={handlePasswordChange} className="mt-2" type="password" name="" id="" placeholder="Your Password" />
                <br />
                <p className="text-danger">{error}</p>
                <input className="mt-2" type="submit" value="submit" />
                <br />
                <p>Already have an account <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
};

export default Register; */

import React, { useState } from 'react';
import { TextField, Typography } from '@mui/material';

import { Alert, Button, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../useFirebase/useAuth'




const Register = () => {
    const [loginData, setLoginData] = useState({})


    const { registerUser, error, isLoading, signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(value)
        setLoginData(newLoginData)
    }


    const handleLogin = e => {
        registerUser(loginData.email, loginData.password, loginData.name, location, history)
        e.preventDefault();

    }


    const signINWithGoogle = (e) => {
        signInUsingGoogle(location, history)
        e.preventDefault();
    }


    return (
        <div style={{ marginTop: '50px' }}>
            <Typography variant="h5" gutterBottom component="div">
                Please Register
            </Typography>
            {!isLoading && <form onSubmit={handleLogin}>
                <TextField
                    sx={{ width: '50%', m: 1 }}
                    name="name"
                    onBlur={handleOnBlur}
                    id="standard-basic"
                    label=" Your Name"
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '50%', m: 1 }}
                    name="email"
                    type="email"
                    onBlur={handleOnBlur}
                    id="standard-basic"
                    label=" Your Email"
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '50%', m: 1 }}
                    id="standard-password-input"
                    onBlur={handleOnBlur}
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                />
                <br />
                <Button
                    sx={{ width: '75%', m: 1 }}
                    type="submit"
                    style={{ backgroundColor: 'goldenrod', margin: 2, width: '25%' }}
                    variant="contained">Register</Button>
                <Typography variant="p" gutterBottom component="div"
                >

                    Already Registered? Please<Link to="/login"><Button
                        sx={{ width: '75%' }}
                        style={{ backgroundColor: 'skyblue' }}
                        variant="contained">Login</Button>
                    </Link>
                </Typography>
            </form>}

            <Button
                sx={{ width: '75%', m: 1, }}
                onClick={signINWithGoogle}
                style={{ backgroundColor: 'goldenrod', marginBottom: '10rem' }}
                variant="contained">Signin With Google
            </Button>


            {
                isLoading && <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }

            {
                error && [

                    'danger',

                ].map((variant, idx) => (
                    <Alert key={idx} variant={variant}>{error} </Alert>
                ))
            }

        </div >
    );
};

export default Register;