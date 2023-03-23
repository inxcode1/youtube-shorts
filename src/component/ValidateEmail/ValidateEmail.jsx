import React, { useState } from "react";
import {
  Alert,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from "@mui/material";

export const ValidateEmail = () => {
  const [email, setEmail] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleChange = () => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (emailRegex.test(email)) {
      setInvalid(false);
      setSuccess(true);
    } else {
      setInvalid(true);
      setSuccess(false);
    }
  };

  return (
    <React.Fragment>
      {success && (
        <Alert variant="outlined" sx={{ marginBottom: 2 }}>
          Success
        </Alert>
      )}
      <Card sx={{ width: "300px" }}>
        <CardHeader title="Validate Email" />
        <Divider />
        <CardContent>
          <TextField
            label="Email"
            focused
            onChange={(e) => setEmail(e.target.value)}
            error={invalid}
            sx={{ marginBottom: 2 }}
            fullWidth
            size="small"
            helperText={invalid && "Please Enter Valid Email"}
          />

          <div>
            <Button variant="contained" fullWidth onClick={handleChange}>
              Submit
            </Button>
          </div>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
