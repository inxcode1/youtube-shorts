import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

export const Slick = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <React.Fragment>
      <Slider {...settings}>
        <div className="paper">
          <h3>1</h3>
        </div>
        <div className="paper">
          <h3>2</h3>
        </div>
        <div className="paper">
          <h3>3</h3>
        </div>
        <div className="paper">
          <h3>4</h3>
        </div>
        <div className="paper">
          <h3>5</h3>
        </div>
        <div className="paper">
          <h3>6</h3>
        </div>
      </Slider>
    </React.Fragment>
  );
};
