import React from "react";
import { useLocation } from "react-router-dom";

import { Navbar } from "../components/Navbar";
import { ProductList } from "../containers/ProductList";

export const Main = () => {

  const location = useLocation();

  console.log(location );

  const { state  } = location;

  const { userName } = state;

  console.log(userName );





  return (
    <div>
      <Navbar userName={userName}/>
      <ProductList/>
    </div>
  );
};
