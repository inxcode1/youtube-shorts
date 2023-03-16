import React, { useState } from "react";
import { Button, Card, CardContent, TextField } from "@mui/material";
import { Mic } from "@mui/icons-material";

export const TextToSpeech = () => {
  const [ourText, setOurText] = useState("");
  const msg = new SpeechSynthesisUtterance();

  const speechHandler = (msg) => {
    msg.text = ourText;
    window.speechSynthesis.speak(msg);
  };
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <h2>React Text to Speech App</h2>
          <TextField
            label="Enter Text"
            size="small"
            value={ourText}
            onChange={(e) => setOurText(e.target.value)}
          />

          <Button
            variant="contained"
            style={{ marginLeft: "10px" }}
            startIcon={<Mic />}
            onClick={() => speechHandler(msg)}
          >
            SPEAK
          </Button>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
