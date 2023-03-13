import React, { useState } from "react";
import { Card, CardContent, Chip } from "@mui/material";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export const DatePicker = () => {
  const [selected, setSelected] = useState();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = (
      <p>
        You picked {" "}
        <Chip
          color="primary"
          variant="filled"
          label={format(selected, "PP")}
        ></Chip>
      </p>
    );
  }

  return (
    <React.Fragment>
      <Card style={{ backgroundColor: "#f0f0f0" }}>
        <CardContent>
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={footer}
          />
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
