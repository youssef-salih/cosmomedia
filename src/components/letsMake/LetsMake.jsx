import React from "react";
import Button from "../button/Button";
import { paper, scotch, scotch2 } from "../../assets/image";

const LetsMake = () => {
  return (
    <>
      <div className="bg-myorange w-[101%] h-96  rotate-2  z-30 -mx-2 relative shadow ">
        <div className="flex container mx-auto h-full items-center">
          <div className=" flex flex-col gap-4 w-1/2">
            <h1 className="text-8xl">Let's make things happen</h1>
            <p className="font-montserat w-full">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <Button style="bg-black w-1/4 px-7 py-3 rounded-lg text-xl">
              Get your free proposal
            </Button>
          </div>
          <div className="relative mx-auto">
            <img src={scotch} alt="" className="absolute bottom-5" />
            <img src={scotch2} alt="" className="absolute right-2 top-5" />
            <img src={paper} alt="" className="top-0 z-30" />
          </div>
        </div>
      </div>
      <div className="bg-kaki w-[101%] h-96  -rotate-2  z-20 -mx-2 relative" />
    </>
  );
};

export default LetsMake;
