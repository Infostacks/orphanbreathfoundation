import React from "react";

const RangeBar = ({ min, max, value, size }) => {
  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        className={`range range-accent range-${size}`}
      />
    </>
  );
};

export default RangeBar;
