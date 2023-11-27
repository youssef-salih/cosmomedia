import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Reveal = ({ width = "fit-content", children, style }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  const reaveal = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <motion.div
        ref={ref}
        className={`relative container mx-auto ${style}`}
        style={{
          width,
          zIndex: 999,
        }}
        variants={reaveal}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.9, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Reveal;
