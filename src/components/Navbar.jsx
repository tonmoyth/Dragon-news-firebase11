import { Link, NavLink } from "react-router";
import userImage from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);

    const handleLogOut = () => {
      logOut()
      .then(() => {
        console.log('success')
      })
      .catch(error => {
        console.log(error)
      })
    }
    
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={userImage} alt="" />

        {
          user ? <button onClick={handleLogOut} className="btn btn-primary px-10 ">Log Out</button> : <Link to='/auth/login' className="btn btn-primary px-10 ">Login</Link>

        }
      </div>
    </div>
  );
};

export default Navbar;
