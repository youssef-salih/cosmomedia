import React from "react";
import Button from "../../components/button/Button";

const Footer = () => {
  return (
    <div className="text-white container mx-auto  md:mt-20 p-5">
      <div className="bg-myorange w-full h-full rounded-3xl flex justify-between items-center px-4">
        <div className="lg:ml-16 lg:mt-4">
          <p className="lg:text-7xl text-xl w-7/12 lg:p-5">
            Let's Build and Scale Together!
          </p>
        </div>
        <div className="p-5">
          <Button
            style={
              "bg-black lg:px-28 px-8 py-4 h-full rounded-2xl lg:text-4xl hover:scale-105 transition-all duration-700 "
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
