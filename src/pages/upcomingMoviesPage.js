import React from "react";
import { getUpcomingMovies } from "../api/movie-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist'


const UpcomingMoviesPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  // const playlist = movies.filter(m => m.playlist)
  // localStorage.setItem('playlist', JSON.stringify(playlist))
  // const addToPlaylist = (movieId) => true

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            {/* <AddToPlaylistIcon movie={movie} /> */}
          </>
        );
      }}
    />
  );

};
export default UpcomingMoviesPage;
