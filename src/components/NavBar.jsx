import React from "react";
import { CartIcon } from "./Icons";

const NavbarComp = ({ amount }) => {
  return (
    <nav className="bg-blue-900 px-8 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-10">
      <h2 className="text-white text-2xl">Logo</h2>
      <div className="relative p-3">
        <CartIcon />
        <p className="absolute top-0 right-0  text-white text-sm bg-orange-600 rounded-full w-5 h-5 flex justify-center  items-center">
          {amount}
        </p>
      </div>
    </nav>
  );
};

export default NavbarComp;
