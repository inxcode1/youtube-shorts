import { Button, Card, CardContent, TextField } from "@mui/material";
import React, { useState } from "react";

export const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState("");

  const getBMI = () => {
    const calBMI = (weight / (height * height)) * 10000;
    setBMI(calBMI?.toFixed(2));
  };
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <h2>BMI Calculator</h2>
          <div style={{ marginBottom: "20px" }}>
            <TextField
              label="Weight (kg)"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <TextField
              label="Height (cm)"
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <Button variant="contained" onClick={getBMI}>
            Calculate BMI
          </Button>
          <p>{bmi && `Your BMI is ${bmi}`}</p>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
