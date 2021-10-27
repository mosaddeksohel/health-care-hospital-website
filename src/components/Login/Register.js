import { Link } from 'react-router-dom';
import useAuth from '../../useFirebase/useAuth';
import './registration.css'

const Register = () => {
    const { handleRegistration, handleEmailChange, handlePasswordChange, error } = useAuth();
    return (
        <div className="registration">
            <h2>Register an Account</h2>
            <form onSubmit={handleRegistration}>
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

export default Register;