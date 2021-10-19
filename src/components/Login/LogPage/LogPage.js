import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';


import useAuth from '../hooks/useAuth';
import './Logpage.css';
import { FcGoogle } from 'react-icons/fc';


const LogPage = () => {
  const { signInUsingGoogle, hanldeEmail, hanldePassword, handleLogin } = useAuth();
  
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
    <div className="">
      <h1 className="text-center">Log In </h1>
      <div className="row ">
        <div className="col-md-12">
          <div>
            <div className="form-input mt-5 ms-5 ">
              <input
                onChange={hanldeEmail}
                className=" pt-2 pb-2 ps-5 pe-5 ms-5"
                type="email"
                placeholder="Email"
              />
              <br />
              <input
                onChange={hanldePassword}
                className="pt-2 pb-2 ps-5 pe-5 ms-5 mt-2"
                type="password"
                placeholder="Password"
              />
              <br />
              <div className="login-regiater-btn mt-4">

                <button onClick={handleLogin} className="btn btn-success ms-5">
                  Login
                </button>
              </div>
            </div>
            <div className="login-btn mt-4 d-flex justify-content-center">
              <p className="mt-2 me-2"> Sign in with </p>

              <Link
                onClick={handleGoogleLogin}
                className="btn btn-warning mb-2">
                <FcGoogle />
              </Link>
            </div>
          </div>
        </div>
     
      </div>
    </div>

  );
};

export default LogPage;