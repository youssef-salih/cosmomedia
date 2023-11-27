import React from "react";
import { Link } from "react-router-dom";
import Project from "./Project";


const Projects = () => {
  return (
    <div className="container mx-auto ">
      <div className="bg-[#282828] z-50 relative rounded-lg px-16 py-8 flex">
        <div className="">
          <h1 className="text-[#F64E2A] text-8xl">our project</h1>

          <p className="font-montserat w-full">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Projects
          </p>
        </div>
        <div className="flex justify-end w-3/4 items-center">
          <Link to="#" className="underline text-gray-200 text-5xl">
            View All
          </Link>
        </div>
      </div>
      <div className="bg-[#282828] z-50 relative rounded-lg px-16 py-8 flex mt-3">
        <Project />
      </div>
    </div>
  );
};

export default Projects;
