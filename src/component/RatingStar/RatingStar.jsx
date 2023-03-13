import React, { useState } from "react";
import { Card, CardContent, Rating } from "@mui/material";
import "./style.css";

export const RatingStar = () => {
  const [value, setValue] = useState(0);
  return (
    <React.Fragment>
      <p className="rating">{value}</p>
      <Card variant="outline">
        <CardContent>
        <h4>How was your experience?</h4>
        <Rating
          size="large"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
