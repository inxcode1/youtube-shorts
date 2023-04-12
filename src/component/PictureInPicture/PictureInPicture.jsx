import React from "react";
import { Button } from "@mui/material";

export const PictureInPicture = () => {
  const handlePictureMode = () => {
    const video = document.querySelector("video");

    if ("pictureInPictureEnabled" in document) {
      video.requestPictureInPicture();
    }
  };

  return (
    <>
      <video 
        width="300" 
        height="500" 
        controls
      >
        <source 
          src="/pushpa.mp4" 
          type="video/mp4"
        />
      </video>

      <Button 
        variant="contained" 
        sx={{marginTop: "20px"}}
        onClick={handlePictureMode}
      >
        Picture in Picture
      </Button>
    </>
  );
};
