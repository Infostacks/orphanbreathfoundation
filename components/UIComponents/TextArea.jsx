import React from "react";

const TextArea = ({ placeholder, name, onChange, value, onBlur }) => {
  return (
    <>
      <textarea
        className="textarea textarea-accent w-full max-w-md"
        placeholder={placeholder}
        onBlur={onBlur}
        name={name}
        onChange={onChange}
        value={value}
      ></textarea>
    </>
  );
};

export default TextArea;
