import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { ProductList } from "../containers/ProductList";

export const Main = ({ data }) => {

  const location = useLocation();
  const userData = location.state.data;
  console.log(userData);

  return (
    <div>
      <Navbar userData = {userData}/>
      <ProductList />
    </div>
  );
};
