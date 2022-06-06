import React, { createContext } from "react";
import { useReducer } from "react";

export const AuthContext = createContext();


const logState={
  isAuth:false,
  token:null
}

function reducer(state,action){
  switch(action.type){
    case "login":{
      return {
        ...state,
        isAuth:true,
        token:action.token
      }
    }
    case 'logout':{
      return {
        ...state,
        isAuth:false,
        token:null
      }
    }
    default:{
      return state
    }
  }
}

export const AuthProvider = ({ children }) => {
  const [state,dispatch]=useReducer(reducer,logState)
  

  return <AuthContext.Provider value={{state,dispatch}}>{children}</AuthContext.Provider>;
};
