import React from "react";
import Content from "./Content";
import Hero from "./Hero";

const index = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <Hero />

      <Content />
    </div>
  );
};

export default index;
