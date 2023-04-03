import React from "react";
import Plx from "react-plx";
import "./style.css";

export const Parallax = () => {
  return (
    <React.Fragment>
      <div>
        <Plx
          parallaxData={[
            {
              start: 0,
              end: 700,
              easing: "ease-in",
              properties: [
                {
                  startValue: 1,
                  endValue: 2.5,
                  property: "scale",
                },
              ],
            },
          ]}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
            zIndex: 100,
          }}
        >
          <img
            style={{ width: "100%" }}
            src="tree_leaves.png"
            alt="foreground"
          />
        </Plx>
        <Plx
          parallaxData={[
            {
              start: 0,
              end: 800,
              properties: [
                {
                  startValue: 1,
                  endValue: 1.2,
                  property: "scale",
                },
              ],
            },
          ]}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
          }}
        >
          <img style={{ width: "100%" }} src="spidey.jpg" alt="background" />
        </Plx>
        <Plx
          parallaxData={[
            {
              start: 0,
              end: 400,
              properties: [
                {
                  startValue: 1,
                  endValue: 0,
                  property: "opacity",
                },
              ],
            },
          ]}
          style={{
            position: "fixed",
            left: 0,
            top: "26vw",
            width: "100%",
          }}
        >
          <img
            style={{
              width: "30vw",
            }}
            src="spider_title.png"
            alt="title"
          />
        </Plx>
      </div>
    </React.Fragment>
  );
};
