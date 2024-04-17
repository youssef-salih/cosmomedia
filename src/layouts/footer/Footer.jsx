import React from "react";
import Button from "../../components/button/Button";

const Footer = () => {
  return (
    <div className="text-black px-[5vw]  md:mt-[5vw] p-[2vw]">
      <div className="bg-main-gradient w-full h-full rounded-[2vw] flex justify-between items-center px-[4vw] p-[1vw]">
        <p className="lg:text-[4vw] leading-none text-[6vw] lg:w-1/4 w-1/2 lg:p-[1vw] lg:ml-[4vw] lg:mt-[1vw]">
          Let&apos;s Build and Scale Together!
        </p>

        <div className="">
          <Button
            style={
              "bg-black text-white lg:px-[5vw] px-[7vw] py-[2vw] h-full rounded-[1vw] lg:text-[2vw] hover:scale-105 transition-all duration-700 "
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
