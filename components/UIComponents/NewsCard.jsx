import React, { useState } from "react";
import Image from "next/image";
import {
  FaUserCircle,
  FaComments,
  FaShareAlt,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

const NewsCard = ({ img, title, date, desc, btnText, comments }) => {
  const [isShown, setIsShown] = useState(false);
  const handleMouseEnter = () => {
    setIsShown(true);
    console.log("enter: ", isShown);
  };

  const handleMouseExit = () => {
    setIsShown(false);
    console.log("exit: ", isShown);
  };

  return (
    <div className="card w-96 border-[1px] border-lightYellow/60">
      <figure>
        <Image src={img} width="400" height="225" unoptimized alt="" />
      </figure>

      <p className="text-darkGreen text-sm -my-3 mx-5 z-20 font-semibold italic bg-yellow w-fit px-6 py-1 rounded-full drop-shadow-sm shadow-md shadow-yellow">
        {date}
      </p>

      <div className="card-body border-b-[1px] border-lightYellow/60">
        <div className="card-actions gap-5 text-sm">
          <span className="btn btn-ghost px-0 hover:bg-transparent hover:text-darkGreen text-xs font-normal gap-2">
            <FaUserCircle className="text-yellow text-xl" />
            Layerdrops
          </span>
          <span className="btn btn-ghost px-0 hover:bg-transparent hover:text-darkGreen text-xs font-normal gap-2">
            <FaComments className="text-yellow text-xl" /> {comments} Comments
          </span>
        </div>
        <h2 className="card-title hover:text-darkGreen hover:cursor-pointer">{title}</h2>
        <p>{desc}</p>
      </div>

      <div className="card-actions py-5 justify-between items-center px-8">
        <button className="btn btn-ghost px-0 hover:bg-transparent hover:text-darkGreen text-sm gap-2">
          <span className="text-2xl pb-1">&#8594;</span>
          {btnText}
        </button>

        <div>
          {/* -mx-2 ,  mx-4,  opacity-0*/}
          {isShown && (
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseExit}
              className={`bg-yellow px-3 py-4 rounded-full flex flex-col gap-6 transition-all duration-700 ease-in-out cursor-pointer text-darkGreen absolute ${
                isShown ? "-my-[8rem] -mx-3 opacity-100" : "mx-4 opacity-0"
              }  `}
            >
              <FaFacebookF className="hover:cursor-pointer" />
              <FaTwitter className="hover:cursor-pointer" />
              <FaPinterestP className="hover:cursor-pointer" />
            </div>
          )}

          <span
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseExit}
            className="cursor-pointer py-2"
          >
            <FaShareAlt />
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
