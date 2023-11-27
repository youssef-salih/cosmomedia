import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavLinks = () => {
  const links = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "projects",
      path: "/projects",
    },
    {
      name: "about us",
      path: "/about",
    },
    {
      name: "services",
      path: "/services",
    },
  ];

  const transition = {
    duration: 0.3,
    ease: "easeInOut",
  };

  return (
    <>
      {links.map((link, index) => (
        <motion.li key={index} className="relative flex items-center">
          <Link
            to={link.path}
            className="before:bg-myorange before:w-0 before:h-1 before:absolute before:top-[14px] hover:before:w-full  before:transition-all"
          >
            {link.name}
          </Link>
        </motion.li>
      ))}
    </>
  );
};

export default NavLinks;
