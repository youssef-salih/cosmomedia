import React from "react";

const Button = ({ style, children }) => {
  return <button className={`${style}`}>{children}</button>;
};

export default Button;
