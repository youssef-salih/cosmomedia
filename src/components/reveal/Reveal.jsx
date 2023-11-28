import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const RevealFromBottom = ({ width = "fit-content", children, style }) => {
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
const Revealside = ({ children, style, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  const reaveal = {
    hidden: { width: "0%" },
    visible: { width: "101%", transition: { duration: 2, delay: delay } },
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
        className={`relative  ${style}`}
        variants={reaveal}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.9, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
};
const RevealsideContent = ({ children, style }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  const reaveal = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 2 } },
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
        className={`relative  ${style}`}
        variants={reaveal}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.9, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
};
export { RevealFromBottom, Revealside, RevealsideContent };
