import React from "react";
import { email, location, phone } from "../../assets/icons";

const PayElement = ({ middle }) => {
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
      {elements.map((element) => (
        <>
          <div
            className={`text-6xl flex items-start gap-2 px-24 ${
              element.middle ? "border-l border-r  border-white" : ""
            }`}
          >
            <img src={element.icon} alt="location" className="w-8 mt-1" />
            <p className="flex flex-col">
              {element.name}
              <span className="text-xl font-thin">{element.data}</span>
            </p>
          </div>
        </>
      ))}
    </>
  );
};

export default PayElement;
