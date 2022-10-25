import React from "react";

const Input = ({ placeholder, name, type }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="input input-bordered input-accent w-full max-w-md"
      />
    </>
  );
};

export default Input;
