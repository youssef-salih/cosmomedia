import React, { useState } from "react";
import { arrowDown, arrowUp } from "../../assets/icons";
import { AnimatePresence, motion } from "framer-motion";

const WorkProcessAccordion = ({ name, desc, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="bg-[#282828] z-50 relative rounded-lg min-h-[176px] px-16 py-8 flex mt-3 justify-between items-center select-none"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center gap-4">
        <div className="max-w-fit">
          <img
            src={icon}
            alt=""
            className={isOpen ? `w-20` : `w-20 text-white opacity-75`}
          />
        </div>
        <div className={isOpen ? `text-5xl` : `text-5xl text-white opacity-75`}>
          {" "}
          {name}
        </div>
      </div>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="max-w-xl  font-montserat text-lg text-white text-opacity-75 "
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
          className="-rotate-180 transition-all duration-700"
        />
      ) : (
        // <img src={arrowUp} alt="" className="" />
        <img src={arrowDown} alt="" className="transition-all duration-700" />
      )}
    </div>
  );
};

export default WorkProcessAccordion;
