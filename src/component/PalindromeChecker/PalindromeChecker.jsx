import React, { useState } from "react";
import { Button, Card, CardContent, TextField } from "@mui/material";

export const PalindromeChecker = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const isPalindrome = () => {
    if (text === text.split("").reverse().join("")) {
      setMessage(text + " is palindrome");
    } else {
      setMessage(text + " is not palindrome");
    }
  };
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <h2>Palindrome Checker</h2>
          <TextField
            label="Enter Text"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <div style={{ marginTop: "20px" }}>
            <Button 
              variant="contained" 
              onClick={isPalindrome}
            >
              Check
            </Button>
          </div>

          <p>{message}</p>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
