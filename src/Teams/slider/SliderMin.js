import React from "react";

const SliderMin = ({ step, min, max, value, onChangeValue }) => {
  const handleChangeMin = (min) => (e) => {
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
        onChange={handleChangeMin(min)}
      />
    </div>
  );
};

export default SliderMin;
