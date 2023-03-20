import React from "react";
import {
  Card,
  CardContent,
  Chip,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const list = [
  "Naruto",
  "Sasuke",
  "Kakashi",
  "Itachi",
  "Jiraya",
  "Hinata",
  "Sakura",
  "Konohamru",
  "Madara",
  "Hashirama",
  "Tobirama",
];

export const SearchFilter = () => {
  const [searchItem, setSearchItem] = useState(list);

  const handleSearch = (event) => {
    const query = event.target.value;
    let updatedList = [...list];
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setSearchItem(updatedList);
  };
  return (
    <React.Fragment>
      <Card sx={{ width: 355 }}>
        <CardContent>
          <h2>Search Filter</h2>
          <TextField
            size="small"
            label="Search..."
            onChange={handleSearch}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="primary" />
                </InputAdornment>
              ),
            }}
          />

          <div style={{ marginTop: "20px" }}>
            {searchItem?.map((item) => {
              return (
                <Chip
                  label={item}
                  size="small"
                  color="warning"
                  style={{ margin: 5 }}
                />
              );
            })}
          </div>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
