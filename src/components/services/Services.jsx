import React from "react";
import Service from "./Service";

const Services = () => {
  return (
    <div className="h-full pl-5 md:pt-24 pt-12  ">
      <h1 className="lg:text-8xl text-6xl text-myorange">Our Services</h1>

      <p className="font-montserat text-xs md:w-1/3">
        At our digital marketing agency, we offer a range of services to help
        businesses grow and succeed online.
      </p>
      <div className="mx-auto md:w-full">
        <Service />
      </div>
    </div>
  );
};

export default Services;
