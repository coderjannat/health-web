import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit="">
                    <input className="mt-2" type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input className="mt-2" type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input className="mt-2" type="password" name="" id="" placeholder="Re-enter Password" />
                    <br />
                    <input className="mt-3 btn btn-outline-dark" type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/logpage">Login</Link></p>
                <div>----------or-------------</div>
                <button className="btn btn-outline-dark">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;