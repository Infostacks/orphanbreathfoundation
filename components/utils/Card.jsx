import React from "react";
import Image from "next/image";

const Card = ({ img, title, desc, btnText }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <Image src={img} width="400" height="225" unoptimized alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{btnText}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
