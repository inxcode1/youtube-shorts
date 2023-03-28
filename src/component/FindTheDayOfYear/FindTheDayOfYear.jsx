import {
  Button,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

export const FindTheDayOfYear = () => {
  const [date, setDate] = useState();
  const [day, setDay] = useState(0);

  const getDateOfYear = (date) =>
    Math.floor((date.getTime() - new Date(date.getFullYear(),
     0, 0)) / 864e5
    );

  const dayOfYear = (date) => {
    if (date) {
      setDay(getDateOfYear(new Date(date)));
    }
  };

  return (
    <React.Fragment>
      <div className="card">
        <CardHeader title="Find The Day Of year" />
        <Divider />
        <CardContent>
          <TextField
            label="Date"
            type="date"
            fullWidth
            focused
            onChange={(e) => setDate(e.target.value)}
          />
          <Button
            variant="contained"
            sx={{ marginTop: "20px" }}
            onClick={() => dayOfYear(date)}
          >
            Enter
          </Button>

          <h3>{day} Days</h3>
        </CardContent>
      </div>
    </React.Fragment>
  );
};
