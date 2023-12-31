import React, { useState} from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
// import TvReviews from "../tvReviews"


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};

const chip = { margin: 0.5 };

const TvShowDetails = ({ show }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {show.overview}
      </Typography>

      <Paper
        component="ul"
        sx={root}
      >
        <li>
          <Chip label="Genres" sx={chip} color="primary" />
        </li>
        {show.genre_ids.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={root}>
        {/* <Chip icon={<AccessTimeIcon />} label={`${show.episode_run_time} min.`} /> */}
        {/* <Chip */}
        {/*   icon={<MonetizationIcon />} */}
        {/*   label={`${show.revenue.toLocaleString()}`} */}
        {/* /> */}
        <Chip
          icon={<StarRate />}
          label={`${show.vote_average} (${show.vote_count}`}
        />
        <Chip label={`Released: ${show.first_air_date}`} />
      </Paper>
      <Paper
        component="ul"
        sx={root}
      >
        {/* TODO ADD BACK ORIGIN COUNTRY */}
        {/* <li> */}
        {/*   <Chip label="Origin Country" sx={chip} color="primary" /> */}
        {/* </li> */}
        {/* {show.origin_country.map((c) => ( */}
        {/*   <li key={c.origin_country}> */}
        {/*     <Chip label={c.origin_country} sx={chip} /> */}
        {/*   </li> */}
        {/* ))} */}
      </Paper>
     {/* <Fab */}
     {/*    color="secondary" */}
     {/*    variant="extended" */}
     {/*    onClick={() =>setDrawerOpen(true)} */}
     {/*    sx={{ */}
     {/*      position: 'fixed', */}
     {/*      bottom: '1em', */}
     {/*      right: '1em' */}
     {/*    }} */}
     {/*  > */}
     {/*    <NavigationIcon /> */}
     {/*    Reviews */}
     {/*  </Fab> */}
     {/*  <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}> */}
     {/*    <TvReviews show={show} /> */}
     {/*  </Drawer> */}
    </>
  );
};

export default TvShowDetails ;
