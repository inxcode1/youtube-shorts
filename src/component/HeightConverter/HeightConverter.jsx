import { Button, Card, CardContent, TextField } from "@mui/material";
import React, { useState } from "react";

export const HeightConverter = () => {
  const [feet, setFeet] = useState(0);
  const [inches, setInches] = useState(0);
  const [centimeters, setCentimeters] = useState(0);

  const getHeight = () => {
    setCentimeters((+feet + +inches / 12) * 12 * 2.54);
  };
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <h3>Height Converter</h3>
          <div>
            <div style={{ marginBottom: "20px" }}>
              <TextField
                label="Feet"
                onChange={(e) => setFeet(e.target.value)}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <TextField
                label="Inches"
                onChange={(e) => setInches(e.target.value)}
              />
            </div>

            <Button 
                variant="outlined" 
                size="small" 
                onClick={getHeight}
            >
              Submit
            </Button>
          </div>
          <p style={{ color: "blue" }}>{centimeters ? `${centimeters} cm` : null}</p>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
