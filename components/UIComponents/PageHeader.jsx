import React from "react";
import HeadingText from "./HeadingText";
import AnimatedButton from "./AnimatedButton";

const PageHeader = ({ imgURL, pageName, descText, btnText }) => {
  return (
    <div
      className="hero h-[40rem]"
      style={{ backgroundImage: `url(${imgURL})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          {pageName && <HeadingText text={pageName} />}

          {descText && <p className="my-5 text-xl italic">{descText}</p>}

          {btnText && <AnimatedButton btnText={btnText} link="/#" />}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
