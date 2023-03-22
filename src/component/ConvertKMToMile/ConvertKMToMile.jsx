import React, { useState } from "react";
import { Button, Card, CardContent, TextField } from "@mui/material";

export const ConvertKMToMile = () => {
  const [km, setKm] = useState(1);
  const [miles, setMiles] = useState(0.621371);

  const handleChange = () => {
    const convertedMiles = km * 0.621371;
    setMiles(convertedMiles);
  };

  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <h2>Convert KM To Miles</h2>
          <div>
            <TextField
              label="Enter Kilometer"
              value={km}
              onChange={(e) => setKm(e.target.value)}
              sx={{marginBottom: 2}}
            />
          </div>

          <TextField
            label="Miles"
            value={miles}
            sx={{marginBottom: 2}}
            InputProps={{
              readOnly: true,
            }}
          />
          <div>
            <Button variant="contained" 
              onClick={handleChange}
            >
              Convert
            </Button>
          </div>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
