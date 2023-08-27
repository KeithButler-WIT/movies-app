import React, { createContext, useEffect, useReducer, useContext } from "react";
import { getTvs } from "../api/movie-api";
import { AuthContext } from './authContext';

export const TvsContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { tvs: action.payload.result };
    default:
      return state;
  }
};

const TvsContextProvider = props => {
  const context = useContext(AuthContext);

  const [state, dispatch] = useReducer(reducer, { tvs: []});

  useEffect(() => {
    getTvs().then(result => {
      dispatch({ type: "load", payload: {result}});
    });
  },[context.isAuthenticated]);

  return (
    <TvsContext.Provider
      value={{
        tvs: state.tvs,
      }}
    >
      {props.children}
    </TvsContext.Provider>
  );
};

export default TvsContextProvider
