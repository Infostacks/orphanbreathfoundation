import React from "react";

const TextArea = ({ placeholder }) => {
  return (
    <>
      <textarea
        className="textarea textarea-accent"
        placeholder={placeholder}
      ></textarea>
    </>
  );
};

export default TextArea;
