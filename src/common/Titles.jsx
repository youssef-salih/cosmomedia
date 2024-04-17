import React from "react";

const Titles = ({ children }) => {
  return (
    <h1 className="lg:text-[6vw] text-[16vw] text-secondary leading-none">
      {children}
    </h1>
  );
};

export default Titles;
