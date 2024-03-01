import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { links } from "../links";

const NavLinks = () => {
  // const transition = {
  //   duration: 0.3,
  //   ease: "easeInOut",
  // };

  return (
    <>
      {links.map((link, index) => (
        <motion.li key={index} className="relative flex items-center">
          <Link
            to={link.path}
            className="before:bg-myorange before:w-0 before:h-[.2vw] before:absolute before:top-[.6vw] hover:before:w-full before:duration-500 before:transition-all text-[1.5vw] leading-none"
          >
            {link.name}
          </Link>
        </motion.li>
      ))}
    </>
  );
};

export default NavLinks;
