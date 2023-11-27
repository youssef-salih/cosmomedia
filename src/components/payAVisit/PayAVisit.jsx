import React from "react";
import { phone, email, location } from "../../assets/icons";
import PayElements from "./PayElement";
import { motion } from "framer-motion";

const PayAVisit = () => {
  return (
    <motion.div
      className="bg-myorange p-2 rounded-2xl container mx-auto"
      whileInView={{ opacity: 1 }}
    >
      <div className="border p-5 rounded-2xl flex justify-around">
        <PayElements />
      </div>
    </motion.div>
  );
};

export default PayAVisit;
