import React from "react";

const SubHeadingText = ({ text }) => {
  return (
    <div className="xl:text-4xl lg:text-4xl md:text-3xl text-2xl w-full drop-shadow-lg font-bold text-transparent bg-gradient-to-tr from-darkGreen to-blueGreen bg-clip-text z-20">
      {text}
    </div>
  );
};

export default SubHeadingText;
