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
    <aside className="absolute top-12 right-2 bg-white shadow-xl p-4">
      <XIcon
        className=" h-6 w-6 text-cyan-600 cursor-pointer font-bold text-right"
        onClick={handleOrders}
      />
      <p className="font-bold text-2xl uppercase text-center pb-2">My order</p>

      {state2.cart.map((product) => (
        <OrderItem product={product} key={`order-${product.id}`} />
      ))}

      <div className="flex flex-col justify-center bg-slate-100 w-2/3 mx-auto rounded-lg mt-4 mb-4">
        <span className="text-slate-500 font-semibold text-2xl uppercase p-2 mt-2 text-center">
          Total
        </span>

        <p className="text-black font-semibold text-2xl uppercase p-2 text-center">
          ${sumTotal()}
        </p>
      </div>

      <div className="flex justify-center">
        <button className="bg-red-500 mb-4 font-bold tracking-wide uppercase mt-4 py-3 hover:bg-red-600 text-white text-xl flex justify-center align-middle p-1 w-1/2 rounded-lg shadow-lg">
          Checkout
        </button>
      </div>
    </aside>
  );
};
