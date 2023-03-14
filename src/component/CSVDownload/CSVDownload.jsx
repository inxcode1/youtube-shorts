import React from "react";
import { CSVLink } from "react-csv";
import { Button } from "@mui/material";
import { Download } from "@mui/icons-material";

const headers = [
  { label: "First Name", key: "firstName" },
  { label: "Last Name", key: "lastName" },
  { label: "Email", key: "email" },
];

const data = [
  {
    firstName: "Naruto",
    lastName: "Uzumaki",
    email: "naruto@gmail.com",
  },
  {
    firstName: "Sasuke",
    lastName: "Uchiha",
    email: "sasuke@gmail.com",
  },
  {
    firstName: "Kakashi",
    lastName: "Hatake",
    email: "kakashi@hatake.com",
  },
];

export const CSVDownload = () => {
  return (
    <React.Fragment>
      <CSVLink 
        data={data} 
        headers={headers} 
        filename="data.csv"
      >
        <Button 
            variant="contained" 
            size="small" 
            startIcon={<Download />}
        >
          CSV
        </Button>
      </CSVLink>
    </React.Fragment>
  );
};
