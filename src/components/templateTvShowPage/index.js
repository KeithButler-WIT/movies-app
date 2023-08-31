import React from "react";
import TvShowHeader from "../headerTvShow";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getTv } from "../../api/movie-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const TemplateTvShowPage = ({ show, children }) => {
  const { data , error, isLoading, isError } = useQuery(
    ["show", { id: show.id }],
    getTv
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const images = data
  console.log(show);

  return (
    <>
      <TvShowHeader show={show} />

      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
            <ImageList
                cols={1}>
                    <ImageListItem key={show.file_path} cols={1}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${show.file_path}`}
                        alt={show.poster_path}
                    />
                    </ImageListItem>
            </ImageList>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateTvShowPage;
