// import React, { useEffect, useState } from "react";
import { ProductItem } from "../components/ProductItem";
import { useGetDataFromAPI } from "../hooks/useGetDataFromAPI";

export const ProductList = () => {

  const products = useGetDataFromAPI();

  return (
    <div className="p-10 flex flex-wrap flex-col w-full justify-around bg-slate-800 xl:px-52 2xl:px-80 ">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
