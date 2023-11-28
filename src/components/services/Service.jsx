import React from "react";
import { service } from "../../assets/image";

const Service = () => {
  const element = [
    {
      name: "Search engine optimization",
      image: service,
    },
    {
      name: "Pay-per-click Advertising",
      image: service,
    },
    {
      name: "Social Media Marketing",
      image: service,
    },
    {
      name: "Content Creation",
      image: service,
    },
  ];
  return (
    <>
      <div className="flex flex-wrap md:gap-4 justify-center">
        {element.map((serv, i) => (
          <div
            className="bg-white w-4/5 md:w-80 h-96 md:mt-16 mt-8 rounded-2xl flex flex-col justify-evenly"
            key={i}
          >
            <h1 className="text-myorange font-teko text-4xl px-9  ">
              {serv.name}
            </h1>
            <img src={service} alt="" className="mx-auto mt-10" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Service;
