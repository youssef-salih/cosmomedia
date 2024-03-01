import React from "react";
import { Link } from "react-router-dom";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="px-[5vw] md:px-[5vw]">
      <div className="bg-[#282828] z-50 relative rounded-[1vw] md:px-[5vw] px-[6vw] py-[2vw] flex">
        <div className="">
          <h1 className="lg:text-[6vw] text-[12vw] leading-none text-myorange">
            our project
          </h1>

          <p className="font-montserat text-[3vw] lg:text-[1vw]">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Projects
          </p>
        </div>
        <div className="flex justify-end w-3/4 items-center">
          <Link
            to="#"
            className="underline text-gray-200 md:text-[5xl] lg:text-[2vw] text-[5vw]"
          >
            View All
          </Link>
        </div>
      </div>
      <div className="bg-[#282828] z-50 relative rounded-[1vw] px-[5vw] lg:py-[2vw] py-[4vw] flex mt-[3vw] lg:mt-[1vw]">
        <Project />
      </div>
    </div>
  );
};

export default Projects;
