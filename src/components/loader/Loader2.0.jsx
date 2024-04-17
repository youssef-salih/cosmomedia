import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { words } from "../../consts/words";
import { logo } from "../../assets/icons";
const Loader2 = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;

        if (newProgress >= 100) {
          clearInterval(interval);
        }

        return newProgress;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="font-stick xl:text-6xl xl:leading-[4.8rem] leading-[4.8rem] text-sm  fixed h-full w-full inset-0 overflow-hidden">
      <motion.div className="absolute bottom-0 left-0 h-[5vh] w-full z-[3]">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: 1,
            transition: {
              duration: 4.6,
              ease: "easeInOut",
            },
          }}
          className="h-full w-full bg-main-gradient  transform origin-left center flex justify-end items-center "
        />
        {/* <motion.span
          initial={{ x: -90 }}
          animate={{
            x: "95vw",
            transition: {
              duration: 4.6,
              ease: "easeInOut",
            },
          }}
          className="absolute -top-3 -left-10 md:px-4 z-[4] whitespace-nowrap text-white lg:text-[2rem] text-2xl leading-[4.8rem] "
        >
          {progress} %
        </motion.span> */}
      </motion.div>
      <div
        className="h-full w-full flex justify-center items-center flex-col bg-black  overflow-hidden z-[2]"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      >
        <img
          src={logo}
          alt="logo"
          className="select-none md:w-[20vw] w-[20vw]"
        />
      </div>
    </div>
  );
};

export default Loader2;
