import React from "react";

const TextArea = ({ placeholder }) => {
  return (
    <>
      <textarea
        className="textarea textarea-accent w-full max-w-md"
        placeholder={placeholder}
      ></textarea>
    </>
  );
};

export default TextArea;
