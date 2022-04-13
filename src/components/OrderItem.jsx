import React, { useContext } from "react";
import { XCircleIcon } from "@heroicons/react/outline";
import AppContext from "../context/AppContext";

export const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className="flex w-96 justify-between p-1">
      <img src={product.image} alt="bike" className="w-1/5 rounded-lg" />
      <p className="w-2/4 text-xl font-semibold ml-2">{product.title}</p>
      <p className="w-1/5 text-xl font-semibold text-slate-400">
        {product.price}
      </p>
      <XCircleIcon
        className=" h-6 w-6 text-red-600 cursor-pointer font-bold text-right"
        onClick={() => handleRemove(product)}
      />
    </div>
  );
};
