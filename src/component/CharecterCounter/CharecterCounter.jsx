import React, { useState } from "react";
import { Grid } from "@mui/material";
import "./style.css";

export const CharacterCounter = () => {
  const [count, setCount] = useState("");

  const inputHandler = (e) => {
    setCount(e.target.value);
  };
  return (
    <React.Fragment>
      <h2>Character Counter</h2>
      <textarea 
        maxLength="10" 
        cols="30" 
        rows="6" 
        onChange={inputHandler} 
      />

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item marginRight={10}>
          <h6>Total Character: {count?.length}</h6>
        </Grid>
        <Grid item>
          <h6>Remaining: {10 -count?.length}</h6>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
