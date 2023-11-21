import React from "react";
import NavLinks from "./NavLinks";
import Button from "../button/Button";

const Navbar = () => {
  return (
    <nav className="flex font-bold uppercase w-full justify-between">
      <p>cosmo</p>
      <div className="flex ">
        <ul className="flex w-flex ">
          <NavLinks />
        </ul>
        <Button />
      </div>
    </nav>
  );
};

export default Navbar;
