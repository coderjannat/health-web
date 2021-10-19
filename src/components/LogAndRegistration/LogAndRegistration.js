
import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import LogPage from "../Login/LogPage/LogPage";
import Register from "../Register/Register";
import { useState } from "react";

const LogAndRegistration = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App container ">
      <div className="row">
        <div className="login-area col-md-6">
          {toggle ? <Register></Register> : <LogPage></LogPage>}

          {toggle ? (
            <p onClick={() => setToggle(false)} className="text-primary pe-auto">
              Already have an account ?
            </p>
          ) : (
            <p onClick={() => setToggle(true)} className="text-primary pe-auto ">
              Are you new? please register!!  
            </p>
          )}
        </div>
        <div className="col-md-6">
          <div className="img">
            {/* <img
              className="image-fluid w-100"
              src="https://i.ibb.co/wB5md78/undraw-Mobile-login-re-9ntv.png"
              alt=""
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogAndRegistration;
