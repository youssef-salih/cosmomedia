import React, { useState } from "react";
import { arrowDown, arrowUp } from "../../assets/icons";
import { AnimatePresence, motion } from "framer-motion";

const WorkProcessAccordion = ({ name, desc, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="bg-[#282828] z-50 relative rounded-lg min-h-[12vw] md:px-[4vw] px-[6vw] py-[4vw] lg:py-[2vw] flex mt-[1vw] justify-between flex-wrap items-center select-none mx-[2vw]"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex  items-center gap-[2vw]">
        <div className="max-w-fit">
          <img
            src={icon}
            alt={name}
            className={
              isOpen
                ? `lg:w-[5vw] w-[8vw] order-1`
                : `lg:w-[5vw] w-[8vw] text-white opacity-75 order-1`
            }
          />
        </div>
        <div
          className={`lg:text-[2.5vw]  text-[5vw] ${
            isOpen ? ` order-2` : `text-white opacity-75 order-2`
          }`}
        >
          {" "}
          {name}
        </div>
      </div>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="lg:max-w-[40vw] lg:mt-0 mt-[2vw] font-montserat text-[3vw] lg:text-[1vw] text-white text-opacity-75 lg:order-3 order-4 "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut" }}
            exit={{ opacity: 0, y: 50, transition: { duration: 0.5 } }}
          >
            {desc}
          </motion.div>
        ) : null}
      </AnimatePresence>
      {isOpen ? (
        <img
          src={arrowDown}
          alt=""
          className="-rotate-180 transition-all duration-700  lg:w-[2vw] w-[4vw] lg:order-4 order-3 "
        />
      ) : (
        <img
          src={arrowDown}
          alt=""
          className="transition-all duration-700 lg:w-[2vw] w-[4vw]  lg:order-4 order-3 "
        />
      )}
    </div>
  );
};

export default WorkProcessAccordion;
