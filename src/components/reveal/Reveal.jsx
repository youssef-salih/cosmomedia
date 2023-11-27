import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Reveal = ({ width = "fit-content", children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const reaveal = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };
  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <motion.div
      className="relative container mx-auto"
      style={{
   
        width,
      
      }}
      variants={reaveal}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
