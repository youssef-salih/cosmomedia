import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const links = [
    {
      name: "home",
      path: "",
    },
    {
      name: "projects",
      path: "",
    },
    {
      name: "about us",
      path: "",
    },
    {
      name: "services",
      path: "",
    },
  ];
  return (
    <>
      {links.map((link) => (
        <li className="">
          <Link to="#">{link.name}</Link>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
