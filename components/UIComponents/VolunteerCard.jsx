import React from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

const VolunteerCard = ({ img, name }) => {
  return (
    <div className="card w-[18rem] h-[25rem]">
      <figure>
        <Image
          src={img}
          width="400"
          height="610"
          unoptimized
          alt=""
          className="card-img"
        />
      </figure>

      <div className="card-body items-center justify-center absolute w-full h-0 hover:h-full transitions-theme -mt-16 hover:mt-0 z-20 text-bgColor bg-txtColor bg-opacity-60">
        <h2 className="card-title">{name}</h2>
        <p>Volunteer</p>
        <div
          className={`bg-yellow p-4 rounded-full flex flex-row gap-5 transitions-theme text-darkGreen`}
        >
          <FaFacebookF className="hover:cursor-pointer hover:scale-150 transitions-theme" />
          <FaTwitter className="hover:cursor-pointer hover:scale-150 transitions-theme" />
          <FaPinterestP className="hover:cursor-pointer hover:scale-150 transitions-theme" />
          <FaInstagram className="hover:cursor-pointer hover:scale-150 transitions-theme" />
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;
