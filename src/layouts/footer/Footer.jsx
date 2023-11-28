import React from "react";
import Button from "../../components/button/Button";

const Footer = () => {
  return (
    <div className="text-white container mx-auto  mt-20 p-5">
      <div className="bg-myorange w-full h-full rounded-3xl flex justify-between">
        <div className="ml-16 mt-4">
          <p className="text-7xl w-7/12 p-5 ">
            Let's Build and Scale Together!
          </p>
        </div>
        <div className="p-5">
          <Button
            style={
              "bg-black px-28 h-full rounded-3xl text-4xl hover:scale-105 transition-all duration-700 "
            }
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
