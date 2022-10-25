import React from "react";
import HeadingText from "./HeadingText";

const PageHeader = ({ imgURL, pageName, descText }) => {
  return (
    <div
      className="hero h-[30rem]"
      style={{ backgroundImage: `url(${imgURL})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <HeadingText text={pageName} />
          <p className="mb-5">{descText}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
