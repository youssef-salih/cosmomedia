import React from "react";
import {
  rectangle,
  rectangle1,
  rectangle2,
  rectangle3,
  rectangle4,
} from "../../assets/image";

const Project = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <img src={rectangle} alt="" className="" />
      <img src={rectangle1} alt="" className="" />
      <img src={rectangle2} alt="" className="" />
      <img src={rectangle4} alt="" className="" />
      <img src={rectangle3} alt="" className="" />
    </div>
  );
};

export default Project;