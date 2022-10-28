import React from "react";
import HeadingText from "./HeadingText";

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

          {btnText && (
            <a className="px-8 py-4 rounded-full relative group overflow-hidden font-medium bg-yellow text-darkGreen shadow-lg shadow-yellow hover:shadow-darkGreen hover:cursor-pointer inline-block">
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-500 ease-out transform translate-y-0 bg-darkGreen group-hover:h-full hover:border-darkGreen opacity-90"></span>
              <span className="relative group-hover:text-bgColor font-semibold uppercase">
                {btnText}
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
