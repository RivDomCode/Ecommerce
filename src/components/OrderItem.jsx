import React from "react";

export const OrderItem = ({ product }) => {
  return (
    <div className="flex w-96 justify-between p-1">
      <img src={product.image} alt="bike" className="w-1/4 rounded-lg" />
      <p className="w-1/4 text-xl font-semibold">{product.title}</p>
      <p className="w-1/4 text-xl font-semibold text-slate-400">
        {product.price}
      </p>
    </div>
  );
};
