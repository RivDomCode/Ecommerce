import { PlusCircleIcon } from "@heroicons/react/outline";
import { useContext } from "react";
import AppContext from "../context/AppContext";

export const ProductItem = ({ product, id }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className=" w-full h-full mb-12 flex shadow-sm  shadow-slate-600 rounded-xl bg-transparent text-slate-300 mx-1">
      <img src={product.image} alt="product-img" className=" rounded-xl h-96 w-1/3 " />
      <div className="px-4  relative">
        <div>
          <p className="text-slate-400 text-xl py-2 font-semibold mt-2 flex justify-between">
            ${product.price}{" "}
            <span className="text-slate-300">{product.category}</span>
          </p>
          <p className="text-xl font-semibold mt-2 py-2 flex justify-between align-middle">
            {product.title}
          </p>
        </div>
        <figure className="h-full">{product.description}</figure>
        <div className="flex justify-center
        ">
        <button
          className=" text-center bg-gradient-to-b from-orange-500 absolute  bottom-4 to-orange-400 mb-4 font-bold tracking-wide uppercase mt-4 py-3 hover:bg-orange-400 text-white text-xl flex justify-center align-middle p-1 w-4/5  rounded-lg shadow-lg"
          onClick={() => handleClick(product)}
        >
          <PlusCircleIcon className="w-8 cursor-pointer text-white mr-2 " />
          <span className="">Add To Cart</span>
        </button>
        </div>

      </div>

    </div>
  );
};
