const menuVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
const mobileLinkVars = {
  initial: {
    y: 190,
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0, 0.55, 0.45, 1],
    },
  },
  hover: {
    y: 5,
    transition: {
      duration: 0.9,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};
const navContainer = {
  initial: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  animate: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};
const navDrop = {
  initial: {
    opacity: 0,
    ease: "easeInOut",
  },
  animate: {
    opacity: 1,
    ease: "easeInOut",
  },

  exit: {
    opacity: 0,
    transition: {},
  },
};
export { menuVars, mobileLinkVars, navContainer, navDrop };
