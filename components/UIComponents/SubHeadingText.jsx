import React from "react";

const SubHeadingText = ({ text }) => {
  return (
    <div className="xl:text-4xl lg:text-4xl md:text-3xl text-2xl w-full font-bold drop-shadow-md text-blueGreen">
      {text}
    </div>
  );
};

export default SubHeadingText;
