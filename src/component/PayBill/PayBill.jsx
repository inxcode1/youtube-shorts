import React, { useState } from "react";
import { Button, Card, CardContent, TextField } from "@mui/material";

export const PayBill = () => {
  const [data, setData] = useState([]);
  const [friend, setFriend] = useState("");
  const [payBy, setPayBy] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    const copyData = [...data];
    copyData.push(friend);
    setData(copyData);
    setFriend("");
  };

  let totalPeople = data.length;

  const billPayBy = () => {
    setLoading(true);
    setTimeout(() => {
      setPayBy(Math.floor(Math.random() * totalPeople));
      setLoading(false);
    }, 1000);
  };
  return (
    <React.Fragment>
      <Card>
        <h2>🎲 Who will pay bill?</h2>
        <CardContent>
          <TextField
            value={friend}
            label="Enter Name"
            size="small"
            onChange={(e) => setFriend(e.target.value)}
          />
          <Button
            variant="outlined"
            style={{ marginLeft: "20px" }}
            onClick={handleSubmit}
          >
            ENTER
          </Button>

          {data?.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}

          {data?.length > 1 && (
            <Button variant="outlined" onClick={billPayBy}>
              Who will Pay?
            </Button>
          )}

          {loading ? (
            <h1 className="spin">🎲</h1>
          ) : (
            <h3 style={{ color: "red" }}>{data[payBy]}</h3>
          )}
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
