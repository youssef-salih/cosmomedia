import React from "react";
import Service from "./Service";

const Services = () => {
  return (
    <div className="h-full pl-5 pt-24  ">
      <h1 className="text-8xl text-myorange">Our Services</h1>

      <p className="font-montserat w-1/3">
        At our digital marketing agency, we offer a range of services to help
        businesses grow and succeed online.
      </p>
      <div className="mx-auto w-full">
        <Service />
      </div>
    </div>
  );
};

export default Services;
