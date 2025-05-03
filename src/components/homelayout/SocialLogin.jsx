import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthContext";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const {googleLogin,gitHubLogin} = useContext(AuthContext);
  const googleHandle = () => {
    googleLogin()
    .then(result => {
      console.log(result.user)
      toast.success('success',{id:'123'})
    })
    .catch(error => {
      toast.error(error.message,{id:'123'})
    })
  }
  const gitHubHandle = () => {
    gitHubLogin()
    .then(result => {
      console.log(result.user)
      toast.success('success',{id:'123'})
    })
    .catch(error => {
      toast.error(error.message,{id:'123'})
    })
  }
  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        <button onClick={googleHandle} className="btn btn-secondary btn-outline w-full">
          <FcGoogle size={24} /> Login with Google
        </button>
        <button onClick={gitHubHandle} className="btn btn-outline btn-primary w-full">
          <FaGithub size={24} /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
