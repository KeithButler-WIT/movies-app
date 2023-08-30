import React from "react";
import { useLocation, useParams } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage";
import MovieReview from "../components/movieReview";

import { getMovieReviews } from '../api/movie-api'
import { useQuery } from "react-query";

const MovieReviewPage = (props) => {
  let location = useLocation();
  const {movie, review} = location.state;

  // const { id } = useParams();

  // const { data: review, error, isLoading, isError } = useQuery(
  //   ["movie", { id: id }, "reviews"],
  //   getMovieReviews
  // );

  return (
    <PageTemplate movie={movie}>
      <MovieReview review={review} />
    </PageTemplate>
  );
};

export default MovieReviewPage;
