import React, { useContext } from "react";
import { PersonsContext } from "../../contexts/personsContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavouritesIcon = ({ person }) => {
  const context = useContext(PersonsContext);

  const handleAddToFavourites = (e) => {
    e.preventDefault();
    context.addToFavourites(person);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavourites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;
