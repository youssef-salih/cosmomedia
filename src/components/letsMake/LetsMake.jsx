import React from "react";
import Button from "../button/Button";
import { paper, scotch, scotch2 } from "../../assets/image";
import { motion } from "framer-motion";
import { Revealside, RevealsideContent } from "../reveal/Reveal";

const LetsMake = () => {
  return (
    <>
      <Revealside>
        <motion.div className="bg-myorange md:w-[101%] md:h-full h-fit  rotate-2  z-20 -mx-2 relative shadow ">
          <RevealsideContent>
            <motion.div className="flex container mx-auto h-full items-center px-5 p-5">
              <div className=" flex  flex-wrap md:flex-col gap-4 md:w-1/2">
                <h1 className="lg:text-8xl text-4xl">
                  Let's make things happen
                </h1>
                <p className="text-xs font-montserat w-full">
                  Contact us today to learn more about how our digital marketing
                  services can help your business grow and succeed online.
                </p>
                <Button style="bg-black xl:w-1/4 px-7 py-3 rounded-lg text-xl hover:scale-105 duration-700 transition-all">
                  Get your free proposal
                </Button>
              </div>
              <div className="relative mx-auto hidden md:flex">
                <img src={scotch} alt="" className="absolute bottom-5 z-20" />
                <img src={scotch2} alt="" className="absolute right-2 top-5 z-20" />
                <img src={paper} alt="" className="top-0 z-10" />
              </div>
            </motion.div>
          </RevealsideContent>
        </motion.div>
      </Revealside>
      <Revealside delay={0.4}>
        <div className="bg-kaki w-[101%] h-96  -rotate-2  z-10 -mx-2 relative" />
      </Revealside>
    </>
  );
};

export default LetsMake;
