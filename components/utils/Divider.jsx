import React from "react";

const Divider = ({ text, direction }) => {
  return (
    <div className={`divider ${direction ? "divider-horizontal" : ""}`}>
      {text}
    </div>
  );
};

export default Divider;
