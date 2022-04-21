import {  SearchIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { ProductItem } from "../components/ProductItem";
import { getProductByName } from "../helpers/getProductByName";
import { useGetDataFromAPI } from "../hooks/useGetDataFromAPI";

export const ProductList = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  const products = useGetDataFromAPI();

  const filteredProducts = getProductByName (searchValue, products);


  return (
    <div className="p-10 flex flex-wrap flex-col w-full justify-around bg-slate-800 xl:px-52 2xl:px-80 ">
            <div className=" flex mx-auto w-2/3 items-center mb-16 " >
        <input onChange={handleChange} type="text" name="name" value={searchValue} placeholder="Search..." className="text-center  w-full h-12 rounded-lg shadow-lg p-2 mt-4 bg-slate-100 text-xl font-semibold text-black" />
        <button><SearchIcon className="h-10 w-10 text-cyan-60 cursor-pointer text-orange-500 mt-4 ml-4"/> </button>
      </div>
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
