import { ShoppingCartIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { NavMenu } from "./NavMenu";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div className="p-2 flex  justify-between h-18 shadow-lg relative w-full">
      <div className="left flex items-center">
        <div className="font-black text-3xl text-cyan-600 p-2">Ecommerce</div>
        <ul className="flex">
          <li className="m-2 text-xl font-semibold text-gray-600 hover:bg-slate-100 p-1   rounded-md">
            <a href="/">Todo</a>
          </li>
          <li className="m-2 text-xl   font-semibold text-gray-600 hover:bg-slate-100 p-1   rounded-md">
            <a href="/">Ropa</a>
          </li>
          <li className="m-2 text-xl font-semibold  text-gray-600 hover:bg-slate-100 p-1   rounded-md">
            <a href="/">Electrónica</a>
          </li>
          <li className="m-2 text-xl font-semibold  text-gray-600 hover:bg-slate-100 p-1   rounded-md">
            <a href="/">Muebles</a>
          </li>
          <li className="m-2 text-xl font-semibold  text-gray-600 hover:bg-slate-100 p-1   rounded-md">
            <a href="/">Juguetes</a>
          </li>
          <li className="m-2 text-xl font-semibold text-gray-600 hover:bg-slate-100 p-1   rounded-md">
            <a href="/">Otros</a>
          </li>
        </ul>
      </div>
      <div className="right flex items-center justify-around">
        <p
          className=" cursor-pointer text-gray-700 text-xl"
          onClick={handleMenu}
        >
          correo@registrado.com
        </p>
        <ShoppingCartIcon className="h-6 w-6 text-cyan-600" />
        <div className="bg-cyan-200 text-gray-700 rounded-full grid place-items-center  h-5 w-5">
          <div>2</div>
        </div>
      </div>
      {toggle && <NavMenu />}
    </div>
  );
};
