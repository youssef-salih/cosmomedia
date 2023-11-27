import React from "react";
import { motion } from "framer-motion";
const WorkProcess = () => {
  return (
    <motion.div
      className="container mx-auto pt-16 -rotate-6"
      initial={{
        opacity: 0,
        x: -300,
      }}
      animate={{ opacity: 1, x: 0,rotate:-6 }}
      transition={{
        duration: 3,
      }}
    >
      <h1 className="text-[#F64E2A] text-8xl">WorkProcess</h1>
      <p className="font-montserat  text-black ">
        Explore Real-Life Examples of Our Proven Digital Marketing Success
        through Our Projects
      </p>
    </motion.div>
  );
};

export default WorkProcess;
