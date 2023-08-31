import React from "react";
import { getTvs } from "../api/movie-api";
import PageTemplate from '../components/templateTvShowListPage';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'


const TvsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('shows', getTvs)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  const shows = data;

  return (
    <PageTemplate
      title="Tv Shows"
      shows={shows}
    />
  );

};

export default TvsPage;
