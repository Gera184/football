import React from "react";

const Slider = ({ step, min, max, value, onChangeValue }) => {
  const handleChangeMax = (max) => (e) => {
    onChangeValue(e);
  };
  return (
    <div className="slider-container">
      <input
        className="range-slider"
        type="range"
        step={step}
        min={min}
        max={max}
        value={value}
        onChange={handleChangeMax(max)}
      />
    </div>
  );
};

export default Slider;
