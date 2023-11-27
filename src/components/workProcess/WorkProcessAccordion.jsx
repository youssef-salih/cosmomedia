import React, { useState } from "react";
import { arrowDown, arrowUp } from "../../assets/icons";
const WorkProcessAccordion = ({ name, desc, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="bg-[#282828] z-50 relative rounded-lg px-16 py-8 flex mt-3 justify-between items-center select-none"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center gap-4">
        <div className="max-w-fit">
          <img src={icon} alt="" className="w-20" />
        </div>
        <div className="text-5xl"> {name}</div>
      </div>
      {isOpen ? (
        <div className="max-w-xl  font-montserat text-lg text-white text-opacity-75 ">
          {desc}
        </div>
      ) : null}

      {isOpen ? (
        <img src={arrowDown} alt="" className="" />
      ) : (
        <img src={arrowUp} alt="" className="" />
      )}
    </div>
  );
};

export default WorkProcessAccordion;
