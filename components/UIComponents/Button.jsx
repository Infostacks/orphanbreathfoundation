import React from "react";

const Button = ({ btnText, btnType }) => {
  return <a className={`btn btn-${btnType}`}>{btnText}</a>;
};

export default Button;
