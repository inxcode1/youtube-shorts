import React, { useState } from "react";
import { Card, CardContent, Button } from "@mui/material";

export const UploadFile = () => {
  const [file, setFile] = useState();

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Button 
            variant="contained" 
            component="label" 
            onChange={handleChange}
          >
            Upload
            <input 
              hidden 
              accept="image/*" 
              multiple type="file" 
            />
          </Button>
          <div>
            {file && (
              <img
                src={file}
                alt="preview"
                height={320}
                width={320}
                style={{ marginTop: "20px" }}
              />
            )}
          </div>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
