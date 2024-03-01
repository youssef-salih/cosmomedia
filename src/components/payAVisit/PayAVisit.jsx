import React from "react";
import { phone, email, location } from "../../assets/icons";
import PayElements from "./PayElement";
import { motion } from "framer-motion";

const PayAVisit = () => {
  return (
    <motion.div className="bg-myorange lg:p-[.8vw] p-[1.8vw] lg:rounded-[1.5vw] rounded-[4vw]  ">
      <div className="border p-[2vw] lg:rounded-[1.5vw] rounded-[4vw] flex justify-around md:flex-row flex-col">
        <PayElements />
      </div>
    </motion.div>
  );
};

export default PayAVisit;
