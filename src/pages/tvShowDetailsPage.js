import React from "react";
import { useParams } from 'react-router-dom';
import TvShowDetails from "../components/tvShowDetails/";
import PageTemplate from "../components/templateTvShowPage";
import { getTv } from '../api/movie-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const TvPage = (props) => {
  const { id } = useParams();

  const { data: show, error, isLoading, isError } = useQuery(
    ["shows", { id: id }],
    getTv
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {show ? (
        <>
          <PageTemplate show={show}>
            <TvShowDetails show={show} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for show details</p>
      )}
    </>
  );
};

export default TvPage;
