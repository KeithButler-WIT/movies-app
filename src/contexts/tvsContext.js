import React, { useState, createContext, useEffect, useReducer, useContext } from "react";
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

  // const [favourites, setFavourites] = useState( [] )

  // const addToFavourites = (show) => {
  //   let newFavourites = [...favourites];
  //   if (!favourites.includes(show.id)) {
  //     newFavourites.push(show.id);
  //   }
  //   setFavourites(newFavourites);
  // };

  // // We will use this function in a later section
  // const removeFromFavourites = (show) => {
  //   setFavourites( favourites.filter(
  //     (mId) => mId !== show.id
  //   ) )
  // };


  useEffect(() => {
    getTvs().then(result => {
      dispatch({ type: "load", payload: {result}});
    });
  },[context.isAuthenticated]);

  return (
    <TvsContext.Provider
        value={{
        /* favourites, */
        /* addToFavourites, */
        /* removeFromFavourites, */
        }}
    >
        {props.children}
    </TvsContext.Provider>
  );
};

export default TvsContextProvider
