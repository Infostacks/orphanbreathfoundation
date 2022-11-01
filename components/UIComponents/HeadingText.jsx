import React from "react";

const HeadingText = ({ text }) => {
  return (
    <div className="xl:text-7xl lg:text-7xl md:text-5xl text-3xl w-full min-h-[5rem] font-extrabold drop-shadow-md headerFont text-gradient">
      {text}
    </div>
  );
};

export default HeadingText;
