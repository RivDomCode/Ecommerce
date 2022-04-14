import { ShoppingCartIcon } from "@heroicons/react/outline";
import { useState, useContext } from "react";
import { MyOrder } from "../containers/MyOrder";
import AppContext from "../context/AppContext";
import { NavMenu } from "./NavMenu";

export const Navbar = ( {userData}) => {
  const [toggle, setToggle] = useState(false);
  const [toggleMyOrders, setToggleMyOrders] = useState(false);



const { userName } = userData;

  const handleMenu = () => {
    setToggle(!toggle);
  };

  const handleOrders = () => {
    setToggleMyOrders(!toggleMyOrders);
  };

  const { state } = useContext(AppContext);

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
          {userName}
        </p>
        <ShoppingCartIcon
          className="h-6 w-6 text-cyan-60 cursor-pointer"
          onClick={handleOrders}
        />
        <div className="bg-cyan-200 text-gray-700 rounded-full grid place-items-center  h-6 w-6">
          {state.cart.length > 0 && (
            <div className="font-semibold">{state.cart.length}</div>
          )}
        </div>
      </div>
      {toggle && <NavMenu />}
      {toggleMyOrders && <MyOrder handleOrders={handleOrders} />}
    </div>
  );
};
