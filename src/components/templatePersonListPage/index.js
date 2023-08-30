import React, { useState } from "react";
import Header from "../headerPersonList";
import FilterCard from "../filterPersonsCard";
import PersonList from "../personList";
import Grid from "@mui/material/Grid";

function PersonListPageTemplate({ persons, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  // const [combinedCreditFilter, setCombinedCreditFilter] = useState("0");
  // const combinedCreditId = Number(combinedCreditFilter);

  let displayedPersons = persons
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    // else setCombinedCreditFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        {/* <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}> */}
        {/*   <FilterCard */}
        {/*     onUserInput={handleChange} */}
        {/*     nameFilter={nameFilter} */}
        {/*     combinedCreditFilter={combinedCreditFilter} */}
        {/*   /> */}
        {/* </Grid> */}
        <PersonList action={action} persons={displayedPersons}></PersonList>
      </Grid>
    </Grid>
  );
}

export default PersonListPageTemplate;
