import React, { useState } from "react";
import { Wifi } from "@mui/icons-material";
import { Card, CardContent, Button } from "@mui/material";
import { ReactInternetSpeedMeter } from "react-internet-meter";

export const NetworkSpeed = () => {
  const [checkSpeed, setCheckSpeed] = useState("Checking...");
  const [toggle, setToggle] = useState(false);

  return (
    <React.Fragment>
      <Card variant="outlined">
        <CardContent>
          <p>Internet Speed Test</p>
          <Wifi color="success" />

          <ReactInternetSpeedMeter
            outputType=""
            pingInterval={2500}
            thresholdUnit="megabyte"
            threshold={100}
            downloadSize="1561257"
            imageUrl="https://png.pngtree.com/png-clipart/20221113/ourmid/pngtree-wifi-wireless-internet-3d-icon-hd-image-png-image_6325173.png"
            callbackFunctionOnNetworkTest={(speed) => {
              setCheckSpeed(speed);
            }}
          />

          <Button
            variant="contained"
            size="small"
            onClick={() => setToggle(!toggle)}
          >
            Test
          </Button>

          {toggle && <h4>{checkSpeed} Mb/s</h4>}
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
