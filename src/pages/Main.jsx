import React from "react";
import { Navbar } from "../components/Navbar";
import { ProductList } from "../containers/ProductList";

export const Main = () => {
  return (
    <div>
      <Navbar />
      <ProductList />
    </div>
  );
};
