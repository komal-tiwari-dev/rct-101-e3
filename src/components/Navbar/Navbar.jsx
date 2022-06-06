import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";



const Navbar = () => {
  const {state,dispatch} =useContext(AuthContext)
  return (
    <div data-cy="navbar">
      <Link to="/" data-cy="navbar-home-link">Logo</Link>
      <span data-cy="navbar-cart-items-count">Cart:{1}</span>
      <button data-cy="navbar-login-logout-button" onClick={()=>{
        if(state.isAuth){
          dispatch({
            type:"logout",
            token:null
          })
        }
      }}>{state. isAuth ? "Logout" :"Login"}</button>
    </div>
  );
};

export default Navbar;
