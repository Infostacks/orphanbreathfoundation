import React from "react";

const ProgressBar = ({ value, max }) => {
  return (
    <div className="flex gap-2 justify-center items-center">
      <progress
        className="progress progress-warning h-3 w-[100%]"
        value={value}
        max={max}
      ></progress>
      <span className="bg-yellow absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
      {value}%
    </div>
  );
};

export default ProgressBar;
