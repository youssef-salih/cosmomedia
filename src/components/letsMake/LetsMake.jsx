import React, { useEffect, useRef } from "react";
import Button from "../button/Button";
import { paper, scotch, scotch2 } from "../../assets/image";
import { motion } from "framer-motion";
// import { Revealside, RevealsideContent } from "../reveal/Reveal";
import { slideReveal } from "../../animations/gsap";

const LetsMake = () => {
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  useEffect(() => {
    slideReveal(bgRef.current, contentRef.current);
    return () => {};
  }, []);

  return (
    <>
      <motion.div className=" overflow-hidden py-[4vw]">
        <div
          className="bg-myorange md:w-[101%] md:h-[25vw] h-[45vw]  rotate-2  z-20 -mx-2 relative shadow"
          ref={bgRef}
        >
          <motion.div
            className="flex  items-center px-[8vw] p-[2vw]"
            ref={contentRef}
          >
            <div className=" flex  flex-wrap md:flex-col gap-[2vw] md:w-1/2">
              <h1 className="lg:text-[5vw] text-[8vw]">
                Let&apos;s make things happen
              </h1>
              <p className="lg:text-[1vw] text-[3vw] font-montserat ">
                Contact us today to learn more about how our digital marketing
                services can help your business grow and succeed online.
              </p>
              <Button style="bg-black  w-1/3 px-[2w] py-[1.5vw] rounded-[.8vw] lg:text-[1.4vw] text-[2.4vw] hover:scale-105 duration-700 transition-all">
                Get your free proposal
              </Button>
            </div>
            <div className="relative mx-auto hidden md:flex min-w-[20vw]">
              <img
                src={scotch}
                alt="scotch"
                className="absolute  bottom-5 z-20 w-[10vw]"
              />
              <img
                src={scotch2}
                alt="scotch"
                className="absolute right-2 top-1 z-20 w-[10vw] "
              />
              <img src={paper} alt="paper" className="top-0 z-10 w-[20vw]" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* <div className="overflow-hidden">
        <Revealside delay={0.4}>
          <div className="bg-kaki w-[101%] h-96  -rotate-2  z-10 -mx-2 relative" />
        </Revealside>
      </div> */}
    </>
  );
};

export default LetsMake;
