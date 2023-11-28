import React from "react";
import { email, location, phone } from "../../assets/icons";

const PayElements = () => {
  const elements = [
    {
      name: "Pay a Visit",
      icon: location,
      data: "24/7, Bengaluru, India",
    },
    {
      name: "Give a Call",
      icon: phone,
      data: "+91 987456321",
      middle: true,
    },
    {
      name: "Send a mail",
      icon: email,
      data: "contact@dualitebuzz.com",
    },
  ];

  return (
    <>
      {elements.map((element, i) => (
        <div
          key={i}
          className={`lg:text-6xl md:flex-row flex flex-col text-center md:text-start md:items-start justify-center items-center gap-2 lg:px-1/2 ${
            element.middle
              ? "md:border-l md:border-r md:border-t-0 md:border-b-0 border-t border-b  px-24 border-white "
              : ""
          }`}
        >
          <img src={element.icon} alt="location" className="md:w-6 lg:w-8 w-5 mt-1 " />
          <p className="flex flex-col ">
            {element.name}
            <span className="lg:text-xl md: font-thin">{element.data}a</span>
          </p>
        </div>
      ))}
    </>
  );
};

export default PayElements;
