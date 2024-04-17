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
      <div className="flex flex-wrap gap-[2vw] justify-center w-screen  ">
        {element.map((serv, i) => (
          <div
            className="bg-white md:w-[22vw] md:h-[25vw] p-[1vw] w-[25vw] h-[35vw]  lg:rounded-[.5vw] rounded-[2vw]  flex flex-col justify-evenly"
            key={i}
          >
            <h1 className="text-primary font-teko lg:text-[2vw] text-center  leading-none">
              {serv.name}
            </h1>
            <img
              src={service}
              alt={serv.name}
              className="w-[16vw] mx-auto mt-[1vw]"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Service;
