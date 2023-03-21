import React, { useState } from "react";
import { Button, Card, CardContent, TextField } from "@mui/material";

export const CurrencyConvert = () => {
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState("");

  const myHeaders = new Headers();
  myHeaders.append("apikey", "your_api_key");

  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  const baseUrl = "https://api.apilayer.com/exchangerates_data";

  const onSubmit = () => {
    fetch(`${baseUrl}/convert?to=INR&from=USD&amount=${amount}`, 
      requestOptions
    )
      .then((response) => response?.json())
      .then((result) => setResult(result?.result?.toFixed(2)))
      .catch((error) => console.log("error", error));
  };
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <h2>Currency Converter</h2>
          <div style={{ marginBottom: "20px" }}>
            <TextField
              label="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <h4>USD to INR</h4>
          <div style={{ marginTop: "20px" }}>
            <Button
              variant="contained"
              fullWidth
              onClick={onSubmit}
            >
              Convert
            </Button>
          </div>

          <h4>{result && `₹${result}`}</h4>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
