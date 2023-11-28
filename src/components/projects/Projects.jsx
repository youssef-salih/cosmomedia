import React from "react";
import { Link } from "react-router-dom";
import Project from "./Project";


const Projects = () => {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <div className="bg-[#282828] z-50 relative rounded-lg md:px-16 px-4 py-8 flex">
        <div className="">
          <h1 className="lg:text-8xl text-6xl text-myorange">our project</h1>

          <p className="font-montserat text-xs md:text-base">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Projects
          </p>
        </div>
        <div className="flex justify-end w-3/4 items-center">
          <Link to="#" className="underline text-gray-200 md:text-5xl text-3xl">
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
