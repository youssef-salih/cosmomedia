import React, { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import { AnimatePresence, motion } from "framer-motion";
import { logo, menu, logoBW } from "../../assets/icons";
import Button from "../../components/button/Button";
import { links } from "../links";
import { Link } from "react-router-dom";
import {
  menuVars,
  mobileLinkVars,
  navContainer,
  navDrop,
} from "../../animations/variants";

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
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (toggleMenu) {
        // Disable scrolling
        document.body.style.overflow = "hidden";
      } else {
        // Enable scrolling
        document.body.style.overflow = "visible";
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      document.body.style.overflow = "visible";
      window.removeEventListener("scroll", handleScroll);
    };
  }, [toggleMenu]);

  return (
    <header>
      <nav className="px-[5vw] lg:pt-0 pt-[2vw] flex font-medium text-[1.5vw] capitalize justify-between  items-center">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="select-none w-[5vw] " />
          <motion.div className="font-stick lg:text-[2vw] text-[4vw] flex">
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

        <div className="hidden lg:flex gap-[5vw] items-center">
          <ul className="flex gap-[2vw] items-center">
            <NavLinks />
          </ul>
          <Button
            style={
              "border border-white px-[2.5vw] py-[1.2vw] uppercase items-center hover:bg-myorange transition leading-none"
            }
          >
            contact us
          </Button>
        </div>

        <img
          src={menu}
          alt="menu"
          className="lg:hidden select-none w-[5vw] "
          onClick={() => setToggleMenu(true)}
        />
      </nav>
      <AnimatePresence>
        {toggleMenu && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="bg-myorange text-black h-screen origin-top fixed w-full top-0 z-[9999] p-10"
          >
            <div className="flex h-full flex-col">
              <motion.div
                variants={navDrop}
                initial="initial"
                animate="animate"
                className="flex justify-between items-center"
              >
                <img
                  src={logoBW}
                  alt="logo"
                  className="select-none lg:w-16 w-8 "
                />

                <p
                  className="cursor-pointer text-xl text-black"
                  onClick={() => setToggleMenu(false)}
                >
                  close
                </p>
              </motion.div>
              <motion.div
                variants={navContainer}
                initial="initial"
                animate="animate"
                exit="initial"
                className="flex flex-col h-full justify-center gap-5 items-center "
              >
                {links.map((link, index) => (
                  <div className="overflow-hidden" key={index}>
                    <MobileNavLinks name={link.name} path={link.path} />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

const MobileNavLinks = ({ name, path }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl font-stick font-bold uppercase text-black"
    >
      <Link to={path}>{name}</Link>
    </motion.div>
  );
};
