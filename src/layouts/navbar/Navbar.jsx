import React from "react";
import NavLinks from "./NavLinks";
import { motion } from "framer-motion";
import { logo, menu } from "../../assets/icons";
import Button from "../../components/button/Button";

const Navbar = () => {
  const logoName = ["c", "o", "s", "m", "o", "m", "e", "d", "i", "a"];
  const aee = {
    initial: { opacity: 0, y: 50 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  return (
    <nav className="container mx-auto px-7 md:p-5 flex  font-medium text-2xl capitalize w-full justify-between p-5 items-center">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="select-none md:w-16 w-8 " />
        <motion.div className="font-stick md:text-3xl flex">
          {logoName.map((e, i) => (
            <motion.div
              key={i}
              variants={aee}
              initial="initial"
              animate="animate"
              custom={i}
            >
              {e}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="hidden md:flex gap-24 items-center">
        <ul className="flex gap-6 items-center">
          <NavLinks />
        </ul>
        <Button
          style={
            "border border-white px-9 py-3 uppercase items-center hover:bg-myorange transition "
          }
        >
          contact us
        </Button>
      </div>

      <img src={menu} alt="menu" className="md:hidden select-none  w-7 " />
    </nav>
  );
};

export default Navbar;
