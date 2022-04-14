import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { ProductList } from "../containers/ProductList";

export const Main = () => {

  const location = useLocation();

  const userData = location.state.data;



  return (
    <div>
      <Navbar userData={userData}/>
      <ProductList />
    </div>
  );
};
