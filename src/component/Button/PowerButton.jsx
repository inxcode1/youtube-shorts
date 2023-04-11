import React from "react";
import "./style.css"

export const PowerButton = () => {
  return (
    <>
      <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="switch">
          <div className="powerIcon"></div>
        </label>
    </>
  );
};
