import React from "react";
import Service from "./Service";
import Titles from "../../common/Titles";

const Services = () => {
  return (
    <>
      <div className="h-full pl-[5vw] lg:pt-[2vw] pt-[5vw]" id="service">
        <Titles> Our Services</Titles>
        <p className="font-montserat lg:text-[1vw] text-[3vw] lg:w-1/3">
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
