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
          className={`lg:text-[3vw] md:flex-row flex flex-col text-center md:text-start md:items-start justify-center items-center gap-[.5vw] lg:px-[5vw] ${
            element.middle
              ? "md:border-l md:border-r md:border-t-0 md:border-b-0 border-t border-b   border-white "
              : ""
          }`}
        >
          <img
            src={element.icon}
            alt="location"
            className="md:w-[2vw] lg:w-[1.8vw] w-[5vw] mt-[.4vw] "
          />
          <p className="flex flex-col leading-none">
            {element.name}
            <span className="lg:text-[2vw]  font-thin">{element.data}a</span>
          </p>
        </div>
      ))}
    </>
  );
};

export default PayElements;
