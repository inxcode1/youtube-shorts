import React from "react";
import { CardContent, CardHeader, Divider, FormLabel } from "@mui/material";
import Select from "react-select";

const options = [
  { label: "Red", value: "Red" },
  { label: "Blue", value: "Blue" },
  { label: "Green", value: "Green" },
  { label: "Pink", value: "Pink" },
  { label: "Yellow", value: "Yellow" },
];

export const MultiSelect = () => {
  return (
    <React.Fragment>
      <div className="card">
        <CardHeader title="React Multi Select" />
        <Divider />
        <CardContent>
          <FormLabel>Colors</FormLabel>
          <Select
            isMulti
            name="colors"
            options={options}
            defaultValue={[options[1], options[2]]}
          />
        </CardContent>
      </div>
    </React.Fragment>
  );
};
