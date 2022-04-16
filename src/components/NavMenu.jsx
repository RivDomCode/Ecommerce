import React from "react";
import { Link } from "react-router-dom";
import { LockClosedIcon, XIcon } from "@heroicons/react/outline";



export const NavMenu = ({setToggle}) => {

  const handleClose = () => {
    setToggle();
  }


  return (
    <div className="absolute rounded-lg top-16 right-14 text-slate-300 bg-slate-900 shadow-slate-300 p-4 ">
      <ul>
      <XIcon
        className=" h-6 w-6 text-orange-500 hover:text-orange-400 cursor-pointer font-bold text-right"
        onClick={handleClose}
      />

        <li className="p-2 text-lg font-semibold tracking-wider  hover:text-slate-200 rounded-md">
          <Link to="/" className="uppercase"><LockClosedIcon className="h-6 w-6 text-center mx-auto"/> Logout</Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

