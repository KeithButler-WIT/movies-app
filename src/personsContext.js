import React, { createContext, useEffect, useReducer, useContext } from "react";
import { getPersons } from "./api/movie-api";
import { AuthContext } from './authContext';

export const PersonsContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { persons: action.payload.result };
    default:
      return state;
  }
};

const PersonsContextProvider = props => {
  const context = useContext(AuthContext);

  const [state, dispatch] = useReducer(reducer, { persons: []});

  useEffect(() => {
    getPersons().then(result => {
      dispatch({ type: "load", payload: {result}});
    });
  },[context.isAuthenticated]);

  return (
    <PersonsContext.Provider
      value={{
        persons: state.persons,
      }}
    >
      {props.children}
    </PersonsContext.Provider>
  );
};

export default PersonsContextProvider
