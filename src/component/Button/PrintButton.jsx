import React from "react";
import { Button } from "@mui/material";
import { Download } from "@mui/icons-material";

export const PrintButton = () => {
  const onPrint = () => {
    window.print();
  };

  return (
    <React.Fragment>
      <Button 
        variant="contained" 
        onClick={onPrint} 
        startIcon={<Download />}
      >
        Print
      </Button>
    </React.Fragment>
  );
};
