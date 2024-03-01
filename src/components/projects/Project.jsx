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
    <div className="flex flex-wrap gap-[1.5vw] justify-center ">
      <img src={rectangle} alt="" className="bg-cover" />
      <img src={rectangle1} alt="" className="bg-cover" />
      <img src={rectangle2} alt="" className="bg-cover" />
      <img src={rectangle4} alt="" className="bg-cover" />
      <img src={rectangle3} alt="" className="bg-cover" />
    </div>
  );
};

export default Project;
