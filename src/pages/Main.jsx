import React from "react";
import { useLocation } from "react-router-dom";

import { Navbar } from "../components/Navbar";
import { ProductList } from "../containers/ProductList";

export const Main = () => {

  const location = useLocation();

  const { state  } = location;

  const { userName } = state;

  return (
    <div>
      <Navbar userName={userName}/>
      <ProductList/>
    </div>
  );
};
