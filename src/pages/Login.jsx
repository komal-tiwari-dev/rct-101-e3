import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [pass, setPass] = useState("cityslicka");

  
  const handelSubmit = (e) => {
    e.preventDefault();
    axios({
      url: "https://reqres.in/api/login",
      data: {
        email,
        pass,
      },
    })
      .then((res) => {
        dispatch({
          type: "login",
          token: res.data.token,
        });
      })
      .catch((err) => {
        console.log(err.message)
        alert("Login Unsuccessfull");
      });
  };

  if (state.isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <div>
          <h1>Login</h1>
          <input
            data-cy="login-email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            data-cy="login-password"
            placeholder="Enter Pass"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
        </div>
        <button type="submit" data-cy="login-submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
