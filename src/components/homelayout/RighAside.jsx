import React, { useContext } from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "./FindUs";
import QZone from "./QZone";
import { AuthContext } from "../../Provider/AuthContext";
import Loading from "../../pages/Loading";

const RighAside = () => {
  const {user} = useContext(AuthContext);
  
  return (
    <div className="space-y-8">
     <div>
      {
        user ? '' :  <SocialLogin></SocialLogin>
      }
     </div>
      <FindUs></FindUs>
      <QZone></QZone>
    </div>
  );
};

export default RighAside;
