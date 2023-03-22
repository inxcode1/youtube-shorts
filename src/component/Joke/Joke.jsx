import React, { useState } from "react";
import { Button, Card, CardContent } from "@mui/material";

export const Joke = () => {
  const [joke, setJoke] = useState("");
  const newJoke = () => {
    fetch(`https://icanhazdadjoke.com/`, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => setJoke(result?.joke))
      .catch((error) => console.log(error));
  };
  return (
    <React.Fragment>
      <Card sx={{ maxWidth: "300px" }}>
        <CardContent>
          <h2>JOKE 😀</h2>

          <p>{joke}</p>

          <Button 
            variant="contained" 
            color="secondary" 
            onClick={newJoke} 
          >
            New Joke
          </Button>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
