
import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import LogPage from "../Login/LogPage/LogPage";
import Register from "../Register/Register";
import { useState } from "react";
import { Link } from 'react-router-dom';

const LogAndRegistration = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App container ">
      <div className="row">
        <div className="login-area col-md-12">
          {toggle ? <Register></Register> : <LogPage></LogPage>}

          {toggle ? (
           <Link>
            <p onClick={() => setToggle(false)} className="text-primary pe-auto">
              Already have an account ?
            </p>
           </Link>
          ) : (
           <Link>
            <p onClick={() => setToggle(true)} className="text-primary pe-auto ">
              Are you new? please register!!  
            </p></Link>
          )}
        </div>
       
      </div>
    </div>
  );
}

export default LogAndRegistration;
