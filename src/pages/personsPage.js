import React from "react";
import { getPersons } from "../api/movie-api";
import PageTemplate from '../components/templatePersonListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/personAddToFavourites'

const PersonsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('persons', getPersons)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  const persons = data;

  // Redundant, but necessary to avoid app crashing.
  // const favourites = persons.filter(m => m.favourite)
  // localStorage.setItem('favourites', JSON.stringify(favourites))
  // const addToFavourites = (personId) => true

  return (
    <PageTemplate
      title="Discover Persons"
      persons={persons}
      action={(person) => {
        return <AddToFavouritesIcon person={person} />
      }}
    />
  );
};

export default PersonsPage;
