import React, { useState } from "react";
import { Button, Card, CardContent, TextField } from "@mui/material";

export const CamelCase = () => {
  const [text, setText] = useState("");
  const [camelText, setCamelText] = useState("");

  const toCamelCase = () => {
    setCamelText(
      text.trim().replace(/[-_\s]+(.)?/g, (_, c) => 
        (c ? c.toUpperCase() : ""))
    );
  };

  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <h2>Convert Into CamelCase</h2>
          <TextField
            label="Enter Text"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />

          <div style={{ marginTop: "20px" }}>
            <Button 
              variant="contained" 
              size="small" 
              onClick={toCamelCase}>
              Enter
            </Button>
          </div>

          <p>
            <b>{camelText}</b>
          </p>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
