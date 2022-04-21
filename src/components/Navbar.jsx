import { ShoppingCartIcon } from "@heroicons/react/outline";
import { useState, useContext } from "react";
import { MyOrder } from "../containers/MyOrder";
import AppContext from "../context/AppContext";
import { NavMenu } from "./NavMenu";
export const Navbar = ( {userName} ) => {
  const [toggle, setToggle] = useState(false);
  const [toggleMyOrders, setToggleMyOrders] = useState(false);

  const handleMenu = () => {
    setToggle(!toggle);
  };

  const handleOrders = () => {
    setToggleMyOrders(!toggleMyOrders);
  };

  const { state2 } = useContext(AppContext);

  return (
    <div className="p-2 flex  justify-between  h-28 shadow-lg relative bg-slate-900 w-full">
      <div className="left flex items-center">
        <div className="font-black text-3xl flex bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-100 p-2 tracking-wider uppercase ml-6">BuyIt</div>

      </div>

      <div className="right flex items-center justify-around">
        <p
          className=" cursor-pointer text-gray-300 text-2xl uppercase"
          onClick={handleMenu}
        >
{userName}
        </p>
        <ShoppingCartIcon
          className="h-8 w-8 text-cyan-60 cursor-pointer text-orange-500 mx-2"
          onClick={handleOrders}
        />
        <div className="bg-orange-400 text-white rounded-full mr-6 grid place-items-center  h-8 w-8">
          {state2.cart.length > 0 ? (
            <div className="font-semibold text-xl">{state2.cart.length}</div>
          ) : ( <div className="font-semibold text-xl">0</div>)}
        </div>
      </div>
      {toggle && <NavMenu setToggle={setToggle}/>}
      {toggleMyOrders && <MyOrder handleOrders={handleOrders} />}
    </div>
  );
};
