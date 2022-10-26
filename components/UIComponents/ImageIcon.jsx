import React from "react";
import Image from "next/image";

const ImageIcon = ({ imgURL, altText }) => {
  return (
    <>
      <Image src={imgURL} alt={altText} unoptimized width="40" height="40" />
    </>
  );
};

export default ImageIcon;
