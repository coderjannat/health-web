import React from "react";
// import logo from "../../../images/Banner&Background/logo.png";
import "./Footer.css";
import logo from '../../../../images/logo.png';

import { TiSocialFacebookCircular,TiSocialTwitter,TiSocialInstagram,TiSocialSkypeOutline } from 'react-icons/ti';

const Footer = () => {
  return (
    <div className="mt-5 footer">
      <div className="">
        <div className="row">
          <div className="col-md-4">
            <div className="mb-3">
              <img  src={logo} style={{ width: '70%' }}  alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="second-part">
              <p className="mt-5">
                <span className="m-2 "><TiSocialFacebookCircular size={40}/></span>
                <span className="m-2 "><TiSocialTwitter size={40}  /></span>
                <span className="m-2 "><TiSocialInstagram size={40}/></span>
                <span className="m-2 "><TiSocialSkypeOutline size={40}/></span>
           </p>
           </div>
          </div>
          
          <div className="col-md-4">
            <div className="fourth-part">
              <h1>Contact Us</h1>
              <small className="mt-5">Office: 12 Fake Street,New York</small>
              <br />
              <small className="mt-3">Phone: (08) 8827 633354</small>
              <br />
              <small className="mt-3">Fax: 08) 08 4752 1499</small>
              <br />
              <small className="mt-3">Mail: support.goaltheme.com</small>
            </div>
          </div>
        </div>
        <hr />
        <div className="botton text-center">
          <small>© 2021 done by Jannatul Fardous.</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;