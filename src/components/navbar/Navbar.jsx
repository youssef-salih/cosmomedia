import React from "react";
import NavLinks from "./NavLinks";
import Button from "../button/Button";

const Navbar = () => {
  return (
    <nav className="flex font-medium text-2xl capitalize w-full justify-between p-5 items-center">
      <p>cosmo</p>
      <div className="flex gap-24 items-center">
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
    </nav>
  );
};

export default Navbar;
