import React from "react";
import Link from "next/link";

const AnimatedButton = ({ btnText, link }) => {
  return (
    <Link href={link}>
      <a className="px-8 py-4 rounded-full relative group overflow-hidden font-medium bg-yellow text-darkGreen shadow-lg shadow-yellow hover:shadow-darkGreen hover:cursor-pointer inline-block">
        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-500 ease-out transform translate-y-0 bg-darkGreen group-hover:h-full hover:border-darkGreen opacity-90"></span>
        <span className="relative group-hover:text-bgColor font-semibold uppercase">
          {btnText}
        </span>
      </a>
    </Link>
  );
};

export default AnimatedButton;
