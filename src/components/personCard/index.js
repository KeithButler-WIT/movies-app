import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { PersonsContext } from "../../contexts/personsContext";


export default function PersonCard({ person, action }) {
  const { favourites, addToFavourites } = useContext(PersonsContext);


  // if (favourites.find((id) => id === person.id)) {
  //   person.favourite = true;
  // } else {
  //   person.favourite = false
  // }

  // const handleAddToFavourite = (e) => {
  //   e.preventDefault();
  //   addToFavourites(person);
  // };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
          avatar={
            null
            /* person.favourite ? ( */
            /*   <Avatar sx={{ backgroundColor: 'red' }}> */
            /*     {action(person)} */
            /*   </Avatar> */
            /* ): null */
          }
          title={
            <Typography variant="h5" component="p">
              {person.name}{" "}
            </Typography>
          }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          person.profile_path
            ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "}{person.popularity}{" "}
            </Typography>
          </Grid>
          <Grid item xs={6}>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favourites" onClick={handleAddToFavourite}> */}
        {/*   <FavoriteIcon color="primary" fontSize="large" /> */}
        {/* </IconButton> */}
      </CardActions>
    </Card>
  );
}
