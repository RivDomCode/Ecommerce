// import React, { useEffect, useState } from "react";
import { ProductItem } from "../components/ProductItem";
import { useGetDataFromAPI } from "../hooks/useGetDataFromAPI";

export const ProductList = () => {
  const url = "https://api.escuelajs.co/api/v1/products";

  const products = useGetDataFromAPI(url);

  return (
    <div className="p-14 flex flex-wrap  justify-around bg-slate-100">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
