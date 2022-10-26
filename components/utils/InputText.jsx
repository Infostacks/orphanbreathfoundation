import React from "react";

const Input = ({ placeholder, name, type, onChange, value, onBlur }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        className="input input-bordered input-accent w-full max-w-md"
      />
    </>
  );
};

export default Input;
