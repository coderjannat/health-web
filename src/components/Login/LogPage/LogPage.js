import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Logpage.css';
import { FcGoogle } from 'react-icons/fc';



const LogPage = () => {
  const { signInUsingGoogle, hanldeEmail, hanldePassword, handleUserLogin  } = useAuth();
  
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location?.state?.from || "/loginandregistration";


  const handleGoogleLogin = () => {
      signInUsingGoogle()
          .then(result => {
              history.push(redirect_url);
          })
  }

  
  const handleLogin = () => {
    handleUserLogin ()
          .then(result => {
              history.push(redirect_url);
          })
  }

  return (
    
    <div className="">
      
      <h1 className="text-center mt-5">Log In </h1>
      <div className="row ">
      <div className="login-btn mt-4 d-flex justify-content-center">
              <p className="mt-2 me-2 text-center"> Sign in with </p>

              <Link
                onClick={handleGoogleLogin}
                className="">
                <FcGoogle size={40} />
              </Link>
            </div>
            <p>or</p>
        <div className="col-md-12">
        <form onSubmit={handleLogin}>
              <input
                onChange={hanldeEmail}
                className="input-felid"
                type="email"
                name="email"
                placeholder="Enter your Email"
              />
              <br />
              <input
                onChange={hanldePassword}
                className="input-felid"
                type="password"
                name="password"
                placeholder="Enter your Password"
              />
              <br />
              <input
                className="mt-3 w-50 btn btn-success m-auto"
                type="submit"
                value="Login"
              />
            </form>
        </div>
     
      </div>
      
    </div>

  );
};

export default LogPage;
