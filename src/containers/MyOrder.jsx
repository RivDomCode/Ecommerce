import React, { useContext } from "react";
import { OrderItem } from "../components/OrderItem";
import { XIcon } from "@heroicons/react/outline";
import AppContext from "../context/AppContext";

export const MyOrder = ({ handleOrders }) => {
  const { state2 } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;

    const sum = state2.cart.reduce(reducer, 0);

    return sum;
  };

  return (
    <aside className="absolute top-0 right-0 bg-slate-900 text-slate-300 rounded-lg shadow-xl p-4 w-1/2 z-10">
      <XIcon
        className=" h-6 w-6 text-orange-500 hover:scale-110 hover:text-orange-300 cursor-pointer font-bold text-right"
        onClick={handleOrders}
      />
      <p className="font-bold text-2xl uppercase text-center pb-2">My order</p>

      {state2.cart.map((product) => (
        <OrderItem product={product} key={`order-${product.id}`} />
      ))}

      <div className="flex items-center justify-center bg-slate-300 tracking-widest mx-auto rounded-lg mt-4 mb-4">
        <span className="text-slate-500 font-semibold text-3xl uppercase p-2 mt-2 text-center">
          Total:         <span className="text-black font-semibold text-3xl uppercase p-2 text-center">
          ${sumTotal()}
        </span>
        </span>


      </div>

    </aside>
  );
};
