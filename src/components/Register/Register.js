import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Login/hooks/useAuth';



const Register = () => {
    const { hanldeEmail, hanldePassword, handleUserRegister, signInUsingGoogle } = useAuth();
    const location = useLocation();
  const history = useHistory();
  const redirect_url = location?.state?.from || "/loginandregistration";


  const handleGoogleLogin = () => {
      signInUsingGoogle()
          .then(result => {
              history.push(redirect_url);
          })
  }
    

    return (
        <div className="login-form">
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit={handleUserRegister } >
                    <input onChange={hanldeEmail } className="mt-2" type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input onChange={hanldePassword} className="mt-2" type="password" name="" id="" placeholder="Your Password" />
                    <br />

                    <input
                className="mt-3 w-50 btn btn-success m-auto"
                type="submit"
                value="Register"
              />
                </form>
                <p>Already have an account? <Link to="/logpage">Login</Link></p>
                <div>----------or-------------</div>
                <button onClick={handleGoogleLogin} className="btn btn-outline-dark">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;
