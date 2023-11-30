import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { words } from "../../consts/words";
const Loader = () => {
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
          className="h-full w-full bg-black  transform origin-left center flex justify-end items-center "
        />
        <motion.span
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
        </motion.span>
      </motion.div>
      <div
        className="h-full w-full flex justify-center items-center flex-col bg-myorange  overflow-hidden z-[2]"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      >
        <div className={` relative overflow-hidden h-[33.5rem]`}>
          <div
            className={` absolute inset-0 h-full z-[2] bg-linear-pattern`}
          ></div>
          <motion.div
            animate={{
              y: "-79.97%",
              transition: { duration: 5 },
              ease: "easeInOut",
            }}
          >
            {words.map((word, index) => {
              return (
                <span
                  key={index}
                  className="block text-[3.2rem] leading-[4.8rem] "
                >
                  {word}
                </span>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
