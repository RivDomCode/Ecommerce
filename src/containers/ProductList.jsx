import React, { useEffect, useState } from "react";
import { ProductItem } from "../components/ProductItem";

export const ProductList = () => {
  //Save product Info
  const [products, setProducts] = useState([]);

  //get productData form API
  const getDataFromAPI = async () => {
    const url = "https://api.escuelajs.co/api/v1/products";
    const resp = await fetch(url);
    const data = await resp.json();
    const objectData = data.map((object) => {
      return {
        id: object.id,
        category: object.category.name,
        image: object.category.image,
        title: object.title,
        price: object.price,
        description: object.description,
      };
    });
    setProducts(objectData);
  };

  useEffect(() => {
    getDataFromAPI();
  }, []);
  return (
    <div className="p-14 flex flex-wrap  justify-around">
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  );
};
