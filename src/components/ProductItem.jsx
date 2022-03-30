import { PlusCircleIcon } from "@heroicons/react/outline";

export const ProductItem = ({ title, category, price, description, image }) => {
  return (
    <div className=" w-80 p-2 mb-8 shadow-lg rounded-xl hover:scale-105 ">
      <img src={image} alt="product-img" className="rounded-xl" />
      <div className="px-3  ">
        <div>
          <p className="text-slate-400 text-xl py-2 font-semibold mt-2 flex justify-between">
            ${price} <span className="text-slate-300">{category}</span>
          </p>
          <p className="text-xl font-semibold mt-2 py-2 flex justify-between align-middle">
            {title}
          </p>
        </div>
        <figure>{description}</figure>
        <button className="bg-red-400 mb-4 font-bold tracking-wide uppercase mt-4 py-3 hover:bg-red-700 text-white text-xl flex justify-center align-middle p-1 w-full rounded-lg shadow-lg">
          <PlusCircleIcon className="w-8 cursor-pointer text-white mr-2 " />
          Add To Cart
        </button>
      </div>
    </div>
  );
};
