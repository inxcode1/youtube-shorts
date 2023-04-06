import React, { useState } from "react";
import { Button, Card, CardContent, CardHeader, Divider } from "@mui/material";
import "./style.css";

export const ImageFilter = () => {
  const [style, setStyle] = useState("");

  const changeFilter = (filter) => {
    setStyle(filter);
  };

  const filterList = [
    { filterName: "img-none", name: "None" },
    { filterName: "img-blur", name: "Blur" },
    { filterName: "img-brightness", name: "Brightness" },
    { filterName: "img-contrast", name: "Contrast" },
    { filterName: "img-grayscale", name: "Grayscale" },
    { filterName: "img-hue-rotate", name: "Hue Rotate" },
    { filterName: "img-invert", name: "Invert" },
    { filterName: "img-opacity", name: "Opacity" },
    { filterName: "img-saturate", name: "Saturate" },
    { filterName: "img-sepia", name: "Sepia" },
  ];
  return (
    <React.Fragment>
      <Card>
        <CardHeader title="Image Filter" />
        <Divider />
        <CardContent>
          <div className={style}>
            <img src="ironman.jpeg" alt="preview" width={300} height={350} />
          </div>

          {filterList?.map((item) => {
            return (
              <Button
                variant="outlined"
                onClick={() => changeFilter(item?.filterName)}
                size="small"
                sx={{
                  marginTop: "20px",
                  marginLeft: "5px",
                }}
              >
                {item?.name}
              </Button>
            );
          })}
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
