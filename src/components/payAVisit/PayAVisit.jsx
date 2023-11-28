import React from "react";
import { phone, email, location } from "../../assets/icons";
import PayElements from "./PayElement";
import { motion } from "framer-motion";

const PayAVisit = () => {
  return (
    <motion.div className="bg-myorange p-2 rounded-2xl container mx-auto ">
      <div className="border p-5 rounded-2xl flex justify-around md:flex-row flex-col">
        <PayElements />
      </div>
    </motion.div>
  );
};

export default PayAVisit;
