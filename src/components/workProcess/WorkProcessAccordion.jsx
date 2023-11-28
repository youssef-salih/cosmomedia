import React, { useState } from "react";
import { arrowDown, arrowUp } from "../../assets/icons";
import { AnimatePresence, motion } from "framer-motion";

const WorkProcessAccordion = ({ name, desc, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="bg-[#282828] z-50 relative rounded-lg ms:min-h-[176px]   md:px-16 px-8 py-8 flex mt-3 justify-between flex-wrap items-center select-none mx-4"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex  items-center gap-4">
        <div className="max-w-fit">
          <img
            src={icon}
            alt=""
            className={
              isOpen
                ? `lg:w-20 w-8 order-1`
                : `lg:w-20 w-8 text-white opacity-75 order-1`
            }
          />
        </div>
        <div
          className={
            isOpen
              ? `lg:text-4xl md:text-3xl text-lg order-2`
              : `lg:text-4xl md:text-3xl text-lg text-white opacity-75 order-2`
          }
        >
          {" "}
          {name}
        </div>
      </div>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="max-w-xl  font-montserat text-xs lg:text-lg text-white text-opacity-75 lg:order-3 order-4 "
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
          className="-rotate-180 transition-all duration-700  w-5 lg:order-4 order-3 "
        />
      ) : (
        <img
          src={arrowDown}
          alt=""
          className="transition-all duration-700  w-5  lg:order-4 order-3 "
        />
      )}
    </div>
  );
};

export default WorkProcessAccordion;
