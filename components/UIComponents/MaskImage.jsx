import React from "react";
import Image from "next/image";

const MaskImage = ({ imgURL, altText, width, height, maskType }) => {
  return (
    <>
      <Image
        className={`mask mask-${maskType}`}
        alt={altText}
        src={imgURL}
        width={width}
        height={height}
        unoptimized
      />
    </>
  );
};

export default MaskImage;
