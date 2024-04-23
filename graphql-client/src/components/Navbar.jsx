import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed w-full text-2xl z-50 bg-white top-0">
      <div className="flex gap-5">
        <Link to={"/"} className="hover:bg-slate-200 p-2 hover:cursor-pointer">
          Home
        </Link>
        <div className="hover:bg-slate-200 p-2 hover:cursor-pointer">Login</div>
      </div>
    </div>
  );
};

export default Navbar;
