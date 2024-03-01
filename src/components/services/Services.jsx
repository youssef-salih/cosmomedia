import React from "react";
import Service from "./Service";

const Services = () => {
  return (
    <>
      <div className="h-full pl-[5vw] md:pt-[2vw] pt-[5vw]">
        <h1 className="lg:text-[6vw] text-[16vw] text-myorange leading-none">
          Our Services
        </h1>

        <p className="font-montserat lg:text-[1vw] text-[3vw] md:w-1/3">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online.
        </p>
      </div>
      <div className="w-full mt-[2vw]">
        <Service />
      </div>
    </>
  );
};

export default Services;
